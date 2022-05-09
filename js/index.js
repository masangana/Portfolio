
const menuElement = document.getElementById('navigation-elements');
const menuButton = document.getElementById('menu-button');



function togglerMenu(){
    if (menuButton.classList.contains('open-menu')) {
        menuElement.style.opacity = 1;
        menuButton.classList.remove('open-menu');
        menuButton.classList.add('close-menu')
        console.log('on vient de ouvir')
    } else if(menuButton.classList.contains('close-menu')) {
        menuElement.style.opacity = 0;
        menuButton.classList.remove('close-menu');
        menuButton.classList.add('open-menu')
        console.log('on vient de fermer')
    }
    
}