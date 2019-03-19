var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "test_admin",
  password: "pa$$word!",
  database: "data.db"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  var sql = "INSERT INTO restaurants (name, description) VALUES ('The Bootstrap', 'Bootstrap.js restaurant entry')";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("1 record inserted");
  });
});


module.exports = cb => {
  cb();
};
