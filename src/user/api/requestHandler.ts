import { Request, Response, NextFunction } from 'express';
import HttpStatusCode from 'http-status-codes'; //mpm i --save-dev http-status-codes

const users = [
   { id: 1, Name: 'Luiz', midleName: 'Inácio Lula', LastName: 'da Silva' },
   { id: 2, Name: 'Vilson', midleName: 'Luiz', LastName: 'Dalle Mole' }
];

//----------------------------------------------------------------------------
function getAllUsers(req: Request, res: Response, next: NextFunction)
{
   res.status(HttpStatusCode.OK).json(users); 
}

//----------------------------------------------------------------------------
function getUserById(req: Request<{uuid:number}>, res: Response, next: NextFunction)
{
   const uuid = req.params.uuid;
   if (!uuid || uuid < 1 || uuid == NaN)
      return res.status(HttpStatusCode.BAD_REQUEST).send(`uuid: ${uuid} inválido`);
      
   const filteredUsers = users.filter(user => user.id == uuid);
   if (filteredUsers.length == 0)
      return res.status(HttpStatusCode.BAD_REQUEST).send(`uuid: ${uuid} não encontrado!`);
   
   res.status(HttpStatusCode.OK).json(filteredUsers);
}

//----------------------------------------------------------------------------
function postUser(req: Request, res: Response, next: NextFunction)
{
   const user = req.body.data;
   users.push(user);
   res.status(HttpStatusCode.CREATED).json(user);
}

//----------------------------------------------------------------------------
function putUser(req: Request<{ uuid: number }>, res: Response, next: NextFunction)
{
   return patchUser(req, res, next);
}

//----------------------------------------------------------------------------
function patchUser(req: Request<{uuid: number}>, res: Response, next: NextFunction)
{
   const uuid = req.params.uuid;
   const userIndex = users.findIndex(user => uuid == user.id);
   
   if (userIndex < 0)
      return res.status(HttpStatusCode.BAD_REQUEST).send(`uuid: ${ uuid } não encontrado!`);
   
   users[userIndex] = req.body.data;
   
   res.status(HttpStatusCode.ACCEPTED).send(users[userIndex]);
}

//----------------------------------------------------------------------------
function deleteUser(req: Request<{uuid:number}>, res: Response, next: NextFunction)
{
   const uuid = req.params.uuid;
   const userIndex = users.findIndex(user => uuid == user.id);

   if (userIndex < 0)
      return res.status(HttpStatusCode.BAD_REQUEST).send(`uuid: ${ uuid } não encontrado!`);

   const deletedUsers = users.splice(userIndex, 1);
   res.status(HttpStatusCode.ACCEPTED).send(deletedUsers);
}

//----------------------------------------------------------------------------
export default {
   getAllUsers,
   getUserById,
   postUser,
   patchUser,
   putUser,
   deleteUser,
};