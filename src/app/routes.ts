import express from "express";
import {
  checkApiHealth,
  getUserPreferencesByIpController,
  userController,
} from "../controller/controller";
export const healthRoutes = express.Router();

healthRoutes.get("/health", checkApiHealth);
healthRoutes.get("/users", userController);
healthRoutes.get("/users/:ip", getUserPreferencesByIpController);

