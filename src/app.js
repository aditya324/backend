import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import userRouter from './routes/user.routes.js'; // Adjust the path as necessary

const app = express();

// Middleware
app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}));

app.use(express.json({ limit: '16kb' }));
app.use(express.urlencoded({ extended: true, limit: '16kb' }));
app.use(express.static('public'));
app.use(cookieParser());

// Routes
app.use('/api/v1/users', userRouter);

// Error handling
app.use((req, res, next) => {
    res.status(404).send('Not Found');
});

// Start server


export { app };
