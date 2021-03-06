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
const person1 = { name: 'bob', age: 3 };
const person2 = { name: 'steve', age: 5 };
const person3 = { name: 'dave', age: 7 };
const person4 = new Person('leesch', 26);
console.log(person4);

// 4. Constructor Function
function Person(name, age) {
// this = {};
this.name = name;
this.age = age;
// return this;
}

// 5. in operator: property existence check (key in obj)
console.log('name' in leesch);
console.log('age' in leesch);
console.log('random' in leesch);
console.log(leesch.random);

// 6. for..in vs for..of
// for (key in obj)
console.clear(); // console 삭제
for (key in leesch) {
  console.log(key);
}

// for (value of iterable)
const array = [1, 2, 3, 4];
for (value of array) {
  console.log(value);
}

// 7. Fun cloning
// Object.assign(dest, [obj1, obj2, obj3...])
const user = { name: 'leesch', age: '26' };
const user2 = user;
// user2.name = 'coder';
console.log(user2);

// old way
const user3 = {};
for (key in user) {
  user3[key] = user[key];
}
console.clear();
console.log(user3);

const user4 = Object.assign({}, user);
console.log(user4);

// another example
const fruit1 = { color: 'red' };
const fruit2 = { color: 'blue', size: 'big' };
const mixed = Object.assign({}, fruit1, fruit2);
console.log(mixed.color);
console.log(mixed.size);
