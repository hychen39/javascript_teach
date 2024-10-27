const maxValues = (...numbers) => {
    // numbers is an array
    console.log(typeof numbers); // array object
    for(let v of numbers){
        console.log(v);
    }
    console.log(`array size: ${numbers.length}`);
       return Math.max(...numbers);
    };

const max = maxValues(1, 2, 3, 4, 5); // 5