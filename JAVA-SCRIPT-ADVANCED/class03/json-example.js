// object notation

let jsObject = {
    firstName: "Bob",
    lastName: "Bobsky",
    age: 32,
    favoriteSubjects: ["Math", "Science", "History"],

    printInfo: function () {
        console.log(`${this.firstName} ${this.lastName} is ${this.age} years old`);
}
};

jsObject.printInfo();
console.log(typeof jsObject);

// serialization javascript object to JSON string

let jsonString = JSON.stringify(jsObject);

console.log(jsonString);
console.log(typeof jsonString);
console.log(jsonString.firstName);


// deserialization JSON string to javascript object

let jsonObject = JSON.parse(jsonString);

console.log(jsonObject);
console.log(typeof jsonObject);
console.log(jsonObject.firstName);

