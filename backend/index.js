import express from 'express';
import dotenv from 'dotenv';
dotenv.config();
import { connectDB } from './db/connectDB.js';
import { authRoutes } from './routes/auth.route.js';


const PORT = process.env.PORT || 3000;
const app = express();

app.use(express.json());

app.use('/api/auth', authRoutes);

app.listen(PORT, () => {
    connectDB();
    console.log(`Server is running on http://localhost:${PORT}`);
});
