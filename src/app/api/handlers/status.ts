import { Request, Response, NextFunction } from 'express';

export default
function statusHandler(req: Request, res: Response, next: NextFunction): void
{
   res.status(200).send('A aplicação está no ar.');
};