
const menuElement = document.getElementById('navigation-elements');
const menuButton = document.getElementById('menu-button');
var page = document.getElementsByTagName('body')[0];



function togglerMenu(){
    if (menuButton.classList.contains('open-menu')) {
        menuElement.style.opacity = 1;
        menuButton.classList.remove('open-menu');
        menuButton.classList.add('close-menu');
        page.classList.add('noscroll');
    } else if(menuButton.classList.contains('close-menu')) {
        menuElement.style.opacity = 0;
        menuButton.classList.remove('close-menu');
        menuButton.classList.add('open-menu');
        page.classList.remove('noscroll');
    }
    
}

//const navItems = document.