import jwt from 'jsonwebtoken';
import config from '../config/config';

export default class AuthService {
    generateToken(data: any) {
        return jwt.sign(data, config.saltkey, { expiresIn: '1d' });
    }

    decodeToken(token: any) {
        if (token.startsWith('Bearer ')) {
            token = token.slice(7, token.length);
        }
        const data = jwt.verify(token, config.saltkey);
        return data;
    }

    async authorize(req: any, res: any, next: any) {
        let token = req.body.token || req.query.token || req.headers['authorization'];
        try {
            if (token.startsWith('Bearer ')) {
                token = token.slice(7, token.length);
            }
            if (!token) {
                res.status(401).json({
                    message: 'Acesso Restrito'
                });
            } else {
                jwt.verify(token, config.saltkey, (error: any, decoded: any) => {
                    if (error) {
                        res.status(401).json({
                            message: 'Token Inválido'
                        });
                    } else {
                        next();
                    }
                });
            }
        } catch (ex) {
            res.status(401).json({
                message: 'Acesso Restrito'
            });
        }
    };

    async isAdmin(req: any, res: any, next: any) {
        let token = req.body.token || req.query.token || req.headers['authorization'];
        try {
            if (token.startsWith('Bearer ')) {
                token = token.slice(7, token.length);
            }
            if (!token) {
                res.status(401).json({
                    message: 'Token Inválido'
                });
            } else {
                jwt.verify(token, config.saltkey, (error: any, decoded: any) => {
                    if (error) {
                        res.status(401).json({
                            message: 'Token Inválido'
                        });
                    } else {
                        if (decoded.roles.includes('admin')) {
                            next();
                        } else {
                            res.status(403).json({
                                message: 'Esta funcionalidade é restrita para administradores'
                            });
                        }
                    }
                });
            }
        } catch (ex) {
            res.status(401).json({
                message: 'Token Inválido'
            });
        }
    };
}