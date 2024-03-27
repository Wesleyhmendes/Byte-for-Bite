import * as sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');

import { app } from '../../app';

import SequelizeUsers from '../../database/models/00UserModel';
import Authorization from '../../middlewares/auth.middlware';
import UserValidation from '../../utils/userValidation';
import UserClassModel from '../../models/UserModel';
import * as M from '../mocks/user.mock';

chai.use(chaiHttp);

const { expect } = chai;

const userValidationInstance = new UserValidation();

describe('User login tests', () => {

  beforeEach(function() {
    sinon.restore()
  });

  it('Should return a token when login is made with correct informations', async function() {
    const { status, body } = await chai.request(app)
    .post('/user/login')
    .send(M.validUser);

    expect(status).to.be.equal(200);
    expect(body).to.have.key('token');
  });

  it('Should return an error when email is not sent', async function() {
    const { status, body } = await chai.request(app)
    .post('/user/login')
    .send({ "password": "secret_user" });

    expect(status).to.equal(400);
    expect(body).to.deep.equal({ message: 'All fields must be filled' });
  });

  it('Should return an error when password is not sent', async function() {
    const { status, body } = await chai.request(app)
    .post('/user/login')
    .send({ "email": "teste@teste.com" });

    expect(status).to.equal(400);
    expect(body).to.deep.equal({ message: 'All fields must be filled' });
  });

  it('Should return an error when an invalid email is sent', async function() {
    const { status, body } = await chai.request(app)
    .post('/user/login')
    .send({ "email": "teste", "password": "123456" });

    expect(status).to.equal(401);
    expect(body).to.deep.equal({ message: 'Invalid email or password' });
  });

  it('Should return an error a too short password is sent', async function() {
    const { status, body } = await chai.request(app)
    .post('/user/login')
    .send({ "email": "teste@teste.com", "password": "123" });

    expect(status).to.equal(401);
    expect(body).to.deep.equal({ message: 'Invalid email or password' });
  });

  it('Return an error when try to access the profile without a token', async function() {
    sinon.stub(SequelizeUsers, 'findOne').resolves(M.profileInfosModel as any);
    const { status, body } = await chai.request(app)
    .get('/profile')
    .query({ email: 'user@user.com' })
    .set('Authorization', M.invalidToken);

    expect(status).to.equal(401);
    expect(body).to.deep.equal({ message: 'Token must be a valid token' });
  });
});

describe('User create tests', () => {

  beforeEach(function() {
    sinon.restore()
  });

  it('Should return a token when an user is created successfully', async function() {
    sinon.stub(SequelizeUsers, 'findOne').resolves(null);
    sinon.stub(SequelizeUsers, 'create').resolves(M.findOneUser as any);
    const { status, body } = await chai.request(app)
    .post('/user')
    .send(M.validUser);

    expect(status).to.equal(201);
    expect(body).to.have.key('token');
  });

  it('Should return an error when email is not sent', async function() {
    const { status, body } = await chai.request(app)
    .post('/user')
    .send({ "password": "secret_user" });

    expect(status).to.equal(400);
    expect(body).to.deep.equal({ message: 'All fields must be filled' });
  });

  it('Should return an error when password is not sent', async function() {
    const { status, body } = await chai.request(app)
    .post('/user')
    .send({ "email": "user@user.com", });

    expect(status).to.equal(400);
    expect(body).to.deep.equal({ message: 'All fields must be filled' });
  });

  it('Should return an error when an invalid email is sent', async function() {
    const { status, body } = await chai.request(app)
    .post('/user')
    .send({ "email": "user", "password": "123456"});

    expect(status).to.equal(401);
    expect(body).to.deep.equal({ message: 'Invalid email or password' });
  });

  it('Should return an error a too short password is sent', async function() {
    const { status, body } = await chai.request(app)
    .post('/user')
    .send({ "email": "teste@teste.com", "password": "123"});

    expect(status).to.equal(401);
    expect(body).to.deep.equal({ message: 'Invalid email or password' });
  });

  it('Should return an error when an existing email is sent', async function() {
    const { status, body } = await chai.request(app)
    .post('/user')
    .send(M.validUser);

    expect(status).to.equal(400);
    expect(body).to.deep.equal({ message: 'Email already exists' });
  });

  it('Should return an error when an existing username is sent', async function() {
    const { status, body } = await chai.request(app)
    .post('/user')
    .send({
      "email": "userr@user.com",
      "username": "User",
	    "password": "secret_user"
  });

    expect(status).to.equal(400);
    expect(body).to.deep.equal({ message: 'Username already exists' });
  });
});

describe('User profile tests', () => {

  beforeEach(() => {
    sinon.stub(Authorization, 'auth').resolves(() => {});
  }); 

  it('Should return profile informations of the user', async function() {
    sinon.stub(SequelizeUsers, 'findOne').resolves(M.profileInfosModel as any);
    const { status, body } = await chai.request(app)
    .get('/profile')
    .query({ email: 'user@user.com' })
    .set('Authorization', M.validToken);

    expect(status).to.equal(200);
    expect(body).to.deep.equal(M.profileInfos);
  });

  it('Should return a message when no information is found', async function() {
    sinon.stub(SequelizeUsers, 'findOne').resolves(null);
    const { status, body } = await chai.request(app)
    .get('/profile')
    .query({ email: 'userzs@user.com' })
    .set('Authorization', M.validToken);

    expect(status).to.equal(404);
    expect(body).to.deep.equal({"message": "User not found"});
  });

  it('Should update the profile image and return a message', async function() {
    sinon.stub(SequelizeUsers, 'update').resolves([1] as any);
    const { status, body } = await chai.request(app)
    .patch('/profile/2')
    .send({"profileImage": "https://test.com"})
    .set('Authorization', M.validToken);

    expect(status).to.equal(200);
    expect(body).to.deep.equal({"message": "Profile image updated! ID: 2!"});
  });

  it('Should return an error when the update function does not update the profile image', async function() {
    sinon.stub(SequelizeUsers, 'update').resolves([0]);
    const { status, body } = await chai.request(app)
    .patch('/profile/2')
    .send({"profileImage": "https://test.com"})
    .set('Authorization', M.validToken);

    expect(status).to.equal(404);
    expect(body).to.deep.equal({"message": "ID not found or user is already using this URL"});
  });

  it("Should return user's recipes information", async function() {
    sinon.stub(UserClassModel.prototype, 'getUserRecipes').resolves(M.profileRecipesInfos as any);
    const { status, body } = await chai.request(app)
    .get('/profile/2/profileRecipes')
    .set('Authorization', M.validToken);

    expect(status).to.equal(200);
    expect(body).to.deep.equal(M.profileRecipesInfos);
  });

  afterEach(sinon.restore);
});