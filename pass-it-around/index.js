const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send(`
      <h1> 99 Bottles of Beer on the wall </h1>
      <a href="/98">Take one down, pass it around</a>
      `)
  }); // Was missing ` for html tags originally. Had to look at solutions for the link


  app.get('/:numberOfBottles', (req, res) => {
    if (parseInt(req.params.numberOfBottles) === 0){
      res.send(`
          <a href='/'>No more beer!! Take me to more beer!</a>
        `)
    } else {
      res.send(`
        <h1> ${req.params.numberOfBottles} Bottles of Beer on the wall </h1>
        <a href="${req.params.numberOfBottles - 1}">Take one down, pass it around</a>
        `)
    }
  }); // Had to look this one up too. Really overthinking these. Started with a for loop decreases but couldn't tie it to the link. Understand how it works now



  app.listen(port, ()=> {
    console.log('listening on port 3000');
  });