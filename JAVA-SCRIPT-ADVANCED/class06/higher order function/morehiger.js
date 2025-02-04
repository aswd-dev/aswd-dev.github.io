const numbers = [5, 10, 15, 20, 25, 30, 35, 40, 45, 50];

const students = [
    { id: 1, firstName: "Bob", lastName: "Bobsky", age: 20, gender: "Male", isActive: true },
    { id: 2, firstName: "John", lastName: "Smith", age: 23, gender: "Male", isActive: false },
    { id: 3, firstName: "Marie", lastName: "Mosky", age: 19, gender: "Female", isActive: true },
    { id: 4, firstName: "Jane", lastName: "Doe", age: 22, gender: "Female", isActive: false },
    { id: 5, firstName: "Ana", lastName: "Taylor", age: 21, gender: "Female", isActive: true },
];

// every

// example 1

const allPositive = numbers.every(n => n > 0);{
   console.log(allPositive);   
};


// example 2

console.log(students.every(student => student.age > 18));

// some


// example 1 - is there at least one even number in the array

const hasEvenNumber = numbers.some(n => n % 2 === 0);
console.log(hasEvenNumber);

// example 2 - is there at least one student younger than 20

console.log(students.some(student => student.age < 20));


// find

// example 1 - find the first even number larger than 20

const firstEvenNumberLargerThan20 = numbers.find(n => n % 2 === 0 && n > 20);
console.log(firstEvenNumberLargerThan20);

// example 2 - find the first student that starts with letter "J"

const firstStudentWithJ = students.find(student => student.firstName.startsWith("J"));

console.log(firstStudentWithJ.firstName);


// find index

// example 1 - find the index of the first even number larger than 20

const firstEvenNumberLargerThan20Index = numbers.findIndex(n => n > 40);
console.log(firstEvenNumberLargerThan20Index);


// flat


const nestedArray = [1, 2, [3, 4, [5, 6, [7, 8, [9, 10]]]]];
console.log(nestedArray);

const flatArray = nestedArray.flat(1);
console.log(flatArray);

const fullyFlatArray = nestedArray.flat(Infinity);
console.log(fullyFlatArray);


// flat map



// split

const sentence = "JavaScript is awesome"; 
const words = sentence.split(" ");

console.log(words);


// join 

const joinedSentence = words.join(" ");
console.log(joinedSentence);


// reverse

const numberToReverse = [1, 2, 10, -5, 4, 9];
const reversedNumbers = numberToReverse.reverse();
console.log(reversedNumbers);


