// Asynchronous JavaScript allows time-consuming tasks (like timers, API calls, or user events) 
// to run without blocking the execution of the remaining code. The Event Loop coordinates this
//  by moving completed callbacks from the queue to the Call Stack when it becomes empty.

console.log("Hello developer!");

function sayHello(){
    console.log("I would like to say Hello!");   
}

setTimeout(() => {
    sayHello();
}, 4000);

console.log("myCode");

for (let index = 0; index < 10; index++) {
    console.log(index);   
}