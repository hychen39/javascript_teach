// Shallow copy on reference type

let fruits = ['apple', 'banana', 'cherry'];

let picnicBasket_1 = ['sandwich', 'chips', 'soda', fruits];

let picnicBasket_2 = [...picnicBasket_1];

console.log(picnicBasket_1);  // [ 'sandwich', 'chips', 'soda', [ 'apple', 'banana', 'cherry' ] ]

console.log(picnicBasket_2);  // [ 'sandwich', 'chips', 'soda', [ 'apple', 'banana', 'cherry' ] ]

// the fruit in  picnicBasket_1 and picnicBasket_2 arrays reference the same array in memory

picnicBasket_1[3].push('grapes');

console.log(picnicBasket_1);  // [ 'sandwich', 'chips', 'soda', [ 'apple', 'banana', 'cherry', 'grapes' ] ]

console.log(picnicBasket_2);  // [ 'sandwich', 'chips', 'soda', [ 'apple', 'banana', 'cherry', 'grapes' ] ]
