// ex_13_09.js
// A function that returns a promise
function longtimeTask(){
    return new Promise((resolve, reject) => {
        console.log('== Enter the long async task');
        // Use the Web API to run the long running task
        // Offload the task to the Web API. 
        // JS engine can continue to run other code
        setTimeout(() => {
            console.log('== Inside the long async task');
            let result = Math.random() * 100;
            if (result < 50) {
                reject('The result is less than 50');
            }    
            resolve(result); // fulfilled
            console.log('== Exit the long task');
        }
        , 2000);
        // Return a random number between 0 and 100
    });
}

console.log('Start the long running task');
// Define a named async function 
async function runLongTimeTask(){
    try{
        let result = await longtimeTask();
        console.log('The result is', result);
    } catch(error){
        console.error('An error occurred:', error);
    }
}
// call the longtimeTask function
runLongTimeTask();
runLongTimeTask();
runLongTimeTask();
runLongTimeTask();
console.log('Please wait for the long running task to complete...');    
