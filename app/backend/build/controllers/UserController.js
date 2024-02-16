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
}
exports.default = UserController;
//# sourceMappingURL=UserController.js.map