// Empty Array

let emptyArray = [];
console.log(emptyArray);
console.log(typeof emptyArray);



// Access and element from the array by its position (index)

let mixedArray = ["Muhamed", 12, true, undefined, null, 22.4, NaN]; 
console.log(mixedArray);


let firstElement = mixedArray[0];
console.log(`First element of the mixed array ${firstElement}`);



// Declaring an array with items in it
let numbersArray = [54, 1, 33, 7, 12];
let stringsArray = ["Bob", "Jill", "Greg"];
let jaggedArray = [12, "Stuff", true, 1.4];
let arrayOfArrays = [[1, "Bob"], [2, "jill"], [9, "Greg"]];
let multiLineArray = [
    "Stuff",
    "Other stuff",
    "Stuff on many lines"
];

// Getting the amount of items there are in an array
console.log(numbersArray.length); // Will show 5, because there are 5 items in the array


let numbers = [1, 2, 3, 4, 5, 6];

// adding an item at the end of the array
numbers.push(7); // Result: [1, 2, 3, 4, 5, 6, 7]

// removing an item from the end of the array
numbers.pop(); // Result: [1, 2, 3, 4, 5, 6]

// adding an item at the front of the array
numbers.unshift(0); // Result: [0, 1, 2, 3, 4, 5, 6]

// removing an item at the front of the array
numbers.shift(); // Result: [1, 2, 3, 4, 5, 6]


let moreNumbers = [7, 8, 9, 10];
let combinedArray = numbers.concat(moreNumbers);
console.log(combinedArray); // Result: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

let newSliceArray = numbers.slice(2);
console.log(newSliceArray); // Result: [4, 3, 2, 1]  // Will cut out all items from index 0 to 2 (not including 2)   

let reverse = numbers.reverse();
console.log(reverse); // Result: [6, 5, 4, 3, 2, 1]




// Loops in JavaScript

// For loop
// for(let i = 0; i < 10; i++){
//     console.log(i);
// }

let num = 1;

while(num <= 10){
    console.log(num);
    num++;
}

// While loop that counts

let fruits = ["apple", "banana", "orange", "grapes", "mango"];
let count = 0;

while(count < fruits.length){
    console.log(fruits[count]);
    count++;
}


let i = 0;
let countingNumbers = 10;

while(i <= countingNumbers){
    console.log(i);
    i++;
}


// while(prompt("Press X to continue").toLowerCase() !== "x"){
//     alert("You pressed something else");
// }
// alert("Great you found the X key");


// do / while , another looping structure


let b = 1;
let c = 1;

console.log("===== Using while() =====");
while(b <= 6){
    console.log("Hello" + b);
    b++;
} 

console.log("===== Using do/while() =====");

do {
    console.log("Hello" + c);
    c++;
} while (c <= 5)



let names = ["Bob", "Jill", "Greg"];
let int = 0;

while(int <= names.length){
    console.log(names[int]);
    int++;
}

// Student exercise 1

let start = 100;
let finish = 150;
let squareSum = 0;

while(start <= finish){
    squareSum = squareSum + Math.pow(start, 2);
    start++;
}

console.log(squareSum);




// For loops

for(let i = 0; i < 10; i++){
    console.log(i);
}


let workingDays = ["Mon", "Tue", "Wed", "Thu", "Fri"];

for(let i = 0; i < workingDays.length; i++){
    console.log(workingDays[i]);
}
console.log("This week Monday was non working day, so the working days were:");

for(let i = 0; i < workingDays.length; i++){
    if(workingDays[i] === "Mon"){
        continue;
    } 
    console.log(workingDays[i]);
}



let namess = ["Martin", "Frose", "Angel", "Sandra", "Ana"];

let userInput = prompt ("Please search for a name in my list:");

for(let i = 0; i < namess.length; i++){
    if(userInput === namess[i]) {
        console.log (namess[i]);
        break;
    } 
}


