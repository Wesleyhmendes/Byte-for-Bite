import { Router } from 'express';
import drinksRouter from './drinks.routes';

const router = Router();

router.use('/drinks', drinksRouter);

export default router;
