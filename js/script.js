var someButtons = document.getElementsByClassName('button');
var number = someButtons.length;

for (var i=0; i < number; i++) {
	alert(someButtons[i].innerHTML);
}