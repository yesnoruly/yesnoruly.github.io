import {playSound} from './sound';

const headerList = document.querySelector('.header__list');
const headerItem = document.querySelectorAll('.header__item')
const headerBurger = document.querySelector('.header__burger');
const body = document.querySelector('body');
// Assets
const close = new Audio('https://user-images.githubusercontent.com/64963734/214936574-7376fc2a-aa12-432e-9f01-cc1155121366.mp4')
const open = new Audio('https://user-images.githubusercontent.com/64963734/215313590-ad04d43f-e6bc-4c13-9a1c-21169cc59fbb.mp4')
const link = new Audio('https://user-images.githubusercontent.com/64963734/215226583-f3229be2-b3e4-48d8-af93-9bfd88aa6243.mp4')

headerBurger.addEventListener('click', (e) => {
    e.preventDefault();
    headerList.classList.toggle('header--active');
    headerBurger.classList.toggle('header--active');
    body.classList.toggle('lock');

    // use sound
    if (headerBurger.classList.contains('header--active')){
        playSound(open)
    } else {
        playSound(close)
    }
})

for (let i = 0; i < headerItem.length; i++) { // Close menu when click
    headerItem[i].addEventListener('click', () => {
        headerList.classList.remove('header--active');
        headerBurger.classList.remove('header--active');
        body.classList.remove('lock');
        
        playSound(link)
    })
}