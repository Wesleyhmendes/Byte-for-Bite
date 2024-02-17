"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const UserModel_1 = require("../database/models/UserModel");
class UserModel {
    constructor() {
        this.model = UserModel_1.default;
    }
    async findByEmail(email) {
        const user = await this.model.findOne({ where: { email } });
        if (user === null)
            return null;
        return user.dataValues;
    }
}
exports.default = UserModel;
//# sourceMappingURL=UserModel.js.map