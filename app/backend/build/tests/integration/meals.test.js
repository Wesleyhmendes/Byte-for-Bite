"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sinon = require("sinon");
const chai = require("chai");
// @ts-ignore
const chaiHttp = require("chai-http");
const app_1 = require("../../app");
const _08In_Progress_Meals_1 = require("../../database/models/08In-Progress-Meals");
const _06Favorite_Meals_1 = require("../../database/models/06Favorite-Meals");
const _10Finished_Meals_1 = require("../../database/models/10Finished-Meals");
const auth_middlware_1 = require("../../middlewares/auth.middlware");
const user_mock_1 = require("../mocks/user.mock");
const M = require("../mocks/meal.mock");
chai.use(chaiHttp);
const { expect } = chai;
describe('Meals routes tests', () => {
    beforeEach(() => {
        sinon.stub(auth_middlware_1.default, 'auth').resolves(() => { });
    });
    it('Should return all meal recipes when no query is sent', async function () {
        const { status, body } = await chai.request(app_1.app)
            .get('/meals/name')
            .set('Authorization', user_mock_1.validToken);
        expect(status).to.equal(200);
        expect(body.length).to.equal(301);
        expect(body[0]).to.deep.equal(M.validAllMeals);
    });
    it('Should return an error when token is not found', async function () {
        const { status, body } = await chai.request(app_1.app)
            .get('/meals/name');
        expect(status).to.equal(401);
        expect(body).to.deep.equal({ "message": "Token not found" });
    });
    afterEach(sinon.restore);
});
describe('Meals search routes tests', () => {
    beforeEach(() => {
        sinon.stub(auth_middlware_1.default, 'auth').resolves(() => { });
    });
    it('Should return a correct recipe when when searched by name with a query', async function () {
        const { status, body } = await chai.request(app_1.app)
            .get('/meals/name')
            .query({ q: 'Beef Wellington' })
            .set('Authorization', user_mock_1.validToken);
        expect(status).to.equal(200);
        expect(body).to.deep.equal(M.mealByName);
    });
    it('Should return a correct recipe when searched by letter i', async function () {
        const { status, body } = await chai.request(app_1.app)
            .get('/meals/letter')
            .query({ q: 'i' })
            .set('Authorization', user_mock_1.validToken);
        expect(status).to.equal(200);
        expect(body).to.deep.equal(M.mealByLetterI);
    });
    it('Should return the correct recipe when searched by id', async function () {
        const { status, body } = await chai.request(app_1.app)
            .get('/meals/104')
            .set('Authorization', user_mock_1.validToken);
        expect(status).to.equal(200);
        expect(body).to.deep.equal(M.recipeById);
    });
    it('Should return an error when an incorrect id is used on search by id', async function () {
        const { status, body } = await chai.request(app_1.app)
            .get('/meals/1040')
            .set('Authorization', user_mock_1.validToken);
        expect(status).to.equal(404);
        expect(body).to.deep.equal({ "message": "Food not found" });
    });
    afterEach(sinon.restore);
});
describe('Meals categories routes tests', () => {
    beforeEach(() => {
        sinon.stub(auth_middlware_1.default, 'auth').resolves(() => { });
    });
    it('Should return all categories', async function () {
        const { status, body } = await chai.request(app_1.app)
            .get('/meals/categories')
            .set('Authorization', user_mock_1.validToken);
        expect(status).to.equal(200);
        expect(body).to.deep.equal(M.allCategories);
        expect(body.length).to.deep.equal(15);
    });
    it('Should return the correct recipe when searched by category Goat with upper case', async function () {
        const { status, body } = await chai.request(app_1.app)
            .get('/meals/category')
            .query({ q: 'Goat' })
            .set('Authorization', user_mock_1.validToken);
        expect(status).to.equal(200);
        expect(body).to.deep.equal(M.recipeByCategoryGoat);
    });
    it('Should return the correct recipe when searched by category goat with lower case', async function () {
        const { status, body } = await chai.request(app_1.app)
            .get('/meals/category')
            .query({ q: 'goat' })
            .set('Authorization', user_mock_1.validToken);
        expect(status).to.equal(200);
        expect(body).to.deep.equal(M.recipeByCategoryGoat);
    });
    afterEach(sinon.restore);
});
describe('Meals not implemented routes tests', () => {
    beforeEach(() => {
        sinon.stub(auth_middlware_1.default, 'auth').resolves(() => { });
    });
    it('Should return a random recipe', async function () {
        const { status, body } = await chai.request(app_1.app)
            .get('/meals/random')
            .set('Authorization', user_mock_1.validToken);
        expect(status).to.equal(200);
        expect(Object.keys(body)).to.deep.equal(Object.keys(M.mealByName[0]));
    });
    it('Should return all areas', async function () {
        const { status, body } = await chai.request(app_1.app)
            .get('/meals/areas')
            .set('Authorization', user_mock_1.validToken);
        expect(status).to.equal(200);
        expect(body).to.deep.equal(M.allAreas);
    });
    it('Should return all the ingredients', async function () {
        const { status, body } = await chai.request(app_1.app)
            .get('/meals/ingredients')
            .set('Authorization', user_mock_1.validToken);
        expect(status).to.equal(200);
        expect(body).to.deep.equal(M.allIngredients);
    });
    afterEach(sinon.restore);
});
describe('Meals in progress routes tests', () => {
    beforeEach(() => {
        sinon.stub(auth_middlware_1.default, 'auth').resolves(() => { });
    });
    it('Should add the correct recipe to in progress', async function () {
        sinon.stub(_08In_Progress_Meals_1.default, 'create').resolves(M.inProgressDefault);
        const { status, body } = await chai.request(app_1.app)
            .post('/meals/inprogress')
            .send({ "userId": "3", "mealId": "3" })
            .set('Authorization', user_mock_1.validToken);
        expect(status).to.equal(200);
        expect(body).to.deep.equal(M.formattedInProgressDefault);
    });
    it('Should return an error when no userId is sent', async function () {
        const { status, body } = await chai.request(app_1.app)
            .post('/meals/inprogress')
            .send({ "mealId": "3" })
            .set('Authorization', user_mock_1.validToken);
        expect(status).to.equal(400);
        expect(body).to.deep.equal({ message: 'Must provide a userId' });
    });
    it('Should return an error when no mealId is sent', async function () {
        const { status, body } = await chai.request(app_1.app)
            .post('/meals/inprogress')
            .send({ "userId": "3" })
            .set('Authorization', user_mock_1.validToken);
        expect(status).to.equal(400);
        expect(body).to.deep.equal({ message: 'Must provide a mealId' });
    });
    it('Should find the recipe in progress when searched by id', async function () {
        sinon.stub(_08In_Progress_Meals_1.default, 'findOne').resolves(M.formattedInProgressDefault);
        const { status, body } = await chai.request(app_1.app)
            .get('/meals/inprogress/3')
            .query({ user: '3' })
            .set('Authorization', user_mock_1.validToken);
        expect(status).to.equal(200);
        expect(body).to.deep.equal(M.formattedInProgressDefault);
    });
    it('Should return an error when no userId is sent in /meals/inprogress/:id', async function () {
        const { status, body } = await chai.request(app_1.app)
            .get('/meals/inprogress/3')
            .set('Authorization', user_mock_1.validToken);
        expect(status).to.equal(400);
        expect(body).to.deep.equal({ message: 'Must provide a userId' });
    });
    it('Should return an error when no recipe is found', async function () {
        sinon.stub(_08In_Progress_Meals_1.default, 'findOne').resolves();
        const { status, body } = await chai.request(app_1.app)
            .get('/meals/inprogress/3')
            .query({ user: '3' })
            .set('Authorization', user_mock_1.validToken);
        expect(status).to.equal(404);
        expect(body).to.deep.equal({ message: 'Recipe not found!' });
    });
    it('Should update in progress recipes successfully', async function () {
        sinon.stub(_08In_Progress_Meals_1.default, 'update').resolves([1]);
        const { status, body } = await chai.request(app_1.app)
            .patch('/meals/inprogress/3')
            .query({ user: '3' })
            .set('Authorization', user_mock_1.validToken);
        expect(status).to.equal(200);
        expect(body).to.deep.equal({ message: `Marked ingredients updated!` });
    });
    afterEach(sinon.restore);
});
describe('Meals favorite routes tests', () => {
    beforeEach(() => {
        sinon.stub(auth_middlware_1.default, 'auth').resolves(() => { });
    });
    it('Should return the favorite recipes', async function () {
        sinon.stub(_06Favorite_Meals_1.default, 'findAll').resolves(M.favoriteRecipes);
        const { status, body } = await chai.request(app_1.app)
            .get('/meals/favorites/search')
            .query({ user: '2' })
            .set('Authorization', user_mock_1.validToken);
        expect(status).to.equal(200);
        expect(body).to.deep.equal(M.favoriteRecipes);
    });
    it('Should return an error when no favorite is found', async function () {
        sinon.stub(_06Favorite_Meals_1.default, 'findAll').resolves([]);
        const { status, body } = await chai.request(app_1.app)
            .get('/meals/favorites/search')
            .query({ user: '2' })
            .set('Authorization', user_mock_1.validToken);
        expect(status).to.equal(404);
        expect(body).to.deep.equal({ message: 'No favorite recipes stored!' });
    });
    it('Should add a recipe in favorites and return a message', async function () {
        sinon.stub(_06Favorite_Meals_1.default, 'findOne').resolves();
        sinon.stub(_06Favorite_Meals_1.default, 'create').resolves(M.createFavorite);
        const { status, body } = await chai.request(app_1.app)
            .post('/meals/favorites/14')
            .send({ "userId": 2 })
            .set('Authorization', user_mock_1.validToken);
        expect(status).to.equal(200);
        expect(body).to.deep.equal({ message: 'Recipe stored in favorites' });
    });
    it('Should remove a recipe in favorites and return a message', async function () {
        sinon.stub(_06Favorite_Meals_1.default, 'findOne').resolves(M.createFavorite);
        sinon.stub(_06Favorite_Meals_1.default, 'create').resolves(M.createFavorite);
        const { status, body } = await chai.request(app_1.app)
            .post('/meals/favorites/14')
            .send({ "userId": 2 })
            .set('Authorization', user_mock_1.validToken);
        expect(status).to.equal(200);
        expect(body).to.deep.equal({ message: 'Recipe removed from favorites' });
    });
    afterEach(sinon.restore);
});
describe('Meals done recipes routes tests', () => {
    beforeEach(() => {
        sinon.stub(auth_middlware_1.default, 'auth').resolves(() => { });
    });
    it('Should return the done recipes', async function () {
        sinon.stub(_10Finished_Meals_1.default, 'findAll').resolves(M.doneRecipes);
        const { status, body } = await chai.request(app_1.app)
            .get('/meals/donerecipes/search')
            .query({ user: '2' })
            .set('Authorization', user_mock_1.validToken);
        expect(status).to.equal(200);
        expect(body).to.deep.equal(M.doneRecipes);
    });
    it('Should return a message when no done recipes is found', async function () {
        sinon.stub(_10Finished_Meals_1.default, 'findAll').resolves([]);
        const { status, body } = await chai.request(app_1.app)
            .get('/meals/donerecipes/search')
            .query({ user: '2' })
            .set('Authorization', user_mock_1.validToken);
        expect(status).to.equal(404);
        expect(body).to.deep.equal({ message: 'No done recipes stored!' });
    });
    it('Should add a done recipe and return a message', async function () {
        sinon.stub(_10Finished_Meals_1.default, 'findOne').resolves();
        sinon.stub(_08In_Progress_Meals_1.default, 'destroy').resolves(1);
        sinon.stub(_10Finished_Meals_1.default, 'create').resolves({ dataValues: { userId: 2, mealId: 3 } });
        const { status, body } = await chai.request(app_1.app)
            .post('/meals/donerecipes/30')
            .send({ userId: '2' })
            .set('Authorization', user_mock_1.validToken);
        expect(status).to.equal(200);
        expect(body).to.deep.equal({ message: 'Recipe is done!' });
    });
    afterEach(sinon.restore);
});
//# sourceMappingURL=meals.test.js.map