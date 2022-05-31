"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.WalletController = void 0;
var core_1 = require("@overnightjs/core");
var jet_logger_1 = require("jet-logger");
var WalletController = /** @class */ (function () {
    function WalletController() {
    }
    WalletController.prototype.reportSpam = function (req, res) {
        jet_logger_1["default"].err("provide none user wallet address", false);
        return res.status(404).json({
            message: "provide none user wallet address",
            address: req.query.address
        });
    };
    WalletController = __decorate([
        core_1.Controller("wallet")
    ], WalletController);
    return WalletController;
}());
exports.WalletController = WalletController;
