import express from 'express';
import { loginUser, RegisterUser,logoutUser,refreshAccessToken } from '../controllers/User.controller.js'; // Adjust the path as necessary
import { upload } from '../middlewares/multer.middleware.js'; // Adjust the path as necessary
import { verifyJWT } from '../middlewares/auth.middleware.js';

const router = express.Router();

router.post('/register', upload, RegisterUser);


router.post("/login", loginUser);

//secured routes


router.route("/logout").post(verifyJWT, logoutUser);
router.route("refresh-token").post(refreshAccessToken)

export default router;
