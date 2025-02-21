const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");

const app = express();
app.use(cors()); 
app.use(express.json());


const db = mysql.createConnection({
  host: "localhost",
  user: "root", 
  password: "",
  database: "kozutak", 
});


db.connect((err) => {
  if (err) {
    console.error("Hiba a MySQL kapcsolódáskor:", err);
    return;
  }
  console.log("Sikeres MySQL kapcsolat!");
});


app.get("/api/regiok", (req, res) => {
  const sql = "SELECT rid, regionev, regiotipus FROM regiok LIMIT 8";
  db.query(sql, (err, results) => {
    if (err) {
      console.error("Hiba az adatok lekérésekor:", err);
      res.status(500).json({ error: "Hiba az adatlekérés során" });
      return;
    }
    res.json(results);
  });
});


const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Szerver fut a http://localhost:${5173} címen`);
});
