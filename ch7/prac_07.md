# Practices for Chapter 7

## Practice 1

Create a class to track the employees in a company. 

The class should have the following properties: first name, last name, and the number of years worked.

Create three employee objects using the class and add them to an array. 

Add a method to the class's prototype. The method returns the employee's full name and years of service. Do not add the method directly to the class definition.

Iterate through the array and print the details of each employee.

Example output:
```
Alice Smith has worked for 2 years
Bob Brown has worked for 3 years
Charlie Johnson has worked for 4 years
```


## Practice 2

Consider the following code in [prac_07_02_dynamic_dispatch](./prac_07_02_dynamic_dispatch.js).js :

```javascript
class Vehicle {
    constructor(color, currentSpeed, maxSpeed, gasoline){
        this.color = color;
        this.currentSpeed = currentSpeed;
        this.maxSpeed = maxSpeed;
        this.gasoline = gasoline;
    }

    turbo(){
        console.log("Turbo on...");
        this.currentSpeed *= 2
        console.log("Turbo off...");
        console.log("Current speed: ", this.currentSpeed);
    }
    sleep(ms){
        return new Promise(resolve => setTimeout(resolve, ms));
    }
        
}

class Motorcycle extends Vehicle {
    constructor(color, currentSpeed, maxSpeed, fuel){
        super(color, currentSpeed, maxSpeed, fuel);
    }
}

class SportCar extends Vehicle {
    constructor(color, currentSpeed, maxSpeed, fuel){
        super(color, currentSpeed, maxSpeed, fuel);
    }

    turbo(){
        console.log("Turbo() in SportCar class");
        this.currentSpeed *= 5;
        console.log("Turbo off...");
        console.log("Current speed: ", this.currentSpeed);
    }
}

let motor = new Motorcycle('red', 10, 100, 'gasoline');
let sportCar = new SportCar('blue', 10, 220, 'diesel');

motor.turbo();
sportCar.turbo();
```

1. What are the current speeds of the `motor` and `sportCar` after calling the `turbo()` method, respectively?
2. JavaScript uses the "Dynamic Dispatch" to determine which method to call. Please explain "Dynamic Dispatch" and how it works in the above code.


  
