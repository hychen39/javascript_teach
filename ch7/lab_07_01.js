/**
 * # Lab 01: Create a Rabbit class extended from the Animal class

## Description

R1. Create an `Animal` class with the following attributes:
- speed
- name
- run(speed): method that logs with the message template: m`${this.name} runs with speed ${this.speed}.`
- stop(): method that logs with the message template: `${this.name} stops.`

R2. Create a `Rabbit` class that extends the `Animal` class with the following attributes and methods:
- hide(): method that logs with the message template: `${this.name} hides!`


R3. Initialize a `Rabbit` object. Then, set the `name` and `speed` attributes to `White Rabbit` and `50`, respectively. Finally, call the `run` and `hide` methods.
 */

class Animal {
  constructor(name){
    this.name = name;
    this.speed = 0;
  }
  run(speed){
    this.speed = speed;
    console.log(`${this.name} runs with speed ${this.speed}.`);
  }
    stop(){
        console.log(`${this.name} stops.`);
    }
}

class Rabbit extends Animal{
    constructor(name){
        super(name);
    }
    hide(){
        console.log(`${this.name} hides!`);
    }
}

// Instantiate a Rabbit object

whiteRabbit = new Rabbit('White Rabbit');
whiteRabbit.run(5);
whiteRabbit.hide();