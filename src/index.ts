import express from 'express';

const app = express();

import appRouter from './app/api/routes';
app.use(appRouter);

import userRouter from './user/api/routes';
appRouter.use(userRouter);

app.listen(3000, 'localhost', () => console.log("listen on port 3000"));