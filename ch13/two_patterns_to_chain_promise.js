// Pattern 1: Chaining Promises sequentially
function firstTask() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('First task completed');
            resolve(1);
        }, 1000);
    });
}

function secondTask(result) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Second task completed');
            reject(result + 1); // reject the promise
        }, 1000);
    });
}

function thirdTask(result) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Third task completed');
            resolve(result + 1);
        }, 1000);
    });
}

// Pattern A: Separate error handling for the promise chain
// Outputs:
//  First task completed
//  Second task completed
//  Error: 2
//  All tasks completed, final result: 3

firstTask()
    .then(result => secondTask(result))  // The anonymous function returns a promise
    .then(result => thirdTask(result), error => {
        console.log('Error:', error);
        // return a resolved promise to continue the chain
        return Promise.resolve(error + 1);
    })
    .then(result => {
        console.log('All tasks completed, final result:', result);
    })
    .catch(error => {
        console.error('Final catch:', error);
    });

// Pattern B: Single error handling for the promise chain
// Outputs:
//  First task completed
//  Second task completed
//  Final catch: 2

// firstTask()
//     .then(result => secondTask(result))
//     .then(result => thirdTask(result))
//     .then(result => {
//         console.log('All tasks completed, final result:', result);
//     })
//     .catch(error => {
//         console.error('Final catch:', error);
//     });
