

gridContainer = document.querySelector('.grid-container');
generateButton = document.getElementById('generate').addEventListener("click", generate);
resetButton = document.getElementById('reset').addEventListener("click", load);


function load() {
    reset();
    generate(4);
    draw();
}


// this function will generate the grid
// if no argument is entered then it will ask for one using a promt
// it will reset if a number is requested because this will most likely be called by the button
//

function generate(defaultNum) {
    console.log('defaultNum is: ' + defaultNum);
    let num;
    // this is here as if it is the event listener calling the function then it will be passed an object instead, though if I want to call the function with another number then this allows the possibility in the future.
    if (isNaN(defaultNum)) {
        // if the parameter is not a number value then it will request a number to use, it should also be a reasonable value.
        num = window.prompt('Enter a number');
        if (num === null || num > 100 || num < 1) {
            num = 4;
            alert('The value must not be: null, greater than 100 or less than 1.');
        }
        reset();
    } else {
        num = defaultNum;
        if (defaultNum === null) {
            num = 4;
        }  
    }
    //console.log('num is: ' + num);

    //this will edit the css grid proprty to make the amount of columns equal the amount requested
    let repeatTimes = 'grid-template-columns: repeat(' + num + ', 1fr)';
    gridContainer.setAttribute('style', repeatTimes);
    for (let i = 0; i < (num * num); i++) {
        let gridItem = document.createElement('div');
        gridItem.className = 'grid-item';
        gridContainer.appendChild(gridItem);
    }
    draw();
}

// deletes all children of gridContainer - this would be the generated grid items.
function reset() {
    let child = gridContainer.lastElementChild; 
        while (child) {
            gridContainer.removeChild(child);
            child = gridContainer.lastElementChild;
        }
}
    

function draw() {
    // this function should draw the colour black onto the grid items the user is hovering over
    let gridItems = document.querySelectorAll('.grid-item');
    gridItems.forEach(element => {
        //element.setAttribute('style', 'background-color: black')
        element.addEventListener('mouseenter', (e) => {
            e.target.style.backgroundColor = '#002642';
        })
    });
}



load();