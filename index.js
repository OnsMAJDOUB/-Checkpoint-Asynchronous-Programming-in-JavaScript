// //  Task 1 
// function delay(ms) {
//   return new Promise((resolve) => setTimeout(resolve, ms));
// }


// async function iterateWithAsyncAwait(array) {
//   for (const value of array) {
//     console.log(value); 
//     await delay(1000); 
//   }
// }

// // Example usage
// const values = ["apple", "banana", "cherry"];
// // iterateWithAsyncAwait(values);

// //  Task 2
// Simulating an API call with a delay using a promise
// function mockApiCall() {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve({ data: "This is the API response data" });
//     }, 2000); /
//   });
// }

// async function awaitCall() {
//   try {
//     console.log("Fetching data...");
//     const response = await mockApiCall(); 
//     console.log("Data received:", response.data); 
//   } catch (error) {
//     console.error("Error fetching data:", error); 
//   }
// }


// awaitCall();


//  // Task 3 

// function logAfterDelay(message) {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       console.log(message);
//       resolve();
//     }, 1000); 
//   });
// }
// async function chainedAsyncFunctions() {
//   await logAfterDelay('Step 1: First message');
//   await logAfterDelay('Step 2: Second message');
//   await logAfterDelay('Step 3: Third message');
// }

// chainedAsyncFunctions();


//   tast task 3

// newFunction();


// function newFunction() {
//     const functionOne = async () => {
//         await new Promise((resolve) => setTimeout(resolve, 1000));
//         console.log(" function one completed successfully");

//     };

//     const functionTwo = async () => {
//         await new Promise((resolve) => setTimeout(resolve, 1000));
//         console.log(" function Two completed successfully");
//     };


//     const functionThree = async () => {
//         await new Promise((resolve) => setTimeout(resolve, 1000));
//         console.log(" function Three completed successfully");

//     };

//     const executeFunctions = async () => {
//         await functionOne();
//         await functionTwo();
//         await functionThree();
//     };

//     executeFunctions();
// }
