

words = ['awesome', 'amazing', 'fantastic', 'incredible', 'unbelievable'];

console.log(...words); 

const maxValues = (...numbers) => {
    // numbers is an array
    console.log(typeof numbers); // array object
    console.log(`array size: ${numbers.length}`);
  return Math.max(...numbers);
};
const max = maxValues(1, 2, 3, 4, 5); // 5

const add = (a, b) => a + b;

function invokeFunction(func, ...args) {
  return func(...args);
}

const sum = invokeFunction(add, 4, 5); // 3
console.log(sum);

// difference between var and let: function scope vs block scope
function varScope() {
  if (true) {
    var x = 10;
    let y = 20;
  }
  console.log(x); // 10
  console.log(y); // ReferenceError: y is not defined
}

// hoisting characteristics of var
function hoisting() {
  // use of the variable  a before declaration
  // hoisting: variable declaration is moved to the top of the function
  console.log(a); // undefined
  // Assign a value to a; Not declare a new variable
  var a = 10;
  console.log(a); // 10
}


let x = 1;  // valid in the entire script

function myFunction(p) {
  // parameter p is a local variable within the function
  let functionScopeVar = 10;   // local variable within the function
  if (true){
    let y = 20;  // local variable within the block
    var z = 30;
  }
  console.log(x); // 1
  // console.log(y); // ReferenceError: y is not defined
  console.log(z); // 30
  console.log(p); //  100 because the argument 100 is passed to the function.
}

myFunction(100);
console.log(x); // 1
// console.log(y); // ReferenceError: y is not defined
// console.log(z); // ReferenceError: z is not defined
// console.log(p); // ReferenceError: param is not defined

function outerFunction(x) {
  let outerVar = 10;
  function innerFunction() {
    console.log(x); // Hi, the argument passed to the outer function
    console.log(outerVar); // 10
  }
  innerFunction();
}
outerFunction('Hi');