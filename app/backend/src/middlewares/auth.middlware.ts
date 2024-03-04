import { Request, Response, NextFunction } from 'express';
import * as jwt from 'jsonwebtoken';

export default class Validations {
  static auth(req: Request, res: Response, next: NextFunction) {
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
    } catch (err) {
      return res.status(401).json({ message: 'Invalid Token' });
    }
    next();
  }
}