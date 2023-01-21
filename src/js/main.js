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