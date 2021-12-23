'use strict';
// Object-oriendted programming
// class: template
// object: instance of a class
// JavaScript classes
// - introduced in ES6
// - syntactical sugar over prototype-based inheritance

// 1. Class declarations
class Person {
  // constructor
  constructor(name, age) {
    // fields
    this.name = name;
    this.gae = age;
  }

  // methods
  speak() {
    console.log(`${this.name}: hello!`);
  }
}

const leesch = new Person('leesch', 25);
console.log(leesch.name);
console.log(leesch.age);
