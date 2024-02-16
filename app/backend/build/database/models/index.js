"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const config = require("../config/database");
const sequelize = new sequelize_1.Sequelize(config);
exports.default = sequelize;
//# sourceMappingURL=index.js.map