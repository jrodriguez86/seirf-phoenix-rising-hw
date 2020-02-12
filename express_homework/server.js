// Dependencies

const express = require("express");

const app = express();

app.get("/greeting/:name", (req, res) => {
    res.send("What\'s up, " + req.params.name);
})

app.get("/tip/:total/:tipPercentage", (req, res) => {
    res.send(req.param.total * "." + req.param.tipPercentage);
}) // Not sure why my asterik * is coming up like this.... it keeps giving me an error

const magic = ["It is certain", "It is decidedly so", "Without a doubt", "Yes definitely","You may rely on it", "As I see it yes", "Most likely", "Outlook good","Yes", "Signs point to yes", "Reply hazy try again", "Ask again later","Better not tell you now", "Cannot predict now", "Concentrate and ask again","Don't count on it", "My reply is no", "My sources say no","Outlook not so good", "Very doubtful"];

app.get("/magic/:id", (req, res) => {
    res.send(<html>
        <body>
            <h1>${magic[req.param.id[Math.random() + magic.length]]};</h1>
        </body>
        </html>)
});// Why are my tags not appearing....

app.listen(3000);