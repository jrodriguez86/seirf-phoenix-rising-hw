// Load express:
const express = require("express");
const app = express();
const bootstrap = require('bootstrap');
// const jQuery =

// Set the web server port:
const port = 3000;

const Pokemon = require("./models/pokemon.js");

// Load methodOverride middleware so you can make delete, put, and
// patch requests from web pages:
const methodOverride = require("method-override");

// MIDDLEWARE
app.use(express.urlencoded({ extended: false }));
app.use(methodOverride("_method"));

// NEW
app.get("/pokedex/new", (req, res) => {
    res.render("new.ejs");
})

// EDIT
app.get("/pokedex/:id/:edit", (req, res) => {
    res.render("edit.ejs", {

    })
})

// SHOW
app.get("/pokedex/:id", (req, res) => {
    res.render("show.ejs", {data: Pokemon[req.params.id]})
})

// INDEX
app.get("/pokedex", (req, res) => {
 res.render("index.ejs", {data: Pokemon})
})





// WEB SERVER //
// Load up the express web server. IMPORTANT: Always do this at the end of your server.js:
app.listen(port, () => {
    console.log("listening on port", port);
  });