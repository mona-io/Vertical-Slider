const sliderContainer = document.querySelector ('.slider-container')
const leftSlide = document.querySelector ('.left-slide')
const rightSlide = document.querySelector ('.right-slide')
const upButton = document.querySelector ('.up-button')
const downButton = document.querySelector ('.down-button')
const slidesLength = rightSlide.querySelectorAll ('div').length

let activeSlideIndex = 0

leftSlide.style.top = `-${(slidesLength - 1) * 100}vh`

upButton.addEventListener('click', () => changeSlide('up'))
downButton.addEventListener('click', () => changeSlide('down'))

const changeSlide = (direction) => {
  const sliderHeight = sliderContainer.clientHeight
  if (direction === 'up') {
    activeSliderIndex ++
    if (activeSlideIndex > slideLength -1) {
    activeSliderIndex = 0
    }
  }

   
}