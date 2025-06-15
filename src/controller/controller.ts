import { Response, Request } from "express";
import { I18nHelper } from "../config/i18nHelper";
import { rawUserData } from "../dtos/dtos";
import { LocalizationHelper } from "../config/localization";

export const checkApiHealth = async (req: Request, res: Response) => {
  console.log();
  const lang = req.language;
  const message = I18nHelper.translate("api_health", lang).toString();

  res.status(200).json({ message });
};

export const userController = async (req: Request, res: Response) => {
  const lang = req.language;
  const message = I18nHelper.translate("user_controller", lang).toString();
  const locale = LocalizationHelper.getLocaleFromPreference(req);

  const data = rawUserData;

  res.status(200).json({ message, data: data });
};