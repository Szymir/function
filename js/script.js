var triangle1Area = getTriangleArea(10, 15),
	triangle2Area = getTriangleArea(3, 0),
	triangle3Area = getTriangleArea(4, 2);

function getTriangleArea(a, h) {
	if (a > 0 && h > 0) {
		return a*h/2;
	}
	console.log("Nieprawidłowe dane");
}

console.log(triangle1Area);
console.log(triangle2Area);
console.log(triangle3Area);