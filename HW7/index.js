document.body.style.background = '#a8f0a3';

function createDivElements (text) {
var div = document.createElement('div');
div.className = "block";
return div;
}

function appendChildren (parent, children) {
children.forEach(function (child) {
parent.appendChild(child);
}); 
}

var myDiv = document.getElementById('game');

var blocks = [
createDivElements('Dom'),
createDivElements('Dom'),
createDivElements('Dom')
]

appendChildren(myDiv, blocks);

var x = document.getElementsByClassName('block')
for (var i = 0; i < x.length; i++) {
x[i].addEventListener("click", doSomething, false);
}

function doSomething() {
var selectedEl = document.querySelector(".selected");
if (selectedEl) {
selectedEl.classList.remove('selected');
}
this.classList.add("selected");
}