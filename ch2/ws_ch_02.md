
# Worksheet for Chapter 2: JavaScript Essentials

## Important Concepts

### Variables
- Declaring variables using `let`, `const`, and `var`
- Scope of variables: block scope vs function scope
- Global variables
- Uninitialized variables and `undefined`

### Primitive Data Types
- Types: string, number, bigint, boolean, undefined, symbol, null
- Immutability of primitive data types
- Primitive vs reference data types
- Auto-boxing of primitive data types to objects
- Comparing primitive data types by value

### String Template
- Using backticks for string templates
- Embedding expressions in string templates

### Null and Undefined
- Differences between `null` and `undefined`
- Usage of `null` and `undefined`

### Data Type Conversion
- Type inference and `typeof` operator
- Explicit type conversion using `Number()`, `String()`, `Boolean()`, `BigInt()`, `Symbol()`
- Implicit type conversion and conversion rules of `+` and `==` operators

### Operators
- Arithmetic, assignment, comparison, and logical operators
- Prefix vs postfix increment and decrement operators

### Practical Technique: Setting Default Values
- Using `||` and `??` operators to set default values

## Short Answer Questions

### Variables

1. What is the difference between `let`, `const`, and `var` when declaring variables?
2. What will be the output of the following code snippet?
    ```javascript
    let count = 0;
    function aFunction() {
        for (let i = 0; i < 10; i++) {
            var sum = 10;
        }
        console.log('sum:', sum);
        console.log('i:', i);
    }
    aFunction();
    ```

### Primitive Data Types

3. List all the primitive data types in JavaScript.
4. Explain the immutability of primitive data types with an example.
5. What is the difference between primitive and reference data types?

### String Template

6. Rewrite the following code using a string template:
   
    ```javascript
    let name = 'Alice';
    let age = 20;
    let message = 'Hello, ' + name + '. You are ' + age + ' years old.';
    ```

### Null and Undefined

7. What is the difference between `null` and `undefined`?

8. What will be the output of the following code snippet?
    ```javascript
    let x;
    console.log(x);
    x = null;
    console.log(x);
    ```

### Data Type Conversion

9. What is the result of `1 + "1"` and why?

10. Convert the string `"101"` to a number using `Number()` and `parseInt()`.

### Operators

11. What is the difference between `==` and `===` operators?


12. What will be the output of the following code snippet?
    ```javascript
    let x = 1;
    console.log(x++);
    console.log(x);
    let y = 1;
    console.log(++y);
    console.log(y);
    ```

### Practical Technique: Setting Default Values

13. When do you need to use the `||` operator to set a default value?

14. When do you need to use the `??` operator to set a default value?

15. Consider the scenario. You have a function `greet` that takes a name as an argument. If the name is not provided, undefined or 0, the function should greet the user with a default name "Guest". Modify the function `greet` to achieve this requirement.

    ```javascript
    function greet(name) {
        let userName = name;
        console.log(`Hello, ${userName}`);
    }
    ```


