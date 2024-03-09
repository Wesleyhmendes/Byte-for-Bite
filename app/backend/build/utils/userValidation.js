"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
class UserValidation {
    validate(email, password) {
        const validEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!email || !password)
            return this.invalidStatusResponse('invalid_data');
        if (!validEmail.test(email))
            return this.invalidStatusResponse('invalid_emailOrPassword');
        if (password.length < 6)
            return this.invalidStatusResponse('invalid_emailOrPassword');
        return false;
    }
    async encryptPassword(password) {
        const saltRounds = 10;
        const hashedPassword = await bcrypt.hash(password, saltRounds);
        return hashedPassword;
    }
    async checkPassword(password, userPassword) {
        const match = await bcrypt.compare(password, userPassword);
        if (!match)
            return this.invalidStatusResponse('invalid_password');
        return false;
    }
    invalidStatusResponse(status) {
        if (status === 'invalid_data')
            return { status: 'INVALID_DATA', data: { message: 'All fields must be filled' } };
        if (status === 'invalid_emailOrPassword')
            return { status: 'UNAUTHORIZED', data: { message: 'Invalid email or password' } };
        if (status === 'email_exists')
            return { status: 'INVALID_DATA', data: { message: 'Email already exists' } };
        if (status === 'username_exists')
            return { status: 'INVALID_DATA', data: { message: 'Username already exists' } };
        return { status: 'UNAUTHORIZED', data: { message: 'Invalid email or password' } };
    }
    tokenBuilder(sub, role, email) {
        var _a;
        const payload = { sub, role, email };
        const secret = (_a = process.env.JWT_SECRET) !== null && _a !== void 0 ? _a : 'jwt_secret';
        const token = jwt.sign(payload, secret, { expiresIn: '7d' });
        return { token };
    }
}
exports.default = UserValidation;
//# sourceMappingURL=userValidation.js.map