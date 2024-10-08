let emptyArray = new Array(5);
console.log(emptyArray);  // [ <5 empty items> ]

// Spread operator
let fruits = ['apple', 'banana', 'cherry'];
console.log(...fruits);  // apple banana cherry

// copy other array 
let basicColor = ['red', 'green', 'blue'];
console.log(basicColor[4]);  

let copyColor = Array(...basicColor);
console.log(copyColor);  // [ 'red', 'green', 'blue' ]

console.log(Array.of('String'));

console.log(Array.from('String'));

let basicColors = ['red', 'green', 'blue'];
basicColors[-1] = 'yellow';   
console.log(basicColors);  // ['red', 'green', 'blue', '-1': 'yellow']


for (const [idx, color] of basicColor.entries()){
    console.log(`${idx}-${color} `);
}

basicColor.forEach( (color, idx) => console.log(`${idx}-${color}`));

let fiat500 = {
    // properties
    maker: 'Fiat',
    model: '500',
    year: 1957,
    color: 'Blue',
    passengers: 2,
    mileage: 88000,
  
  // methods
    drive_forward: function(distance_miles) {
      console.log('Driving forward');
      this.mileage += distance_miles;
    },
  
    drive_backward: function() {
      console.log('Driving backward');
    },
  }

fiat500.drive_forward(100);
console.log(fiat500.mileage);  // 88100

class FIAT500 {
    // constructor function
    constructor(maker, model, year, color, passengers, mileage) {
        this.maker = maker;
        this.model = model;
        this.year = year;
        this.color = color;
        this.passengers = passengers;
        this.mileage = mileage;
        }
    // methods
    drive_forward(distance_miles) {
        console.log('Driving forward');
        this.mileage += distance_miles;
    }
    drive_backward() {
        console.log('Driving backward');
    }
}

let fiat500_1 = new FIAT500('Fiat', '500', 1957, 'Blue', 2, 88000);
fiat500_1.drive_forward(100);
console.log(fiat500_1.mileage);  // 88100

console.log(fiat500_1.__proto__);

fiat500_1.fule = 'gasoline';

console.log(fiat500_1)

delete fiat500_1.fule;

console.log(fiat500_1)

// Demo shallow copy
let fiat500_2 = new FIAT500('Fiat', '500', 1957, 'Yellow', 4, 1000);

let originalFiats = [fiat500_1, fiat500_2];
let newFiats = [...originalFiats];
newFiats[0].color = 'Red';
console.log(originalFiats[0]);  
console.log(newFiats[0]);
console.log(originalFiats[0] === newFiats[0]);  // true



