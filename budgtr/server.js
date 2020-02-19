// Load express:
const express = require('express');
const app = express();

// Set the web server port:
const port = 3000;
const budget = require('./models/budget.js');



app.get("/budget/:id", (req, res) => {
    res.render("show.ejs", {budget: budget[req.params.id]});
})

app.get("/budget", (req, res) => {
    res.render("index.ejs", {budget: budget});
})












app.listen(port,() => {
    console.log('listening on port' , port);
});