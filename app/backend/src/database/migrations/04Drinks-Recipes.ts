import { Model, QueryInterface, DataTypes } from 'sequelize';
import { iDrinkRecipe } from '../../Interfaces/drinks/iDrinks';

export default {
  up(queryInterface: QueryInterface) {
    return queryInterface.createTable<Model<iDrinkRecipe>>('drinks_recipes', {
       idDrink:{
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
       },
      strDrink:{
        type: DataTypes.STRING,
      },
      strDrinkAlternate: {
        type: DataTypes.STRING,
      },
      strTags:{
        type: DataTypes.STRING,
      },
      strVideo:{
        type: DataTypes.STRING,
      },
      strCategory:{
        type: DataTypes.INTEGER,
        references: {
          model: 'drinks_categories',
          key: 'idCategory'
        }
      },
      strIBA:{
        type: DataTypes.STRING,
      },
      strAlcoholic:{
        type: DataTypes.STRING,
      },
      strGlass:{
        type: DataTypes.STRING,
      },
      strInstructions:{
        type: DataTypes.TEXT,
      },
      strInstructionsES:{
        type: DataTypes.TEXT,
      },
      strInstructionsDE:{
        type: DataTypes.TEXT,
      },
      strInstructionsFR:{
        type: DataTypes.TEXT,
      },
      strInstructionsIT:{
        type: DataTypes.TEXT,
      },
      strInstructionsZHHANS:{
        type: DataTypes.TEXT,
      },
      strInstructionsZHHANT:{
        type: DataTypes.TEXT,
      },
      strDrinkThumb:{
        type: DataTypes.STRING,
      },
      strIngredient1:{
        type: DataTypes.STRING,
      },
      strIngredient2:{
        type: DataTypes.STRING,
      },
      strIngredient3:{
        type: DataTypes.STRING,
      },
      strIngredient4:{
        type: DataTypes.STRING,
      },
      strIngredient5:{
        type: DataTypes.STRING,
      },
      strIngredient6:{
        type: DataTypes.STRING,
      },
      strIngredient7:{
        type: DataTypes.STRING,
      },
      strIngredient8:{
        type: DataTypes.STRING,
      },
      strIngredient9:{
        type: DataTypes.STRING,
      },
      strIngredient10:{
        type: DataTypes.STRING,
      },
      strIngredient11:{
        type: DataTypes.STRING,
      },
      strIngredient12:{
        type: DataTypes.STRING,
      },
      strIngredient13:{
        type: DataTypes.STRING,
      },
      strIngredient14:{
        type: DataTypes.STRING,
      },
      strIngredient15:{
        type: DataTypes.STRING,
      },
      strMeasure1:{
        type: DataTypes.STRING,
      },
      strMeasure2:{
        type: DataTypes.STRING,
      },
      strMeasure3:{
        type: DataTypes.STRING,
      },
      strMeasure4:{
        type: DataTypes.STRING,
      },
      strMeasure5:{
        type: DataTypes.STRING,
      },
      strMeasure6:{
        type: DataTypes.STRING,
      },
      strMeasure7:{
        type: DataTypes.STRING,
      },
      strMeasure8:{
        type: DataTypes.STRING,
      },
      strMeasure9:{
        type: DataTypes.STRING,
      },
      strMeasure10:{
        type: DataTypes.STRING,
      },
      strMeasure11:{
        type: DataTypes.STRING,
      },
      strMeasure12:{
        type: DataTypes.STRING,
      },
      strMeasure13:{
        type: DataTypes.STRING,
      },
      strMeasure14:{
        type: DataTypes.STRING,
      },
      strMeasure15:{
        type: DataTypes.STRING,
      },
      strImageSource:{
        type: DataTypes.STRING,
      },
      strImageAttribution:{
        type: DataTypes.STRING,
      },
      strCreativeCommonsConfirmed:{
        type: DataTypes.STRING,
      },
      dateModified:{
        type: DataTypes.STRING,
      },   
    });
  },
  down(queryInterface: QueryInterface) {
    return queryInterface.dropTable('drinks_recipes');
  },
};
