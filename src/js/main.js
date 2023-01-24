// Card Hover 

const card = document.querySelectorAll('.card')

for (let i = 0; i < card.length; i++) { // Prevent adding a class to all cards when hover
    card[i].addEventListener('mouseenter', () => {
        card[i].classList.add('card--visible')
    })

    card[i].addEventListener('mouseleave', () => {
        card[i].classList.remove('card--visible')
    })
}

// Burger menu

const headerList = document.querySelector('.header__list');
const headerItem = document.querySelectorAll('.header__item')
const headerBurger = document.querySelector('.header__burger');
const body = document.querySelector('body');

headerBurger.addEventListener('click', (e) => {
    e.preventDefault();
    headerList.classList.toggle('header--active');
    headerBurger.classList.toggle('header--active');
    body.classList.toggle('lock');
})

for (let i = 0; i < headerItem.length; i++) {
    headerItem[i].addEventListener('click', () => {
        headerList.classList.remove('header--active');
        headerBurger.classList.remove('header--active');
        body.classList.remove('lock');
    })
}