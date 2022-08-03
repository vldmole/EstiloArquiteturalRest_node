import { Router } from 'express';
import statusHandler from './handlers/status';

const router = Router();

router.get('/status', statusHandler);


export default router;