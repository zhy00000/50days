const img = document.querySelector(".img")
const times = document.querySelector("#times")

let clickTime = 0
let timesClicked = 0

img.addEventListener('click', e => {
  console.log("点击了1");
  if (clickTime === 0) {
    clickTime = new Date().getTime()
  } else {
    if ((new Date().getTime() - clickTime) < 800) {
      createHeart(e)
      clickTime = 0
    } else {
      clickTime = new Date().getTime()
    }
  }
})

const createHeart = (e) => {
  console.log("点击了2");
  const heart = document.createElement("i")
  heart.classList.add('fa')
  //引用了Font Awesome 图标CSS 
  heart.classList.add('fa-heart')

  let x = e.clientX
  let y = e.clientY

  let leftOffset = e.target.offsetLeft
  let topOffset = e.target.offsetTop

  let xInside = x - leftOffset
  let yInside = y - topOffset

  heart.style.left = `${xInside}px`
  heart.style.top = `${yInside}px`

  img.appendChild(heart)

  // ++ VAR 被称为前自加，其后面的变量执行自加操作，其运算为，先执行自加操作，再引用VAR值。
  //VAR ++ 被称为后自加，其前面的变量执行自加操作，其运算为，先引用VAR值，再进行自加操作。
  times.innerHTML = ++timesClicked

  setTimeout(() => heart.remove(), 1000)
}