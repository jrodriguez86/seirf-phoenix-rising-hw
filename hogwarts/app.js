$(() => {

// if (typeof jQuery == 'undefined'){
//     console.log('oops! I still have to link my jQuery properly!');
//   } else {console.log('I did it! I linked jQuery and this js file!')};


	// put jQuery in here

    const $container = $("#container");

console.log($container);

const $h1 = $("<h1>")

$h1.text("hogwarts");



const $h2 = $("<h2>");

$h2.text("Jose");

const $h3 = $("<h3>");

$h3.text("Hufflepuff");

const $h4 = $("<h4>").text("Wade");

$h4.addClass("Owl");

// h4 element with you wand???

$container.append($h1, $h2, $h3, $h4);

const $storage = $('<ul>');
const $trunk = $("<li>"); 

$storage.append($trunk);
$trunk.append("butter-beer").addClass("secret");
$trunk.append("time-turner").addClass("secret")
$trunk.append("invisibility-cloak").addClass("secret");

$container.append($storage);

// can't figure out how to add the list...











});