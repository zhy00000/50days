(() => {
  const loadingtext = document.querySelector('.loading-text')

  const bg = document.querySelector('.bg')

  const blurAnimation = () => {

    let progress = 0

    let timer = setInterval(() => {
      progress++

      if (progress > 99) {
        clearInterval(timer)
      }

      // ${}这个用法就相当于变量拼接 代替 +"value"+ 的写法

      loadingtext.innerText = `${progress}%`

      loadingtext.style.opacity = mapNumberRange(progress, 0, 100, 1, 0)

      bg.style.filter = `blur(${mapNumberRange(progress, 0, 100, 30, 0)}px)`


      // bg.style.filter = `grayscale(${mapNumberRange(progress, 0, 100, 100, 0)}%)`

      //filter 是css中的滤镜属性  blur 模糊程度  还有对比度 灰度  透明度  饱和度  褐色程度  图像色相旋转  各种参数   

    }, 30)
  }


  //两个数据范围 的映射函数, 可以参考等比三角理解 两个数据范围上相同百分比的点  
  const mapNumberRange = (num, in_min, in_max, out_min, out_max) => {
    return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min
  }

  const init = () => {
    blurAnimation()
  }

  init()
})()