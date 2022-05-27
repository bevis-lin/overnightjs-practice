import { Controller, Middleware, Get } from "@overnightjs/core";
import { Request, Response } from "express";
import Logger from "jet-logger";
import { StatusCodes } from "http-status-codes";

import identityMiddleware from "./helpers/IdentityMiddleware";

@Controller("nft/listings")
export class NFTMarketController {
  @Get(":id")
  @Middleware(identityMiddleware)
  private get(req: Request, res: Response) {
    Logger.info(req.params.id);
    return res.status(StatusCodes.OK).json({
      message: "get_called",
    });
  }
}
