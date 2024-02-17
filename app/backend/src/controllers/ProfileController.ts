import { Request, Response } from 'express';
import ProfileService from '../services/ProfileService';

class ProfileController {
  constructor(
    private profileService: ProfileService
  ) { }

  async getProfile(req: Request, res: Response) {
    const { email } = req.body;
    const profile = await this.profileService.getProfile(email) 
    return res.status(200).json(profile);
  }
}

export default ProfileController;