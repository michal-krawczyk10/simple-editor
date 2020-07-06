import "../scss/main.scss";

// uncomment the lines below to enable PWA
// import {registerSW} from './pwa.js';
// registerSW();

/* place your code below */

const entry = localStorage.getItem("entry");

let result = "";

if (entry) {
	result = entry;
}

const entryTextarea = document.querySelector(".form__textarea--js");

const save = document.querySelector(".form__button--save--js");
const load = document.querySelector(".form__button--load--js");

const currentValue = localStorage.getItem("entry");

if (currentValue) {
	document.querySelector(".info--js").innerHTML = "!";
}

save.addEventListener("click", (e) => {
	e.preventDefault();
	localStorage.setItem("entry", entryTextarea.value);
	if (entryTextarea.value) {
		document.querySelector(".info--js").innerHTML = "!";
	} else {
		document.querySelector(".info--js").innerHTML = "";
	}
});

load.addEventListener("click", (e) => {
	e.preventDefault();
	entryTextarea.value = result;
});
