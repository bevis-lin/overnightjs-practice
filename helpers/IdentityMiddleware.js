"use strict";
exports.__esModule = true;
var jet_logger_1 = require("jet-logger");
//import Creator from "../models/creator.model";
function checkAddressProvided(req, res, next) {
    var Creator = require("../models/creator.model.js");
    var walletAddr = req.query.address;
    if (!walletAddr) {
        throw new Error("No address provided");
    }
    else {
        Creator.findByAddress(walletAddr, function (err, data) {
            if (err) {
                if (err.kind === "not_found") {
                    res.status(404).send({
                        message: "Not found Creator with address " + walletAddr + "."
                    });
                }
                else {
                    res.status(500).send({
                        message: "Error retrieving Creator with address " + walletAddr
                    });
                }
            }
            else {
                jet_logger_1["default"].info(data.Name);
                req.query.userName = data.Name;
                next();
            }
        });
    }
}
exports["default"] = checkAddressProvided;
