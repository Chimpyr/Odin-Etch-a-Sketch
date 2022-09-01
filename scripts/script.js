
function load() {

}


gridContainer = document.querySelector('.grid-container');




function generate() {
    num = window.prompt('Enter a number');
    for (let i = 0; i < (num * num); i++) {
        var gridItem = document.createElement('div');
        gridItem.className = 'grid-item';
        gridContainer.appendChild(gridItem);
        console.log('lend ooped: ' + i);
    }
}

generate()