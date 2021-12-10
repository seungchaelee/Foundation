// 1. String concatenation
console.log('my' + ' cat');
console.log('1' + 2);
console.log(2 + '1');
console.log('1' + '3');
console.log(1 + 2);
console.log(`string literals:
....
1 + 2 = ${1 + 2}`);
console.log("Lee's \n book \t kkk");

// 2. Numeric operators
console.log(1 + 1); // add
console.log(1 - 1); // substract
console.log(1 / 1); // divide
console.log(1 * 1); // multiply
console.log(5 % 2); // remainder
console.log(2 ** 10); // exponentiation

// 3. Increment and decrement operators
let counter = 1;

const preIncrement = ++counter;
// counter = counter + 1;
// preIncrement = counter;
console.log(`preIncrement: ${preIncrement}, counter: ${counter}`);

const postIncrement = counter++;
// postIncrement = counter;
// counter = counter + 1;
console.log(`postIncrement: ${postIncrement}, counter: ${counter}`);

const preDecrement = --counter;
console.log(`preDecrement: ${preDecrement}, counter: ${counter}`);

const postDecrement = counter--;
console.log(`postDecrement: ${postDecrement}, counter: ${counter}`);

// 4. Assignment operators
let x = 3;
let y = 6;
console.log(x += y); // x = x + y;
console.log(x -= y); // x = x - y;
console.log(x *= y); // x = x * y;
console.log(x /= y); // x = x / y;

// 5. Comparison operators
console.log(10 < 6); // less than
console.log(10 <= 6); // less than or equal
console.log(10 > 6); // greater than
console.log(10 >= 6); // greater than or equal

// 6. Logical operators: || (or), && (and), ! (not)
const value1 = false;
const value2 = 4 < 2;

// || (or), find the first truthy value
console.log(`or: ${value1 || value2 || check()}`);

function check () {
  for(let i = 0; i < 10; i++) {
    // wasting time
    console.log('😅')
  }
  return true;
}