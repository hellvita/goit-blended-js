const login = prompt("Login:");
console.log("login: ", login);
let password = "";
let message = "Canceled";

if (login == null || login == "") {
  alert(message);
} else if (login.toLowerCase() === "admin") {
  password = prompt("Password:");

  if (password.toLowerCase() === "i am the boss") {
    alert("Welcome back!");
  } else {
    alert("Wrong password!");
  }
} else {
  message = "Sorry, I don't know you...";
  alert(message);
}
console.log("password: ", password);
