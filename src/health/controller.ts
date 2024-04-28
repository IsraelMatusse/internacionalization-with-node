import { Response, Request } from "express";

const checkApiHealth = async (req: Request, res: Response) => {
  console.log()
  const message = req.t('test_api');
  res.status(200).json({ message });
};

export { checkApiHealth };
