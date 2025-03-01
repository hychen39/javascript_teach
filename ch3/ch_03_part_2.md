---
marp: false
theme: default
header: 'Chapter 3 Javascript Multiple Values: Arrays and Objects'
footer: 'Hung-Yi Chen, Dept. of Info. Mgt., CYUT  | 2024'
class: lead
paginate: true
headingDivider: [1, 2, 3]
---

<style>
    .columns {
    display: flex;
  }
  .column {
    flex: 1;
    padding: 10px;
  }
  .column.large{
    flex: 2;
  }
  .small-font {
    font-size: 0.8em;
  }

  section > header,
section > footer {
  position: absolute;
  left: auto;
  right: 90px;
  height: 20px;
}

header {
  top: 30px;
}

footer {
  bottom: 30px;
}

</style>

# Chapter 3 Javascript Multiple Values: <br/> Part 2: Objects

## Lesson Objectives

The following topics are covered in this part:

## Objects

Objects are a data structure that comprises a collection of **properties** and **methods**.
- A property is a key-value pair.
- A method is a function that can access the object's properties to perform a task.

Objects are the abstractions of real-world entities.
- Use them to model real-world entities in the program.

An object can inherit properties and methods from another object to extend its functionality.
- Be ease for developers to maintain and extend the code.

---

Example 18: The object hierarchy of Animal, Dog, and Cat.

- Dogs and Cats inherit the properties and methods from the Animal object.

<!-- <img src="img/24-08-19-10-34-17.png" style="width:30%;" /> -->
![bg left 100%](img/24-08-19-10-34-17.png)

<div class="small-font">

Fig Source: [Object-Oriented JavaScript Inheritance](https://desalasworks.com/article/object-oriented-javascript-inheritance/)


See more about objects in the MDN web docs: [JavaScript object basics - Learn web development | MDN](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Basics)

</div>


### Creating an object

There are three ways to create an object in JavaScript: 
- object literal, 
- object constructor, and 
- `Object.create()` method. (not covered in this chapter)

### Object literal

Use the object literal `{}` to create an object when you want to create an object declaratively.
- shortcoming: Can only create one object at a time.

Example 19: Create the car FIAT-500 

The FIAT 500 in the physical world: 

<img src="img/img03_01.jpg" style="width:30%;" />

Fig source: [1]

---

Abstracting the FIAT 500 as an object:

<img src="img/img03_02.jpg" style="width:40%;" />

Fig source: [1]

--- 

Create the FIAT 500 object in the JavaScript "world".

The object literal of the FIAT 500:
```javascript
let fiat500 = {
  // properties
  maker: 'Fiat', // key: value
  model: '500',
  year: 1957,
  color: 'Blue',
  passengers: 2,
  mileage: 88000,

// methods
  drive_forward: function(distance_miles) {
    console.log('Driving forward');
    // use the "this" keyword to refer to the object itself
    this.mileage += distance_miles;  
  }, // key: function() { method body } or function object

  drive_backward: function() {
    console.log('Driving backward');
  }
}
```
---

In the above object literal:
- The properties are key-value pairs separated by a colon `:`.
- The methods are key-function pairs separated by a colon `:`.
- The `this` keyword is used to refer to the object itself to access the object's properties and methods.

### Object constructor: the template to create multiple objects

Object literal is suitable for creating a single object.
- Error-prone when creating multiple objects with the same properties and methods.
  - Repeatedly write the same properties and methods for each object.

Use the object constructor to create **multiple objects** from an object template (class).

The object constructor is a function that initializes the object's properties. 

Use the `class` keyword to define an object constructor in ES6.

---

Example 20: Define the FIAT500 class in ES6.

```javascript
class FIAT500 {
    // constructor function
    constructor(maker, model, year, color, passengers, mileage) {
        this.maker = maker; // add a property to the object
        // this['marker'] = maker;  // the same meaning as the above line
        this.model = model;
        this.year = year;
        this.color = color;
        this.passengers = passengers;
        this.mileage = mileage;
        }
    // methods: named functions
    drive_forward(distance_miles) {
        console.log('Driving forward');
        this.mileage += distance_miles;
    }
    drive_backward() {
        console.log('Driving backward');
    }
}
```
---

In the above code:
- The `constructor` function initializes the object's properties.
- Pass arguments to the constructor function to initialize the object's properties.
- In the constructor function, use the `this` keyword to refer to the object itself.
- Use the dot operator `.` to access the object's properties and methods.

### Steps to create a class: Summary

<img src="img/24-Sep-21-00-08-05.png" style="width:50%;" />

1. Define the class using the `class` keyword.
2. Define the `constructor` function to initialize the object's properties.
   - All required properties are defined in the constructor function.
3. Define the methods as named functions in the class definition.



### Create an object from the class

With the class definition, we can now create multiple objects of the same type using the `new` keyword.

Example 21: Create the myFiat500 and yourFIAT500 objects.

```javascript
let myFiat = new FIAT500('Fiat', '500', 1957, 'Blue', 2, 6000);
let yourFiat = new FIAT500('Fiat', '500', 1957, 'Red', 2, 80000);
```

Note:
- There are other ways to create an object, such as the `Object.create()` method.
- We will cover these methods after discussing the `prototype` concepts in Chapter 7.
- See more about the class in [Using classes - JavaScript | MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Using_classes)

### Accessing object properties

Use the dot operator `.` or the square brackets `[]`  with the property name (or key name) to access the object's properties.

Example 22: Log the `myFiat` object's mileage property.

```javascript
console.log(myFiat.mileage);  // 6000
// or 
console.log(myFiat['mileage']);  
```

### Add or remove object's properties

JavaScript objects are dynamic.
- You can add, delete, and update properties (or even methods) of an object after the object is created.

When you specify a **new key-value pair** that does not exist in the object, JavaScript will add the new property to the object.

---

Example 23: Add the `fuel` property to the `myFiat` object.

```javascript
myFiat.fuel = 'gasoline';   // Add a new property
console.log(myFiat.fuel);  // gasoline
```

To remove a property from an object, use the `delete` operator.

```javascript
delete myFiat.fuel;  // remove the fuel property
console.log(myFiat);  // no fuel property in the object.
```

<!-- Output:
```js
FIAT500 {
  maker: 'Fiat',
  model: '500',
  year: 1957,
  color: 'Blue',
  passengers: 2,
  mileage: 88100 
}
``` -->


## 3.8 Working with objects and arrays

### Array of objects

Dealing with an array of objects is a common task in JavaScript programming.
- Scenario
  - Query a list of **HTML element objects** with the same class name and store them in an array of objects.
  - Have a list of **File objects** when reading files from the file input element.

### Scenario: Create your array of objects

Example 24: Create the `cars` array that contains 2 FIAT500 objects.

<div class="columns">
<div class="column">
Using the object literals:
  
```javascript
let cars = [{
    maker: 'Fiat',
    model: '500',
    year: 1957,
    color: 'Blue',
    passengers: 2,
    mileage: 6000
  },
  {
    maker: 'Fiat',
    model: '500',
    year: 1957,
    color: 'Red',
    passengers: 2,
    mileage: 80000
  }
];
```
</div>
<div class="column large">
Or, using the FIAT500 constructor:

```javascript
let cars = [new FIAT500('Fiat', '500', 1957, 'Blue', 2, 6000),
            new FIAT500('Fiat', '500', 1957, 'Red', 2, 80000)];
```
</div>
</div>






### Scenario: Handling an array of HTML element object 

Example 25: Add a click event listener to each radio button in the HTML document below.

Show the radio button's value when the radio button is clicked. 
- the value is displayed in the `<p>` element with the `display` id.

<div class="columns">
  <div class="column large">

```html
<fieldset>
        <legend>Select a maintenance drone:</legend>
      
        <div>
          <input type="radio" id="huey" name="drone" value="huey" checked />
          <label for="huey">Huey</label>
        </div>
      
        <div>
          <input type="radio" id="dewey" name="drone" value="dewey" />
          <label for="dewey">Dewey</label>
        </div>
      
        <div>
          <input type="radio" id="louie" name="drone" value="louie" />
          <label for="louie">Louie</label>
        </div>
      </fieldset>
    <div>
       Your selection: <p id="display"></p>
    </div>
```
  </div>

  <div class="column">
    <img src="img/24-Sep-21-10-02-06.png" style="width:60%">
    <img src="img/24-Sep-21-10-21-05.png" style="width:40%;" />
  </div>
</div>



---

To do that, we need to add a click event listener to each radio button.
- First, we get all the radio button elements in an array.
- Then, we iterate the array and add a click event listener to each radio button.
  - The listener function gets the radio button's value and shows it in the `<p>` element.

---
Here is the code:

```javascript

let drones = document.getElementsByName('drone');

// NodeList(3) [input#huey, input#dewey, input#louie], an array of input elements
console.log(drones);  

// iterate the array
drones.forEach( drone => {
    // add a click event listener to each radio button
    drone.addEventListener('click', function(e){
        // get the radio button's value
        let value = e.target.value;
        // show the value in the <p> element
        document.getElementById('display').textContent = value;
    });
})
```

See full code in the [ex_03_array_of_objects.html](ex_03_array_of_objects.html) file.

---

Note to this demo:
- This is not the best way to handle the radio button selection.
- Adding the click event listener to the parent element of the radio buttons is a more concise way.
  - Because the event can bubble up from the radio button to the parent element.

### Object having an array property

You can use an array as a property of an object.

Example 26: Create the `myFiat` object with the `gear` property as an array of values: 1, 2, 3, 4, 5, and R 

```javascript
let myFiat = {
    maker: 'Fiat',
    model: '500',
    year: 1957,
    color: 'Blue',
    passengers: 2,
    mileage: 6000,
    gear: [1, 2, 3, 4, 5, 'R']
}
```

To log the first gear value of the `myFiat` object:

```javascript
console.log(myFiat.gear[0]);  // 1
```

### Nested objects

An object can have another object as a property.

Example 27: Create the `myFiat` object with the `engine` property as an object. The `engine` object has the `cylinder` and `power` properties.

<div class="columns">
  <div class="column large">

```javascript
let myFiat = {
    maker: 'Fiat',
    model: '500',
    year: 1957,
    color: 'Blue',
    passengers: 2,
    mileage: 6000,
    engine: {
        cylinder: 4,
        power: 22,
        // engine's method
        turbo(){
            console.log('Turbo is on' + this.power * 1.2);
        }
    }
}
```

  </div>

  <div class="column">
    <img src="img/24-Sep-21-11-01-38.png" style="width:100%">
  </div>


---

Constructed object:

![](img/24-08-19-14-10-40.png)


## Summary

We have learned: 

- Data types that can store multiple values: Arrays and Objects.
- Ways to create an array: array literal, array constructor, `Array.of()` method, and `Array.from()` method.
- Methods to operate on arrays: `push()`, `pop()`, `shift()`, `unshift()`, `splice()`, `concat()`, `find()`, `sort()`, and `reverse()`.
- Ways to iterate an array: `for/of` loop, `forEach()` method, and `entries()` method.
- Ways to create an object: object literal and object constructor.
- Working with arrays and objects: array of objects, object having an array property, and nested objects.

## References 

[1] Eric T. Freeman and Elisabeth Robson, 2014. Head First JavaScript Programming: A Brain-Friendly Guide, O'Reilly Media





<script src="../h2_numbering.js">
    // // add the following script at the end of your marp slide file.
    // const h2s = document.querySelectorAll('h2');
    // h2s.forEach(function(h2, idx){
    //     h2.innerHTML = `<span class="small-font">${idx + 1}</span> ${h2.innerHTML}`
    // })
</script>



  
