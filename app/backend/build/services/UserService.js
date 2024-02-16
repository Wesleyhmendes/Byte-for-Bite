"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const UserModel_1 = require("../models/UserModel");
class UserService {
    constructor(userModel = new UserModel_1.default()) {
        this.userModel = userModel;
    }
    async verifyLogin(login) {
        var _a;
        const { email, password } = login;
        if (!email || !password) {
            return { status: 'INVALID_DATA', data: { message: 'All fields must be filled' } };
        }
        const validEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!validEmail.test(email) || password.length < 6) {
            return { status: 'UNAUTHORIZED', data: { message: 'Invalid email or password' } };
        }
        const user = await this.userModel.findByEmail(email);
        if (!user || !await bcrypt.compare(password, user.password)) {
            return { status: 'UNAUTHORIZED', data: { message: 'Invalid email or password' } };
        }
        const payload = { sub: user.id, role: user.role, email: user.email };
        const secret = (_a = process.env.JWT_SECRET) !== null && _a !== void 0 ? _a : 'jwt_secret';
        const token = jwt.sign(payload, secret, { expiresIn: '7d' });
        return { status: 'SUCCESSFUL', data: { token },
        };
    }
}
exports.default = UserService;
//# sourceMappingURL=UserService.js.map