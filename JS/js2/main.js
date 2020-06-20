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

document.write("<select>")
document.write("<option> ---select year--- </option>");
for (i = 2010; i <= 3000; i++) {
	document.write("<option>" + i + "</option>");
}
document.write("</select")
