const menu = document.querySelector('#menu')
const menuLinks = document.querySelector('.navigation_menu')

menu.addEventListener('click', function(){
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
})