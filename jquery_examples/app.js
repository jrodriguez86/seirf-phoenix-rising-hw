


    const addH2 = () => {
        let $h2 = $('<h2>').text("Just getting started");
        $('body').append($h2);
    }
    
    const changeH2 = () => {
        $('h2').text("Getting warmed up");
    }

    addH2();
    changeH2();

    



    const generateSquares = (numberOfSquares) => {
    for(let i=1; i <= numberOfSquares; i += 1) {
        console.log(i);
    const $square = $('<div>').addClass('square');
    $square.css('background-color', randColorRGB());
    $('body').append($square);

    }    

    const randColorRGB = () => {
        const red = Math.floor(Math.ranbdom() * 256);
        const green = Math.floor(Math.ranbdom() * 256);
        const blue = Math.floor(Math.ranbdom() * 256);
        return "rgb(" + red + "," + green + "," + blue + ")";
    }

    

    }


    $(() => {
    
        generateSquares(1000);
    


});






