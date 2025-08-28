import mongoose from 'mongoose';

const { Schema } = mongoose;

const hospitalSchema = new Schema(
  {
    name: { type: String, required: true, trim: true },
    address: { type: String, trim: true },
    district: { type: String, trim: true },
    state: { type: String, trim: true },
    pincode: { type: String, trim: true },
    contactPhone: { type: String, trim: true },
    createdBy: { type: Schema.Types.ObjectId, ref: 'User' },
    location: {
      lat: { type: Number },
      lng: { type: Number },
    },
  },
  { timestamps: true }
);

export const Hospital = mongoose.model('Hospital', hospitalSchema);

