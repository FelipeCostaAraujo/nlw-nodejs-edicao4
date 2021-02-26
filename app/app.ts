import express from 'express';
import bodyParser from 'body-parser';
import { router } from '../src/router';
import 'reflect-metadata';
import createConnection from '../src/database';

createConnection();
const app = express();

app.use(bodyParser.json({
    limit: '10mb'
}));

app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.json());
app.use("/api", router);


export { app };