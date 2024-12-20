// alert("Hello JavaScript");

let number = 1;
let firstName = "Muhamed";
let employed = true;
let child;
let nullValue = null;

console.log(typeof number);
console.log(typeof firstName);
console.log(typeof employed);
console.log(typeof child);
console.log(typeof nullValue);

/**************************************************/

let a = 10;
let b = 20;

let sum = a + b;
console.log(sum);

/**************************************************/

let num = 5;
let numString = "5";

console.log(num > numString); // false
console.log(num < numString); // false
console.log(num == numString); // true
console.log(num === numString); // false // edhe vleren e kontrolon edhe tipin (number ose string) nese sjan njejt eshte false


/**************************************************/


let radius = 10;
let pi = 3.14;
let circle = pi * radius * radius ;

console.log(circle);

/**************************************************/

let phones = 30;
let price = 119.95;
let tax = (price * 5) / 100;

let total = phones * (price + tax);
console.log(total);
