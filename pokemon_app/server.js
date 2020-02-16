const express = require('express');
const app = express();
const port = 3000;
const pokemon = require('./models/pokemon.js');




app.get("/pokemon/:id", (req, res) => {
    res.send(req.params.id);
})


app.get("/pokemon", (req, res) => {
    res.render("index.ejs", {pokemon: pokemon});
})



















app.listen(port,() => {
    console.log('listening on port' , port);
});