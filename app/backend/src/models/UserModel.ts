import IUsers, { IGUsers } from '../Interfaces/IUsers';
import SequelizeUsers from '../database/models/00UserModel';
import { IUsersModel } from '../Interfaces/IUsers';
import FavoriteDrinksModel from '../database/models/05Favorite-Drinks';
import FavoriteMealsModel from '../database/models/06Favorite-Meals';
import InProgressDrinksModel from '../database/models/07In-Progress-Drinks';
import InProgressMealsModel from '../database/models/08In-Progress-Meals';
import FinishedDrinksModel from '../database/models/09Finished-Drinks';
import FinishedMealsModel from '../database/models/10Finished-Meals';


export default class UserModel implements IUsersModel {
  private model = SequelizeUsers;
  private favoriteDrinks = FavoriteDrinksModel;
  private favoriteMeals = FavoriteMealsModel;
  private inProgressDrinks = InProgressDrinksModel;
  private inProgressMeals = InProgressMealsModel;
  private finishedDrinks = FinishedDrinksModel;
  private finishedMeals = FinishedMealsModel;

  async createUser(newUser: Omit<IUsers, 'id'>): Promise<IUsers> {
    const { dataValues } = await this.model.create(newUser);

    return dataValues;
  }

  async createGoogleUser(newUser: Omit<IGUsers, 'id' | 'emailVerified'>): Promise<Omit<IGUsers, 'emailVerified'>> {
    const { dataValues } = await this.model.create(newUser);

    return dataValues;
  }

  async findByEmail(email: string): Promise<IUsers | null> {
    try {
      const user = await this.model.findOne({ where: { email } });
      if (user) {
        return user.dataValues;
      }
    } catch (error: any) {
      console.error(error.message);
    }
    return null;
  }

  async findByUsername(username: string): Promise<IUsers | null> {
    const user = await this.model.findOne({ where: { username } });

    if (user === null) return null;

    return user.dataValues;
  }

  async updateImage(id: number, imageUrl: string): Promise<number | null> {
    const rowCount = await this.model.update(
      { profileImage: imageUrl },
      {
        where: { id },
      }
    );
    if (rowCount[0] === 0) return null;
    return rowCount[0];
  }

  async getUserRecipes(id: number) {
    const favDrinks = await this.favoriteDrinks
      .findAll({ where: { userId: id }});
    const favMeals = await this.favoriteMeals
      .findAll({ where: { userId: id }});
    const inProgressDrinks = await this.inProgressDrinks
      .findAll({ where: { userId: id }});
    const inProgressMeals = await this.inProgressMeals
      .findAll({ where: { userId: id }});
    const finishedDrinks = await this.finishedDrinks
      .findAll({ where: { userId: id }});
    const finishedMeals = await this.finishedMeals
    .findAll({ where: { userId: id }});

    const result = {
      favoritesCount: favDrinks.length + favMeals.length,
      inProgressCount: inProgressDrinks.length + inProgressMeals.length,
      finishedCount: finishedDrinks.length + finishedMeals.length, 
    };

    return result;
  }
}