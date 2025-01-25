// global scope

// example 1

let globalNumber = 12345;

function printGlobalNumber (){
    globalNumber = 5555;
    console.log(globalNumber);
}

printGlobalNumber(); 

// local scope (function scope)

// example 1

function localScope (number){    
    let localNumber = 100;
    let result = localNumber + number;
    console.log("The result is", result);
}   

localScope(100);   // The result is 200


// example 2

let greeting = "Hello from Qinshift Academy";
function printGreeting (){
   let greeting = "Happy holidays";
   console.log(greeting);
}

printGreeting(); // Happy holidays

// example 3

function outerFunction (){
    let outerVariable = "I am from outer function";
    function innerFunction (){
        let innerVariable = "I am from inner function";
        console.log(outerVariable);
        console.log(innerVariable);
    }
    innerFunction();
}

outerFunction(); // I am from outer function    


// block scope


// example 1

let globalString = "I am a global string";

if (50 < 100){
    let blockNumber = 50 + 100;
    console.log(blockNumber); // 150
    console.log(globalString); // I am a global string

    globalString = "Something";
}

console.log(globalString); // Something

// example 2    

let counter = 0;
while (counter <= 10){
    console.log(counter);
    counter++;
    let testCounter = counter;
    if (testCounter === 10){
        counter = 100;
        break;
    }
}

console.log(counter);



// hoisting

// example 1

sayHello();

function sayHello (){
    console.log("Hello");
}

sayHello(); // Hello


