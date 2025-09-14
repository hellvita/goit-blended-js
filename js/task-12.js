class Client {
  #login;
  #email;

  constructor(login, email) {
    this.#login = login;
    this.#email = email;
  }

  set login(login) {
    this.#login = login;
  }

  get login() {
    return this.#login;
  }

  set email(email) {
    this.#email = email;
  }

  get email() {
    return this.#email;
  }
}

const client = new Client("myLogin", "coolEmail@gmail.com");
console.log("client: ", client);
console.log("login:", client.login);
console.log("email:", client.email);
client.login = "myNewLogin_338";
client.email = "newCoolEmail@gmail.com";
console.log("login:", client.login);
console.log("email:", client.email);
