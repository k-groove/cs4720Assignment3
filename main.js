function addCell() {
    var hidden = document.getElementsByClassName('hideText');
    if (hidden.length) {
        var firstHidden = hidden[0];
        firstHidden.classList.add('notFirst');
        firstHidden.classList.remove('hideText');
    } else {
        var container = document.getElementById('textContainer');
        var newLi = document.createElement('li');
        newLi.className += "notFirst";
        container.appendChild(newLi);
        var textEntry = document.createElement('input');
        textEntry.type = "text";
        textEntry.value = "";
        newLi.appendChild(textEntry);
    }
}

function removeCell() {
    var list = document.getElementsByClassName('notFirst');
    if (list.length) {
        var lastText = list[list.length - 1];
        lastText.classList.add('hideText');
        lastText.classList.remove('notFirst');
    }
}

function sortCells() {
  var temp = [];
    var items = document.getElementsByTagName('input');
    for(i=0;i<items.length;i++){
      temp.push(items[i].value);
    }
    temp.sort();
    for(i=0;i<items.length;i++){
      items[i].value = temp[i];
    }
}
