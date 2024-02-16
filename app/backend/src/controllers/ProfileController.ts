import { Request, Response } from 'express';
import ProfileService from '../services/ProfileService';

class ProfileController {
  constructor(
    private profileService: ProfileService
  ) { }

  public getProfile(_req: Request, res: Response) {
    
  }
}

export default ProfileController;