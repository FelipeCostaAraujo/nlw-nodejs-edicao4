import { Request, Response } from "express";
import { resolve } from 'path';
import { getCustomRepository } from "typeorm";
import { SurveysRepository } from "../repositories/surveys-repository";
import { SurveysUsersRepository } from "../repositories/surveys-user-repository";
import { UsersRepository } from "../repositories/users-repository";
import SendmailService from "../services/sendmail-service";

class SendMailController {
    async execute(request: Request, response: Response) {
        const { email, survey_id } = request.body;

        const usersRepository = getCustomRepository(UsersRepository);
        const surveysRepository = getCustomRepository(SurveysRepository);
        const surveysUsersRepository = getCustomRepository(SurveysUsersRepository);

        const userAlredyExists = await usersRepository.findOne({ email });

        if (!userAlredyExists) {
            return response.status(400).json({
                error: "User does not exists!"
            });
        }

        const survey = await surveysRepository.findOne({ id: survey_id });
        if (!survey) {
            return response.status(400).json({
                error: "Survey does not exists!"
            });
        }

        const surveyUser = surveysUsersRepository.create({
            user_id: userAlredyExists.id,
            survey_id: survey.id
        });

        await surveysUsersRepository.save(surveyUser);

        const npsPath = resolve(__dirname, "..", "views", "emails", "npsMail.hbs");

        await SendmailService.execute(email, survey.title, survey.description, npsPath)

        return response.status(201).json(surveyUser);
    }
}

export { SendMailController };
