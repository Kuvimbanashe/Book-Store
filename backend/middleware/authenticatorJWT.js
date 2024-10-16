import jwt from 'jsonwebtoken';
import { JWT_SECRET } from '../config.js';

const authenticatorJWT = (req, res, next) => {
    const token = req.token
    console.log('token',token);
    if (!token) {
        return res.status(401).json({ message: 'Unauthorized' });
    }

    jwt.verify(token.split(' ')[1],JWT_SECRET, (err, decoded) => {
        if (err) {
            return res.status(401).json({ message: 'Invalid token' });
        }

        req.user = decoded;
        next();
    });
};

export { authenticatorJWT };
