/* ============================================= */
/*              JavaScript                       */
/* ============================================= */


// Global variables
const hamburger = document.querySelector('.hamburger');

// Toggle nav menu on mobile screens
hamburger.addEventListener('click', () => {
    hamburger.classList.toggle("is-active");
});