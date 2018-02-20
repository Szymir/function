function drawTree(x) {
	for ( i = 0; i <= x; i += 2 ) {
		var star = '';
		for ( k = x; k >= i; k -= 2 ) {
			star += ' ';
		}
		for ( j = 0; j <= i; j++ ) {
			star += '*';
		}
		console.log(star);
	}
}

drawTree(5);