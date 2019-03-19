var but1 = document.getElementById('#1');
var cardInner = document.querySelector('.card-inner');
var cardWrapper = document.querySelector('.card-wrapper');

but1.addEventListener('click', lol)

function lol() {
    console.log('lol')
    cardInner.classList.toggle('spin')
}


