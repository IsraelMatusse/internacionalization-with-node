import { StatusCodes } from "http-status-codes";
import { HttpException } from "../app/types";
import { I18nHelper } from "../config/i18nHelper";

const defaultLang = process.env.DEFAULT_LANG ?? "pt";

export class BadCredentialsException extends HttpException<void> {
  constructor(lang: string = defaultLang) {
    const message = I18nHelper.translate(
      "auth.invalid_credentials",
      lang
    ).toString();
    super(StatusCodes.UNAUTHORIZED, message);
  }
}
