import { playSound } from "./sound";

const themeSwitch = document.querySelector('.header__switch');

// Sound
const switch_off = new Audio('https://user-images.githubusercontent.com/64963734/215277655-2a6fe4fa-935c-4087-aef5-9170c6789067.mp4')
const switch_on = new Audio('https://user-images.githubusercontent.com/64963734/215277657-f068ca6a-88ed-463e-8cb0-b9f1136ab60f.mp4')

themeSwitch.addEventListener('click', () => {
    themeSwitch.classList.toggle('header__switch--disable')

    if (themeSwitch.classList.contains('.header__switch--disable')) {
        playSound(switch_off)
    } else {
        playSound(switch_on)
    }
});

const currentTheme = localStorage.getItem('theme')
const prefersDarkTheme = window.matchMedia("(prefers-color-scheme: dark)");

if (currentTheme === 'dark') {
    document.documentElement.classList.add('dark')
}

themeSwitch.addEventListener('click', () => {
    document.documentElement.classList.toggle('dark');

    let theme = '';

    if (prefersDarkTheme.matches) {
        currentTheme === '' ? theme = 'dark' : null
    }

    localStorage.setItem('theme', theme)
})