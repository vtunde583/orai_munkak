
const express = require('express'); 
const mysql = require('mysql2'); 
const cors = require('cors'); 


const app = express();
app.use(cors());

const db = mysql.createConnection({
    host: "127.0.0.1", 
    port:3007,
    user: "root",      
    password: "", 
    database: "fogado"
});


app.get('/szobak', (req, res) => {
   db.query('SELECT * FROM szobak', (err, results) => {
    if (err) return res.station (500).json ({error: err.message});
    res.json(result);
   })
});


app.get('/items', (req, res) => {
    const sql = "select * from foglalasok "; 
    db.query(sql, (err, data) => { 
        if (err) return res.json(err); 
        return res.json(data);
    })
});


app.listen(5173, () => {
    console.log("listening");
});