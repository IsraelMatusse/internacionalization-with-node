import { NextFunction, Request, Response } from "express";
import { LocalizationHelper } from "../config/localization";

export function formatResponseMiddleware(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const originalJson = res.json;

  res.json = function (body: any) {
    const locale = LocalizationHelper.getLocaleFromPreference(req);
    const formattedBody = LocalizationHelper.formatNumbersAndDatesRecursively(
      body,
      locale
    );
    return originalJson.call(this, formattedBody);
  };
  next();
}
