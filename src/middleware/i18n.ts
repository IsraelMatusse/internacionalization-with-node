import i18next from "i18next";
import { TFunction } from "i18next";
import Backend from "i18next-fs-backend";
import * as middleware from "i18next-http-middleware";
import path from "path";

declare global {
  namespace Express {
    interface Request {
      t: TFunction;
    }
  }
}

void i18next
  .use(Backend)
  .use(middleware.LanguageDetector)
  .init({
    backend: {
      loadPath: path.resolve("./locales/{{lng}}/translation.json"),
    },
    detection: {
      lookupCookie: "i18next",
      lookupHeader: "accept-language",
      lookupQuerystring: "lang",
      order: ["querystring", "cookie", "header"],
    },
    fallbackLng: "pt",
    preload: ["pt", "en"],
  });

export const i18nMiddleware = middleware.handle(i18next);
export default i18next;
