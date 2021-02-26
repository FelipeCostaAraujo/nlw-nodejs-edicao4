import { Request, Response } from "express";
import { getCustomRepository } from "typeorm";
import { UsersRepository } from "../repositories/users-repository";
import * as yup from 'yup';
import { AppError } from "../errors/app-error";

class UserController {

    async create(request: Request, response: Response) {
        const { email, name } = request.body;

        const schema = yup.object().shape({
            name: yup.string().required(),
            email: yup.string().email().required()
        });

        try {
            await schema.validate(request.body, { abortEarly: false });
        } catch (ex) {
            return response.status(400).json({ error: ex });
        }

        const usersRepository = getCustomRepository(UsersRepository);

        const user = usersRepository.create({
            name,
            email
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