import express, { Application, json } from 'express';
import { router } from '../app/routes';

const app: Application = express();

app.use(json());
app.use(router);

export { app };