let person = {
    firstName: "Martin",
    lastName: "Panovski",
    age: 31,
    isEmployed: true,
    proffesion: "Software Developer",
    programmingLanguages: ["C#", "JavaScript"],
};


// If we want to send data to the server
// We need to pack the data in a json format

// The process of packing the data into JSON string
// to be sent to the server is called 
// Serialization


let jsonContent = JSON.stringify(person);
console.log(jsonContent);


// if we get a response from the server
// in a json string foramt, we need to parse
// the json string into a javascript object
// Te process of doing this is called
// Deserialization

let jsObject = JSON.parse(jsonContent);
console.log(jsObject);

document.getElementById("firstName").innerHTML = jsObject.firstName;
