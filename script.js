// Get the elements
const hamburgerMenu = document.getElementById('hamburgerMenu');
const navbar = document.getElementById('navbar');

// Toggle the navbar when hamburger menu is clicked
hamburgerMenu.addEventListener('click', () => {
    navbar.classList.toggle('active');
});
