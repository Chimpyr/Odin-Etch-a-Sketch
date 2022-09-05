

gridContainer = document.querySelector('.grid-container');
generateButton = document.getElementById('generate').addEventListener("click", generate);
resetButton = document.getElementById('reset').addEventListener("click", load);


function load() {
    reset();
    generate(4);
}


// this function will generate the grid
// if no argument is entered then it will ask for one using a promt
// it will reset if a number is requested because this will most likely be called by the button
//

function generate(defaultNum) {
    console.log('defaultNum is: ' + defaultNum);
    let num;
    if (isNaN(defaultNum)) {
        // if the parameter is not a number value then it will request a number to use
        num = window.prompt('Enter a number');
        reset();
    } else {
        num = defaultNum;
        console.log('def num is defined' + defaultNum)
    }
    console.log('num is: ' + num);

    //this will edit the css grid proprty to make the amount of columns equal the amount requested
    let repeatTimes = 'grid-template-columns: repeat(' + num + ', 1fr)';
    gridContainer.setAttribute('style', repeatTimes);
    for (let i = 0; i < (num * num); i++) {
        let gridItem = document.createElement('div');
        gridItem.className = 'grid-item';
        gridContainer.appendChild(gridItem);
    }
}

// deletes all children of gridContainer - this would be the generated grid items.
function reset() {
    let child = gridContainer.lastElementChild; 
        while (child) {
            gridContainer.removeChild(child);
            child = gridContainer.lastElementChild;
        }
}
    

load();