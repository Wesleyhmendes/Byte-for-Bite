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
        const { email, password } = login;
        const invalidLogin = this.validate(email, password);
        if (invalidLogin)
            return invalidLogin;
        const user = await this.userModel.findByEmail(email);
        if (!user)
            return this.invalidStatusResponse('invalid_password');
        const invalidPassword = await this.checkPassword(password, user.password);
        if (invalidPassword)
            return invalidPassword;
        // if (!await bcrypt.compare(password, user.password)) return this.invalidStatusResponse('invalid_password');
        const token = this.tokenBuilder(user.id, user.role, user.email);
        return { status: 'SUCCESSFUL', data: { token },
        };
    }
    async createNewUser(newUser) {
        const { email, password, username } = newUser;
        const invalidData = this.validate(email, password);
        if (invalidData)
            return this.invalidStatusResponse('invalid_data');
        const emailExists = await this.userModel.findByEmail(email);
        if (emailExists)
            return this.invalidStatusResponse('email_exists');
        const usernameExists = await this.userModel.findByUsername(username);
        if (usernameExists)
            return this.invalidStatusResponse('username_exists');
        const hashedPassword = await this.encryptPassword(password);
        const encryptedUser = { ...newUser, password: hashedPassword };
        const user = await this.userModel.createUser(encryptedUser);
        return { status: 'CREATED', data: user };
    }
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
        return token;
    }
}
exports.default = UserService;
//# sourceMappingURL=UserService.js.map