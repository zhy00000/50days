const textElement = document.getElementById("text")

const speedElement = document.getElementById("speed")

let mySpeed  = 300 / speedElement.value

const myText = "不畏浮云遮望眼，只缘身在最高层。——王安石《登飞来峰》"

let idx = 1

writeText()

// slice() 方法可从已有的数组中返回选定的元素。

//slice() 方法可提取字符串的某个部分，并以新的字符串返回被提取的部分。

//注意： slice() 方法不会改变原始数组。


function writeText() {
  textElement.innerText = myText.slice(0, idx)

  idx++

  if (idx > myText.length) {
    idx = 1
  }

  setTimeout(writeText, mySpeed)
}

speedElement.addEventListener("input",(e) =>mySpeed = 300 / e.target.value)