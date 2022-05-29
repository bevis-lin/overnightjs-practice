"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.NFTMarketController = void 0;
var core_1 = require("@overnightjs/core");
var jet_logger_1 = require("jet-logger");
var http_status_codes_1 = require("http-status-codes");
var IdentityMiddleware_1 = require("./helpers/IdentityMiddleware");
var NFTMiddleware_1 = require("./helpers/NFTMiddleware");
var NFTMarketController = /** @class */ (function () {
    function NFTMarketController() {
    }
    NFTMarketController.prototype.get = function (req, res) {
        jet_logger_1["default"].info(req.params.id);
        jet_logger_1["default"].info(req.query.userName);
        return res.status(http_status_codes_1.StatusCodes.OK).json({
            message: "get_called",
            tokenId: req.params.id,
            userName: req.query.userName,
            address: req.query.address
        });
    };
    __decorate([
        core_1.Get(":id"),
        core_1.Middleware([IdentityMiddleware_1["default"], NFTMiddleware_1["default"]])
    ], NFTMarketController.prototype, "get");
    NFTMarketController = __decorate([
        core_1.Controller("nft/listings")
    ], NFTMarketController);
    return NFTMarketController;
}());
exports.NFTMarketController = NFTMarketController;
