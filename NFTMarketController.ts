import { Controller, Middleware, Get } from "@overnightjs/core";
import { Request, Response } from "express";
import Logger from "jet-logger";
import { StatusCodes } from "http-status-codes";

import identityMiddleware from "./helpers/IdentityMiddleware";
import nftMiddleware from "./helpers/NFTMiddleware";

@Controller("nft/listings")
export class NFTMarketController {
  @Get(":id")
  @Middleware([identityMiddleware, nftMiddleware])
  private get(req: Request, res: Response) {
    Logger.info(req.params.id);
    Logger.info(req.query.userName);
    return res.status(StatusCodes.OK).json({
      message: "get_called",
      tokenId: req.params.id,
      userName: req.query.userName,
      address: req.query.address,
    });
  }
}
