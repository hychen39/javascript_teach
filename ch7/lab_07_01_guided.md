# Guided Steps for Lab 01: Create a Rabbit class extended from the Animal class

This lab will guide you through creating a class hierarchy in JavaScript. You will create an `Animal` class and extend it to create a `Rabbit` class. The `Rabbit` class will inherit properties and methods from the `Animal` class. Additionally, you will add the method `hide()` to the `Rabbit` class that is specific to it.

After completing this lab, you will have a better understanding of how to use classes and inheritance in JavaScript.


## Step 1: Create the `Animal` class
1. Define a class named `Animal`.
2. Add a constructor that accepts `name` and `speed` as parameters and assigns them to the respective properties.
3. Implement the `run(speed)` method:
   - Update the `speed` property with the given parameter.
   - Log the message: `${this.name} runs with speed ${this.speed}.`
4. Implement the `stop()` method:
   - Log the message: `${this.name} stops.`

### Example:
```javascript
class Animal {
    constructor(name, speed) {
        this.name = name;
        this.speed = speed;
    }

    run(speed) {
        this.speed = speed;
        console.log(`${this.name} runs with speed ${this.speed}.`);
    }

    stop() {
        console.log(`${this.name} stops.`);
    }
}
```

---

## Step 2: Create the `Rabbit` class
1. Define a class named `Rabbit` that extends the `Animal` class.
2. Add a `hide()` method:
   - Log the message: `${this.name} hides!`

### Example:

```javascript
class Rabbit extends Animal {
    constructor(name, speed) {
        super(name, speed);
    }
    hide() {
        console.log(`${this.name} hides!`);
    }
}
```

---

## Step 3: Initialize a `Rabbit` object

1. Create a new instance of the `Rabbit` class.
2. Set the `name` property to `White Rabbit` and the `speed` property to `50`.
3. Call the `run` method with the speed `50`.
4. Call the `hide` method.

### Example:

```javascript
const rabbit = new Rabbit('White Rabbit', 50);
rabbit.run(50);
rabbit.hide();
```

---

## Final Notes
- Ensure that the `Rabbit` class inherits all methods from the `Animal` class.
- Test your implementation to verify that all methods work as expected.
