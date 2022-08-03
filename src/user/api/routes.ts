import express, { Router } from 'express';
import requestHandler from './requestHandler';

const router = Router();
router.use(express.json());

router.get('/user',           requestHandler.getAllUsers);
router.get('/user/:uuid',     requestHandler.getUserById);
router.post('/user',          requestHandler.postUser);
router.put('/user/:uuid',     requestHandler.putUser);
router.patch('/user/:uuid',   requestHandler.patchUser);
router.delete('/user/:uuid',  requestHandler.deleteUser);

export default router;