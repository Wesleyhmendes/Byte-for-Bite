"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const _1 = require(".");
class Example extends sequelize_1.Model {
}
Example.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
}, {
    sequelize: _1.default,
    modelName: 'trybeEval',
    timestamps: false,
});
exports.default = Example;
//# sourceMappingURL=ExampleModel.js.map