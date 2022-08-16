const sliderContainer = document.querySelector(".slider-container")
const slideRight = document.querySelector(".right-slider")
const slideLeft = document.querySelector(".left-slider")

const upButton = document.querySelector(".up-button")
const downButton = document.querySelector(".down-button")

const slidesLength = slideRight.querySelectorAll('div').length

let activeSlideIndex = 0

// 因为点击左侧是一直往下的 
// 点击时改变左侧的定位高度
slideLeft.style.top = `-${(slidesLength - 1) * 100}vh`

upButton.addEventListener('click', () => changeSlide('up'))
downButton.addEventListener('click', () => changeSlide('down'))

const changeSlide = (direction) => {
  const sliderHeight = sliderContainer.clientHeight
  if (direction === "up") {
    activeSlideIndex++
    //向上反倒最后最大时,返回0
    if (activeSlideIndex > slidesLength - 1) {
      activeSlideIndex = 0
    }
  } else if (direction === "down") {
    activeSlideIndex--
    if (activeSlideIndex < 0) {
      activeSlideIndex = slidesLength - 1
    }
  }
  console.log(activeSlideIndex);
  //根据index的值 来改变左右两侧的移动距离 为一个盒子高度的index倍
  slideRight.style.transform = `translateY(-${activeSlideIndex * sliderHeight}px)`
  slideLeft.style.transform = `translateY(${activeSlideIndex * sliderHeight}px)`
}