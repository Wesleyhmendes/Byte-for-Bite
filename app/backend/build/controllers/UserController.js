"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mapStatusHTTP_1 = require("../utils/mapStatusHTTP");
class UserController {
    constructor(userService) {
        this.userService = userService;
    }
    async login(req, res) {
        const { data, status } = await this.userService.verifyLogin(req.body);
        const httpStatus = (0, mapStatusHTTP_1.default)(status);
        return res.status(httpStatus).json(data);
    }
    async loginGoogle(req, res) {
        const { data, status } = await this.userService.verifyGoogleLogin(req.body);
        const httpStatus = (0, mapStatusHTTP_1.default)(status);
        return res.status(httpStatus).json(data);
    }
    async createNewUser(req, res) {
        const newUser = req.body;
        const { data, status } = await this.userService.createNewUser(newUser);
        const httpStatus = (0, mapStatusHTTP_1.default)(status);
        return res.status(httpStatus).json(data);
    }
    async createNewGoogleUser(req, res) {
        const newUser = req.body;
        const { data, status } = await this.userService.createGoogleUser(newUser);
        const httpStatus = (0, mapStatusHTTP_1.default)(status);
        return res.status(httpStatus).json(data);
    }
}
exports.default = UserController;
//# sourceMappingURL=UserController.js.map