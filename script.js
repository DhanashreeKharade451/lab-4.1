//Task 1: Flexible String Manipulation with Functions

// let firstName = prompt("Enter your First Name");
// let lastName = prompt("Enter your Last Name");

// if (firstName == null || lastName == 0) {
//   console.log("Invalid name input");
// } else {
//   console.log((fullName = firstName + lastName));
// }

function formatFullName(firstName, lastName) {

    if (!firstName || !lastName) {
    console.log("Invalid name input");

   return ;
  } 

    const formattedFirstName =
    firstName.charAt(0).toUpperCase() + firstName.slice(1).toLowerCase();

    const formattedLastName =
    lastName.charAt(0).toUpperCase() + lastName.slice(1).toLowerCase();

  return `${formattedLastName}, ${formattedFirstName}`;
}

console.log(formatFullName("dhana", "kharade"));
    
formatFullName("", "Kharade"); 
formatFullName("Dhanashree", ""); 

// //output:Kharade, Dhana
// script.js:15 Invalid name input
// script.js:15 Invalid name input





//Task 2: Mathematical Operations with Multiple Parameters


// let price = Number(prompt("Enter Price"));
// let quantity = Number(prompt("Enter Quantity"));
// let tacRate = Number(prompt("Enter tax Rate"));



function  calculateTotalCost(price,quantity,taxRate){
    
    if (typeof price != "number" || 
        typeof quantity != "number" ||
        typeof taxRate != "number" ){
             return "Invalid input.";
        }

    const totalCost = (price * quantity) * (1 + taxRate);
     return totalCost;

 }
console.log(calculateTotalCost(40, 20,2));


// ask 3: Functions with Conditional Logic
// Write a function called checkEligibility that takes two parameters: age and isEmployed. The function should check if a person is eligible for a program based on the following rules:
// If the person is over 18 and employed, they are eligible.
// If the person is over 18 but unemployed, they are conditionally eligible.
// If the person is 18 or younger, they are not eligible.
// Return an appropriate string message for each scenario.

function checkEligibility(age, isEmployed){

    if(age > 18 && isEmployed){

        console.log("Eligible for a Program.");

    } else if(age > 18 && !isEmployed){
        console.log("Person is conditionaly eligible for the program.");

    }  else {
        return console.log ("Person is not eligible for the program.");
    }
    
}

checkEligibility(18,true);
checkEligibility(18,false);
checkEligibility(15,true);
checkEligibility(16,false);


// 
// 
// script.js:61 2400
// script.js:81 Person is not eligible for the program.
// script.js:81 Person is not eligible for the program.
// script.js:81 Person is not eligible for the program.
// script.js:81 Person is not eligible for the program.
//******************************************************************************** */



// Task 4: Refactoring for Reusability
// Refactor the calculateTotalCost function from Task 2 to include an optional discount parameter. If the discount is provided,
//  the function should subtract the discount from the total cost before applying tax.
// If no discount is provided, calculate the total cost as before.


function  calculateTotalCost(price,quantity,taxRate, discount=0){
    
    if (typeof price != "number" || 
        typeof quantity != "number" ||
        typeof taxRate != "number" ){
             return "Invalid input.";
        }

    let subtotal = (price * quantity) - discount;

    const totalCost = subtotal * (1 + taxRate);
     return totalCost;



 }


console.log(calculateTotalCost(40, 20,2));
console.log(calculateTotalCost(40, 20,2,10));