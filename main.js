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
        var label = document.createElement("Label");
        newLi.appendChild(textEntry);
        newLi.appendChild(label);
        newLi.addEventListener("input", updateText);
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
    for (var i = 0; i < items.length; i++) {
        if (!items[i].parentElement.classList.contains('hideText'))
            temp.push(items[i].value);
    }
    temp.sort();
    for (i = 0; i < temp.length; i++) {
        items[i].value = temp[i];
    }
    updateText();
}

function updateText() {
    var text = document.getElementsByTagName('li');
    for (var i = 0; i < text.length; i++) {
        var inputLength = text[i].getElementsByTagName('input')[0].value.length;
        console.log(inputLength);
        text[i].getElementsByTagName('label')[0].innerHTML = inputLength;
        // console.log(text[i].value);
    }
}
