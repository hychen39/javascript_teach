
/** Closure
 * - Lexical scope is the scope of a variable defined by its location in the source code.
  -  When executing, the nested functions have access to variables declared in their outer scope
  -  This means that the inner function are executed using the variable scope that was in effect when they were defined, not the one that is in effect when they are invoked.
 */

// Global variable 
const a = 10;

function f(b){
    // return a function object that has access to the variables or parameters of the outer function,
    return function (){
        let c = 10;
        return a + b + c;
    }
}

funcN1 = f(20);
// f1 has the lexical variable b = 20
const k = funcN1();
console.log(k); // 40

funcN2 = f(30);
// f2 has the lexical variable b = 30
const m = funcN2()
console.log(m); // 50