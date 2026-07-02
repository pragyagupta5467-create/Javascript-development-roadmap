// this>>>>>>>
// this refers to the object that invokes the current function.
// call()>>>>>
// Invokes a function immediately with a specified this value and separate arguments.
// apply()>>>>
// Invokes a function immediately with a specified this value and arguments passed as an array.
// bind()>>>>>
// Returns a new function with this permanently bound, without executing it immediately.


const person = {
    name: Pragya
    // greet(){
    //     console.log('Hi , I am ${this.name}');
    // },
};

person.greet();

const greetFunction = person.greet 
greetFunction()

const boundGreet = person.greet.bind({name: "John"});
boundGreet();

// bind, call, apply
