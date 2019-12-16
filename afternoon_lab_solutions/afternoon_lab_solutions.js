// const quotes = ["quote1", "quote2", "quote3"];

//////////
// Random
//////////

// 1. console.log(randomThings[0]);
// 2. randomThings[2] = "World"
// 3. console.log(randomThings.length);

//////////
// We've got class
//////////

// 1. console.log(ourClass[2]);
// 2. ourClass[2] = "Octocat"
// 3. ourClass.push("Egon City");

//////////
// Mix it up
//////////

//   const myArray = [5 ,10 ,500, 20]
//  myArray.push(Egon);
//  myArray.pop(3);
//  myArray.unshift("Bob Marley");
//  myArray.splice(0, 1);
//  myArray.reverse();

//  if (myArray < 100) {
//     return littlenumber
//  } alert("big Number");

//  if (myArray < 5) {
//      return "littlenumber";
//  } else (myArray > 10); {
//      return "big Number";
//  } return "monkey";

 const kristynsCloset = [
    "left shoe",
    "cowboy boots",
    "right sock",
    "GA hoodie",
    "green pants",
    "yellow knit hat",
    "marshmallow peeps"
  ];
  
  // Thom's closet is more complicated. Check out this nested data structure!!
  const thomsCloset = [
    [
      // These are Thom's shirts
      "grey button-up",
      "dark grey button-up",
      "light blue button-up",
      "blue button-up",
    ],[
      // These are Thom's pants
      "grey jeans",
      "jeans",
      "PJs"
    ],[
      // Thom's accessories
      "wool mittens",
      "wool scarf",
      "raybans"
    ]
  ];

  console.log(`Kristyn is rocking that ` + kristynsCloset[2] + ' today');

  kristynsCloset.shift();

  console.log(kristynsCloset);

  kristynsCloset.splice(5, 0, 'raybans');

  console.log(kristynsCloset);

  kristynsCloset.splice(4, 1, 'stained knit hat');

  console.log(kristynsCloset);

  console.log(thomsCloset[0][0]);

  console.log(thomsCloset[1][0]);

  console.log(thomsCloset[2][0]);


//  console.log('Thom is looking fierce in a ' + thomsCloset[0][0] + thomsCloset[1][0] ' and ' + thomsCloset[2][0]);
// havig trouble with this one ^^

thomsCloset[1].splice(2, 1, 'Footie Pajamas');

console.log(thomsCloset[1]);





