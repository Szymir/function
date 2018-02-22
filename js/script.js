function drawTree(x) {
	for (var i = 0; i <= x; i += 2 ) {
		var star = '';
		for (var k = x; k >= i; k -= 2 ) {
			star += ' ';
		}
		for (var j = 0; j <= i; j++ ) {
			star += '*';
		}
		console.log(star);
	}
}

drawTree(5);