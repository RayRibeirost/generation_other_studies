"use strict";

/// Module 02: Object Oriented Javascript
/// Exercise 01

class Book {
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
}

///Exercise 02

class ArrayUtils {
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
}

///Module 03: OOP Newer Features in javascript