// toggle class active

const navbarNav = document.querySelector
('.navbar-nav');
// ketika pempek-menu di klik
document.querySelector('#pempek-menu').
onclick = () => {
    navbarNav.classList.toggle('active');
}


// klik diluar sidebar untuk menghilangan nav

const pempek = document.querySelector
('#pempek-menu');

document.addEventListener('click', function(e) {
    if(!pempek.contains(e.target) && !navbarNav.contains(e.target)) {
        navbarNav.classList.remove('active');
    }
})