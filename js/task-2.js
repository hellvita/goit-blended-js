const checkLogin = (array) => {
  console.log("array: ", array);
  let userName = prompt("Enter your name:").toLowerCase();
  let strArr = userName.split("");
  strArr[0] = strArr[0].toUpperCase();
  userName = strArr.join("");
  console.log("userName: ", userName);
  array = array.map((arr) => arr);
  return array.includes(userName)
    ? alert(`Welcome ${userName}!`)
    : alert("User not found!");
};

const logins = ["Peter", "John", "Igor", "Sasha"];

checkLogin(logins);
