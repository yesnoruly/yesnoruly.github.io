import { playSound } from "./sound";

const mq = window.matchMedia("(min-width: 768px)");
const card = document.querySelectorAll('.card')

// Sound
const card_hover = new Audio('https://user-images.githubusercontent.com/64963734/215278132-6c65d3ee-018b-4125-b26c-d49cdd8d79fc.mp4')

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
