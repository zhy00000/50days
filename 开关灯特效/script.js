let wrapper = document.getElementById('btnWrapper');
wrapper.style.setProperty('--groove-left', '12px');
let btns = document.getElementsByClassName('btn');
for (let i = 0; i < btns.length; i++) {
  btns[i].addEventListener('click', function (e) {
    ThemeChange(i === 1);
    resetBtn(btns);
    wrapper.style.setProperty('--groove-left', `calc(12px + ${i * 50}%)`);
    wrapper.style.setProperty('--wraper-origin', `${i === 0 ? '75% top' : '25% top'}`);
    wrapper.style.setProperty('--wraper-rotate', `${i === 0 ? -8 : 8}deg`);
    wrapper.className = 'rotateWrap';
    setTimeout(() => {
      btns[i].className = 'btn active';
    }, 500);
    setTimeout(() => {
      wrapper.className = ''
    }, 550);
  })
}
// 重置按钮类名
function resetBtn(btns) {
  for (let i = 0; i < btns.length; i++) {
    setTimeout(() => {
      btns[i].className = 'btn';
    }, 100)
  }
}
// 改变主题
function ThemeChange(bol) {
  let body = document.body;
  body.className = bol ? 'dark' : ''
}