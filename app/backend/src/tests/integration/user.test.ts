import * as sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');

import { app } from '../../app';

import SequelizeUsers from '../../database/models/00UserModel';
import Auth from '../../middlewares/auth.middlware';
import UserValidation from '../../utils/userValidation';
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
