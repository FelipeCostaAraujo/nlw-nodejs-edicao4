import { Request, Response } from "express";
import { getCustomRepository } from "typeorm";
import { AppError } from "../errors/app-error";
import { UsersRepository } from "../repositories/users-repository";
import AuthService from "../services/auth-service";
import ValidationContract from "../validators/fluent-validator";

const authService = new AuthService();

class AuthController {
    async auth(req: Request, res: Response) {
        const contract = new ValidationContract();
        const { email, password } = req.body;

        contract.isRequired(email, 'The field email cannot be left blank');
        contract.isEmail(email, 'Invalid email');
        contract.isRequired(password, 'The field password cannot be left blank');

        if (!contract.isValid()) {
            return res.status(400).send(contract.error()).end();
        }

        const usersRepository = getCustomRepository(UsersRepository);

        const user = await usersRepository.findOne({
            email,
            password
        });

        if (!user) {
            throw new AppError("Invalid credentials", 401);
        }

        const token = authService.generateToken({
            id: user.id,
            name: user.name,
            email: user.email,
        });

        return res.json({
            token,
            user
        });
    }
}

export { AuthController }  