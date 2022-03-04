// Captura de selectores.
const menu = document.querySelector('.navegation');
const menuBtn = document.querySelector('.menu-btn');
const closeMenu = document.querySelector('.close-btn');

/* En los dispositivos con pantallas mas chicas, al hacer click sobre el icono del menu hamburguesa muestra el menu lateral izquierdo y el icono desaparece. */
menuBtn.addEventListener('click', () => {
    menu.classList.add('active');
    menuBtn.style.display = 'none';
});

// Al hacer click en la cruz del menu lateral se esconde el menu lateral y aparece el icono del menu hamburguesa.
closeMenu.addEventListener('click', () => {
    menu.classList.remove('active');
    menuBtn.style.display = 'block';
});