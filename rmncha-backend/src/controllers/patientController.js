import createError from 'http-errors';
import { Patient } from '../models/Patient.js';

export async function createPatient(req, res, next) {
  try {
    const patient = await Patient.create({ ...req.body, assignedWorker: req.user?.id });
    res.status(201).json(patient);
  } catch (err) {
    next(err);
  }
}

export async function listPatients(req, res, next) {
  try {
    const patients = await Patient.find().sort({ createdAt: -1 }).populate('hospital assignedWorker', 'name');
    res.json(patients);
  } catch (err) {
    next(err);
  }
}

export async function getPatientById(req, res, next) {
  try {
    const patient = await Patient.findById(req.params.id).populate('hospital assignedWorker', 'name');
    if (!patient) throw createError(404, 'Patient not found');
    res.json(patient);
  } catch (err) {
    next(err);
  }
}

export async function updatePatient(req, res, next) {
  try {
    const patient = await Patient.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!patient) throw createError(404, 'Patient not found');
    res.json(patient);
  } catch (err) {
    next(err);
  }
}

export async function deletePatient(req, res, next) {
  try {
    const patient = await Patient.findByIdAndDelete(req.params.id);
    if (!patient) throw createError(404, 'Patient not found');
    res.json({ deleted: true });
  } catch (err) {
    next(err);
  }
}

