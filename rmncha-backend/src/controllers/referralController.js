import createError from 'http-errors';
import { Referral } from '../models/Referral.js';

export async function createReferral(req, res, next) {
  try {
    const referral = await Referral.create({ ...req.body, fromWorker: req.user?.id });
    res.status(201).json(referral);
  } catch (err) {
    next(err);
  }
}

export async function listReferrals(req, res, next) {
  try {
    const refs = await Referral.find()
      .sort({ createdAt: -1 })
      .populate('patient fromWorker toHospital', 'name');
    res.json(refs);
  } catch (err) {
    next(err);
  }
}

export async function getReferralById(req, res, next) {
  try {
    const ref = await Referral.findById(req.params.id).populate('patient fromWorker toHospital', 'name');
    if (!ref) throw createError(404, 'Referral not found');
    res.json(ref);
  } catch (err) {
    next(err);
  }
}

export async function updateReferral(req, res, next) {
  try {
    const ref = await Referral.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!ref) throw createError(404, 'Referral not found');
    res.json(ref);
  } catch (err) {
    next(err);
  }
}

export async function deleteReferral(req, res, next) {
  try {
    const ref = await Referral.findByIdAndDelete(req.params.id);
    if (!ref) throw createError(404, 'Referral not found');
    res.json({ deleted: true });
  } catch (err) {
    next(err);
  }
}

