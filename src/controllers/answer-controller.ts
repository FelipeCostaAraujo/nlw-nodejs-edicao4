import { Request, Response } from "express";
import { getCustomRepository } from "typeorm";
import { AppError } from "../errors/app-error";
import { SurveysUsersRepository } from "../repositories/surveys-user-repository";
import { getFullUrl } from "../utils/get-full-url";

class AnswerController {
    async execute(request: Request, response: Response) {
        console.log('execute');
        const { value } = request.params;
        const { u } = request.query;

        const getUrl = getFullUrl(request);

        const serveysUsersREpository = getCustomRepository(SurveysUsersRepository);

        const surveyUser = await serveysUsersREpository.findOne({
            id: String(u)
        });

        if (!surveyUser) {
            throw new AppError("Survey User does not exists");
        }

        surveyUser.value = Number(value);

        await serveysUsersREpository.save(surveyUser);

        return response.status(201).json(surveyUser);
    }
}

export { AnswerController } 