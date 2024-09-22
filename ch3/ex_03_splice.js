// Insert Fet after Jan => Insert an element at index 1
let months = ['Jan', 'March', 'April', 'June'];
months.splice(1,0,'Feb'); 
console.log(months);

// Update the second element to February
// Delete then insert
let delElements = months.splice(1, 1, 'February');
console.log(months);
console.log(delElements);

// Delete the first two months 
delElements = months.splice(0, 2);
console.log(months);
console.log(delElements);

// Insert Jan and Feb at the beginning
let newMonths = ['Jan', 'Feb'];
months.splice(0, 0, ...newMonths);
console.log(months);
