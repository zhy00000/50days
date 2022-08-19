const box = document.querySelector('#box');
const mask = document.querySelector('#mask');

const N_ROW = 5;
const N_COLUMN = 5;

// get ready
for (let i = 0; i < N_COLUMN; i++) {
  const row = document.createElement('div');
  row.classList.add('row');
  for (let j = 0; j < N_ROW; j++) {
    const item = document.createElement('input');
    item.setAttribute('type', 'checkbox');
    row.append(item);
  }
  box.append(row);
}

// bind events
let isDragging = false;
let draggingRect = {
  start: [0, 0],
  end: [0, 0],
};

const checkBoxes = [...document.querySelectorAll('input')].map((checkbox) => ({
  ele: checkbox,
  rect: checkbox.getBoundingClientRect(),
}));

document.addEventListener('mousedown', (event) => {
  draggingRect.start = [event.clientX, event.clientY];
  draggingRect.end = [event.clientX, event.clientY];
  isDragging = true;
});

document.addEventListener('mousemove', (event) => {
  if (isDragging) {
    draggingRect.end = [event.clientX, event.clientY];
    const [left, right, top, bottom] = [
      Math.min(draggingRect.start[0], draggingRect.end[0]),
      Math.max(draggingRect.start[0], draggingRect.end[0]),
      Math.min(draggingRect.start[1], draggingRect.end[1]),
      Math.max(draggingRect.start[1], draggingRect.end[1]),
    ];
    mask.style.left = `${left}px`;
    mask.style.top = `${top}px`;
    mask.style.width = `${right - left}px`;
    mask.style.height = `${bottom - top}px`;
    mask.style.display = 'block';
    for (let checkbox of checkBoxes) {
      const rect = checkbox.rect;
      const checked = !(
        top > rect.bottom ||
        right < rect.left ||
        bottom < rect.top ||
        left > rect.right
      );
      if (checked) {
        checkbox.ele.setAttribute('checked', '');
      } else {
        checkbox.ele.removeAttribute('checked');
      }
    }
  }
});

document.addEventListener('mouseup', () => {
  isDragging = false;
  mask.style.display = 'none';
});