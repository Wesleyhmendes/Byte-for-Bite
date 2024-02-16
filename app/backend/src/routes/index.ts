
import { Router } from 'express';
import drinksRouter from './drinks.routes';
import mealsRouter from "./meals.routes";

const router = Router();

router.use('/drinks', drinksRouter);
router.use('/meals', mealsRouter);

export default router;
