// Anonymous Function

document.querySelector('button').addEventListener('click', function () {
    console.log('Button Clicked');
});


// Anonymous Function in a fetch

// https://jsonplaceholder.typicode.com/posts


const postsUrl = 'https://jsonplaceholder.typicode.com/posts';
fetch(postsUrl)
.then(function(response) {
    const parsedData = response.json();
    return parsedData;
})
.then(function(data) {
    console.log(data);
})
.catch(function(error) {
    console.log("Error Occured !", error);
})


let greet = function(name) {
    console.log(`Hello ${name}`)
}

let functionTwo = function() {
    console.log('Do Something')
}

console.log(typeof greet) // function
console.log(typeof functionTwo) // function
greet('John') // Hello John
functionTwo() // Function Two





// Regullar Function

function sayHello() {
    console.log("Hello !");
}

// Anonymous Function

let sayHelloAnonymous = function() {
    console.log("Hello Anonymous!");
}

// Arrow Function

let sayHelloArrow = () => {
    console.log("Hello Arrow!");
}

sayHelloArrow(); // Hello Arrow!

// Arrow Function One Line

let sayHelloArrowOneLine = () => console.log("Hello Arrow One Line!");

sayHelloArrowOneLine(); // Hello Arrow One Line!



// no parameter return  

function getRandomNumber() {
    return Math.floor(Math.random() * 100);
}

const getRandom = () => Math.floor(Math.random() * 100);

let randomNum = getRandom();
console.log(randomNum);



// with one parameter return

function isEven (number){
    return number % 2 === 0;
}

const isEvenArrow = (number) => number % 2 === 0;
console.log(isEvenArrow(10)); // true


// multiple parameters return one expression

const sum = (num1, num2) => num1 + num2;
console.log(sum(5, 10)); // 15

// multiple parameters return multiple expression

const getMaxNumber = (num1, num2) => {
    if (num1 > num2) {
        return num1;
    }
    return num2;
}

// arrow function in an event listener
document.querySelector('button').addEventListener('click', () => {
    console.log('Button Clicked');
});

// arrow function in a fetch

const posts = 'https://jsonplaceholder.typicode.com/posts';
// fetch(posts)
// .then(function(response) {
//      return response.json(); 
    
// })
// .then(function(data) {
//     console.log(data);
// })
// .catch(function(error) {
//     console.log("Error Occured !", error);
// })

fetch(posts)
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.log("Error Occured !", error));