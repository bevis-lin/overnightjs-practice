"use strict";
exports.__esModule = true;
function checkAddressProvided(req, res, next) {
    var walletAddr = req.query.address;
    if (!walletAddr) {
        throw new Error("No address provided");
    }
    else {
        next();
    }
}
exports["default"] = checkAddressProvided;
