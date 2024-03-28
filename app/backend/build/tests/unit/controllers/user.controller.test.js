"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chai = require("chai");
// @ts-ignore
const chaiHttp = require("chai-http");
const UserService_1 = require("../../../services/UserService");
chai.use(chaiHttp);
const { expect } = chai;
const service = new UserService_1.default();
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
//# sourceMappingURL=user.controller.test.js.map