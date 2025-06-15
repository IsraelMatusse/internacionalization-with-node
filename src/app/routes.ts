import express from "express";
import { checkApiHealth, userController } from "../controller/controller";
export const healthRoutes = express.Router();

healthRoutes.get("/health", checkApiHealth);
healthRoutes.get("/users", userController);

