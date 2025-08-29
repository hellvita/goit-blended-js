const user = {
  name: "John",
  age: 20,
  hobby: "tenis",
  premium: true,
};

user.mood = "happy";
user.hobby = "skydiving";
user.premium = false;
const keys = Object.keys(user);
console.log("keys: ", keys);
for (const key of keys) {
  console.log(`${key}: ${user[key]}`);
}
