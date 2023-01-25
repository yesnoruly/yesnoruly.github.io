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