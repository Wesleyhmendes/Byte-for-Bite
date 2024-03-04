import { Request, Router, Response } from 'express';
import ProfileService from '../services/ProfileService';
import ProfileController from '../controllers/ProfileController';
import Authorization from '../middlewares/auth.middlware';

const router = Router();

const profileService = new ProfileService();
const profileController = new ProfileController(profileService);

router.get(
  '/',
  Authorization.auth,
  (req: Request, res: Response) => profileController.getProfile(req, res)
);

router.patch(
  '/:id',
  Authorization.auth,
  (req: Request, res: Response) => profileController.updateProfileImage(req, res)
);

export default router;