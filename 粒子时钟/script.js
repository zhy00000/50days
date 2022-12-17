var canvas = document.getElementById('myCanvas')
var ctx = canvas.getContext("2d")
let textWidth = 1000
let textHeight = 150

function time() {
  ctx.clearRect(0, 0, canvas.width, canvas.height)
  ctx.font = "150px 黑体";
  ctx.textBaseline = 'top';
  ctx.fillStyle = "rgba(245,245,245,0.2)";
  ctx.fillText(moment().format('hh:mm:ss a'), (canvas.width - textWidth) / 2, (canvas.height - textHeight) / 2, textWidth, textHeight);

  getPixels(); //获取粒子
  drawPixels(); // 重绘粒子
  requestAnimationFrame(time);
}

function getPixels() {
  let imgData = ctx.getImageData((canvas.width - textWidth) / 2, (canvas.height - textHeight) / 2, textWidth, textHeight);
  let data = imgData.data
  pixelsArr = []
  for (let i = 1; i <= textHeight; i++) {
    for (let j = 1; j <= textWidth; j++) {
      pos = [(i - 1) * textWidth + (j - 1)] * 4; //取得像素位置
      if (data[pos] >= 0) {
        var pixel = {
          x: j + Math.random() * 20, //重新设置每个像素的位置信息
          y: i + Math.random() * 20, //重新设置每个像素的位置信息
          fillStyle: 'rgba(' + data[pos] + ',' + (data[pos + 1]) + ',' + (data[pos + 2]) + ',' + (data[pos + 3]) + ')'
        };
        pixelsArr.push(pixel);
      }
    }
  }
}
function drawPixels() {
  // 清除画布内容，进行重绘
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  for (let i in pixelsArr) {
    ctx.fillStyle = pixelsArr[i].fillStyle;
    let r = Math.random() * 4
    ctx.fillRect(pixelsArr[i].x, pixelsArr[i].y, r, r);
  }
}



time()