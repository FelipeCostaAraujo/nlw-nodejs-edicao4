import express, { Request, Response, NextFunction } from 'express';
import bodyParser from 'body-parser';
import { router } from '../src/router';
import 'reflect-metadata';
import createConnection from '../src/database';
import cors from 'cors';
import { AppError } from '../src/errors/app-error';

createConnection();
const app = express();

app.use(bodyParser.json({
    limit: '10mb'
}));

app.use(bodyParser.urlencoded({ extended: false }));

app.use((err: Error, request: Request, response: Response, _next: NextFunction) => {
    if (err instanceof AppError) {
        return response.status(err.statusCode).json({
            message: err.message
        });
    }
    return response.status(500).json({
        status: "Error",
        message: `Internal server error ${err.message}`
    });
});

app.use(cors);

app.use(express.json());
app.use("/api", router);


export { app };