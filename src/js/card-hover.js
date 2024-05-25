import { playSound } from "./sound";

const mq = window.matchMedia("(min-width: 768px)");
const card = document.querySelectorAll('.card')

// Sound
const card_hover = new Audio('https://css-tricks.com/examples/SoundOnHover/audio/beep.mp3')

if (mq.matches) {
    for (let i = 0; i < card.length; i++) { // Prevent adding a class to all cards when hover
        card[i].addEventListener('mouseenter', () => {
            card[i].classList.add('card--visible')
            playSound(card_hover)
        })

        card[i].addEventListener('mouseleave', () => {
            card[i].classList.remove('card--visible')
        })
    }
}
