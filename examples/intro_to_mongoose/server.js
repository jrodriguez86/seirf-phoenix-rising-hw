// Dependencies
const mongoose = require('mongoose');
const Tweet = require('./tweet.js');

// Global configuration
const mongoURI = 'mongodb://localhost:27017/tweets';
const db = mongoose.connection;

// Connect to Mongo
mongoose.connect(mongoURI, {
    useNewURLParser: true,
    useUnifiedTopology: true
});


// Connection Error/Success - event listeners
// Define callback functions for various events
db.on('error', (err) => console.log(err.message + ' is Mongod not running?'));
db.on('connected', () => console.log('mongo connected: ', mongoURI));
db.on('disconnected', () => console.log('mongo disconnected'));




db.on('open' , () => {
    console.log('Connection made!');
  });


// Let's make ourselves an object to insert into our database. When we connect with an express app, our data will be coming in as an object from the browser.
Tweet.create({
  title: "Deep Thoughts",
  body: "A peanut is neither a pea nor a nut",
  author: "Zeb"
}, (error, tweet) => {
  if (error) {
    console.log(error);
  } else {
    console.log(tweet);
  }
  db.close();
})

// This code runs before the database response comes back


//   // Automatically close after 5 seconds
// // for demonstration purposes to see that you must use `db.close()` in order to regain control of Terminal tab
// setTimeout(() => { db.close() }, 5000)