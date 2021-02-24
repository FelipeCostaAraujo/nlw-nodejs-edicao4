import express from 'express';
import { router } from './router';
import 'reflect-metadata';
import createConnection from './database';

createConnection();
const app = express();

app.use(express.json());
app.use("/api", router);


export { app };