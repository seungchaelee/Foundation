// Objects
// one of the JavaScript's data types.
// a collection of related data and/or functionality.
// Nearly all objects in JavaScript are instances of Object
// object = { key: value };

// 1. Listerals and properties
const obj1 = {}; // 'object literal' syntax
const obj2 = new Object(); // 'object constructor' syntax

function print(person) {
  console.log(person.name);
  console.log(person.age);
}

const leesch = { name: 'leesch', age: 25 };
print(leesch);

// with Javascript magic (dynamically typed language)
// can add properties later
leesch.hasJob = true;
console.log(leesch.hasJob);

delete leesch.hasJob;
console.log(leesch.hasJob);

// 2. Computed properties
// key should be always string
console.log(leesch.name);
console.log(leesch['name']);
leesch['hasJob'] = true;
console.log(leesch.hasJob);

function printValue(obj, key) {
  console.log(obj[key]);
}
printValue(leesch, 'name');
printValue(leesch, 'age');

// 3. Property value shorthand
