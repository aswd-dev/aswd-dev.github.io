// ===== Function declaration ===== 

function sayHello(){
    console.log("Hello there!");
}
sayHello();
sayHello();
sayHello();

// ====== Calling a function to be executed =====



function sayGoodBye(){
    console.log("Goodbye! See you next week!");
}
sayGoodBye();


function addTwoNumbers(){
    let firstNum = 22;
    let secondNum = 324;
    let result = firstNum + secondNum;
    console.log(`The sum of the two numbers is ${result}`);
}

addTwoNumbers();


// function sumTwoNumbers(){
//     let firstNum = parseInt(prompt("Please enter first number"));
//     let secondNum = parseInt(prompt("Please enter second number"));
//     let result = firstNum + secondNum;
//     console.log(`The sum of the two number is ${result}`);
// }

// sumTwoNumbers();


// ===== Functions with input parameters (arguments) =====

function sayMyFullName(firstName, lastName){
    document.write(`${firstName} ${lastName}`);
}

sayMyFullName("Martin", "Panovski");
sayMyFullName("Muhamed", "Jakupi");


function greetPerson(personName){
console.log(`Hello there ${personName}`);
}

greetPerson("Muhamed");



// ===== Functions that returs values =====

function returnValue(value) {
    return value;
}

console.log(returnValue("This will be returned!"));



function greetSomeone(personName) {
    let greeting = `Hello there ${personName}`;
    return greeting;
}

console.log(greetSomeone("Simona"));

let greetMessage = greetSomeone("Angel");
console.log(greetMessage);
alert(greetMessage);



function sumNumbers (x,y){
    let sum = x + y;
    return sum;
}

function substractsNumbers (x,y){
    let sub = x - y;
    return sub;
}

function multiplieNumbers (x,y){
    let multi = x * y;
    return multi;
}

function divedesNumbers (x,y){
    let divede = x / y;
    return divede;
}

console.log(sumNumbers(30,30));
console.log(sumNumbers(25,25));

console.log(substractsNumbers(32,10));
console.log(substractsNumbers(22,11));

console.log(multiplieNumbers(10,10));
console.log(multiplieNumbers(10,20));

console.log(divedesNumbers(10,5));
console.log(divedesNumbers(10,2));

// write a function that will be called calculator
// it should take 3 parameters, firstNum, secondNum, operation
// "+", "-", "*", "/"
// depending of the operator, return the appropriate result
// calculator (10,20, "+")



// ====== Parameter missmatch ======

function sayMyNameAndYears(firstName, lastName, years) {
    console.log(`${firstName} ${lastName} is ${years} years old`);
}

sayMyNameAndYears("Muhamed","Jakupi",31);