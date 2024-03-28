import * as sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');

import { app } from '../../app';

import SequelizeDrinks from '../../database/models/03Drinks-Recipes.model';
import SequelizeCategories from '../../database/models/01Drinks-Categories.model';
import SequelizeInProgress from '../../database/models/07In-Progress-Drinks';
import SequelizeFavorite from '../../database/models/05Favorite-Drinks';
import SequelizeDone from '../../database/models/09Finished-Drinks';
import DrinkService from '../../services/DrinksService';
import DrinksModel from '../../models/Drinks.model';
import AuthValidation from '../../middlewares/auth.middlware';
import { validToken } from '../mocks/user.mock';
import * as M from '../mocks/drinks.mock';

chai.use(chaiHttp);

const { expect } = chai;

describe('Drinks routes tests - get all drinks', () => {

  beforeEach(() => {
    sinon.stub(AuthValidation, 'auth').resolves(() => { });
  });

  it('Should return all drinks drink when no query is sent', async function () {
    const { status, body } = await chai.request(app)
      .get('/drinks/name')
      .set('Authorization', validToken);

    expect(status).to.equal(200);
    expect(body.length).to.equal(431);
    expect(body[0]).to.deep.equal(M.validDrink);
  });

  it('Should return an error when no drink is found', async function () {
    sinon.stub(DrinksModel.prototype, 'findAll').resolves(null as any);

    const { status, body } = await chai.request(app)
      .get('/drinks/name')
      .set('Authorization', validToken);

    expect(status).to.equal(404);
    expect(body).to.deep.equal({ message: 'drinks not found' });
  });

  afterEach(sinon.restore);
});

describe('Drinks routes tests - search by name', () => {

  beforeEach(() => {
    sinon.stub(AuthValidation, 'auth').resolves(() => { });
  });

  it('Should return the correct drink when searched by name with a query', async function () {
    sinon.stub(SequelizeDrinks, 'findAll').resolves(M.validDrinkByName as any);

    const { status, body } = await chai.request(app)
      .get('/drinks/name')
      .query({ q: 'A1' })
      .set('Authorization', validToken);

    expect(status).to.equal(200);
    expect(body).to.deep.equal(M.validDrinkByName);
  });

  it('Should return an error when no drink is found in a search by name with query', async function () {
    sinon.stub(SequelizeDrinks, 'findAll').resolves();

    const { status, body } = await chai.request(app)
      .get('/drinks/name')
      .query({ q: 'A111' })
      .set('Authorization', validToken);

    expect(status).to.equal(404);
    expect(body).to.deep.equal({ message: 'drink not found' });
  });

  afterEach(sinon.restore);
});

describe('Drinks routes tests - search by first letter', () => {

  beforeEach(() => {
    sinon.stub(AuthValidation, 'auth').resolves(() => { });
  });

  it('Should return the correct drink when searched by first letter with a query', async function () {
    sinon.stub(SequelizeDrinks, 'findAll').resolves(M.validDrinkByFirstLetter as any);

    const { status, body } = await chai.request(app)
      .get('/drinks/letter')
      .query({ q: 'y' })
      .set('Authorization', validToken);

    expect(status).to.equal(200);
    expect(body).to.deep.equal(M.validDrinkByFirstLetter);
  });

  it('Should return an error when no drink is found in a search by first letter with a query', async function () {
    sinon.stub(DrinksModel.prototype, 'getFilteredDrinks').resolves(null as any);

    const { status, body } = await chai.request(app)
      .get('/drinks/letter')
      .query({ q: 'yy' })
      .set('Authorization', validToken);

    expect(status).to.equal(404);
    expect(body).to.deep.equal({ message: 'drink not found' });
  });

  afterEach(sinon.restore);
});

describe('Drinks routes tests - search by first category', () => {

  beforeEach(() => {
    sinon.stub(AuthValidation, 'auth').resolves(() => { });
  });

  it('Should return the correct drink when searched by category with a query', async function () {
    sinon.stub(DrinksModel.prototype, 'getDrinkByCategory').resolves(M.validDrinkByCategory as any);
    const { status, body } = await chai.request(app)
      .get('/drinks/category')
      .query({ q: 'Shot' })
      .set('Authorization', validToken);

    expect(status).to.equal(200);
    expect(body).to.deep.equal(M.validDrinkByCategory);
  });

  it('Should return the correct drink when searched by category with a query', async function () {
    sinon.stub(SequelizeCategories, 'findAll').resolves(M.allCategories as any);
    const { status, body } = await chai.request(app)
      .get('/drinks/categories')
      .set('Authorization', validToken);

    expect(status).to.equal(200);
    expect(body).to.deep.equal(M.allCategories);
  });

  afterEach(sinon.restore);
});

describe('Drinks routes tests - not implemented requisitions', () => {

  beforeEach(() => {
    sinon.stub(AuthValidation, 'auth').resolves(() => { });
  });

  it('Should return a random drink', async function () {
    sinon.stub(DrinkService.prototype, 'getRandomDrink').resolves({ status: 'SUCCESSFUL', data: M.validDrink } as any);
    const { status, body } = await chai.request(app)
      .get('/drinks/random')
      .set('Authorization', validToken);

    expect(status).to.equal(200);
    expect(body).to.deep.equal(M.validDrink);
  });

  it('Should return all ingredients', async function () {
    sinon.stub(DrinksModel.prototype, 'getAllIngredients').resolves(M.allIngredients as any);
    const { status, body } = await chai.request(app)
      .get('/drinks/ingredients')
      .set('Authorization', validToken);

    expect(status).to.equal(200);
    expect(body).to.deep.equal(M.allIngredients);
  });

  it('Should return all drinks by ingredient', async function () {
    sinon.stub(DrinksModel.prototype, 'getByIngredients').resolves(M.recipesByIngredient as any);
    const { status, body } = await chai.request(app)
      .get('/drinks/ingredient')
      .query({ q: 'Nutmeg' })
      .set('Authorization', validToken);

    expect(status).to.equal(200);
    expect(body).to.deep.equal(M.recipesByIngredient);
  });

  it('Should return the drinks recipe when searched by id', async function () {
    const { status, body } = await chai.request(app)
      .get('/drinks/2')
      .set('Authorization', validToken);

    expect(status).to.equal(200);
    expect(body).to.deep.equal(M.drinkById);
  });

  afterEach(sinon.restore);
});

describe('Drinks routes tests - in progress drinks recipes', () => {

  beforeEach(() => {
    sinon.stub(AuthValidation, 'auth').resolves(() => { });
  });

  it('Should add a drink to in progress', async function () {
    sinon.stub(SequelizeInProgress, 'create').resolves(M.inProgressDeafult as any);
    const { status, body } = await chai.request(app)
    .post('/drinks/inprogress')
    .send({ "userId": "3", "drinkId": "3" })
    .set('Authorization', validToken);

    expect(status).to.equal(200);
    expect(body).to.deep.equal(M.formattedInProgressDefault);
  });

  it('Should return an error when no userId is sent', async function() {
    const { status, body } = await chai.request(app)
    .post('/drinks/inprogress')
    .send({ "drinkId": "3" })
    .set('Authorization', validToken);

    expect(status).to.equal(400);
    expect(body).to.deep.equal({ message: 'Must provide a userId' });
  });

  it('Should return an error when no drinkId is sent', async function() {
    const { status, body } = await chai.request(app)
    .post('/drinks/inprogress')
    .send({ "userId": "3" })
    .set('Authorization', validToken);

    expect(status).to.equal(400);
    expect(body).to.deep.equal({ message: 'Must provide a drinkId' });
  });

  it('Should find the recipe in progress when searched by id', async function() {
    sinon.stub(SequelizeInProgress, 'findOne').resolves(M.formattedInProgressDefault as any);
    const { status, body } = await chai.request(app)
    .get('/drinks/inprogress/3')
    .query({ user: '3' })
    .set('Authorization', validToken);

    expect(status).to.equal(200);
    expect(body).to.deep.equal(M.formattedInProgressDefault);
  });

  it('Should return an error when no userId is sent in /drinks/inprogress/:id', async function() {
    const { status, body } = await chai.request(app)
    .get('/drinks/inprogress/3')
    .set('Authorization', validToken);

    expect(status).to.equal(400);
    expect(body).to.deep.equal({ message: 'Must provide a userId' });
  });

  it('Should return an error when no recipe is found', async function() {
    sinon.stub(SequelizeInProgress, 'findOne').resolves();
    const { status, body } = await chai.request(app)
    .get('/drinks/inprogress/3')
    .query({ user: '3' })
    .set('Authorization', validToken);

    expect(status).to.equal(404);
    expect(body).to.deep.equal({ message: 'Recipe not found!' });
  });

  it('Should update in progress recipes successfully', async function() {
    sinon.stub(SequelizeInProgress, 'update').resolves([1]);
    const { status, body } = await chai.request(app)
    .patch('/drinks/inprogress/3')
    .query({ user: '3' })
    .set('Authorization', validToken);

    expect(status).to.equal(200);
    expect(body).to.deep.equal({ message: `Marked ingredients updated!` });
  });

  afterEach(sinon.restore);
});


describe('Drinks routes tests - favorite drinks recipes', () => {

  beforeEach(() => {
    sinon.stub(AuthValidation, 'auth').resolves(() => { });
  });

  it('Should return the favorite drinks', async function() {
    sinon.stub(SequelizeFavorite, 'findAll').resolves(M.favoriteDrinks as any);
    const { status, body } = await chai.request(app)
    .get('/drinks/favorites/search')
    .query({ user: '2' })
    .set('Authorization', validToken);

    expect(status).to.equal(200);
    expect(body).to.deep.equal(M.favoriteDrinks);
  });

  it('Should return an error when no favorite is found', async function() {
    sinon.stub(SequelizeFavorite, 'findAll').resolves([]);
    const { status, body } = await chai.request(app)
    .get('/drinks/favorites/search')
    .query({ user: '2' })
    .set('Authorization', validToken);

    expect(status).to.equal(404);
    expect(body).to.deep.equal({ message: 'No favorite drinks stored!' });
  });

  it('Should add a recipe in favorites and return a message', async function() {
    sinon.stub(SequelizeFavorite, 'findOne').resolves();
    sinon.stub(SequelizeFavorite, 'create').resolves(M.createFavorite as any);
    const { status, body } = await chai.request(app)
    .post('/drinks/favorites/14')
    .send({ "userId": 2 })
    .set('Authorization', validToken);

    expect(status).to.equal(200);
    expect(body).to.deep.equal({ message: 'Recipe stored in favorites' });
  });

  it('Should remove a recipe in favorites and return a message', async function() {
    sinon.stub(SequelizeFavorite, 'findOne').resolves(M.createFavorite as any);
    sinon.stub(SequelizeFavorite, 'create').resolves(M.createFavorite as any);
    const { status, body } = await chai.request(app)
    .post('/drinks/favorites/14')
    .send({ "userId": 2 })
    .set('Authorization', validToken);

    expect(status).to.equal(200);
    expect(body).to.deep.equal({ message: 'Recipe removed from favorites' });
  });

afterEach(sinon.restore);
});

describe('Drinks routes tests - done drinks recipes', () => {

  beforeEach(() => {
    sinon.stub(AuthValidation, 'auth').resolves(() => { });
  });

  it('Should return the done drinks', async function() {
    sinon.stub(SequelizeDone, 'findAll').resolves(M.doneDrinks as any);
    const { status, body } = await chai.request(app)
    .get('/drinks/donerecipes/search')
    .query({ user: '2' })
    .set('Authorization', validToken);

    expect(status).to.equal(200);
    expect(body).to.deep.equal(M.doneDrinks);
  });

  it('Should return a message when no done drinks is found', async function() {
    sinon.stub(SequelizeDone, 'findAll').resolves([]);
    const { status, body } = await chai.request(app)
    .get('/drinks/donerecipes/search')
    .query({ user: '2' })
    .set('Authorization', validToken);

    expect(status).to.equal(404);
    expect(body).to.deep.equal({ message: 'No done drinks stored!' });
  });

  it('Should add a done drinks and return a message', async function() {
    sinon.stub(SequelizeDone, 'findOne').resolves();
    sinon.stub(SequelizeInProgress, 'destroy').resolves(1);
    sinon.stub(SequelizeDone, 'create').resolves({ dataValues: { userId: 2, mealId: 3 } } as any);

    const { status, body } = await chai.request(app)
    .post('/drinks/donerecipes/30')
    .send({ userId: '2' })
    .set('Authorization', validToken);

    expect(status).to.equal(200);
    expect(body).to.deep.equal({ message: 'Drink recipe is done!' });
  });

afterEach(sinon.restore);
});