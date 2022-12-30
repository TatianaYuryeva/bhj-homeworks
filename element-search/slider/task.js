const slides = document.querySelectorAll('.slider__item')
const arrowPrev = document.querySelector('.slider__arrow_prev')
const arrowNext = document.querySelector('.slider__arrow_next')
let activeSlide = 0

function slide(next) {
  slides[activeSlide].classList.remove('slider__item_active')
  if(next) {
    if (activeSlide == slides.length - 1) {
      activeSlide = -1
    }
    activeSlide++
  } else if(!next) {
      if (activeSlide == 0) {
        activeSlide = slides.length
      }
      activeSlide--
    }
  slides[activeSlide].classList.add('slider__item_active')
}

arrowPrev.onclick  = () => {
  slide(next = false)
}

arrowNext.onclick  = () => {
  slide(next = true)
}