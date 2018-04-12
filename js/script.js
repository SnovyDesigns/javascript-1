var a = prompt("Podaj wartość a:"),
	b = prompt("Podaj wartość b:"),
	value = (a * a) - (2 * a * b) - (b * b);

console.log("Wynik działania to: " + value);

if (value > 0) {
	console.log("Wynik działania jest dodatni");
} else if (value < 0) {
	console.log("Wynik działania jest ujemny");
} else {
	console.log("");
}

value = value == 0 ? "Wynik działania jest równy zero" : "";
console.log(value);