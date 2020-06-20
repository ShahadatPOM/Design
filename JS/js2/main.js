/*
// value compare
function main() {
	var a = parseInt(document.getElementById('first').value);
	var b = parseInt(document.getElementById('second').value);
	var c = parseInt(document.getElementById('third').value);

	if (a > b && a > c) {
		document.write("<h3>Max value is A</h3>");
	} else if (b > a && b > c) {
		document.write("<h3>Max value is B</h3>");
	} else {
		document.write("<h3>Max value is C</h3>");
	}
}
*/

/*// for loop
document.write("<select>")
document.write("<option> ---select year--- </option>");
for (i = 2010; i <= 3000; i++) {
	document.write("<option>" + i + "</option>");
}
document.write("</select")*/

// namta
function namta(){
	var i, j;
	var n = document.getElementById('num').value;
	for (i = 1; i <= n; i++) {
		document.write("<div class='namta'>")
		document.write("<h2>For " + i + "</h2>");
		for (j = 1; j <= 10; j++) {
			document.write(i + " X " + j + " = " + i * j + "<br><br>");
		}
		document.write("</div>")
	}

}
