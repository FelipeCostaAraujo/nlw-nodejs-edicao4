import 'reflect-metadata';
import express, { NextFunction, Request, Response } from 'express';
import "express-async-errors";

import createConnection from '../src/database';
import bodyParser from 'body-parser';

import { AppError } from '../src/errors/app-error';
import { router } from '../src/router';

createConnection();
const app = express();

app.disable("x-powered-by");

app.use(bodyParser.json({
    limit: '10mb'
}));

app.use(bodyParser.urlencoded({ extended: false }));

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, x-access-token');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    next();
});

app.use(express.json());
app.use("/api", router);

app.use(
    (err: Error, request: Request, response: Response, _next: NextFunction) => {
        if (err instanceof AppError) {
            return response.status(err.statusCode).json({
                message: err.message,
            });
        }

        return response.status(500).json({
            status: "Error",
            message: `Internal server error ${err.message}`,
        });
    }
);

export { app };
