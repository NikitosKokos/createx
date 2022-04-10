const burger = document.querySelector('.burger');
const headerMenu = document.querySelector('[data-menu]');
const overlay = document.querySelector('.overlayMenu');
burger.addEventListener("click", () =>{
    headerMenu.classList.toggle("_active");
    burger.classList.toggle("_active");
    overlay.classList.toggle("_active");
    document.body.classList.toggle("_lock");
    
});