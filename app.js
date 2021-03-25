const suivant = document.querySelector('.suivant');
const precedent = document.querySelector('.precedent');
const items = document.querySelectorAll('.img');
let count = 0;


function sliderSuivant() {

    items[count].classList.remove('active')

    if (count < items.length -1){
        count++
    } else {
        count = 0
    }

    items[count].classList.add('active')

}

suivant.addEventListener('click', sliderSuivant)


function sliderPrecedent() {

    items[count].classList.remove('active')

    if (count > 0){
        count--
    } else {
        count = items.length -1
    }

    items[count].classList.add('active')
}

precedent.addEventListener('click', sliderPrecedent)