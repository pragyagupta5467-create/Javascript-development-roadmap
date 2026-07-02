// Iterator(An Iterator is an object that returns one value at a time using the next() method.)>>>>>>>>>>>
// Returns one value at a time.
// Uses next().
// Each call returns { value, done }.

// Generator(A Generator is a special function (function*) that can pause and resume execution using yield and automatically creates an iterator.)>>>>>>>>>>
// Special function declared with function*.
// Uses yield to pause and resume execution.
// Automatically returns an iterator.

function* numberGenerator(){
    yield 1
    yield 2
    yield 3
}

let gen = numberGenerator();
let genTwo = numberGenerator();

console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);

console.log(genTwo.next().value);
console.log(genTwo.next().value);

// next()-> iterator
// yeild -> generator