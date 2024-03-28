"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jwt = require("jsonwebtoken");
class Validations {
    static auth(req, res, next) {
        if (!req.headers.authorization) {
            return res.status(401).json({ message: 'Token not found' });
        }
        const [type, token] = req.headers.authorization.split(' ');
        if (type !== 'Bearer') {
            return res.status(401).json({ message: 'Token must be a valid token' });
        }
        try {
            const secret = 'jwt_secret';
            const payload = jwt.verify(token, secret);
            res.locals.auth = payload;
        }
        catch (err) {
            return res.status(401).json({ message: 'Invalid Token' });
        }
        next();
    }
}
exports.default = Validations;
//# sourceMappingURL=auth.middlware.js.map