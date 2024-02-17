"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const UserModel_1 = require("../models/UserModel");
const notFound = 'Email not found';
const successfull = 'Success!';
class ProfileService {
    constructor(userModel = new UserModel_1.default()) {
        this.userModel = userModel;
    }
    async getProfile(username) {
        const result = await this.userModel.findByUsername(username);
        if (!result)
            return this.serviceResponse(notFound);
        const { password, email, ...rest } = result;
        const profile = rest;
        return { status: 200, data: profile };
    }
    serviceResponse(status) {
        if (status === notFound)
            return { status: 404, data: { message: notFound } };
        return { status: 200, data: { message: successfull } };
    }
}
exports.default = ProfileService;
//# sourceMappingURL=ProfileService.js.map