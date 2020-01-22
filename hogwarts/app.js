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

const $ul = $('<ul>');
const $li = $("<li>"); 

// $("ul").append("<li>Butter  beer</li>");
// $ul.append($li).text("magic map").addClass("secret");
// $ul.append($li).text("time turner").addClass("secret");
// $ul.append($li).text("invisibility cloak").addClass("secret");
$('ul').append().text("Butter Beer");
// I'm having trouble creating the UL and LI

$container.append($ul);

const $h5 = $("<h5>");
  
  $h5.text("Fall 2017");
  
  $("th").text("Day");
  $("th").text("Classes");
  
  const $tr = $("<tr>");
  const $td = $("<td>");
  
  $tr.append($td).text("Monday").addClass("Herbolgy");
  $tr.append($td).text("Tuesday").addClass("Divination");
  $tr.append($td).text("Wednesday").addClass("History of Magic");
  $tr.append($td).text("Thursday").addClass("Charms");
  $tr.append($td).text("Friday").addClass("Potions");

  $h4.removeClass("Master Wand");
  $trunk[0].remove();
  $h4.addClass("Master Wand").text("Brand new");
  $h4[1].css("color", "indigo");
  $h4[0].detach();
  $($h4).appendTo('body');
  
  const $secret = $(".secret");
  
  $secret.hide("slow").delay(2000);
  $secret.show("slow");
  
  // add the class cabbage to your pets leash without replacing your current class on your pets leash???
  
  $trunk[0].append("Butter beer");









});