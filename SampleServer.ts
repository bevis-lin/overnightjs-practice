import * as bodyParser from "body-parser";
import { Server } from "@overnightjs/core";
import Logger from "jet-logger";
import { NFTMarketController } from "./NFTMarketController";

export class SampleServer extends Server {
  constructor() {
    super(process.env.NODE_ENV === "development"); // setting showLogs to true
    this.app.use(bodyParser.json());
    this.app.use(bodyParser.urlencoded({ extended: true }));
    this.setupControllers();
  }

  private setupControllers(): void {
    const marketController = new NFTMarketController();
    // super.addControllers() must be called, and can be passed a single controller or an array of
    // controllers. Optional router object can also be passed as second argument.
    super.addControllers([marketController]);
  }

  public start(port: number): void {
    this.app.listen(port, () => {
      Logger.imp("Server listening on port: " + port);
    });
  }
}
