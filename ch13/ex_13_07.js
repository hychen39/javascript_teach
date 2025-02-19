
// ex_13_06.js
function longtimeTask(){
    return new Promise((resolve, reject) => {
        console.log('== Enter the long task');
        let i = 0;
        while (i < 9000000000) { // still run the task in JS engine, not Web API. 
            // NOT async operation
            i++;
        }
        // Return a random number between 0 and 100
        console.log('== Exit the long task');
        const result = Math.random() * 100;
        if (result < 50) {
            reject('The result is less than 50');
        }
        resolve(result); // fulfilled 
    });
}

// call the longtimeTask function
console.log('Start the long running task');
longtimeTask()
    .then(result => console.log('The result is', result))
    .catch(error => console.error('An error occurred:', error));
console.log('Please wait for the long running task to complete...');    
