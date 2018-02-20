var txt = 'Velociraptor is a genus of herbivorous ceratopsid dinosaur that first appeared during the late Maastrichtian stage of the late Cretaceous period.';
var dinosaur = 'triceratops';
var dinosaurUpperCased = dinosaur.toUpperCase();
var correctTxt = txt.replace('Velociraptor', dinosaurUpperCased );
var partOfTxt = correctTxt.slice(0, txt.length / 2 );

console.log( partOfTxt );
