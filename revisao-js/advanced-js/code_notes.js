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



