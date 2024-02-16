import { Router } from 'express';
import drinksRouter from './drinks.routes';
import userRouter from './user.routes';

const router = Router();

router.use('/user', userRouter);
router.use('/drinks', drinksRouter);

export default router;

