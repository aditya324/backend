import { asyncHandler } from "../utils/asyncHandler.js";
import { User } from "../models/user.model.js";
import { ApiError } from "../utils/ApiError.js";
import jwt from "jsonwebtoken";

const verifyJWT = asyncHandler(async (req, res, next) => {
    try {
        // Extract token from cookies or authorization header
        const token = req.cookies?.accessToken || req.headers.authorization?.replace("Bearer ", "");

        if (!token) {
            console.error("Token is missing");
            throw new ApiError(401, "Unauthorized: No token provided.");
        }

        console.log("Token:", token); // Debugging: Log the token

        // Verify the token
        const decoded = await jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
        console.log("Decoded token:", decoded); // Debugging: Log the decoded token

        // Find the user by ID and exclude sensitive fields
        const user = await User.findById(decoded._id).select("-password -refreshToken");
        console.log("User:", user); // Debugging: Log the user

        if (!user) {
            throw new ApiError(401, "Invalid access token");
        }

        // Attach the user object to the request
        req.user = user;
        next();
    } catch (error) {
        console.error("JWT Verification Error:", error.message);
        throw new ApiError(401, error.message || "Invalid access token");
    }
});

export { verifyJWT };
