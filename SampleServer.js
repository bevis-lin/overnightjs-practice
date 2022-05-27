"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.SampleServer = void 0;
var bodyParser = require("body-parser");
var core_1 = require("@overnightjs/core");
var jet_logger_1 = require("jet-logger");
var NFTMarketController_1 = require("./NFTMarketController");
var SampleServer = /** @class */ (function (_super) {
    __extends(SampleServer, _super);
    function SampleServer() {
        var _this = _super.call(this, process.env.NODE_ENV === "development") || this;
        _this.app.use(bodyParser.json());
        _this.app.use(bodyParser.urlencoded({ extended: true }));
        _this.setupControllers();
        return _this;
    }
    SampleServer.prototype.setupControllers = function () {
        var marketController = new NFTMarketController_1.NFTMarketController();
        // super.addControllers() must be called, and can be passed a single controller or an array of
        // controllers. Optional router object can also be passed as second argument.
        _super.prototype.addControllers.call(this, [marketController]);
    };
    SampleServer.prototype.start = function (port) {
        this.app.listen(port, function () {
            jet_logger_1["default"].imp("Server listening on port: " + port);
        });
    };
    return SampleServer;
}(core_1.Server));
exports.SampleServer = SampleServer;
