const min = Math.floor(Math.random() * (59 - 0) + 0);
const time = Number(prompt("Enter minutes (from 0 to 59):"));
if (time >= 0 && time < 15) {
  alert(`${time} min is belongs to the first quarter`);
} else if (time >= 15 && time < 30) {
  alert(`${time} min is belongs to the second quarter`);
} else if (time >= 30 && time < 45) {
  alert(`${time} min is belongs to the third quarter`);
} else if (time >= 45 && time < 60) {
  alert(`${time} min is belongs to the fourth quarter`);
} else {
  alert(`Time must be in a range from 0 to 59 minutes, you entered ${time}`);
}
