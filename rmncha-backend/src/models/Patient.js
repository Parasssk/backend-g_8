import mongoose from 'mongoose';

const { Schema } = mongoose;

const patientSchema = new Schema(
  {
    name: { type: String, required: true, trim: true },
    age: { type: Number, min: 0 },
    phone: { type: String, trim: true },
    village: { type: String, trim: true },
    pregnancyStage: { type: String, trim: true },
    dueDate: { type: Date },
    hospital: { type: Schema.Types.ObjectId, ref: 'Hospital' },
    assignedWorker: { type: Schema.Types.ObjectId, ref: 'User' },
  },
  { timestamps: true }
);

export const Patient = mongoose.model('Patient', patientSchema);

