var button = document.getElementById('addElem');
var	list = document.getElementById('list');



button.addEventListener('click', function() {
	var newElem = document.createElement('li');
	var itemNumber = document.getElementsByTagName('li');
	var number = itemNumber.length;
	newElem.innerHTML = 'item ' + number;
	list.appendChild(newElem);
});
