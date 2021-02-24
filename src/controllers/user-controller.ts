import { Request, Response } from "express";
import { getCustomRepository } from "typeorm";
import { UsersRepository } from "../repositories/users-repository";

class UserController {

    async create(request: Request, response: Response) {
        const { email, name } = request.body;

        const usersRepository = getCustomRepository(UsersRepository);

        const user = usersRepository.create({
            name,
            email
        });

        const userAlreadyExists = await usersRepository.findOne({
            email
        });

        if (userAlreadyExists) {
            return response.status(400).json({
                error: "User already exists"
            })
        }

        await usersRepository.save(user);

        return response.status(201).json(user);
    }

}

export default UserController;