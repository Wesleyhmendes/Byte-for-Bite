"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ProfileController {
    constructor(profileService) {
        this.profileService = profileService;
    }
    async getProfile(req, res) {
        const { username } = req.body;
        const { status, data } = await this.profileService.getProfile(username);
        return res.status(status).json(data);
    }
}
exports.default = ProfileController;
//# sourceMappingURL=ProfileController.js.map