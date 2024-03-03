"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _00UserModel_1 = require("../database/models/00UserModel");
class UserModel {
    constructor() {
        this.model = _00UserModel_1.default;
    }
    async createUser(newUser) {
        const { dataValues } = await this.model.create(newUser);
        return dataValues;
    }
    async findByEmail(email) {
        const user = await this.model.findOne({ where: { email } });
        if (user === null)
            return null;
        return user.dataValues;
    }
    async findByUsername(username) {
        const user = await this.model.findOne({ where: { username } });
        if (user === null)
            return null;
        return user.dataValues;
    }
    async updateImage(id, imageUrl) {
        const rowCount = await this.model.update({ profileImage: imageUrl }, {
            where: { id },
        });
        if (rowCount[0] === 0)
            return null;
        return rowCount[0];
    }
}
exports.default = UserModel;
//# sourceMappingURL=UserModel.js.map