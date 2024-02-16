"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
exports.default = {
    up(queryInterface) {
        return queryInterface.createTable('trybe_eval', {
            id: {
                type: sequelize_1.DataTypes.INTEGER,
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
            },
        });
    },
    down(queryInterface) {
        return queryInterface.dropTable('trybe_eval');
    },
};
//# sourceMappingURL=999999999999999.js.map