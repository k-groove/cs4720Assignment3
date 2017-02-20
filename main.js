
function addCell(){
  var hidden = document.getElementsByClassName('hideText');
  if(hidden.length){
    var firstHidden = hidden[0];
    firstHidden.classList.add('notFirst');
    firstHidden.classList.remove('hideText');
  }else{
var container = document.getElementById('textContainer');
var newLi = document.createElement('li');
newLi.className += "notFirst";
container.appendChild(newLi);
var textEntry = document.createElement('input');
newLi.appendChild(textEntry);
}
}

function removeCell(){
var list = document.getElementsByClassName('notFirst');
if(list.length){
var lastText = list[list.length-1];
lastText.classList.add('hideText');
lastText.classList.remove('notFirst');
}
}

function sortCells(){
var items = document.getElementsByClassName('notFirst');
console.log(items);
var sorted = items.sort();
items = sorted;
}

var inputText = document.getElementsByTagName('input');
for(i=0;i<inputText.length;i++){
  inputText[i].addEventListener('change', updateText(inputText[i]));
}

function updateText(element){
  console.log("test");
}
