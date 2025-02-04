
console.log("================= HIGHER ORDER FUNCTIONS =================");

// ===> TEST DATA
const numbers = [5, 10, 15, 20, 25, 30, 35, 40, 45, 50];

const students = [
    { id: 1, firstName: "Bob", lastName: "Bobsky", age: 20, gender: "Male", isActive: true },
    { id: 2, firstName: "John", lastName: "Smith", age: 23, gender: "Male", isActive: false },
    { id: 3, firstName: "Marie", lastName: "Mosky", age: 19, gender: "Female", isActive: true },
    { id: 4, firstName: "Jane", lastName: "Doe", age: 22, gender: "Female", isActive: false },
    { id: 5, firstName: "Ana", lastName: "Taylor", age: 21, gender: "Female", isActive: true },
];

// forEach

// ===> EXAMPLE 1


// for (const number of numbers){
//     console.log(number);
// }

numbers.forEach(num => console.log(num));


students.forEach(student => {
    console.log(`${student.firstName} ${student.lastName} ${student.age}`);
    if (student.age > 21) {
        console.log("The student is underaged");
}
});


// Filter 

// ===> EXAMPLE 2


const evenNumbersResult = [];
for (const number of numbers) {
    if (number % 2 === 0) {
        evenNumbersResult.push(number);
    }
}

console.log(evenNumbersResult);

// Example 1 : Filter even numbers
const evenNumbers = numbers.filter(num => num % 2 === 0);
console.log(evenNumbers);

// Example 2 : Filter female students

const femaleStudents = students.filter(student => student.gender === "Female");
console.log(femaleStudents);


// Map

// ===> EXAMPLE 3

const squaredNumbers = numbers.map(num => num * num);
console.log(squaredNumbers);

// Example 2 : Map students full name

const studentsFullName = students.map(student => `${student.firstName} ${student.lastName}`);   
console.log(studentsFullName);



// get students full names of all female students

const femaleStudentsFullName = students.filter(student => student.gender === "Female").map(student => `${student.firstName} ${student.lastName}`);
console.log(femaleStudentsFullName);