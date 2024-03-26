import * as sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');

import { app } from '../../../app';

import userService from '../../../services/UserService';
import userController from '../../../controllers/UserController';
import Validations from '../../../middlewares/auth.middlware';
import * as M from '../../mocks/user.mock';

chai.use(chaiHttp);

const { expect } = chai;

const service = new userService();

describe('User tests', () => {
  // it('Should return a token when login is made with correct informations', async function() {
  //   sinon.stub(service, 'verifyLogin').resolves({ data: M.token, status: "SUCCESSFUL" });

  //   const res = { status: sinon.stub().returnsThis(), json: sinon.stub() }
  //   const req = {
  //     body: M.validUser,
  //   };

  //   const controller = new userController(service);

  //   await controller.login(req, res);

  //   expect(res.status).to.have.been.calledWith(200); 
  // });
});
