
/**
 *  This function is a long running task that takes a while to complete.
 * @returns 
 */
function longtimeTask() {
  console.log('== Enter the long task');
  let i = 0;
  while (i < 10000) {
    i++;
  }
  console.log('== Exit the long task');
  // Return a random number between 0 and 100
  return Math.random() * 100;
}


console.log('Start the long running task');

// Use the Promise object to run the long running task
// When the promise is created, the long running task is started
const longtimeTaskPromise = new Promise((resolve, reject) => {
    const result = longtimeTask();
    if (result < 50) {
        reject('The result is less than 50');
    }
    resolve(result); // fulfilled 
});

// get the result of the long running task
longtimeTaskPromise
    .then(result => console.log('The result is', result))
    .catch(error => console.error('An error occurred:', error));

console.log('Please wait for the long running task to complete...');