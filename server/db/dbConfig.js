const mysql = require("mysql2");
const db = mysql.createPool({
  host: "82.197.82.65",
  user: "u435044055_evangadi_admin",
  password: "2025@Evangadi",
  database: "u435044055_Nati_evangadi",
});

module.exports = db.promise();
