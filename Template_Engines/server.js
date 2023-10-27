const express = require('express')
const app = express();

app.set("view engine", "ejs")

app.get('/', function(req, res) {
    res.render("index")
});
app.get('/contact', function(req, res) {
    res.render("contact", { Name: "Yuvaraj" })
});
app.listen(5000)

console.log("Template Engine we are learning now")