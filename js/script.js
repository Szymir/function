var someButtons = document.getElementsByClassName('button');
var number = someButtons.length;

for ( i=0; i < number ; i++) {
	alert(someButtons[i].innerHTML);
}