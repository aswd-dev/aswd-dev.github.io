// pure function is a function that returns the same result if given the same arguments

// pure function

const impureArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function addToArrayImpure (array, number) {
  array.push(number);
  return array;
}

let resultImpure = addToArrayImpure(impureArray, 11);
console.log(resultImpure);

console.log(resultImpure);


//////

const pureArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function addToArrayPure (array, number) {
    const result = [];
    for (const item of array) {
        result.push(item);
    }
    result.push(number);
    return result;
}

let pureArrayresult = addToArrayPure(pureArray, 11);
console.log(pureArray);
console.log(pureArrayresult);


// strict typing in javascript

// 'use strict';