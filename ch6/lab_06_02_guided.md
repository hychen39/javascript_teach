# Lab 6.2: Creating a Random Description Module

In this lab, you will create a JavaScript module that randomly describes a name using an array of descriptive words. The module will use an **Immediately Invoked Function Expression (IIFE)** to encapsulate its logic and expose a public function.

## Learning Objectives
- Understand how to use IIFE to create private and public members in a module.
- Learn how to use `Math.random()` and `Math.floor()` for generating random values.
- Practice working with arrays and string interpolation.


## Step-by-Step Instructions

### Step 1: Create an IIFE

An IIFE is a function that is executed immediately after it is defined. Use an IIFE to encapsulate the logic of your module and prevent variables from polluting the global scope.

```javascript
(function() {
    // ...existing code...
})();
```

### Step 2: Define a Private Array

Inside the IIFE, define a private array called `words` that contains a list of descriptive words. These words will be used to describe a name.

```javascript
let words = ['smart', 'funny', 'kind', 'hardworking', 'intelligent', 'creative', 'humble', 'caring', 'loving'];
```

### Step 3: Create a Function to Generate Random Descriptions

Define a function `randomWord` that:
1. Takes a name as an argument.
2. Selects a random word from the `words` array using `Math.random()` and `Math.floor()`.
3. Returns a string that combines the name and the randomly selected word.

```javascript
function randomWord(name) {
    let randomIndex = Math.floor(Math.random() * words.length);
    return `${name}, you are ${words[randomIndex]}.`;
}
```

### Step 4: Expose the Function Publicly

Expose the `randomWord` function to the global scope by attaching it to a public object, such as `praiseModule`. This allows other parts of the program to access the function.

```javascript
global.praiseModule = {
    randomWord: randomWord
};
```

### Step 5: Test the Module

Call the `randomWord` function multiple times with a sample name (e.g., "Alice") to verify that it works as expected.

```javascript
console.log(praiseModule.randomWord('Alice'));
console.log(praiseModule.randomWord('Alice'));
console.log(praiseModule.randomWord('Alice'));
console.log(praiseModule.randomWord('Alice'));
```


## Full Code Example

Here is the complete code for the module:

```javascript
(function() {
    let words = ['smart', 'funny', 'kind', 'hardworking', 'intelligent', 'creative', 'humble', 'caring', 'loving'];

    function randomWord(name) {
        let randomIndex = Math.floor(Math.random() * words.length);
        return `${name}, you are ${words[randomIndex]}.`;
    }

    global.praiseModule = {
        randomWord: randomWord
    };
})();

console.log(praiseModule.randomWord('Alice'));
console.log(praiseModule.randomWord('Alice'));
console.log(praiseModule.randomWord('Alice'));
console.log(praiseModule.randomWord('Alice'));
```


## Key Concepts Recap

- **IIFE**: Used to create private variables and functions while exposing only what is necessary.
- **`Math.random()`**: Generates a random number between 0 and 1.
- **`Math.floor()`**: Rounds a number down to the nearest integer.
- **Encapsulation**: Keeps the `words` array private while exposing the `randomWord` function.

---

## Challenge

- Use the arrow function syntax to define the `randomWord` function.