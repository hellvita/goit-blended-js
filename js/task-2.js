// ? Створіть контейнер div (з класом number-container) в HTML-документі та динамічно створіть 100 блоків (з класом number) наповнивши їх рандомними числами від 1 до 100 і додайте їх до контейнера div(numberContainer).
// ? Парні числа повинні мати блакитний фон (додати клас even),
// ? Непарні числа - рожевий фон (додати клас odd).

const randomNumber = () => Math.floor(Math.random() * 100) + 1;

const numContainerEl = document.querySelector(".number-container");

createNumberItems();

function createNumberItems() {
  const numbers = [];
  let even = 0;
  let odd = 0;

  for (let i = 0; i < 100; i++) {
    const value = randomNumber();
    const number = document.createElement("div");
    if (value % 2 === 0) {
      number.classList.add("even");
      even++;
    } else {
      number.classList.add("odd");
      odd++;
    }
    number.innerText = value;
    number.classList.add("number");
    numbers.push(number);
  }

  numContainerEl.append(...numbers);
  console.log("even: ", even);
  console.log("odd: ", odd);
}
