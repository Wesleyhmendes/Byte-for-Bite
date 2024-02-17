
import { Router } from 'express';
import drinksRouter from './drinks.routes';
import mealsRouter from "./meals.routes";
import userRouter from './user.routes';
import profileRouter from './profile.routes'

const router = Router();

router.use('/user', userRouter);
router.use('/drinks', drinksRouter);
router.use('/meals', mealsRouter);
router.use('/profile', profileRouter)

export default router;

