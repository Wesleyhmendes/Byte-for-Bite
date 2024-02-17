import { Request, Response } from 'express';
import ProfileService from '../services/ProfileService';

class ProfileController {
  constructor(
    private profileService: ProfileService
  ) { }

  async getProfile(req: Request, res: Response) {
    const { username } = req.body;
    const { status, data } = await this.profileService.getProfile(username) 
    return res.status(status).json(data);
  }
}

export default ProfileController;