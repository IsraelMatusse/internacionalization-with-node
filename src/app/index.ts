import i18next from "i18next";
import { TFunction } from "i18next";
import { healthRoutes } from "../health/routes";


const express = require("express");

const Backend = require("i18next-fs-backend");
const middleware = require("i18next-http-middleware");
const app = express();

i18next.use(Backend).use(middleware.LanguageDetector).init({
  fallbackLng: 'en',
  backend: {
    loadPath:'./src/locales/{{lng}}/translation.json',
  },
});

declare module "express" {
  interface Request {
    t: TFunction;
  }
}
app.use(middleware.handle(i18next));
app.use(express.json());

app.use("/api", healthRoutes);

module.exports = app;