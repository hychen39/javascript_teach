
// ex_13_07.js
// Rewrite ex_13_06.js by async/await syntax

// A function that returns a promise
// We don't qualify the function with async keyword because it explicitly returns a promise
function longtimeTask(){
    return new Promise((resolve, reject) => {
        console.log('== Enter the long async task');
        // Use the Web API to run the long running task
        // Offload the task to the Web API. 
        // JS engine can continue to run other code
        setTimeout(() => {
            console.log('== Inside the long async task');
            let result = Math.random() * 100;
            if (result < 10) {
                reject('The result is less than 50');
            }    
            resolve(result); // fulfilled
            console.log('== Exit the long task');
        }
        , 2000);
        // Return a random number between 0 and 100
    });
}

// call the longtimeTask function
console.log('Start the long running task');
// Use an Immediate Invoke Function Expression (IIFE) to call the function returning a promise
(async () => {
    let result = await longtimeTask();
    console.log('The result is: ', result);
})()
console.log('Please wait for the long running task to complete...');    
