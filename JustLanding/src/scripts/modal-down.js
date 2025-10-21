const openNavbarModalBtn = document.getElementById("open-menu-modal");
const navbarModal = document.getElementById("navbar-modal-menu");

openNavbarModalBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    navbarModal.classList.toggle("hidden");

});

document.addEventListener("click", (e) => {
    if (!navbarModal.contains(e.target) && !openNavbarModalBtn.contains(e.target)) {
        navbarModal.classList.add("hidden");
    }
});


