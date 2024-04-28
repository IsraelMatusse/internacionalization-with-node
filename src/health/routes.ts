
import express from "express";
import { checkApiHealth } from "./controller";
export const healthRoutes = express.Router();

healthRoutes.get("/health", checkApiHealth);


