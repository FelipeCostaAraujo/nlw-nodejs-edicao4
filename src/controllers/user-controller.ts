import { Request, Response } from "express";
import { getCustomRepository } from "typeorm";
import { UsersRepository } from "../repositories/users-repository";
import * as yup from 'yup';
import { AppError } from "../errors/app-error";
import ValidationContract from '../validators/fluent-validator';

class UserController {

    async create(request: Request, response: Response) {
        const { email, name, password } = request.body;

        const contract = new ValidationContract();

        contract.hasMinLen(name, 6, 'The name must contain at least 6 characters');
        contract.isEmail(email, 'Invalid email');
        contract.hasMinLen(password, 6, 'The password must contain at least 6 characters');

        if (!contract.isValid()) {
            return response.status(400).send(contract.error()).end();
        }

        const usersRepository = getCustomRepository(UsersRepository);

        const user = usersRepository.create({
            name,
            email,
            password
        });

        const userAlreadyExists = await usersRepository.findOne({
            email
        });

        if (userAlreadyExists) {
            throw new AppError("User already exists");
        }

        await usersRepository.save(user);

        return response.status(201).json(user);
    }

}

export { UserController };