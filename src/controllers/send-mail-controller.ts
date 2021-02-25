import { Request, Response } from "express";
import { resolve } from 'path';
import { getCustomRepository } from "typeorm";
import { SurveysRepository } from "../repositories/surveys-repository";
import { SurveysUsersRepository } from "../repositories/surveys-user-repository";
import { UsersRepository } from "../repositories/users-repository";
import sendmailService from "../services/sendmail-service";
import SendmailService from "../services/sendmail-service";
import { getFullUrl } from "../utils/get-full-url";

class SendMailController {
    async execute(request: Request, response: Response) {
        const { email, survey_id } = request.body;

        const usersRepository = getCustomRepository(UsersRepository);
        const surveysRepository = getCustomRepository(SurveysRepository);
        const surveysUsersRepository = getCustomRepository(SurveysUsersRepository);

        const user = await usersRepository.findOne({ email });

        if (!user) {
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

        const npsPath = resolve(__dirname, "..", "views", "emails", "npsMail.hbs");

        const getUrl = getFullUrl(request);

        const variables = {
            name: user.name,
            title: survey.title,
            description: survey.description,
            user_id: user.id,
            link: getUrl + "/answers"
        }

        const surveyUserAlreadyExists = await surveysUsersRepository.findOne({
            where: [{ user_id: user.id }, { value: null }],
            relations: ["user", "survey"]
        });

        if (surveyUserAlreadyExists) {
            await SendmailService.execute(email, survey.title, variables, npsPath);
            return response.json(surveyUserAlreadyExists);
        }

        const surveyUser = surveysUsersRepository.create({
            user_id: user.id,
            survey_id: survey.id
        });

        await surveysUsersRepository.save(surveyUser);

        await SendmailService.execute(email, survey.title, variables, npsPath)

        return response.status(201).json(surveyUser);
    }
}

export { SendMailController };
