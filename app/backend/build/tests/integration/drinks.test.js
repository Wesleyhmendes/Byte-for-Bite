"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sinon = require("sinon");
const chai = require("chai");
// @ts-ignore
const chaiHttp = require("chai-http");
const app_1 = require("../../app");
const _03Drinks_Recipes_model_1 = require("../../database/models/03Drinks-Recipes.model");
const _01Drinks_Categories_model_1 = require("../../database/models/01Drinks-Categories.model");
const _07In_Progress_Drinks_1 = require("../../database/models/07In-Progress-Drinks");
const _05Favorite_Drinks_1 = require("../../database/models/05Favorite-Drinks");
const _09Finished_Drinks_1 = require("../../database/models/09Finished-Drinks");
const DrinksService_1 = require("../../services/DrinksService");
const Drinks_model_1 = require("../../models/Drinks.model");
const auth_middlware_1 = require("../../middlewares/auth.middlware");
const user_mock_1 = require("../mocks/user.mock");
const M = require("../mocks/drinks.mock");
chai.use(chaiHttp);
const { expect } = chai;
describe('Drinks routes tests - get all drinks', () => {
    beforeEach(() => {
        sinon.stub(auth_middlware_1.default, 'auth').resolves(() => { });
    });
    it('Should return all drinks drink when no query is sent', async function () {
        const { status, body } = await chai.request(app_1.app)
            .get('/drinks/name')
            .set('Authorization', user_mock_1.validToken);
        expect(status).to.equal(200);
        expect(body.length).to.equal(431);
        expect(body[0]).to.deep.equal(M.validDrink);
    });
    it('Should return an error when no drink is found', async function () {
        sinon.stub(Drinks_model_1.default.prototype, 'findAll').resolves(null);
        const { status, body } = await chai.request(app_1.app)
            .get('/drinks/name')
            .set('Authorization', user_mock_1.validToken);
        expect(status).to.equal(404);
        expect(body).to.deep.equal({ message: 'drinks not found' });
    });
    afterEach(sinon.restore);
});
describe('Drinks routes tests - search by name', () => {
    beforeEach(() => {
        sinon.stub(auth_middlware_1.default, 'auth').resolves(() => { });
    });
    it('Should return the correct drink when searched by name with a query', async function () {
        sinon.stub(_03Drinks_Recipes_model_1.default, 'findAll').resolves(M.validDrinkByName);
        const { status, body } = await chai.request(app_1.app)
            .get('/drinks/name')
            .query({ q: 'A1' })
            .set('Authorization', user_mock_1.validToken);
        expect(status).to.equal(200);
        expect(body).to.deep.equal(M.validDrinkByName);
    });
    it('Should return an error when no drink is found in a search by name with query', async function () {
        sinon.stub(_03Drinks_Recipes_model_1.default, 'findAll').resolves();
        const { status, body } = await chai.request(app_1.app)
            .get('/drinks/name')
            .query({ q: 'A111' })
            .set('Authorization', user_mock_1.validToken);
        expect(status).to.equal(404);
        expect(body).to.deep.equal({ message: 'drink not found' });
    });
    afterEach(sinon.restore);
});
describe('Drinks routes tests - search by first letter', () => {
    beforeEach(() => {
        sinon.stub(auth_middlware_1.default, 'auth').resolves(() => { });
    });
    it('Should return the correct drink when searched by first letter with a query', async function () {
        sinon.stub(_03Drinks_Recipes_model_1.default, 'findAll').resolves(M.validDrinkByFirstLetter);
        const { status, body } = await chai.request(app_1.app)
            .get('/drinks/letter')
            .query({ q: 'y' })
            .set('Authorization', user_mock_1.validToken);
        expect(status).to.equal(200);
        expect(body).to.deep.equal(M.validDrinkByFirstLetter);
    });
    it('Should return an error when no drink is found in a search by first letter with a query', async function () {
        sinon.stub(Drinks_model_1.default.prototype, 'getFilteredDrinks').resolves(null);
        const { status, body } = await chai.request(app_1.app)
            .get('/drinks/letter')
            .query({ q: 'yy' })
            .set('Authorization', user_mock_1.validToken);
        expect(status).to.equal(404);
        expect(body).to.deep.equal({ message: 'drink not found' });
    });
    afterEach(sinon.restore);
});
describe('Drinks routes tests - search by first category', () => {
    beforeEach(() => {
        sinon.stub(auth_middlware_1.default, 'auth').resolves(() => { });
    });
    it('Should return the correct drink when searched by category with a query', async function () {
        sinon.stub(Drinks_model_1.default.prototype, 'getDrinkByCategory').resolves(M.validDrinkByCategory);
        const { status, body } = await chai.request(app_1.app)
            .get('/drinks/category')
            .query({ q: 'Shot' })
            .set('Authorization', user_mock_1.validToken);
        expect(status).to.equal(200);
        expect(body).to.deep.equal(M.validDrinkByCategory);
    });
    it('Should return the correct drink when searched by category with a query', async function () {
        sinon.stub(_01Drinks_Categories_model_1.default, 'findAll').resolves(M.allCategories);
        const { status, body } = await chai.request(app_1.app)
            .get('/drinks/categories')
            .set('Authorization', user_mock_1.validToken);
        expect(status).to.equal(200);
        expect(body).to.deep.equal(M.allCategories);
    });
    afterEach(sinon.restore);
});
describe('Drinks routes tests - not implemented requisitions', () => {
    beforeEach(() => {
        sinon.stub(auth_middlware_1.default, 'auth').resolves(() => { });
    });
    it('Should return a random drink', async function () {
        sinon.stub(DrinksService_1.default.prototype, 'getRandomDrink').resolves({ status: 'SUCCESSFUL', data: M.validDrink });
        const { status, body } = await chai.request(app_1.app)
            .get('/drinks/random')
            .set('Authorization', user_mock_1.validToken);
        expect(status).to.equal(200);
        expect(body).to.deep.equal(M.validDrink);
    });
    it('Should return all ingredients', async function () {
        sinon.stub(Drinks_model_1.default.prototype, 'getAllIngredients').resolves(M.allIngredients);
        const { status, body } = await chai.request(app_1.app)
            .get('/drinks/ingredients')
            .set('Authorization', user_mock_1.validToken);
        expect(status).to.equal(200);
        expect(body).to.deep.equal(M.allIngredients);
    });
    it('Should return all drinks by ingredient', async function () {
        sinon.stub(Drinks_model_1.default.prototype, 'getByIngredients').resolves(M.recipesByIngredient);
        const { status, body } = await chai.request(app_1.app)
            .get('/drinks/ingredient')
            .query({ q: 'Nutmeg' })
            .set('Authorization', user_mock_1.validToken);
        expect(status).to.equal(200);
        expect(body).to.deep.equal(M.recipesByIngredient);
    });
    it('Should return the drinks recipe when searched by id', async function () {
        const { status, body } = await chai.request(app_1.app)
            .get('/drinks/2')
            .set('Authorization', user_mock_1.validToken);
        expect(status).to.equal(200);
        expect(body).to.deep.equal(M.drinkById);
    });
    afterEach(sinon.restore);
});
describe('Drinks routes tests - in progress drinks recipes', () => {
    beforeEach(() => {
        sinon.stub(auth_middlware_1.default, 'auth').resolves(() => { });
    });
    it('Should add a drink to in progress', async function () {
        sinon.stub(_07In_Progress_Drinks_1.default, 'create').resolves(M.inProgressDeafult);
        const { status, body } = await chai.request(app_1.app)
            .post('/drinks/inprogress')
            .send({ "userId": "3", "drinkId": "3" })
            .set('Authorization', user_mock_1.validToken);
        expect(status).to.equal(200);
        expect(body).to.deep.equal(M.formattedInProgressDefault);
    });
    it('Should return an error when no userId is sent', async function () {
        const { status, body } = await chai.request(app_1.app)
            .post('/drinks/inprogress')
            .send({ "drinkId": "3" })
            .set('Authorization', user_mock_1.validToken);
        expect(status).to.equal(400);
        expect(body).to.deep.equal({ message: 'Must provide a userId' });
    });
    it('Should return an error when no drinkId is sent', async function () {
        const { status, body } = await chai.request(app_1.app)
            .post('/drinks/inprogress')
            .send({ "userId": "3" })
            .set('Authorization', user_mock_1.validToken);
        expect(status).to.equal(400);
        expect(body).to.deep.equal({ message: 'Must provide a drinkId' });
    });
    it('Should find the recipe in progress when searched by id', async function () {
        sinon.stub(_07In_Progress_Drinks_1.default, 'findOne').resolves(M.formattedInProgressDefault);
        const { status, body } = await chai.request(app_1.app)
            .get('/drinks/inprogress/3')
            .query({ user: '3' })
            .set('Authorization', user_mock_1.validToken);
        expect(status).to.equal(200);
        expect(body).to.deep.equal(M.formattedInProgressDefault);
    });
    it('Should return an error when no userId is sent in /drinks/inprogress/:id', async function () {
        const { status, body } = await chai.request(app_1.app)
            .get('/drinks/inprogress/3')
            .set('Authorization', user_mock_1.validToken);
        expect(status).to.equal(400);
        expect(body).to.deep.equal({ message: 'Must provide a userId' });
    });
    it('Should return an error when no recipe is found', async function () {
        sinon.stub(_07In_Progress_Drinks_1.default, 'findOne').resolves();
        const { status, body } = await chai.request(app_1.app)
            .get('/drinks/inprogress/3')
            .query({ user: '3' })
            .set('Authorization', user_mock_1.validToken);
        expect(status).to.equal(404);
        expect(body).to.deep.equal({ message: 'Recipe not found!' });
    });
    it('Should update in progress recipes successfully', async function () {
        sinon.stub(_07In_Progress_Drinks_1.default, 'update').resolves([1]);
        const { status, body } = await chai.request(app_1.app)
            .patch('/drinks/inprogress/3')
            .query({ user: '3' })
            .set('Authorization', user_mock_1.validToken);
        expect(status).to.equal(200);
        expect(body).to.deep.equal({ message: `Marked ingredients updated!` });
    });
    afterEach(sinon.restore);
});
describe('Drinks routes tests - favorite drinks recipes', () => {
    beforeEach(() => {
        sinon.stub(auth_middlware_1.default, 'auth').resolves(() => { });
    });
    it('Should return the favorite drinks', async function () {
        sinon.stub(_05Favorite_Drinks_1.default, 'findAll').resolves(M.favoriteDrinks);
        const { status, body } = await chai.request(app_1.app)
            .get('/drinks/favorites/search')
            .query({ user: '2' })
            .set('Authorization', user_mock_1.validToken);
        expect(status).to.equal(200);
        expect(body).to.deep.equal(M.favoriteDrinks);
    });
    it('Should return an error when no favorite is found', async function () {
        sinon.stub(_05Favorite_Drinks_1.default, 'findAll').resolves([]);
        const { status, body } = await chai.request(app_1.app)
            .get('/drinks/favorites/search')
            .query({ user: '2' })
            .set('Authorization', user_mock_1.validToken);
        expect(status).to.equal(404);
        expect(body).to.deep.equal({ message: 'No favorite drinks stored!' });
    });
    it('Should add a recipe in favorites and return a message', async function () {
        sinon.stub(_05Favorite_Drinks_1.default, 'findOne').resolves();
        sinon.stub(_05Favorite_Drinks_1.default, 'create').resolves(M.createFavorite);
        const { status, body } = await chai.request(app_1.app)
            .post('/drinks/favorites/14')
            .send({ "userId": 2 })
            .set('Authorization', user_mock_1.validToken);
        expect(status).to.equal(200);
        expect(body).to.deep.equal({ message: 'Recipe stored in favorites' });
    });
    it('Should remove a recipe in favorites and return a message', async function () {
        sinon.stub(_05Favorite_Drinks_1.default, 'findOne').resolves(M.createFavorite);
        sinon.stub(_05Favorite_Drinks_1.default, 'create').resolves(M.createFavorite);
        const { status, body } = await chai.request(app_1.app)
            .post('/drinks/favorites/14')
            .send({ "userId": 2 })
            .set('Authorization', user_mock_1.validToken);
        expect(status).to.equal(200);
        expect(body).to.deep.equal({ message: 'Recipe removed from favorites' });
    });
    afterEach(sinon.restore);
});
describe('Drinks routes tests - done drinks recipes', () => {
    beforeEach(() => {
        sinon.stub(auth_middlware_1.default, 'auth').resolves(() => { });
    });
    it('Should return the done drinks', async function () {
        sinon.stub(_09Finished_Drinks_1.default, 'findAll').resolves(M.doneDrinks);
        const { status, body } = await chai.request(app_1.app)
            .get('/drinks/donerecipes/search')
            .query({ user: '2' })
            .set('Authorization', user_mock_1.validToken);
        expect(status).to.equal(200);
        expect(body).to.deep.equal(M.doneDrinks);
    });
    it('Should return a message when no done drinks is found', async function () {
        sinon.stub(_09Finished_Drinks_1.default, 'findAll').resolves([]);
        const { status, body } = await chai.request(app_1.app)
            .get('/drinks/donerecipes/search')
            .query({ user: '2' })
            .set('Authorization', user_mock_1.validToken);
        expect(status).to.equal(404);
        expect(body).to.deep.equal({ message: 'No done drinks stored!' });
    });
    it('Should add a done drinks and return a message', async function () {
        sinon.stub(_09Finished_Drinks_1.default, 'findOne').resolves();
        sinon.stub(_07In_Progress_Drinks_1.default, 'destroy').resolves(1);
        sinon.stub(_09Finished_Drinks_1.default, 'create').resolves({ dataValues: { userId: 2, mealId: 3 } });
        const { status, body } = await chai.request(app_1.app)
            .post('/drinks/donerecipes/30')
            .send({ userId: '2' })
            .set('Authorization', user_mock_1.validToken);
        expect(status).to.equal(200);
        expect(body).to.deep.equal({ message: 'Drink recipe is done!' });
    });
    afterEach(sinon.restore);
});
//# sourceMappingURL=drinks.test.js.map