// Declaration of a Function

function sayHello(){
    console.log("Hello there");
}

sayHello();


function sumTwoNumber (){
    let number1 = 5;
    let number2 = 5;
    let result = number1 + number2;
    console.log(`The sum of two number is ${result}`);
}

sumTwoNumber();



function letSumNumbers (){
    let num1 = parseInt(prompt("Enter a number"));
    let num2 = parseInt(prompt("Enter a number"));
    let result = num1 + num2;
    console.log(`The sum of the two numbers that you entered is : ${result}`);
}

letSumNumbers();


// Functions with parameters (arguments)

function sayHelloFrom(firstName, lastName){
    console.log(`Hello there from ${firstName} ${lastName}`);
}

sayHelloFrom("Muhamed", "Jakupi");


// Functions that returs value 

function returnValue (name){
    return name;
}
console.log(returnValue("I am Muhamed"));



function value(firstName){
    let name = `Hello there ${firstName}`;
    return name;
}
console.log(value("Muhamed"));



// Function with another function in it called

function isNameShort(name){
    if(name.length < 2){
        return true;
    }
    return false;
}

function getGreeting(name){
    if(isNameShort(name)){
        return "Hello there person!";
    }
    return `Hello there ${name}!`;
}

console.log(getGreeting("Muhamed Jakupi"));

// The execution would go like this:
// 1. console.log() is called
// 2. It finds the getGreeting() function and it is also called
// 3. The getGreetings() starts executing and finds the isNameShort() function, so now that one is called
// 4. isNameShort() executes and returns true or false
// 5. The getGreetings() function now have a result so either returns a greeting with a name or without a name
// 6. The string result from getGreetings() is provided to the console.log() and is printed in the console



// Exercise let check if the number is odd or even 

function checkOddEven(){
    let enternumber = parseInt(prompt("Enter a number"));
    if(enternumber === 0){
        let result = "The number is zero.";
        console.log(result); 
    } else if(enternumber % 2 === 0) {
        let result = "The number is even.";
        console.log(result);
    } else {
        let result = "The number is odd.";
        console.log(result);
    }}

    checkOddEven();