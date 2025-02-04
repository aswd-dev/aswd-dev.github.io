// reduce



const numbers = [5, 10, 15, 20, 25, 30, 35, 40, 45, 50];

const students = [
    { id: 1, firstName: "Bob", lastName: "Bobsky", age: 20, gender: "Male", isActive: true },
    { id: 2, firstName: "John", lastName: "Smith", age: 23, gender: "Male", isActive: false },
    { id: 3, firstName: "Marie", lastName: "Mosky", age: 19, gender: "Female", isActive: true },
    { id: 4, firstName: "Jane", lastName: "Doe", age: 22, gender: "Female", isActive: false },
    { id: 5, firstName: "Ana", lastName: "Taylor", age: 21, gender: "Female", isActive: true },
];

// example 1 - sum of numbers and average

const sumOfNumbers = numbers.reduce((accumulator, current) => accumulator + current, 0);
console.log(sumOfNumbers);
console.log(sumOfNumbers / numbers.length);

// example 2 - get average age of students

const averageAge = students.reduce((accumulator, current) => accumulator + current.age, 0) / students.length;
console.log(averageAge);

// sort 

const sortingNumbersArray = [-5, 10, 15, 20, -25, 30, 35, -40, 45, 50];

const sortedNumbers = sortingNumbersArray.sort((a, b) => a - b);
console.log(sortedNumbers);
console.log(sortingNumbersArray);


// sort students by age

const sortedStudents = students.sort((a, b) => a.age - b.age);
console.log(sortedStudents);


// sort students by first name

students.sort((a, b) => a.firstName.localeCompare(b.firstName));
console.log(students);


/////

let numbersArray = [5, 10, 15, 20, 25, 30, 35, 40, 45, 50];

function copyArray(array){
    let result = [];
    array.forEach(item => result.push(item));
    return result;
}

let numbersArrayCopy = copyArray(numbersArray);
numbersArrayCopy.pop();

console.log(numbersArray);

console.log(numbersArrayCopy);


// Using slice() method

let numbersArrayCopy2 = numbersArray.slice(0, numbersArray.length - 1);
console.log(numbersArrayCopy2);


// using map() method

let numbersArrayCopy3 = numbersArray.map(item => item);
numbersArrayCopy3.pop();
console.log(numbersArrayCopy3);




