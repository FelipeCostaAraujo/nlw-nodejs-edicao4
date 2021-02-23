import { Request, Response } from "express";

class UserController {

    async create(request: Request, response: Response) {
        const { email, nome } = request.body;
        console.log(request.body);
        return response.send({ email, nome });
    }

}

export default UserController;