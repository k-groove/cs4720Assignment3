
function addCell(){
var container = document.getElementById('textContainer');
var textEntry = document.createElement('input');
container.appendChild(textEntry);
}

function removeCell(){
var lastText = document.getElementsByTagName('input').lastChild;
lastText.classList.add('hideText');
}

function sortCells(){

}
