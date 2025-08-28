import createError from 'http-errors';
import { verifyJwtToken } from '../utils/jwt.js';

export function requireAuth(req, res, next) {
  try {
    const authHeader = req.headers.authorization || '';
    const token = authHeader.startsWith('Bearer ') ? authHeader.slice(7) : null;
    if (!token) throw createError(401, 'Missing Authorization header');
    const decoded = verifyJwtToken(token);
    req.user = decoded;
    next();
  } catch (err) {
    next(createError(401, 'Invalid or expired token'));
  }
}

export function requireRole(...allowedRoles) {
  return (req, res, next) => {
    if (!req.user) return next(createError(401, 'Unauthenticated'));
    if (!allowedRoles.includes(req.user.role)) {
      return next(createError(403, 'Forbidden'));
    }
    next();
  };
}

