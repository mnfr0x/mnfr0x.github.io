const body = document.body;

document.addEventListener("DOMContentLoaded", () => {

	var load = document.getElementById("loading");
	var content = document.getElementById("content");

	load.addEventListener("animationend", function () {
		content.style.display = "block";
	});

	check();
});

window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", function () 
	{
		check();
	}
);

function check() {

	const storedData = localStorage.getItem("mode");

	if (storedData) {

		const { darkMode, expires } = JSON.parse(storedData);

		const currentTime = new Date().getTime();

		if (expires > currentTime) {

			body.classList.toggle("dark", darkMode);

		} else {

			localStorage.removeItem("mode");

			auto();

		}

	} else {

		auto();
	}

}

function toggle() {

	body.classList.toggle("dark");

	const isDarkMode = body.classList.contains("dark");

	const expirationTime = new Date().getTime() + 3 * 1000;

	localStorage.setItem("mode", JSON.stringify({ darkMode: isDarkMode, expires: expirationTime }));

}


function auto() {

	var prefersDarkMode = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;

	if (prefersDarkMode) {
		body.classList.add("dark");
	} else {
		body.classList.remove("dark");
	}
}
