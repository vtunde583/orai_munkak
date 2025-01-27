const express = require("express");
const app= express();
const cors = require("cors");
const mysql= require("mysql");

app.use(cors());
const db =mysql.createConnection({
    user:"root",
    host: "127.0.0.1",
    port:3307,
    password: "",
    database: "kozutak",
});

app.get("/", (req, res)=> {
    res.send("fut a backend");
})

app.listen(3001, ()=> {
    console.log("server is running on port 3001");
});