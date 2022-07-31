const btn = document.querySelector('.ripple')

btn.addEventListener('click', function (e) {

  let ripple = document.createElement('span')

  ripple.classList.add('ripple')

  this.appendChild(ripple)

  //e.clientX是鼠标点击位置相对于浏览器窗口的位置
  //e.target.offsetLeft 是盒子边界与浏览器窗口的位置  
  //两者相减获得 鼠标点击位置在盒子内的相对位置

  let x = e.clientX - e.target.offsetLeft
  let y = e.clientY - e.target.offsetTop

  ripple.style.left = `${x}px`
  ripple.style.top = `${y}px`

  setTimeout(() => {

    ripple.remove()

  }, 500)
})