import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import router from './routes/auth.js';
import User from './models/User.js';

dotenv.config();
connectDB();

const app = express();

app.use(cors({ origin: "http://localhost:3000" })); // allow frontend
app.use(express.json());

app.use('/api/auth', router);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});