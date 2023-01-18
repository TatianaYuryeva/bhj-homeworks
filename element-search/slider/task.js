const slides = Array.from(document.querySelectorAll('.slider__item'))
const arrowPrev = document.querySelector('.slider__arrow_prev')
const arrowNext = document.querySelector('.slider__arrow_next')

function slide(next) {
  const isActiveSlide = (el) => el.classList.contains('slider__item_active')
  let activeSlide = slides.findIndex(isActiveSlide)
  slides[activeSlide].classList.remove('slider__item_active')
  if(next) {
    activeSlide = activeSlide == slides.length - 1 ? -1 : activeSlide
    activeSlide++
  } else if(!next) {
      activeSlide = activeSlide == 0 ? slides.length : activeSlide
      activeSlide--
    }
  slides[activeSlide].classList.add('slider__item_active')
}

arrowPrev.onclick  = () => {
  slide(false)
}

arrowNext.onclick  = () => {
  slide(true)
}