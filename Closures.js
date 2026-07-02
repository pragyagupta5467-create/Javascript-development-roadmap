// A closure is a functions which created when an inner function remembers and can access variables
//  from its outer function even after the outer function has finished executing.

// Memory Trick>>>>>>>>
// Closure = "Function + Memory"

// Remember this:>>>>>>>>>>>
// Outer Function → Creates a variable.
// Inner Function → Uses that variable.
// The Outer Function finishes executing.
// The Inner Function still remembers and can access that variable.

//  This ability of the inner function to remember the outer function's variables is called a Closure.

// Definition>>>>>>>>>>>>>
// A closure is a function that remembers and can access variables from its outer function even after the outer function has finished executing.

// Super Easy Formula>>>>>>>>>>

// Outer Function
//       ↓
// Creates Variable
//       ↓
// Inner Function Uses It
//       ↓
// Outer Function Ends
//       ↓
// Inner Function Still Remembers It
//       ↓
//  Closure

// This "remembers" part is the key idea of closures.

function outer(){
    let counter = 4;
    return function(){
        counter++;
        return counter;
    }
}

let increment = outer();
console.log(increment());  
console.log(increment());  
console.log(increment());  
