import { playSound } from "./sound";

const themeSwitch = document.querySelector('.header__switch');
const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)')
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

let isDark = false;

// default to system setting
if (prefersDarkScheme.matches) {
    isDark = true;
}

// preference from localStorage should overwrite
if (localStorage.getItem('theme') === 'dark') {
    isDark = true;
} else if (localStorage.getItem('theme') === 'light') {
    isDark = false;
}

if (isDark) {
    document.documentElement.classList.toggle('dark');
}

document.addEventListener('DOMContentLoaded', () => {

    themeSwitch.addEventListener('click', () => {
        
        document.documentElement.classList.toggle('dark');
        localStorage.setItem('theme', document.documentElement.classList.contains('dark') ? 'dark' : 'light');
    });

});