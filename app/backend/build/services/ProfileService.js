"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const UserModel_1 = require("../models/UserModel");
const notFound = 'Username not found';
class ProfileService {
    constructor(userModel = new UserModel_1.default()) {
        this.userModel = userModel;
    }
    async getProfile(email) {
        const result = await this.userModel.findByEmail(email);
        if (!result)
            return this.serviceResponse(notFound);
        const { password, ...rest } = result;
        const profile = rest;
        return { status: 'SUCCESSFUL', data: profile };
    }
    async updateProfileImage(id, imageUrl) {
        const response = await this.userModel.updateImage(id, imageUrl);
        if (response !== 1)
            return { status: 'NOT_FOUND', data: { message: 'ID not found!' } };
        return { status: 'SUCCESSFUL', data: { message: `Profile ID:${id} image updated!` } };
    }
    serviceResponse(status) {
        if (status === notFound)
            return { status: 'NOT_FOUND', data: { message: 'User not found' } };
        return { status: 'INVALID_DATA', data: { message: 'Invalid data' } };
    }
}
exports.default = ProfileService;
//# sourceMappingURL=ProfileService.js.map