// Promise (I will give you the result later)>>>>>>>>>
// A Promise is an object that represents the eventual success or failure of an asynchronous operation.
// Represents the future result of an asynchronous operation.
// States: Pending, Fulfilled, Rejected.
// Used to avoid callback hell and handle async tasks.


// Promise Chaining (Finish one task, then start the next task)>>>>>>>>>>
// Promise Chaining is the process of executing multiple asynchronous tasks one after another using multiple .then() methods.
// Executes multiple promises one after another.
// Uses multiple .then() methods.
// Each .then() receives the result of the previous promise.
// Makes async code clean and readable.


function fetchData(){
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        let success = true;
        if(success){
            resolve("Data fetched successfully");
        }else{
            reject("Error fetching data");
        }
      }, 3000);
    });
};

// let response = fetchData();
// console.log(response);

fetchData()
.then((data) => console.log(data))
.then((data) => {
    console.log(data);
    return data.toLowerCase();
})
 .then((value) =>{
   console.log(value);
})
.catch((error) => console.error(error))

