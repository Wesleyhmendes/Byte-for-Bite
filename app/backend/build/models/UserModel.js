"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _00UserModel_1 = require("../database/models/00UserModel");
const _05Favorite_Drinks_1 = require("../database/models/05Favorite-Drinks");
const _06Favorite_Meals_1 = require("../database/models/06Favorite-Meals");
const _07In_Progress_Drinks_1 = require("../database/models/07In-Progress-Drinks");
const _08In_Progress_Meals_1 = require("../database/models/08In-Progress-Meals");
const _09Finished_Drinks_1 = require("../database/models/09Finished-Drinks");
const _10Finished_Meals_1 = require("../database/models/10Finished-Meals");
class UserModel {
    constructor() {
        this.model = _00UserModel_1.default;
        this.favoriteDrinks = _05Favorite_Drinks_1.default;
        this.favoriteMeals = _06Favorite_Meals_1.default;
        this.inProgressDrinks = _07In_Progress_Drinks_1.default;
        this.inProgressMeals = _08In_Progress_Meals_1.default;
        this.finishedDrinks = _09Finished_Drinks_1.default;
        this.finishedMeals = _10Finished_Meals_1.default;
    }
    async createUser(newUser) {
        const { dataValues } = await this.model.create(newUser);
        return dataValues;
    }
    async createGoogleUser(newUser) {
        const { dataValues } = await this.model.create(newUser);
        return dataValues;
    }
    async findByEmail(email) {
        try {
            const user = await this.model.findOne({ where: { email } });
            if (user) {
                return user.dataValues;
            }
        }
        catch (error) {
            console.error(error.message);
        }
        return null;
    }
    async findByUsername(username) {
        const user = await this.model.findOne({ where: { username } });
        if (user === null)
            return null;
        return user.dataValues;
    }
    async updateImage(id, imageUrl) {
        const rowCount = await this.model.update({ profileImage: imageUrl }, {
            where: { id },
        });
        if (rowCount[0] === 0)
            return null;
        return rowCount[0];
    }
    async getUserRecipes(id) {
        const favDrinks = await this.favoriteDrinks
            .findAll({ where: { userId: id } });
        const favMeals = await this.favoriteMeals
            .findAll({ where: { userId: id } });
        const inProgressDrinks = await this.inProgressDrinks
            .findAll({ where: { userId: id } });
        const inProgressMeals = await this.inProgressMeals
            .findAll({ where: { userId: id } });
        const finishedDrinks = await this.finishedDrinks
            .findAll({ where: { userId: id } });
        const finishedMeals = await this.finishedMeals
            .findAll({ where: { userId: id } });
        const result = {
            favoritesCount: favDrinks.length + favMeals.length,
            inProgressCount: inProgressDrinks.length + inProgressMeals.length,
            finishedCount: finishedDrinks.length + finishedMeals.length,
        };
        return result;
    }
}
exports.default = UserModel;
//# sourceMappingURL=UserModel.js.map