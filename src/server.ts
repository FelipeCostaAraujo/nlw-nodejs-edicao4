import express from 'express';
import { router } from './router';
import 'reflect-metadata';
import './database';

const app = express();

app.use(express.json());
app.use("/api", router);

app.listen(4000)