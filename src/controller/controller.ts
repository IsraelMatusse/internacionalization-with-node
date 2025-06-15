import { Response, Request } from "express";
import { I18nHelper } from "../config/i18nHelper";
import { rawUserData } from "../dtos/dtos";
import { StatusCodes } from "http-status-codes/build/cjs";

export const checkApiHealth = async (req: Request, res: Response) => {
  const lang = req.language;
  const message = I18nHelper.translate("api_health", lang).toString();

  res.status(StatusCodes.OK).json({ message });
};

export const userController = async (req: Request, res: Response) => {
  const lang = req.language;
  const message = I18nHelper.translate("user.found", lang).toString();
  const data = rawUserData;

  res.status(StatusCodes.OK).json({ message, data: data });
};