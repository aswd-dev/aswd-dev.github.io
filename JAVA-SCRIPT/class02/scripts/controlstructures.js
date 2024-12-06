console.log("============ Control Structures ============");

// 1 Conditional statements
// 2 Switch statement
// 3 Looping structures

// Purpose : Control the flow of a program


console.log("============ Conditional statements ============");

let num = 10;


console.log("============ IF statement ============");

if (num > 0){
    console.log(`The number ${num} is positive`)
}


console.log("============ ELSE statement ============");


if (num > 0){
    console.log(`The number ${num} is positive`)
} else {
    console.log(`The number ${num} is NOT positive`)
}


console.log("============ ELSE IF statement ============");

num = -10;
if (num > 0){
    console.log(`The number ${num} is positive`);
} else if (num < 0){
    console.log(`The number ${num} is negative`);
} else {
    console.log("The number is zero");
}
if ( num < -5) {
    console.log("Number is smaller than -5");
}


console.log("============ Getting an input ============");

let input = prompt("Enter a number:");
console.log(input);
console.log(typeof input);

console.log("after parsing the input into integer");


let parsedNumber = parseInt(input);
console.log(input);
console.log(typeof parsedNumber);

if (Number.isNaN(parsedNumber)){
    alert("You've entered and invalid number!");
} else {
    alert(`The parsed number value is ${parsedNumber}`);
}




