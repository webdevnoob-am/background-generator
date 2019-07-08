var col1 = document.querySelector("#col1");
var col2 = document.querySelector("#col2");
var css = document.querySelector("h3");
var body = document.querySelector("body");

setGradient = () => {
	body.style.background = "linear-gradient(to right, " + col1.value + ", " + col2.value + ")";
	css.textContent = body.style.background;
}

col1.addEventListener("input", setGradient);

col2.addEventListener("input", setGradient); 