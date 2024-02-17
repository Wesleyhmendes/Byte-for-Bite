import { Request, Router, Response } from 'express';
import ProfileService from '../services/ProfileService';
import ProfileController from '../controllers/ProfileController';

const router = Router();

const profileService = new ProfileService();
const profileController = new ProfileController(profileService);

router.get('/', (req: Request, res: Response) => profileController.getProfile(req, res));
router.patch('/:id', (req: Request, res: Response) => profileController.updateProfileImage(req, res));

export default router;