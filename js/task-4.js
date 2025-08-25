const time = Number(prompt("Enter time in minutes"));

const hours =
  (time - (time % 60)) / 60 < 10
    ? "0" + (time - (time % 60)) / 60
    : (time - (time % 60)) / 60;
const min =
  time % 60 < 10 ? `0${Math.floor(time % 60)}` : Math.floor(time % 60);
const result =
  time < 1440 && typeof time === "number"
    ? `${hours}:${min}`
    : "Sorry, you entered invalid data";

console.log("result: ", result);
