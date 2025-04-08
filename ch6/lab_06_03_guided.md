# Lab 6.3: Simple Addition and Multiplication Calculator

In this lab, you will create a simple calculator that can perform addition and multiplication on a variable number of arguments. Follow the steps below to complete the lab.

---

## Step 1: Create the `sum` function

1. Define a function named `sum` that takes a variable number of arguments using the rest parameter syntax (`...args`).
2. Inside the function, calculate the sum of all arguments.
   - Use a `for` loop or the `reduce` method to iterate through the arguments and calculate the total.
3. Return the total.

Example:
```javascript
function sum(...args) {
    let total = 0;
    for (let value of args) {
        total += Number(value);
    }
    return total;
}
```


## Step 2: Create the `multiply` function

1. Define a function named `multiply` that takes a variable number of arguments using the rest parameter syntax (`...args`).
2. Inside the function, calculate the product of all arguments.
   - Use a `for` loop or the `reduce` method to iterate through the arguments and calculate the total.
3. Return the total.

Example:
```javascript
function multiply(...args) {
    let total = 1;
    for (let value of args) {
        total *= Number(value);
    }
    return total;
}
```

---

## Step 3: Create an `operations` object

1. Create an object named `operations` to store the `sum` and `multiply` functions as properties.
2. Use the property names `sum` and `multiply` to index the respective functions.

Example:
```javascript
const operations = {
    sum: sum,
    multiply: multiply
};
```


## Step 4: Create the `invokeOperation` function

1. Define a function named `invokeOperation` that takes a function (`func`) and a variable number of arguments (`...args`).
2. Inside the function, call the passed function (`func`) with the provided arguments and return the result.

Example:
```javascript
function invokeOperation(func, ...args) {
    return func(...args);
}
```

---

## Step 5: Create the `calculate` function

1. Define a function named `calculate` that takes a string (`str`) as input.
2. Inside the function:
   - Use the `split` method to split the string into an array of strings.
   - Extract the operation (e.g., `sum` or `multiply`) and the arguments from the array.
   - Use the `invokeOperation` function to call the appropriate function from the `operations` object with the extracted arguments.
   - Print the result to the console.

Example:
```javascript
function calculate(str) {
    let [operation, ...args] = str.split(" ");
    let result = invokeOperation(operations[operation], ...args);
    console.log(result);
}
```

---

## Step 6: Test the program

1. Create test strings for addition and multiplication.
2. Call the `calculate` function with the test strings and verify the output.

Example:
```javascript
let testStr1 = "sum 1 2 3 4";
let testStr2 = "multiply 1 2 3 4";

calculate(testStr1); // Output: 10
calculate(testStr2); // Output: 24
```

