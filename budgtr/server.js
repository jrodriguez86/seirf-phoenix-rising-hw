// Load express:
const express = require('express');
const app = express();

// Set the web server port:
const port = 3000;
const budget = require('./models/budget.js');


app.use(express.urlencoded({extended:false}))


app.get("/budget/new", (req, res) => {
    res.render("new.ejs");
})

app.post("/budget", (req, res) => {
    console.log("body", req.body);
    let budgets = {}
    budgets.date = req.body.date
    budgets.name = req.body.name
    budgets.number = req.body.number
    budgets.from = req.body.from
    budget.push(budgets);
    res.redirect("/budget");
})

app.get("/budget/:id", (req, res) => {
    res.render("show.ejs", {budget: budget[req.params.id]});
})

app.get("/budget", (req, res) => {
    res.render("index.ejs", {budget: budget});
})












app.listen(port,() => {
    console.log('listening on port' , port);
});