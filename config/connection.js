const mysql = require("mysql");
let connection;

// if(process.env.JAWSDB_URL){
//     serverLink = mysql.createConnection(process.env.JAWSDB_URL);
// } else {
    connection = mysql.createConnection({
        host: "localhost",
        port: 3306,
        user: "root",
        password: "YOURLOCALPS",
        database: "burger_list"
    })
//}
   
  connection.connect();
  module.exports = connection;