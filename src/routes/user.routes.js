import express from "express";
import {
  loginUser,
  RegisterUser,
  logoutUser,
  refreshAccessToken,
  changecurrentpassword,
  getWatchHistory,
  getUserChannel,
  updateUserCoverImage,
} from "../controllers/User.controller.js"; // Adjust the path as necessary
import { upload } from "../middlewares/multer.middleware.js"; // Adjust the path as necessary
import { verifyJWT } from "../middlewares/auth.middleware.js";

const router = express.Router();

router.post("/register", upload, RegisterUser);

router.post("/login", loginUser);

//secured routes

router.route("/logout").post(verifyJWT, logoutUser);
router.route("refresh-token").post(refreshAccessToken);

router.route("/change-passoword").post(verifyJWT, changecurrentpassword);

router.route("/update-account").patch(verifyJWT, updateuser);

router
  .route("/avatar")
  .patch(verifyJWT, upload.single("avatar"), updateUserAvatar);
router
  .route("/cover-image")
  .patch(verifyJWT, upload.single("coverImage"), updateUserCoverImage);

router.route("/c/:username").get(verifyJWT, getUserChannel);

router.route("history").get(verifyJWT, getWatchHistory);

export default router;
