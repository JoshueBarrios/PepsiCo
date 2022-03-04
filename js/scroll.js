//! Sin jQuery
// window.addEventListener('scroll', () => {
//     let scrollHeader = document.querySelector('header');
//     scrollHeader.classList.toggle('scroll-down-header', window.scrollY > 0);
//     let scrollLogo = document.querySelector('.logo-header');
//     scrollLogo.classList.toggle('scroll-down-logo',  window.scrollY > 0);
// });

//! Con jQuery
$(window).scroll( () => {
    $('header').toggleClass('scroll-down-header', window.scrollY > 0);
    $('.logo-header').toggleClass('scroll-down-logo', window.scrollY > 0);
})