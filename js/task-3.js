// Form Events, Input, Focus, Blur and Submit.

// ? 1 - При події `input`, якщо користувач ввів в поле більше 6 символів то додати клас `success`. Якщо ж символів менше аніж 6, то клас `error`

// ? 2 - При події `focus` зроби перевірку на заповненість поля інпута, якщо ж поле пусте, то зроби `outline` => `'3px solid red'`, якщо при фокусі поле непусте, то `outline` => `'3px solid green'`

// ? 3 - При події `blur` зроби перевірку на заповненість поля інпута, якщо ж поле пусте, то зроби `outline` => `'3px solid red'`, якщо при фокусі поле непусте, то `outline` => `'3px solid green'`

// ? 4 - При події `submit`. Відміни поведінку браузера по змовчуванню. Дістань данні з інпуту і чек боксу, зроби перевірку, що інпут не порожній, також, що нажатий чек бокс у положення true, якщо користувач все виконав вірно, збери данні (userName) у об'єкт і виведи у консоль. У разі, якщо користувач не виконав одну із умов, виведи повідомлення.  Також при події інпут реалізуй додавання ім`я користувача у span, замість слова "Anonymous". Якщо користувач ввів ім`я, а потім видалив, зроби так, щоб на місце повернулось дефолтне знаяення "Anonymous". При відправці форми, очисти інпут, верни чек бокс у положення false, верни дефолтне значення "Anonymous" у span.

const formEl = document.querySelector(".js-contact-form");
const inputEl = document.querySelector(".js-username-input");
const nameEl = document.querySelector(".js-username-output");
const policyEl = document.querySelector(".js-policy-checkbox");

inputEl.addEventListener("input", changeUserName);
inputEl.addEventListener("input", changeInputStyle);
inputEl.addEventListener("focus", changeInputStyle);
inputEl.addEventListener("blur", changeInputStyle);

formEl.addEventListener("submit", (event) => {
  event.preventDefault();
  const formData = {
    userName: inputEl.value.trim(),
    policy: policyEl.checked,
  };
  if (validation(formData)) {
    formEl.reset();
    changeUserName();
    inputEl.classList.remove("success");
    inputEl.classList.remove("error");
  }
});

function changeUserName() {
  let userName = "Anonymous";
  if (inputEl.value.trim() === "") {
    userName = "Anonymous";
  } else {
    userName = inputEl.value.trim();
  }
  nameEl.textContent = userName;
}

function nameIsValid(name) {
  return name.trim().length > 6;
}

function changeInputStyle() {
  if (nameIsValid(inputEl.value)) {
    inputEl.classList.add("success");
    inputEl.classList.remove("error");
  } else {
    inputEl.classList.add("error");
    inputEl.classList.remove("success");
  }
}

function validation(data) {
  let msg = "";
  if (!nameIsValid(data.userName) || !data.policy) {
    if (!nameIsValid(data.userName)) {
      msg += msg += "\n> Поле з іменем повинно містити більше шести символів!";
    }
    if (!data.policy) {
      msg +=
        "\n> Для продожвення потрібно погодитися з політикою конфіденційності!";
    }
    alert(msg);
    return false;
  }
  console.log("userName:", data.userName);
  return true;
}
