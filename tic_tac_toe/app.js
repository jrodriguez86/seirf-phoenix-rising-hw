// CREATE Grid
// CREATE X player
// CREATE O Player
// CREATE click event that applies X to square
// CREATE click event that applies O to square
// APPLY turn base per player (X and O should alternate clicks
// If square contains X or O it cannot be changed
// CREATE WIN LOGIC - 3 in a row to start







  // Created array for each square on board
  let boardArray = ["board_0", "board_1", "board_2", "board_3", "board_4", "board_5", "board_6", "board_7", "board_8"];
  
    // Link game with board array
    const createBoard = () => {
      const $board = $(".game");
      for (let i=0; i < $board.children().length; i++) {
        let squareID = $board.children().eq(i).attr("id");
        boardArray.push(squareID);
      }
    }
    
    createBoard();
  
    
    // Create player move by click count
    // Will need to rework if I add computer AI with Math.random
    const $player = $(".player");
    const $computer = $(".computer");
    
    
    let clickCount = 0;
    
    const playerMove = (event) => {
      $(event.currentTarget).text();
      clickCount++;
      // If clickcount is even then computer's turn
      if (clickCount % 2 == 0) {
        boardArray.push($computer);
        $(event.currentTarget).text("O");
        // Players turn on odd clicks
    } else {
       boardArray.push($player);
       $(event.currentTarget).text("X");
        }
    }

    // Create winning combos array


    // If the player has clicked 9 times it's a draw
    function draw() {
      if (clickCount === 9) {
        alert("DRAW! Reset Board");
        setTimeout(reset, 3000);
      }
    }


    $(() => {

    createBoard();  
  $(".square").one("click", playerMove)
  
    
  
  
  
  });

  
  // Need to add winning combos and AI computer logic
