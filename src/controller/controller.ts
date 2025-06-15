import { Response, Request } from "express";
import { I18nHelper } from "../config/i18nHelper";

const checkApiHealth = async (req: Request, res: Response) => {
  console.log();
  const lang = req.language;
  const message = I18nHelper.translate("api_health", lang).toString();

  res.status(200).json({ message });
};

export { checkApiHealth };
