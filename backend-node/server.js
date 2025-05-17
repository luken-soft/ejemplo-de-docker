var mysql = require("mysql");
var express = require("express");

var con = mysql.createConnection({
  host: "mysql-app",
  user: "root",
  password: "root",
  database: "app",
});

con.connect(function (err) {
  if (err) throw err;
  console.log("¡Conectado a la base de datos!");

  var checkTableSQL = `SHOW TABLES LIKE 'tabla'`;
  con.query(checkTableSQL, function (err, result) {
    if (err) throw err;

    if (result.length === 0) {
      var createTableSQL = `
        CREATE TABLE tabla (
          id INT AUTO_INCREMENT PRIMARY KEY,
          nombre VARCHAR(255) NOT NULL,
          edad INT NOT NULL
        )
      `;
      con.query(createTableSQL, function (err, result) {
        if (err) throw err;
        console.log("Tabla creada exitosamente.");

        var insertSQL = "INSERT INTO tabla (nombre, edad) VALUES ?";
        var values = [
          ["Juan", 28],
          ["Ana", 22],
          ["Pedro", 34],
        ];
        con.query(insertSQL, [values], function (err, result) {
          if (err) throw err;
          console.log("Datos insertados correctamente.");
        });
      });
    } else {
      console.log("La tabla ya existe.");
    }
  });
});

var app = express();

app.get("/", (req, res) => {
  res.send("Servidor funcionando");
});

app.get("/consulta", (req, res) => {
  var sql = "SELECT * FROM tabla";
  con.query(sql, function (err, result) {
    if (err) throw err;
    res.json(result);
  });
});

var server = app.listen(3000, function () {
  console.log("Servidor corriendo en http://localhost:3000");
});
