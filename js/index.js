
const menuElement = document.getElementById('navigation-elements');
const menuButton = document.getElementById('menu-button');
const logo =document.getElementById('logo');
var page = document.getElementsByTagName('body')[0];



function togglerMenu(){
    if (menuButton.classList.contains('open-menu')) {
        menuElement.style.opacity = 1;
        menuButton.classList.remove('open-menu');
        menuButton.classList.add('close-menu');
        logo.classList.add('text-logo-hidden');
        page.classList.add('noscroll');
    } else if(menuButton.classList.contains('close-menu')) {
        menuElement.style.opacity = 0;
        menuButton.classList.remove('close-menu');
        menuButton.classList.add('open-menu');
        logo.classList.remove('text-logo-hidden');
        page.classList.remove('noscroll');
    }
    
}

const navItems = document.querySelectorAll('.mobile-nav-list');

navItems.forEach(
    (element)=> {
        element.addEventListener('click', togglerMenu);
      }
)