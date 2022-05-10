
const menuElement = document.getElementById('navigation-elements');
const menuButton = document.getElementById('menu-button');
const logo =document.getElementById('logo');
var page = document.getElementsByTagName('body')[0];



function togglerMenu(){
    if (menuButton.classList.contains('open-menu')) {
        menuElement.classList.remove('hide-menu');
        menuElement.classList.add('show-menu');
        menuButton.classList.remove('open-menu');
        menuButton.classList.add('close-menu');
        logo.classList.add('text-logo-hidden');
        page.classList.add('noscroll');
    } else if(menuButton.classList.contains('close-menu')) {
        menuElement.classList.remove('show-menu');
        menuElement.classList.add('hide-menu');
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

/* Popup window */

const modalData = [
    {
      id : 1,
      main: true,
      name: 'Portfolio',
      languages: ['CSS', 'HTML', 'JavaScript'],
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto atque possimus, repellendus recusandae dicta obcaecati minima expedita vero quidem et dolore impedit.',
      img: './ressources/demo_portfolio.png',
      link: 'https://akshithareddy1899.github.io/Microverse-Portfolio/',
      source: 'https://github.com/AkshithaReddy1899/Microverse-Portfolio',
    },
    {
      id : 2,
      main: false,
      name: 'Awa Nde',
      languages: ['HTML', 'Bootstrap','Ruby'],
      description:
        'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus recusandae illum velit amet consectetur omnis aperiam aut. Incidunt quaerat ',
      img: './ressources/Portfolioshow.png',
    },
    {
      id : 3,
      main: false,
      name: 'Guilgald',
      languages: ['HTML', 'JavaScript', 'Ruby'],
      description:
        'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus recusandae illum velit amet consectetur omnis aperiam aut. Incidunt quaerat ',
      img: './ressources/Portfolioshow.png',
    },
    {
      id : 4,
      main: false,
      name: 'Demo Project',
      languages: ['HTML', 'Bootstrap', 'Ruby'],
      description:
        'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus recusandae illum velit amet consectetur omnis aperiam aut. Incidunt quaerat consequatur magnam! Rerum sunt quos doloribus illo!',
      img: './ressources/Portfolioshow.png',
    },
    {
      id : 5,
      main: false,
      name: 'New Demo',
      languages: ['HTML', 'Bootstrap', 'Ruby'],
      description:
        'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus recusandae illum velit amet consectetur omnis aperiam aut. Incidunt quaerat ',
      img: './ressources/Portfolioshow.png',
    },
    {
      id : 6,
      main: false,
      name: 'Weather App',
      languages: ['HTML', 'Bootstrap', 'Ruby'],
      description:
        'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus recusandae illum velit amet consectetur omnis aperiam aut. Incidunt quaerat ',
      img: './ressources/Portfolioshow.png',
    },
    {
      id : 7,
      main: false,
      name: 'Landing Page',
      languages: ['HTML', 'Bootstrap', 'Ruby'],
      description:
        'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus recusandae illum velit amet consectetur omnis aperiam aut. Incidunt quaerat ',
      img: './ressources/Portfolioshow.png',
    },
  ];
  
  /**
   * code for popup window
   */
  
   modalData.forEach((project, index) =>{
    let lang ="";
    if(project.main){
    
      project.languages.forEach((element) => {
        lang += `<li class="language-list-item">${element}</li>`;
      });
      document.querySelector('#main-grid').innerHTML = `
          <div class="works-section-project">
            <img src="${project.img}" alt="${project.name}">
          </div>
          <div class="works-section-project-description">
            <h2 class="works-section-project-header">
              ${project.name}
            </h2>
            <p class="work-project-para">
              ${project.description} ${project.description} 
            </p>
            <ul class="language-list-body">
              ${lang}
            </ul>
            <button data-index="${index}" type="button" class="project-button button display-modal popup-btn">See Project</button>
          </div>`;
    }else{
      project.languages.forEach((element) => {
        lang += `<li class="language-list-item works-grid-one-project-language-list">${element}</li>`;
      });
      document.querySelector('#secondary-grid').innerHTML += `
        <div class="works-grid-one-project-container first-grid style="background-image: url('${project.img}')">
          <div class="grid-project1 works-grid-project">
            <h3 class="works-grid-one-project-header">${project.name}</h3>
            <p class="works-grid-one-project-description">
              ${project.description}
            </p>
  
            <ul class="language-list-body">
            ${lang}
            </ul>
          </div>
          <button type="button" data-index="${index}" class="grid-project-button display-modal button">See Project</button>
        </div>`;
    }
    
  });
  
  const openPopup = (index) => {
    let lang = '';
    modalData[index].languages.forEach((element) => {
      lang += `<li class="language-list-item">${element}</li>`;
    });
    document.querySelector('.modal-container').style.display = 'block';
    document.querySelector('#popuptitle').textContent = modalData[index].name;
    document.querySelector('#modallanguages').innerHTML = lang;
    document.querySelector('#modal-description').textContent = modalData[index].description;
    document
      .querySelector('#modal-img')
      .setAttribute('src', modalData[index].img);
      document
      .querySelector('#modal-img')
      .setAttribute('alt', modalData[index].name);
      page.classList.add('noscroll');
  };
  
  const modalDisplayBtn = document.querySelectorAll('.display-modal');
  
  modalDisplayBtn.forEach((element) => {
    element.addEventListener('click', () => {
      openPopup(element.getAttribute('data-index'));
    });
  });
  
  document.querySelector('.modal-close-btn').addEventListener('click', () => {
    document.querySelector('.modal-container').style.display = 'none';
    page.classList.remove('noscroll');
  });
  
  