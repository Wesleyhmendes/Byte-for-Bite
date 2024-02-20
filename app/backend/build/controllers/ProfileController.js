"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mapStatusHTTP_1 = require("../utils/mapStatusHTTP");
class ProfileController {
    constructor(profileService) {
        this.profileService = profileService;
    }
    async getProfile(req, res) {
        const { username } = req.body;
        const { status, data } = await this.profileService.getProfile(username);
        const httpStatus = (0, mapStatusHTTP_1.default)(status);
        return res.status(httpStatus).json(data);
    }
    async updateProfileImage(req, res) {
        const { id } = req.params;
        const { profileImage } = req.body;
        const { status, data } = await this.profileService.updateProfileImage(Number(id), profileImage);
        const httpStatus = (0, mapStatusHTTP_1.default)(status);
        return res.status(httpStatus).json(data);
    }
}
exports.default = ProfileController;
//# sourceMappingURL=ProfileController.js.map