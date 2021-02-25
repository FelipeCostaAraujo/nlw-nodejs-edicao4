import express from 'express';
import { router } from '../src/router';
import 'reflect-metadata';
import createConnection from '../src/database';

createConnection();
const app = express();

app.use(express.json());
app.use("/api", router);


export { app };