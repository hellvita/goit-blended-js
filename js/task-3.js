const num = prompt("Enter number from 1 to 4");
let result = `the ${num} is stands for `;
switch (Number(num)) {
  case 1:
    result += "winter";
    break;
  case 2:
    result += "spring";
    break;
  case 3:
    result += "summer";
    break;
  case 4:
    result += "autumn";
    break;

  default:
    result = `sorry, it could be only numbers 1, 2, 3 or 4, you entered ${num}`;
    break;
}
console.log("result: ", result);
alert(result);
