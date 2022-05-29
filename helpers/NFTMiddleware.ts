import { NextFunction, Request, Response } from "express";

export default function checkIsValidTokenId(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const exsitingNFTIds = [1, 2, 3, 4, 5];
  var tokenId = req.params.id;

  if (!exsitingNFTIds.includes(parseInt(tokenId.toString()))) {
    throw new Error("Invalid Token Id");
  } else {
    next();
  }
}
