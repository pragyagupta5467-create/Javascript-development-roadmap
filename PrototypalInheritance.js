// Prototypal Inheritance is a feature in JavaScript where one object can inherit and access the properties and methods of another object through its prototype.
// Prototypal Inheritance
// One object inherits properties and methods from another object.
// Uses the prototype chain.
// If a property is not found in the current object,
// JavaScript looks for it in its prototype.
// Provides code reuse and saves memory.

// One-line Formula >>>>>
// Object doesn't have it? → JavaScript checks the Prototype.

function Person(name){
    this.name = name;
}


Person.prototype.greet = function(){
    console.log('Hello, my name is ${this.name}');
};

let Pragya = new Person("Pragya");
Pragya.greet();
