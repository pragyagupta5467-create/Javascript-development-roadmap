// async>>>>>>>>>>>>>>
// Makes a function return a Promise.
// Used to write asynchronous code.

// await>>>>>>>>>>>>>>
// Waits for a Promise to complete.
// Can only be used inside an async function.

// Promise.all()>>>>>>>
// Runs multiple Promises in parallel.
// Waits until all Promises are resolved.
// Returns an array of results.
// Rejects if any one Promise fails.

// async  -> Function returns a Promise.
// await  -> Wait for one Promise.
// Promise.all() -> Wait for all Promises.


// function fetchUserData(){
//     return new Promise ((resolve,reject) =>{
//         setTimeout(() => {
//            resolve({name: "Pragya" , url: "https://chaicode.com"}) 
//         },3000)
//     })
// }


// async function getUserData(){
//     try{
//         console.log("fetching user data...");
//         const userData = await fetchUserData();
//         console.log("User data fetched successfully");
//         console.log("User data: ", usserData);
//     }catch (error){
//        console.log("Error fetching data", error); 
//     }
    
// }
// getUserData();


// part-2>>>>>>>>>>>>>>>>>>>>>>

function fetchPostData(){
    return new Promise((resolve) =>{
        setTimeout(() => {
          resolve("Post Data fetched");  
        },2000);
    });
}

function fetchCommentData(){
    return new Promise((resolve) =>{
        setTimeout(() => {
          resolve("Comment Data fetched");  
        },3000);
    });
}

async function getBlogData() {
    try {
        console.log("fetching blog data");
        // const blogData = await fetchPostData();
        // const commentData = await fetchCommentData();
        const[postData,commentData] = await Promise.all([fetchPostData(),fetchCommentData(),  
        ]);
        console.log(blogData);
        console.log(commentData);

        console.log("fetch complete");
    } catch (error) {
        console.error("Error fetching blog data", error);
    }
}
getBlogData();