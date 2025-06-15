import { healthRoutes } from "../app/routes";
import { i18nMiddleware } from "../middleware/i18n";

const express = require("express");
const app = express();

app.use(i18nMiddleware);
app.use(express.json());

app.use("/api", healthRoutes);

module.exports = app;
