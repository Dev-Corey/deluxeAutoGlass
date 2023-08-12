const navBar = document.querySelector(".navBar");
const navToggle = document.querySelector(".navToggle");

navToggle.addEventListener("click", () => {
	navToggle.classList.toggle("active");
	navBar.classList.toggle("active");
});

document.querySelectorAll(".navLink").forEach((n) =>
	n.addEventListener("click", () => {
		navToggle.classList.remove("active");
		navBar.classList.remove("active");
	})
);

document.onclick = function (e) {
	if (!navBar.contains(e.target) && !navToggle.contains(e.target)) {
		navToggle.classList.remove("active");
		navBar.classList.remove("active");
	}
};
