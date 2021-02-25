import { app } from "./app";
import config from '../src/config/config';

console.log("Running " + config.info + " Server");

app.listen(4000)