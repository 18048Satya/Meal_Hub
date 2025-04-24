const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const navLinks = document.querySelectorAll(".nav-link"); // Get all nav links

// Toggle mobile menu function
function toggleMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}

// Event listener for hamburger click
hamburger.addEventListener("click", toggleMenu);

// Function to close menu
function closeMenu() {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}

// Add event listeners to nav links to close menu on click
navLinks.forEach(link => {
    link.addEventListener("click", closeMenu);
});

// Optional: Close menu if clicked outside (more advanced)
// document.addEventListener("click", function (event) {
//     const isClickInsideNav = navMenu.contains(event.target);
//     const isClickOnHamburger = hamburger.contains(event.target);

//     if (!isClickInsideNav && !isClickOnHamburger && navMenu.classList.contains("active")) {
//         closeMenu();
//     }
// });