const sound = document.querySelector('.sound');
const contactIcons = document.querySelectorAll('.contact__icon')
// Audio assets
const disable_sound = new Audio('https://user-images.githubusercontent.com/64963734/214936578-0008b044-447f-4742-b3bd-1aab2636830c.mp4')
const enable_sound = new Audio('https://user-images.githubusercontent.com/64963734/214936581-e361bf17-7bbe-45d6-92d1-f94bfc3c6e44.mp4')
const card_hover = new Audio('https://css-tricks.com/examples/SoundOnHover/audio/beep.mp3')

sound.addEventListener('click', () => {
    sound.classList.toggle('sound--disable')

    if (sound.classList.contains('sound--disable')) {
        disable_sound.play()
    } else {
        enable_sound.play()
    }
})

export function playSound(src) {
    if (sound.classList.contains('sound--disable')) return

    src.play()
}

// ----------------------------------------------
// Contact icons sound
// ----------------------------------------------

for (let i = 0; i < contactIcons.length; i++) {
    contactIcons[i].addEventListener('mouseenter', () => {
        playSound(card_hover)
    })
}