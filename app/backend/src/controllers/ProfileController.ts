import { Request, Response } from 'express';
import ProfileService from '../services/ProfileService';
import mapStatusHTTP from '../utils/mapStatusHTTP';

class ProfileController {
  constructor(
    private profileService: ProfileService
  ) { }

  async getProfile(req: Request, res: Response) {
    const { username } = req.body;
    const { status, data } = await this.profileService.getProfile(username) 
    const httpStatus = mapStatusHTTP(status);

    return res.status(httpStatus).json(data);
  }

  async updateProfileImage(req: Request, res: Response) {
    const { id } = req.params;
    const { profileImage } = req.body;

    const { status, data } = await this.profileService.updateProfileImage(Number(id), profileImage);
    const httpStatus = mapStatusHTTP(status);

    return res.status(httpStatus).json(data);
  }
}

export default ProfileController;