// Use IIFE to create a private variable for a function.

(function() {
    let counter = 0;

    function setStartValue(startValue) {
        counter = startValue;
    }
    function increment() {
        counter += 1;
        console.log(counter);
    }

    // Expose the private functions to the global or window objects publicly.
    // Use the global object to attach the module in the NODE.js environment
    // Use the window object to attach the module in the browser environment
    global.myModule = {
        increment: increment,
        setStartValue: setStartValue
    };
})();

myModule.setStartValue(10);
myModule.increment()
myModule.increment();
myModule.increment();

