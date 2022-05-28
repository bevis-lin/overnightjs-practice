const sql = require("./db.js");
const Creator = function (creator) {
  this.name = creator.name;
  this.address = creator.address;
};
Creator.findByAddress = (address, result) => {
  sql.query(
    `SELECT * FROM nft_creator WHERE address='${address}'`,
    (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(err, null);
        return;
      }
      if (res.length) {
        console.log("found creator: ", res[0]);
        result(null, res[0]);
        return;
      }
      // not found Creator with the address
      result({ kind: "not_found" }, null);
    }
  );
};

module.exports = Creator;
