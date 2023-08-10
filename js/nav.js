const primaryNav = document.querySelector(".primary-navigation");
const navToggle = document.querySelector(".mobile-nav-toggle");
const navActive = document.querySelector(".navItem");

navToggle.addEventListener("click", () => {
	const visibility = primaryNav.getAttribute("data-visible");

	if (visibility === "false") {
		primaryNav.setAttribute("data-visible", true);
		navToggle.setAttribute("aria-expanded", true);
	} else if (visibility === "true") {
		primaryNav.setAttribute("data-visible", false);
		navToggle.setAttribute("aria-expanded", false);
	}
});

navActive.on("click", () => {
	primaryNav.getAttribute("data-visible");
	navToggle.getAttribute("aria-expanded");

	primaryNav.setAttribute("data-visible", false);
	navToggle.setAttribute("aria-expanded", false);
});
