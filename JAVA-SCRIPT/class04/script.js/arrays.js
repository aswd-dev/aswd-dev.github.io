// empty Array

let emptyArray = [];
console.log(emptyArray);
console.log(typeof emptyArray);


// Array of string values

let days = ["Mon", "Tue", "wed", "Thu", "Fri", "Sat", "Sun"]
console.log(days);


// Mixed values array

let mixedArray = ["Muhamed", 12, true, undefined, null, 22.4, NaN];
console.log(mixedArray);


// Access and element from the array by its position (index)
let firstElement = mixedArray[0];
console.log(`First element of the mixed array ${firstElement}`);


let sunday = days[6];
console.log(sunday);

// Change value of an existing element of the array

mixedArray[0] = "Frose";
console.log(`The mixed array after the change is:`);
console.log(mixedArray);

// Length of an array

console.log(`The length of the days array is ${days.length}`);


// Add new element in the array

mixedArray[7] = "Angel";
console.log(mixedArray);

mixedArray[mixedArray.length] = "Sandra";
console.log(mixedArray);



// Insert element in an Array push() unshift()

let numbers = [1,2,3,4,5];
console.log(numbers);

numbers.push(6);   // insert element at the end of the array
numbers.push(7);
numbers.push(8, 9, 10,);

console.log(numbers);

numbers.push("Muhamed", "Jakupi");
console.log(numbers);

numbers.unshift(-2, -1, 0); // insert element at the begining of the array
console.log(numbers);

// Delete an element from an array pop() shift()

numbers.pop();
numbers.pop();
console.log(numbers);

numbers.shift();
console.log(numbers);

