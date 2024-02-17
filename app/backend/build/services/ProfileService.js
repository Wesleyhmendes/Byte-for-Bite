"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const UserModel_1 = require("../models/UserModel");
class ProfileService {
    constructor(userModel = new UserModel_1.default()) {
        this.userModel = userModel;
    }
    async getProfile(email) {
        const profile = await this.userModel.findByEmail(email);
        return profile;
    }
}
exports.default = ProfileService;
//# sourceMappingURL=ProfileService.js.map