let btn = document.getElementById('btn')

function getStrUrl(s) {
  var reg = /(http:\/\/|https:\/\/)((\w|=|\?|\.|\/|&|-)+)/g;
  var reg = /(https?|http|ftp|file):\/\/[-A-Za-z0-9+&@#/%?=~_|!:,.;]+[-A-Za-z0-9+&@#/%=~_|]/g;
  s = s.match(reg);
  return (s && s.length ? s[0] : null);
}

let testUrl = "0.76 mQx:/ 复制打开抖音，看看【皮皮鱼的作品】10秒教会去水印； 0广告、无次数限制； 永久免费... https://v.douyin.com/YT14ucG/"

btn.addEventListener('click', () => {
  console.log(getStrUrl(testUrl));
})