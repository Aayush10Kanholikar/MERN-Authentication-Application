import express from "express";
import authController from "../controller/authController.js";
import checkIsUserAuthenticated from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/users/register", authController.userRegistration);
router.post("/users/login", authController.userLogin);

//forgot password
router.post("/forgot-password", authController.forgotPassword);
router.post("/forgot-password/:id/:token", authController.forgotPasswordEmail);

//protected Routes

router.post(
  "/change-password",
  checkIsUserAuthenticated,
  authController.changePassword
);

export default router;
