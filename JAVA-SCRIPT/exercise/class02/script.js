let myName = `Bob Bobsky`;
let greetings = `Hello. My name is ${myName} and I greet you!`;
console.log(greetings);

/******************************************************/

let sentence = 'It\'s a good day to start programming!';
let anotherSentence = "Programming is very \"easy\"!";
console.log(sentence);
console.log(anotherSentence);


/******************************************************/

console.log("=========== Logical OR || ===========");

console.log(true || true); // true
console.log(true || false); // true
console.log(false || true); // true
console.log(false || false); // false


console.log("=========== Logical AND && ===========");

console.log(true && true); // true
console.log(true && false); // false
console.log(false && true); // false
console.log(false && false); // false


console.log("=========== Logical NOT ! || ===========");

console.log(!true);  // false 
console.log(!false);  // true

// sprotivna vrednost ako e true ide false so ! napred

console.log("=========== equalities ===========");

console.log(3 == "3"); // true
console.log(3 === "3"); // false


console.log(5 > 0 && (5 + 6 < 10) || 10 > 5);

// breakdown:
// 5 > 0 = >  true
// 11 < 10 = > false
// 10 > 5 = > true
// true && false || truen
// false || true = > true



// Logical operators always result in a boolean value
console.log(true && false); // Will show false 

// Logical operators results can be stored in a variable
let result = (2 > 5) || (7 == 7) // Will execute the logical expression and store true in the variable
console.log(result); // true


let num1 = 50;
let num2 = 100;
console.log(num1 < num2 && num2 + 50 === 150); // true

let expression = num1 < num2 && num2 <= 100 && num1 + 10 !== 60;
console.log(expression); // false


console.log("============ IF statement ============");

let num = 10;
if (num > 0){
    console.log(`The number ${num} is positive`)
}


console.log("============ ELSE statement ============");


if (num > 10){
    console.log(`The number ${num} is positive`)
} else {
    console.log(`The number ${num} is NOT positive`)
}



let number1 = 5;
let number2 = 10;

if(number1 === 0 && number2 === 0){
    console.log("Both numbers are zero!");
}

if(number1 != number2){
    console.log("The numbers are different!");
} else {
    console.log("The numbers are the same!");
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


// Nested if statements
// If the first if is true, then the second nested one can be executed. Otherwise the nested if is skipped and the second else is executed
if(typeof(number1) === "number" && typeof(number2) === "number"){
    if(number1 != number2){
        console.log("The numbers are different!");
    } else {
        console.log("The numbers are the same!");
    }
} else {
    console.log("Error. Wrong format. Please enter numbers.");
}


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


// Parse a string to number ( integer )
let intNumber = "5";
console.log(typeof(intNumber)); // Will print string
let parsedNumber1 = parseInt(intNumber);
console.log(typeof(parsedNumber1)); // Will print number
console.log(intNumber);


let number = parseInt(prompt("Enter a number"));
console.log(typeof number);
console.log(number);
