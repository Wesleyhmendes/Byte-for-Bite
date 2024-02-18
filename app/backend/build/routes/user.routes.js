"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const UserController_1 = require("../controllers/UserController");
const UserService_1 = require("../services/UserService");
const router = (0, express_1.Router)();
const userService = new UserService_1.default();
const userController = new UserController_1.default(userService);
<<<<<<< HEAD
router.post('/', (req, res) => userController.createNewUser(req, res));
router.post('/login', (req, res) => userController.login(req, res));
=======
router.post('/', (req, res) => userController.login(req, res));
>>>>>>> f41362d0826f8aa44b4d6929fed5e91411a6bc72
exports.default = router;
//# sourceMappingURL=user.routes.js.map