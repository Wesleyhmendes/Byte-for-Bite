"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ProfileController {
    constructor(profileService) {
        this.profileService = profileService;
    }
    async getProfile(req, res) {
        const { email } = req.body;
        const profile = await this.profileService.getProfile(email);
        return res.status(200).json(profile);
    }
}
exports.default = ProfileController;
//# sourceMappingURL=ProfileController.js.map