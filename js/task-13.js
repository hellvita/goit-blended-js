class Person {
  constructor(name, age, gender, email) {
    Object.assign(this, { name, age, gender, email });
  }
  getDetails() {
    return {
      name: this.name,
      age: this.age,
      gender: this.gender,
      email: this.email,
    };
  }
}

class Employee extends Person {
  constructor(name, age, gender, email, salary, department) {
    super(name, age, gender, email);
    this.salary = salary;
    this.department = department;
  }

  getEmployeeDetails() {
    return {
      salary: this.salary,
      department: this.department,
    };
  }
}

const person = new Person("Bob Salager", 29, "male", "bobemail@mail.ua");
console.log("person.getDetails(): ", person.getDetails());

const employee = new Employee(
  "Sarah Lee",
  21,
  "female",
  "good_vibes@gmail.com",
  600,
  "UI/UX"
);
console.log("employee.getDetails(): ", employee.getDetails());
console.log("employee.getEmployeeDetails(): ", employee.getEmployeeDetails());
