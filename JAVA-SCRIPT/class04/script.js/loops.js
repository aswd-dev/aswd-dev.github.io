
// While

let a = 1;

while (a <= 12){
    console.log(a);
    a++;
}

let fruits = ["apple", "banana", "orange", "grapes"];
let count = 0;

while(count < fruits.length){
    console.log(fruits[count]);
    count++;
}


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
} while (c < 5)


// Student exercise 1

let start = 101;
let end = 150;
let squareSum = 0;

while(start <= end){
    squareSum = squareSum + Math.pow(start, 2);
    start ++;
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

let names = ["Martin", "Frose", "Angel", "Sandra", "Ana"];

let userInput = prompt ("Please search for a name in my list:");

for(let i = 0; i < names.length; i++){
    if(userInput === names[i]) {
        console.log (names[i]);
        break;
    } 
}


// for-of loop structure

let colors = ["blue", "orange", "red", "green"];

for(let color of colors){
    console.log(color);
}





