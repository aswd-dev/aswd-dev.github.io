// Recursion

function factoriel(number){
    if (number <= 1){
        return 1;
    }
    return number * factoriel(number - 1);
}
console.log(factoriel(5));

// result = 5 * 4 * 3 * 2 * 1 = 120


function sumTwoNumbers(number){
    if (number === 0){
        return 0;
    }
    return number + sumTwoNumbers(--number);
}
console.log(sumTwoNumbers(5));

// result = 5 + 4 + 3 + 2 + 1 = 15


// example of Fibonacci series

function fibonacci(number){
    if (number <= 1){
        return number;
    }
    return fibonacci(number - 1) + fibonacci(number - 2);
}
console.log(fibonacci(5));
console.log(fibonacci(25));