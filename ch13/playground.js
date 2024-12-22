// function startTimeouts(){
//     setTimeout(()=>{
//         console.log('First timeout');
//         setTimeout(()=>{
//             console.log('Second timeout');
//             setTimeout(()=>{
//                 console.log('Third timeout');
//             }, 1000);
//         });
//     }, 1000)
// }

// startTimeouts();

// rewrite the code with the Promise object and thenable chaining.

function startTimeouts(msg){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            console.log(msg);
            resolve();
        }, 1000);
    })
}

startTimeouts('First timeout')
.then(()=>startTimeouts('Second timeout'))
.then(()=>startTimeouts('Third timeout'))
.then(()=>startTimeouts('Fourth timeout'));