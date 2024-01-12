window.addEventListener("scroll", () => {
	const offset = window.pageYOffset;
	const navbar = document.querySelector("nav");
	if(!navbar)
		return;
	if(offset > 20)
		navbar.classList.add("scrolled");
	else 
		navbar.classList.remove("scrolled");
});
