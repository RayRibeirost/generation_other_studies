"use strict";

/// Module 02: Object Oriented Javascript
/// Exercise 01

/* class Book {
  constructor(title, author, year) {
    if (!typeof title === "String")
      throw new Error("The title must be a string.");
    if (!typeof author === "String")
      throw new Error("The author must be a string.");
    if (!typeof year === "Number")
      throw new Error("The year must be a number.");
    this.title = title;
    this.author = author;
    this.year = year;
  }
}

class Ebook extends Book {
  constructor(title, author, year, fileSize) {
    if (!typeof fileSize === "Number")
      throw new Error("The file size must be a number.");
    super(title, author, year);
    this.fileSize = fileSize;
  }
  download() {
    return `Congrats! You have been downloaded the book ${this.title}, which has ${this.fileSize}MB of size.`;
  }
} */

///Exercise 02

/* class ArrayUtils {
  constructor() {
    throw new Error("ArrayUtils cannot be instantiated.");
  }
  static specArray(arr) {
    if (arr.length === 0) throw new Error("Array cannot be empty.");
  }
  static average(arr) {
    this.specArray(arr);
    const sum = arr.reduce(
      (accumulator, currentValue) => accumulator + currentValue,
      0
    );
    return sum / arr.length;
  }
  static max(arr) {
    this.specArray(arr);
    return Math.max(...arr);
  }
} */

///Module 03: OOP Newer Features in javascript

/* class Circle {
    static allowedColors = new Set(["red", "green", "blue"]);
    setColor(color) {
        if (!Circle.allowedColors.has(color)) throw new Error("You must insert one of the allowed colors (blue, red, green)");
        this._color = color;
    }
    setRadius(radius) {
        if (radius <= 0) throw new Error("The radius must be greater than zero.");
        this._radius = radius;
    }

    constructor(radius, color) {
        this.setRadius(radius);
        this.setColor(color);
    }

    get diameter() {
        return this._radius * 2;
    }

    get radius() {
        return this._radius
    }

    set radius(radius) {
        this.setRadius(radius)
    }

    get color() {
        return this._color;
    };

    set color(color) {
        this.setColor(color);
    }
};

const circ = new Circle(4, "red");
console.log(circ.diameter);
console.log(circ.radius);
circ.radius = 23;
console.log(circ.radius);
circ.color = "green";
console.log(circ.color);
 */

/* class User {
    constructor(fisrtName, lastName) {
        this._firstName = fisrtName;
        this._lastName = lastName;
    }

    get fullName() {
        return `${this._firstName} ${this._lastName}`;
    }

    set fullName(fullName) {
        const [newFirstName, newLastName] = fullName.split(" ");
        this._firstName = newFirstName;
        this._lastName = newLastName;
    }
}

const userRay = new User("Raylander", "Ribeiro");
console.log(userRay.fullName);
userRay.fullName = "Jeff Bezos";
console.log(userRay.fullName) */

///////////////////

/* class Cat {
  static numOfcats = 0;
  static species = "catus";
  name;
  breed;
  numLegs = 4; //public field
  hasTail = true; //good to clean up the constructor

  constructor(name, breed) {
    this.name =  name;
    this.breed = breed;
    Cat.numOfcats += 1;
  }

  amputate() {
    this.numLegs--;
  }
} */

//////////////

/* class Circle {
  #radius; //private field

  constructor(radius) {
    this.#radius = radius;
  }

  get radius() {
    return this.#radius;
  }

}

const myCircle = new Circle(10);
console.log(myCircle.radius);
 */

////////////

/* class MyClass {
  #privateMethod() {
    console.log("Private method called")
  }
  publicMethod() {
    this.#privateMethod()
  }
}

const myClass = new MyClass;
myClass.publicMethod(); */

//////////

/* class DatabaseConnection {
  static connection;
  static {
    process.env.NODE_ENV === "production"
      ? this.loadProductionConnection()
      : this.loadDevelopmentConnection();
  }
  static loadProductionConnection() {}
  static loadDevelopmentConnection() {}

} */

////// Exercise 01

/* class UserProfile {
  static validateUsername(userName) {
    if (typeof userName !== "string" || userName.length === 0) throw new Error("Invalid username."); 
  }
  static validateEmail(emailAdress) {
    if (!emailAdress.includes("@")) throw new Error("Invalid email.");
  }
  static validateBirthdate(birthDate){
    if(!birthDate.includes("-")) throw new Error("Invalid birthdate.");
    const [year, month, day] = birthDate.split("-");
    if (year.length != 4 || month.length != 2 || day.length != 2) throw new Error("Invalid birthdate.");
  }
  constructor(userName, email, birthDate) {
    UserProfile.validateUsername(userName);
    UserProfile.validateEmail(email);
    UserProfile.validateBirthdate(birthDate);
    this._username = userName;
    this._email = email;
    this._birthdate = birthDate;
  }
  get username() {
    return this._username;
  }
  get email() {
    return this._email
  }
  get birthdate() {
    return this._birthdate
  }
  set username(userName){
    UserProfile.validateUsername(userName);
    this._username = userName;
  }
  set email(emailAdress) {
    UserProfile.validateEmail(emailAdress);
    this._email = emailAdress;
  }
  set birthdate(birthDate) {
    UserProfile.validateBirthdate(birthDate);
    this._birthdate = birthDate;
  }
}

const user = new UserProfile("john_doe", "john@gmail.com", "1933-12-07");
console.log(user.birthdate);

 */

////Module 04: The keyword "this"

/* const person = {
  name: "Conan",
  city: "Los Angeles",
  sing: function() {
    return `${this.name} sings La la la`;
  }
};

const pSing = person.sing
console.log(pSing()); */

///////

/* class Cat {
  constructor(firstName) {
    this.firstName = firstName
  }
  dance(style = "tango") {
    return `Meow, i am ${this.firstName} and i like to ${style}`;
  }
}

const fluffy = new Cat("fluffy");
const fDance = fluffy.dance();
console.log(fDance); */

////////

/* function whatIsThis() {
  console.log(`The value of this is: ${this}`);
};

const obj = {
  color: "purple",
  age: 22,
  whatIsThis: whatIsThis,
};
 */

///////
/* 
class Cat {
  constructor(firstName) {
    this.firstName = firstName;
  }
  static getRandomCat() {
    console.log(`this is: ${this}`)
  }
  dance(style = "tango") {
    console.log(`this is: ${this}`);
    return `Meow, i am ${this.firstName} and i like to ${style}`;
  }
}

const blue = new Cat("blue");
blue.dance();
Cat.getRandomCat();
const func  = blue.dance;
func(); */

///////