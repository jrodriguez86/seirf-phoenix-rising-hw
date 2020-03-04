// Load express:
const express = require("express");
const app = express();

// Set the web server port:
const port = 3000;

const Product = require('./models/products.js');

// Load methodOverride middleware so you can make delete, put, and
// patch requests from web pages:
const methodOverride = require("method-override");



// Load body parser middleware:
app.use(express.urlencoded({ extended: false }));

// Load methodOverride as middleware to support ?_method=<METHOD> query strings:
app.use(methodOverride("_method"));

// Define one or more routes:

// INDEX
app.get("/products/", (req, res) => {
  // Product.find( {} , ( err , products ) => {
    res.render ( 'index.ejs')
});

// // NEW
// app.get ("/new" , ( req , res ) => {
//   res.render ( './products/new.ejs' );
// });

// // EDIT
// app.get("/products/:id/edit", (req, res) => {
//   res.render("edit.ejs", {
//     item: items[req.params.id],
//     index: req.params.id
//   });
// });

// // UPDATE
// app.put("/products/:id", (req, res) => {
//   items[req.params.id] = req.body;
//   res.redirect("/products");
// });

// // SHOW
// app.get("/products/:id", (req, res) => {
//   Product.findById(req.params.id, (err, foundProduct) => {
//     res.render("show.ejs", {
//       product: foundProduct
//     });
//   });
// });

// // DESTROY
// app.delete("/products/:id", (req, res) => {
//   items.splice(req.params.id, 1); //remove the item from the array
//   res.redirect("/products"); //redirect to index page
// });

// // CREATE
// app.post("/products/", (req, res) => {
//   let index = items.push(req.body) - 1;
//   res.redirect(`/products/${index}`);
// });




// app.put ( '/products/:id/buy' , ( req , res ) => {
//   Product.findByIdAndUpdate( req.params.id , {  $inc : { qty : -1 } }, ( err , product ) => {
//     if ( err ) { console.log( err ); }
//     res.redirect( 'back' );
//   });
// });


// app.get('/products/seed', async (req, res) => {
//   const newProducts =
//     [
//       {
//         name: 'Beans',
//         description: 'A small pile of beans. Buy more beans for a big pile of beans.',
//         img: 'https://cdn3.bigcommerce.com/s-a6pgxdjc7w/products/1075/images/967/416130__50605.1467418920.1280.1280.jpg?c=2',
//         price: 5,
//         qty: 99
//       }, {
//         name: 'Bones',
//         description: 'It\'s just a bag of bones.',
//         img: 'http://bluelips.com/prod_images_large/bones1.jpg',
//         price: 25,
//         qty: 0
//       }, {
//         name: 'Bins',
//         description: 'A stack of colorful bins for your beans and bones.',
//         img: 'http://www.clipartbest.com/cliparts/9cz/rMM/9czrMMBcE.jpeg',
//         price: 7000,
//         qty: 1
//       }
//     ]

//   try {
//     const seedItems = await Product.create(newProducts)
//     res.send(seedItems)
//   } catch (err) {
//     res.send(err.message)
//   }
// })

// WEB SERVER 
app.listen(port, () => {
  console.log("listening on port", port);
})