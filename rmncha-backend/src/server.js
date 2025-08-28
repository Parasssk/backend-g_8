import dotenv from 'dotenv';
import { connectToDatabase } from './config/db.js';
import { app } from './app.js';

dotenv.config();

const port = process.env.PORT || 4000;

async function start() {
  await connectToDatabase();
  app.listen(port, () => {
    console.log(`API listening on http://localhost:${port}`);
  });
}

start().catch((err) => {
  console.error('Failed to start server', err);
  process.exit(1);
});

