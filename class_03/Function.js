// Function
// - fundamental building block in the program
// - subprogram can be used multiple times
// - performs a task or calculates a value

// 1. Function declaration
// function name(param1, param2) { body... return; }
// one function === one thing
// naming: doSomething, command, verb(동사)
// e.g. createCardAndPoint -> createCard, createPoint
// function is object in JS
function printHello() {
  console.log('Hello');
}
printHello();

function log(message) {
  console.log(message);
}
log('Hello2');
log(1234);

// 2. Parameters
// premitive parameters: passed by value
// object parameters: passed by reference
function changeName(obj) {
  obj.name = 'coder';
}
const leesch = { name: 'leesch' };
changeName(leesch);
console.log(leesch);

// 3. Default parameters (added in ES6)
function showMessage(message, from = 'unknown') {
  console.log(`${message} by ${from}`);
}
showMessage('Hi!', 'leesch');

// 4. Rest parameters (added in ES6)
function printAll(...args) {
  for (let i = 0; i < args.length; i++) {
    console.log(args[i]);
  }

  for (const arg of args) {
    console.log(arg);
  }

  args.forEach((arg1) => console.log(arg1));
}
printAll('king', 'wang', 'jjang', 'leesch');

// 5. Local scope
let globalMessage = 'global'; // global variable
function printMessage() {
  let message = 'local';
  console.log(message); // loacl variable
  console.log(globalMessage);
  function printAnother() {
    console.log(message);
    let childMessage = 'hello';
  }
  // console.log(childMessage); //error
}
printMessage();

// 6.
