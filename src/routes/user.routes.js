import express from 'express';
import { RegisterUser } from '../controllers/User.controller.js'; // Adjust the path as necessary
import { upload } from '../middlewares/multer.middleware.js'; // Adjust the path as necessary

const router = express.Router();

router.post('/register', upload, RegisterUser);

export default router;
