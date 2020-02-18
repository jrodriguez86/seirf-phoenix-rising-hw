// Load express:
const express = require('express');
const app = express();

// Set the web server port:
const port = 3000;














app.listen(port,() => {
    console.log('listening on port' , port);
});