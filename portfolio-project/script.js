// Hello from script.js!
console.log("Hello from script.js!");

// Declare variables using const
const name = "Ramadhani";
const age = 25;
const isStudent = true;

// Log each variable to the console
console.log("Name:", name);
console.log("Age:", age);
console.log("Is Student:", isStudent);

// Work with data using template literals
let info = `My name is ${name} and I am ${age} years old.`;
console.log("Info:", info);

// Perform calculations
const favNum1 = 7;
const favNum2 = 3;

const sum = favNum1 + favNum2;
console.log("Sum:", sum);

const product = favNum1 * favNum2;
console.log("Product:", product);

// Create User Profile Object
const userProfile = {
    username: "Ramadhani",
    age: 25,
    isLoggedIn: true,
    skills: ["HTML", "CSS", "JavaScript", "React", "TailwindCSS"]
};

// Access and Log Data
console.log("Username:", userProfile.username);
console.log("Second skill:", userProfile.skills[1]);

// Create a "Welcome" Function
function displayWelcomeMessage(user) {
    const welcomeMessage = `Welcome back, ${user.username}! Ready to code today?`;
    console.log(welcomeMessage);
}

// Call the welcome function
displayWelcomeMessage(userProfile);

// Create a "Status Check" Function
function checkLoginStatus(profile) {
    if (profile.isLoggedIn) {
        return "User is currently logged in.";
    } else {
        return "User is not logged in.";
    }
}

// Call the status check function and store result
const statusMessage = checkLoginStatus(userProfile);
console.log(statusMessage);
