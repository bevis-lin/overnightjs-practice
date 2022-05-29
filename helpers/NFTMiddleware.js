"use strict";
exports.__esModule = true;
function checkIsValidTokenId(req, res, next) {
    var exsitingNFTIds = [1, 2, 3, 4, 5];
    var tokenId = req.params.id;
    if (!exsitingNFTIds.includes(parseInt(tokenId.toString()))) {
        throw new Error("Invalid Token Id");
    }
    else {
        next();
    }
}
exports["default"] = checkIsValidTokenId;
