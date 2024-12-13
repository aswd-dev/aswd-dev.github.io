let myArray = [1, 2, 3, 4, 5];

function sumArray(numbers) {
    return numbers.reduce((total, num) => total + num);
}


let result = sumArray(myArray);
console.log(result);