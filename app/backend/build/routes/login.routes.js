"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const UserController_1 = require("../controllers/UserController");
const UserService_1 = require("../services/UserService");
const router = (0, express_1.Router)();
const userService = new UserService_1.default();
const userController = new UserController_1.default(userService);
router.post('/', (req, res) => userController.login(req, res));
exports.default = router;
//# sourceMappingURL=login.routes.js.map