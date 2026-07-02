const inp = document.getElementById("answer");
const btn = document.getElementById("butt");

btn.addEventListener("click", function () {
	if (inp.value == "45") {
		window.open("main.html");
	} else {
		window.alert("Bad answer!");
	}
});