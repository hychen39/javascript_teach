
// create a private symbol
privateId = Symbol('id');

// create a public in the public symbol registry
sharedId = Symbol.for('id');

console.log(privateId === sharedId); 

// Get the symbol by key from the public symbol registry
retrievedId = Symbol.for('id');
console.log(retrievedId === sharedId);

// undefined variable

let y;
console.log(y);
console.log(typeof y);

let x = null;
console.log(x == y); // false

console.log(Number("12.3"))


console.log("1" == 1); // true
console.log(1 == "1"); // true 
console.log(0 == false); // true
// not perform type coercion between null and any other value except undefined.
console.log(0 == null); // false
//  not perform type coercion between null and any other value except undefined.
console.log(0 == undefined); // false
// Explicitly convert null to boolean false before comparison
console.log(0 == !!null); // true, look at Logical NOT operator
// Explicitly convert undefined to boolean false before comparison
console.log(0 == !!undefined); // true, look at Logical NOT operator
// According to the ECMAScript specification, null and undefined are only equal to themselves and each other. 
console.log(null == undefined); // true
