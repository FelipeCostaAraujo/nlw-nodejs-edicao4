import { Request, Response } from "express";
import { getFullUrl } from "../utils/get-full-url";

class AnswerController {
    async execute(request: Request, response: Response) {
        const { value } = request.params;
        const { u } = request.query;

        const getUrl = getFullUrl(request);
    }
}

export { AnswerController } 