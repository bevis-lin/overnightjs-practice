"use strict";
exports.__esModule = true;
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
            else
                next();
        });
    }
}
exports["default"] = checkAddressProvided;
