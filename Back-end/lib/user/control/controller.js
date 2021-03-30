var db = require("../model/db");

module.exports.addUser = function (user_data) {
    db.adduser(user_data);
};

module.exports.getDetails = async function (username) {
    return await db.getDetails(username);
}