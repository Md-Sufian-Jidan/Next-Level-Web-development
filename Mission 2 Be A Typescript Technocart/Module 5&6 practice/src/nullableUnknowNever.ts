// nullable types

const checkUserActive = (loggedIn: string | null) => {
    if (loggedIn) {
        console.log(`User is: ${loggedIn}`);
    } else {
        console.log('User is not active');
    }
};

// checkUserActive('');


// unknown

let userInput: unknown;

userInput = "Hello, world!"; // Valid
userInput = 123;             // Valid
userInput = true;            // Valid
userInput = { name: "Alice" }; // Valid


// void 

function logMessage(message: string): void {
  console.log(message);
}

logMessage("Hello from a void function!"); // This function call will log the message and return nothing.

// Attempting to assign the result of a void function to a variable
// will result in the variable having the type 'void' and the value 'undefined'.
let resultOfVoidFunction: void = logMessage("Another message.");
console.log(resultOfVoidFunction); // Output: undefined
