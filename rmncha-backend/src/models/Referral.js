import mongoose from 'mongoose';

const { Schema } = mongoose;

export const REFERRAL_STATUS = ['PENDING', 'ACCEPTED', 'REJECTED', 'COMPLETED'];

const referralSchema = new Schema(
  {
    patient: { type: Schema.Types.ObjectId, ref: 'Patient', required: true },
    fromWorker: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    toHospital: { type: Schema.Types.ObjectId, ref: 'Hospital', required: true },
    reason: { type: String, trim: true },
    status: { type: String, enum: REFERRAL_STATUS, default: 'PENDING' },
    notes: { type: String, trim: true },
  },
  { timestamps: true }
);

export const Referral = mongoose.model('Referral', referralSchema);

