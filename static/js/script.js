const ul = document.querySelector(".navbar-ul");
const burgerMenu = document.querySelector(".burger-menu");
const title = document.querySelector("h1");
const teamContainer = document.querySelector(".team-container");

// For burger menu
burgerMenu.addEventListener(
	"click",
	(event) => {
		ul.classList.toggle("hide-burger-menu");
		event.stopPropagation();
	},
	{ passive: true }
);

window.addEventListener(
	"click",
	() => {
		ul.classList.add("hide-burger-menu");
	},
	{ passive: true }
);

// For team page
if (window.location.pathname.startsWith("/team"))
	title.addEventListener(
		"click",
		() => {
			teamContainer.classList.toggle("cto-visible");
		},
		{ passive: true }
	);

// For '<x> Years of OTC' pages
if (window.location.pathname.indexOf("-years") > -1)
	window.addEventListener(
		"load",
		() => {
			confetti.maxCount = 100;
			setTimeout(() => confetti.start(), 1000);
			setTimeout(() => confetti.stop(), 2000);
		},
		{ passive: true }
	);
