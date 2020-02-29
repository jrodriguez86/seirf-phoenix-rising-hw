// Load express:
const express = require("express");
const app = express();

// Set the web server port:
const port = 3000;

// Allows server to receive JSON data
app.use(express.urlencoded({ extended: true }));


// NEW
app.get("/logs/new", (req, res) => {
    res.render("new.ejs")
})

// CREATE
app.post("/logs", (req, res) => {
    if (req.body.shipIsBroken === 'on'); {
    req.body.shipIsBroken = true;
    }
    
    res.send(req.body);
})

// INDEX
app.get("/logs", (req, res) => {
    res.render("index.ejs")
})














// WEB SERVER //
// Load up the express web server. IMPORTANT: Always do this at the end of your server.js:
app.listen(port, () => {
    console.log("listening on port", port);
  });