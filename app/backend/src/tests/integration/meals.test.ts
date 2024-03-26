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
  
  it('Should return an error a too short password is sent', async function() {
    const { status, body } = await chai.request(app)
    .post('/user/login')
    .send({ "email": "teste@teste.com", "password": "123" });

    expect(status).to.equal(401);
    expect(body).to.deep.equal({ message: 'Invalid email or password' });
  });
});