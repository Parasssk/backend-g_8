import createError from 'http-errors';
import { User } from '../models/User.js';
import { signJwtToken } from '../utils/jwt.js';

export async function register(req, res, next) {
  try {
    const { name, email, password, role, phone } = req.body;
    const exists = await User.findOne({ email });
    if (exists) throw createError(409, 'Email already in use');
    const user = await User.create({ name, email, password, role, phone });
    const token = signJwtToken({ id: user._id, role: user.role, name: user.name });
    res.status(201).json({
      token,
      user: { id: user._id, name: user.name, email: user.email, role: user.role, phone: user.phone },
    });
  } catch (err) {
    next(err);
  }
}

export async function login(req, res, next) {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) throw createError(401, 'Invalid credentials');
    const ok = await user.comparePassword(password);
    if (!ok) throw createError(401, 'Invalid credentials');
    const token = signJwtToken({ id: user._id, role: user.role, name: user.name });
    res.json({ token, user: { id: user._id, name: user.name, email: user.email, role: user.role } });
  } catch (err) {
    next(err);
  }
}

export async function me(req, res) {
  res.json({ user: req.user });
}

