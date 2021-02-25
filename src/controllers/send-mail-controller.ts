import { Request, Response } from "express";
import { getCustomRepository } from "typeorm";
import { SurveysRepository } from "../repositories/surveys-repository";
import { UsersRepository } from "../repositories/users-repository";

class SendMailController {
    async execute(request: Request, response: Response) {
        const { email, survey_id } = request.body;

        const usersRepository = getCustomRepository(UsersRepository);
        const surveysRepository = getCustomRepository(SurveysRepository);
        const surveysUsersRepository = getCustomRepository(SurveysRepository);

        const userAlredyExists = await usersRepository.findOne({ email });

        if (!userAlredyExists) {
            return response.status(400).json({
                error: "User does not exists!"
            });
        }

        const surveysAlreadyExists = await surveysRepository.findOne({ id: survey_id });
        if (!surveysAlreadyExists) {
            return response.status(400).json({
                error: "Survey does not exists!"
            });
        }

        //
    }
}

export { SendMailController }