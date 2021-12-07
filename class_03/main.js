// 1. Use strict
// added in ES 5
// use this for Valina Javascript.
'use strict';

// 2. Variable
// let (added in ES6)

let globalName = 'Global Name';
{
  let name = 'seungchae';
  console.log(name);
  name = 'hello';
  console.log(name);
  console.log(globalName);
}
console.log(name);
console.log(globalName);
