console.log("LINKED");

// Dramatis Personae
const hobbits = [
  'Frodo Baggins',
  'Samwise \'Sam\' Gamgee',
  'Meriadoc \'Merry\' Brandybuck',
  'Peregrin \'Pippin\' Took'
];

const buddies = [
  'Gandalf the Grey',
  'Legolas',
  'Gimli',
  'Strider',
  'Boromir'
];

const baddies = [
  "Sauron",
  "Saruman",
  "The Uruk-hai",
  "Orcs"
];


// Our Setting
const lands = ['The-Shire', 'Rivendell', 'Mordor'];

// ====================================
//           Chapters
// ====================================


// ============
// Chapter 1
// ============
const makeMiddleEarth = () => {

  // HINT: Make a console.log for each of your functions to make sure that, when you click, the correct function is being called!
  console.log('making Middle Earth');
  // console.log("Trying to make middle earth.");

  // 1. create a section tag with an id of middle-earth
  const $middleEarth = $('<section>#middle-earth</section>');

  // 2. append the section to the body of the DOM.
$middleEarth.append('body');
  // 3. use a for loop to iterate over the lands array that does the following:
for(let i=0; i < lands.length; i += 1) {
  console.log(land[i]);
  
  

  
  //   3a. creates an article tag (there should be one for each land when the loop is done)
  const $article = $("<article>");
  

  //   3b. gives each land article an `id` tag of the corresponding land name
  $article.attr("id", land[i]);
  

  //   3c. includes an h1 with the name of the land inside each land article
const $h1 = $("<h1>");
  $article.add($h1).text(land[i]);
  
  //   3d. appends each land to the middle-earth section
  $article.append(i);
}
};

// COMMIT YOUR WORK
// The commit message should read: "Chapter 1 complete - Made Middle Earth".

// ============
// Chapter 2
// ============
const makeHobbits = () => {

  // Goal: display an unordered list of hobbits in the shire (which is the first article tag on the page)

  // 1. create a 'ul'
  const $ul = $("<ul>");
  const $li = $("<li>");

  // 2. make each hobbit an li element and append it to the 'ul' you just created
    // hint: use the given 'hobbits' array and use a for loop
for (let i = 0; i < hobbits.length; i += 1) {
  $ul.append($li).text(hobbits[i]).addCLass("hobbit");

  // 3. also, give each hobbit (`li`) a class of "hobbit"

  // 4. append the ul to the shire
    // hint: get 'The-Shire' by using its id
              $('ul').append(land[0]);
}
};

// COMMIT YOUR WORK
// The commit message should read: "Chapter 2 complete - Made the Hobbits".

// ============
// Chapter 3
// ============
const keepItSecretKeepItSafe = () => {

  // 1. create an empty div with an id of 'the-ring'
  const $div = $("<div>");
  $div.attr("id", "the-ring");

  // 2. add the ring as a child of Frodo
    // hint: Frodo does not have an id, but there is a command to retrieve all elements with a certain class. This should give you an array for you to access . . .

$('.the-ring').get(hobbits[0]);
    // when you think you have given Frodo the ring, check in your Elements tab to see that it works correctly

};

// COMMIT YOUR WORK
// The commit message should read: "Chapter 3 complete - Made the ring and gave it to Frodo".

// ============
// Chapter 4
// ============
const makeBaddies = () => {

  // 1. display an unordered list of baddies in Mordor
for( let i = 0; i < baddies.length; i += 1) {
  console.log(baddies[1]);
  const $ul2 = $("<ul>")
  const $li2 = $("<li>");
 

  // 2. give each of the baddies a class of "baddy"
$ul2.append($li2).text(baddies[0]).addClass("baddy");
  // 3. remember to append the ul to Mordor
  $('.baddy').append(land[2]);
}
};

// COMMIT YOUR WORK
// The commit message should read: "Chapter 4 complete - Made the Baddies"..

// ============
// Chapter 5
// ============
const makeBuddies = () => {

  // 1. create an aside tag and append it to middle-earth below mordor
const $aside = $("<aside>");
  $aside.append("#middleEarth");
  // 2. display an unordered list of buddies in the aside
const $ul3 = $("<ul>");
  $("aside").append($ul3);
  // 3. give each of the buddies a class of "buddy"
for(let i=0; i < buddies.length; i += 1) {
  console.log(buddies[i]).addClass("buddy");
  
}
  // 4. don't forget to append them to the aside
$aside.append(buddies[i]);
};

// COMMIT YOUR WORK
// The commit message should read: "Chapter 5 complete - Made the Buddies".

// ============
// Chapter 6
// ============

const leaveTheShire = () => {
  // 1. grab the hobbits (the ul in which they reside) and move them to Rivendell
      // hint: the hobbits ul is a childNode of The-Shire-- there is way to get a list of childNodes
// $ul.children();
  //Stretch: add an event handler/listener so that when you click on the `h1` The Shire, this function will be called (be sure to do it in the window.onload/document.ready function)
$ul.on("click", land[0] => {
  $ul.children();
})
};

// COMMIT YOUR WORK
// The commit message should read: "Chapter 6 complete - Left the Shire"

// ============
// Chapter 7
// ============
const beautifulStranger = () => {

  // 1. change the buddy 'Strider' textnode to "Aragorn"
     // hint: You can get a list of elements by tag name, such as 'aside'
$("aside").children(buddies[3]).text("Aragon");
};

// COMMIT YOUR WORK
// The commit message should read: "Chapter 7 complete - Strider is changed to Aragorn"

// ============
// Chapter 8
// ============
const forgeTheFellowShip = () => {

  // 1. create a new div with an id 'the-fellowship'
const $div2 = $("<div>");
  $div2.attr("id", "the-fellowship");
  // 2. add an h1 with the text 'The Fellowship' to this new div
const $theFellowShip = $("<h1>");
  $theFellowShip.text("The Fellowship");
  $div2.append($theFellowShip);
  // 3. append the fellowship to middle-earth
$("section").append($div2);
  // 4. add the unordered lists of hobbits and buddies to 'the-fellowship'
$theFellowShip.append($ul, $ul3);
 
};

// COMMIT YOUR WORK
// The commit message should read: "Chapter 8 complete - The Fellowship is created"

// ============
// Chapter 9
// ============
const theBalrog = () => {

  // 1. change the 'Gandalf' text to 'Gandalf the White'
$theFellowShip.children(buddies[0]).text("Gandlaf the White").addClass("the-white");
  // 2. add a class "the-white" to this element

  // 3. in the style.css file, add a css rule to make elements of the class "the-white" have a white background and a grey border

};

// COMMIT YOUR WORK
// The commit message should read: "Chapter 9 complete - Updated Gandalf"

// ============
// Chapter 10
// ============
const hornOfGondor = () => {

  // 1. create a pop-up alert that the horn of gondor has been blown
alert("Horn of Gondor has been blown!")
  // 2. Boromir's been killed by the Uruk-hai! Put a linethrough on Boromir's name
alert("Boromir's been killed by the Uruk-hai!")
  $ul3.children[4].css("text-decoration", "line-through");
  // 3. Tricky: Remove the Uruk-Hai from the Baddies on the page
$ul2.children(2).remove();
};

// COMMIT YOUR WORK
// The commit message should read: "Chapter 10 complete - horn of gandor blew and Boromir is dead"

// ============
// Chapter 11
// ============
const itsDangerousToGoAlone = () => {

  // 1. take Frodo and Sam out of the fellowship and move them to Mordor (they don't need to be inside a ul in Mordor)

  // 2. add a div with an id of 'mount-doom' to Mordor

};

// COMMIT YOUR WORK
// The commit message should read: "Chapter 11 complete - Sam and Frodo are in Mordor and Mount Doom has been created"

// ============
// Chapter 12
// ============
const weWantsIt = () => {

  // 1. Create a div with an id of 'gollum' and add it to Mordor

  // 2. Move the ring from Frodo and give it to Gollum

  // 3. Move Gollum into Mount Doom

};

// COMMIT YOUR WORK
// The commit message should read: "Chapter 12 complete - Gollum is trying to get the ring".

// ============
// Chapter 13
// ============
const thereAndBackAgain = () => {

  // 1. remove Gollum and the Ring from the DOM

  // 2. remove all the baddies from the DOM

  // 3. Move all the hobbits back to the shire

};

// COMMIT YOUR WORK
// The commit message should read: "Chapter 13 complete -Gollum and the ring are gone, the baddies are done, and the hobbits are back in the shire".


// =====================================
// Don't change anything below this line
// =====================================
// =====================================
// This code is loading all of the event listeners for the buttons in your application.
// =====================================



$(()=>{

  $('#1').on('click', makeMiddleEarth);
  $('#2').on('click', makeHobbits);
  $('#3').on('click', keepItSecretKeepItSafe);
  $('#4').on('click', makeBaddies);
  $('#5').on('click', makeBuddies);
  $('#6').on('click', leaveTheShire);
  $('#7').on('click', beautifulStranger);
  $('#8').on('click', forgeTheFellowShip);
  $('#9').on('click', theBalrog);
  $('#10').on('click', hornOfGondor);
  $('#11').on('click', itsDangerousToGoAlone);
  $('#12').on('click', weWantsIt);
  $('#13').on('click', thereAndBackAgain);
});