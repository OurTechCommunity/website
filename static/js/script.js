const ul = document.querySelector(".navbar-ul");
const burgerMenu = document.querySelector(".burger-menu");
const title = document.querySelector("h1");
const teamContainer = document.querySelector(".team-container");

// For burger menu
burgerMenu.addEventListener("click", (event) => {
	ul.classList.toggle("hide-burger-menu");
	event.stopPropagation();
});

window.addEventListener("click", () => {
	ul.classList.add("hide-burger-menu");
});

console.log(window.location.pathname.startsWith("/team")); // For debugging

if (window.location.pathname.startsWith("/team"))
	title.addEventListener("click", () => {
		teamContainer.classList.toggle("cto-visible");
	});