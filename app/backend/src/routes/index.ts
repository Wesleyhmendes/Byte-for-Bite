<<<<<<< HEAD
import { Router } from "express";
import mealsRouter from "./meals.routes";

const router = Router();

router.use('/meals', mealsRouter);

export default router;
=======
import { Router } from 'express';
import drinksRouter from './drinks.routes';

const router = Router();

router.use('/drinks', drinksRouter);

export default router;
>>>>>>> fd948c6a29a01b5116b0acd7b93de73ca903ad73
