// Optional Parameters

function multiply (num1, num2 = 10){
    console.log(num1 * num2);
    
}
multiply(5, 10);
multiply(3);


// Storing Functions in Variables

let greet = name => console.log(`Hello ${name}`);
greet('John');



// used as an argument to another function

function calculator (calculateFucn, num1, num2){
    return calculateFucn(num1, num2);
}

function sum (number1, number2){
    return number1 * number2;
}

let sumResult = calculator(multiply, 5, 10);

let substractResult = calculator (function (num1, num2){
    return num1 - num2;
}

, 100, 60);

console.log(substractResult);



console.log(calculator ((x, y) => x + y, 100, 60));


// used as a return value from another function

function getOperation(operator){
    switch (operator){
        case "+":
            return (num1, num2) => num1 + num2;
        case "-":
            return (num1, num2) => num1 - num2; 
        case "*":
            return (num1, num2) => num1 * num2;
        case "/":
            return (num1, num2) => num1 / num2;
        case "**":
            return (num1, num2) => num1 ** num2;
        default:
            break;
    }
}

const divide = getOperation('/');

console.log(divide(100, 10));

console.log(getOperation('**')(10, 2));


// have properties like objects

function greetStudent (name){
    console.log(`Hello ${name}`);
}

greetStudent.firstName = 'Bob';
greetStudent(greetStudent.firstName);


// function arguments

function someFunction(){
    console.log(arguments);
    console.log(arguments.length);
    
}

someFunction("bob", "john", "jane", "joe");

/////////////////

function sumOfNumber(){
    let result = 0;
    for (let i=0; i<arguments.length; i++){
        result += arguments[i];
    }
    return result;
}

console.log(sumOfNumber(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));
console.log(sumOfNumber(10, 20, 30, 40, 50));