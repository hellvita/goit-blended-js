// ? Використовуй шаблон розмітки з файлу html та напиши наступний функціонал:
// ? При кліку на кнопку "Зменшити" квадрат стає меньшим на 20 пікселів,
// ? При кліку на кнопку "Збільшити" - квадрат стає більшим на 20 пікселів.
// * [30 - 290] | (15 - 300)

const boxEl = document.querySelector(".box");
const makeSmallerBtn = document.querySelector(".js-decrease");
const makeBiggerBtn = document.querySelector(".js-increase");

const MAX = 300;
const MIN = 15;
const STEP = 20;

makeSmallerBtn.addEventListener("click", decrease);
makeBiggerBtn.addEventListener("click", increase);

function getMax(size, step, maxValue) {
  return size + Math.floor((maxValue - size) / step) * step;
}
function getMin(size, step, minValue) {
  return size - Math.floor((size - minValue) / step) * step;
}

function decrease() {
  const size = parseFloat(window.getComputedStyle(boxEl).width) - STEP;

  boxEl.style.width = `${size}px`;
  boxEl.style.height = `${size}px`;

  if (size === getMin(size, STEP, MIN)) {
    makeSmallerBtn.removeEventListener("click", decrease);
  }
  if (size <= getMax(size, STEP, MAX) - STEP) {
    makeBiggerBtn.addEventListener("click", increase);
  }
}
function increase() {
  const size = parseFloat(window.getComputedStyle(boxEl).width) + STEP;

  boxEl.style.width = `${size}px`;
  boxEl.style.height = `${size}px`;

  if (size === getMax(size, STEP, MAX)) {
    makeBiggerBtn.removeEventListener("click", increase);
  }
  if (size >= getMin(size, STEP, MIN) + STEP) {
    makeSmallerBtn.addEventListener("click", decrease);
  }
}
