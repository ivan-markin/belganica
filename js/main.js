import AOS from 'aos';
AOS.init();

// Toggling menu
const menuButton = document.querySelector('.menu-button');
const closeButton = document.querySelector('.menu-block__close-button');
const menuBlock = document.querySelector('.menu-block');
const menuLinks = document.querySelectorAll('.menu-block__link');

function toggleMenu() {
  menuBlock.classList.toggle('active');
}

menuButton.addEventListener('click', toggleMenu);
closeButton.addEventListener('click', toggleMenu);
menuLinks.forEach((link) => {
  link.addEventListener('click', toggleMenu)
})
//

// Smooth scrolling
const anchors = document.querySelectorAll('a[href*="#"]')

for (let anchor of anchors) {
  anchor.addEventListener('click', function (e) {
    e.preventDefault()

    const blockID = anchor.getAttribute('href').substr(1)

    document.getElementById(blockID).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  })
}