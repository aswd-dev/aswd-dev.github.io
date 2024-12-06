let firstName;

firstName = "Bob";

let lastName = "Bobsky";

let doubleQuotes = "This is a string with double quotes";

let singleQuotes = 'This is a string with single quotes';

let backticksString = `This is a string with backticks`;

console.log("======= Combining Strings ========");

let fullName = "First name:" + " " + firstName;
console.log(fullName);

console.log("Last name:" + " " + lastName);

console.log(firstName + " is " + 30 + " years old");

fullName = `Full name ${firstName} ${lastName}`

console.log(fullName);


console.log("======= Quotes within Strings ========");

let sentence = "This isn't hard";
console.log(sentence);

let sentence1 = 'This isn"t hard';
console.log(sentence1);

let sentence2 = 'This isn\'t possible';
console.log(sentence2);

let sentence3 = '\'TO BE\' or \'NOT TO BE\'';
console.log(sentence3);

let sentence4 =`${sentence3}, the question is now`;
console.log(sentence4);

console.log("======= non-value values ========");

// undefined

let undefinedVariable;
console.log(undefinedVariable);


//null

let emptyVariable = null;
console.log(emptyVariable);

console.log("======= special number ========");


console.log("========= NaN ========="); // Not a number
console.log(typeof NaN);

let result = 100 / "deset";
console.log(result);

console.log(isNaN(result)); // true


console.log("========= infinity ========="); 

let infinity = Infinity;
console.log(infinity);
console.log(typeof infinity);

console.log(1 / 0);
console.log(-1 / 0);



