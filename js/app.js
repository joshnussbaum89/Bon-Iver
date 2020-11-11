/* ============================================= */
/*              JavaScript                       */
/* ============================================= */


// Global variables
const hamburger = document.querySelector('.hamburger');

// Toggle nav menu on mobile screens
hamburger.addEventListener('click', () => {
    hamburger.classList.toggle("is-active");
    if (hamburger.classList.contains("is-active")) {
        openNav();
    } else {
        closeNav();
    }
});

// Slide in navigation 
function openNav() {
    document.getElementById("myNav").style.width = "100%";
}

// Slide out navigation
function closeNav() {
    document.getElementById("myNav").style.width = "0%";
}