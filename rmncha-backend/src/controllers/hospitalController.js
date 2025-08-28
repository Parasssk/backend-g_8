import createError from 'http-errors';
import { Hospital } from '../models/Hospital.js';

export async function createHospital(req, res, next) {
  try {
    const hospital = await Hospital.create({ ...req.body, createdBy: req.user?.id });
    res.status(201).json(hospital);
  } catch (err) {
    next(err);
  }
}

export async function listHospitals(req, res, next) {
  try {
    const hospitals = await Hospital.find().sort({ createdAt: -1 });
    res.json(hospitals);
  } catch (err) {
    next(err);
  }
}

export async function getHospitalById(req, res, next) {
  try {
    const hospital = await Hospital.findById(req.params.id);
    if (!hospital) throw createError(404, 'Hospital not found');
    res.json(hospital);
  } catch (err) {
    next(err);
  }
}

export async function updateHospital(req, res, next) {
  try {
    const hospital = await Hospital.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!hospital) throw createError(404, 'Hospital not found');
    res.json(hospital);
  } catch (err) {
    next(err);
  }
}

export async function deleteHospital(req, res, next) {
  try {
    const hospital = await Hospital.findByIdAndDelete(req.params.id);
    if (!hospital) throw createError(404, 'Hospital not found');
    res.json({ deleted: true });
  } catch (err) {
    next(err);
  }
}

