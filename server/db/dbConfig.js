const mysql = require("mysql2");
const db = mysql.createPool({
  host: "82.197.82.65",
  user: "u435044055_evangadi_nati",
  password: "2025@Evangadi",
  database: "u435044055_evangadi_db",
});

module.exports = db.promise();
