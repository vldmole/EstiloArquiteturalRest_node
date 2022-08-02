import express, {Request, Response, NextFunction} from 'express';

const app = express();

app.get('/status', (req: Request, resp: Response, next: NextFunction) =>
{
   resp.status(200).send({ foo: 'bar tools'  });
});

app.listen(3000, 'localhost', () => console.log("listen on port 3000"));
