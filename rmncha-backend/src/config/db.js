import mongoose from 'mongoose';

export async function connectToDatabase() {
  const uri = process.env.MONGODB_URI || 'mongodb://localhost:27017/rmncha';
  mongoose.set('strictQuery', true);
  await mongoose.connect(uri, { dbName: 'rmncha' });
  console.log('MongoDB connected');
}

