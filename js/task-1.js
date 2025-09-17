// ? 1 - отримай body елемент і виведи його в консоль
const bodyEl = document.querySelector("body");
console.group("1) bodyEl");
console.log(bodyEl);
console.dir(bodyEl);
console.groupEnd();

// ? 2 - отримай елемент id="title" і виведи його в консоль
// const titleEl = document.getElementById("title");
const titleEl = document.querySelector("#title");
console.group("2) titleEl");
console.log(titleEl);
console.dir(titleEl);
console.groupEnd();

// ? 3 - отримай елемент class="list" і виведи його в консоль
const listEl = document.querySelector(".list");
console.group("3) listEl");
console.log(listEl);
console.dir(listEl);
console.groupEnd();

// ? 4 - отримай всі елементи з атрибутом data-topic і виведи їх в консоль
const topicList = document.querySelectorAll("[data-topic]");
console.group("4) topicList");
topicList.forEach((topicEl) => {
  console.log("topicEl:");
  console.log(topicEl);
  console.dir(topicEl);
});
console.groupEnd();

// ? 5 - отримай перший елемент з списку всіх елементів з атрибутом data-topic і виведи його в консоль
const topicListFirstEl = topicList[0];
console.group("5) topicListFirstEl");
console.log(topicListFirstEl);
console.dir(topicListFirstEl);
console.groupEnd();

// ? 6 - отримай останній елемент з списку всіх елементів з атрибутом data-topic і виведи його в консоль
const topicListLastEl = topicList[topicList.length - 1];
console.group("6) topicListLastEl");
console.log(topicListLastEl);
console.dir(topicListLastEl);
console.groupEnd();

// ? 7 - який елемент є сусідом для h1? Знайти і виведи його в консоль
const nextToTitleEl = titleEl.nextElementSibling;
console.group("7) nextToTitleEl");
console.log(nextToTitleEl);
console.dir(nextToTitleEl);
console.groupEnd();

// ? 8 - по тегу h3 знайти всі заголовки та виведи їх у консоль
const listTitleList = document.querySelectorAll("h3");
console.group("8) listTitleList");
listTitleList.forEach((listTitleEl) => {
  console.log("listTitleEl:");
  console.log(listTitleEl);
  console.dir(listTitleEl);
});
console.groupEnd();

// ? 9 - для кожного елмента h3 додай class="active", який змінить колір заголовка на інший колір
console.group('9) listTitleList add class="active"');
console.log("// uncomment the code");
// listTitleList.forEach((listTitleEl) => {
//   console.log("listTitleEl:");
//   listTitleEl.classList.add("active");
//   console.log(listTitleEl);
//   console.dir(listTitleEl);
// });
console.groupEnd();

// ? 10 - знайти елемент li який має атрибут data-topic з значенням "navigation" і виведи його в консоль
const navigationEl = [...topicList].find(
  (topicEl) => topicEl.dataset.topic === "navigation"
);
console.group("10) navigationEl");
console.log(navigationEl);
console.dir(navigationEl);
console.groupEnd();

// ? 11 - додай для знайденого елемента data-topic="navigation" атрибут style і зміни його backgroundColor
// navigationEl.setAttribute("style", "background-color: #242437");
console.group('11) navigationEl add style="background-color: #242437"');
console.log("// uncomment the code");
// console.log(navigationEl);
// console.dir(navigationEl);
console.groupEnd();

// ? 12 - у елемента data-topic="navigation" знайди елемент р і зміни його текст на "Я змінив тут текст!"
const navigationTextEl = navigationEl.querySelector("p");
// navigationTextEl.textContent = "Я змінив тут текст!";
console.group("12) navigationTextEl changed");
console.log("// uncomment the code");
// console.log(navigationTextEl);
// console.dir(navigationTextEl);
console.groupEnd();

// ? 13 - створи const currentTopic = "manipulation"; після цього знайди елемент у якогоо атрибут data-topic має значення, яке зберігається у змінній currentTopic і виведи його в консоль
const currentTopic = "manipulation";
const manipulationEl = [...topicList].find(
  (topicEl) => topicEl.dataset.topic === currentTopic
);
console.group("13) manipulationEl");
console.log(manipulationEl);
console.dir(manipulationEl);
console.groupEnd();

// ? 14 - додай до знайденого елемента атрибут style і зміни його backgroundColor
// manipulationEl.setAttribute("style", "background-color: #283928");
console.group('14) manipulationEl add style="background-color: #283928"');
console.log("// uncomment the code");
// console.log(manipulationEl);
// console.dir(manipulationEl);
console.groupEnd();

// ? 15 - знайти в документі заголовок, який має class="completed" і виведи його в консоль
const completedTitleEl = document.querySelector('h3[class="completed"]');
console.group("15) completedTitleEl");
console.log(completedTitleEl);
console.dir(completedTitleEl);
console.groupEnd();

// ? 16 - видали елемент li в якому знаходиться заголовок, який має class="completed"
const completedEl = completedTitleEl.closest("li");
// completedEl.remove();
console.group("16) completedEl removed");
console.log("// uncomment the code");
// console.log(listEl);
// console.dir(listEl);
console.groupEnd();

// ? 17 - після заголовка h1 (перед списком) додай новий елемент p і задай йому наступний текст: "Об'єктна модель документа (Document Object Model)"
const newTextEl = document.createElement("p");
newTextEl.textContent = "Об'єктна модель документа (Document Object Model)";
// titleEl.insertAdjacentElement("afterend", newTextEl);
console.group("17) newTextEl added");
console.log("// uncomment the code");
// console.log(titleEl);
// console.log(newTextEl);
// console.log(listEl);
console.groupEnd();

// ? 18 - додай новий елемент списку у кінець списка, його заголовок це - "Властивість innerHTML" а опис (р) - "Ще один спосіб створити DOM-елементи і помістити їх в дерево - це використовувати рядки з тегами і дозволити браузеру зробити всю важку роботу". тобто, потрібно створити елемент LI потім наповнити H3 та P і готову LI закинути у кінець списку
const newListItemElStr = `
        <li>
          <h3>Властивість innerHTML</h3>

          <p>
            Ще один спосіб створити DOM-елементи і помістити їх в дерево - це використовувати рядки з тегами і дозволити браузеру зробити всю важку роботу.
          </p>
        </li>
`;
// listEl.innerHTML += newListItemElStr;
console.group("18) newListItemElStr added via innerHTML");
console.log("// uncomment the code");
// console.log(listEl);
// console.dir(listEl);
console.groupEnd();

// ? 19 - зроби це саме, але використовуй шаблонні рядки та метод insertAdjacentHTML()
// listEl.insertAdjacentHTML("beforeend", newListItemElStr);
console.group("19) newListItemElStr added via insertAdjacentHTML");
console.log("// uncomment the code");
// console.log(listEl);
// console.dir(listEl);
console.groupEnd();

// 20 - очисти список
// listEl.innerHTML = "";
console.group("20) listEl cleared");
console.log("// uncomment the code");
// console.log(listEl);
// console.dir(listEl);
console.groupEnd();
