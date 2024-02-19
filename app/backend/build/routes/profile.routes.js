"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const ProfileService_1 = require("../services/ProfileService");
const ProfileController_1 = require("../controllers/ProfileController");
const router = (0, express_1.Router)();
const profileService = new ProfileService_1.default();
const profileController = new ProfileController_1.default(profileService);
router.get('/', (req, res) => profileController.getProfile(req, res));
exports.default = router;
//# sourceMappingURL=profile.routes.js.map