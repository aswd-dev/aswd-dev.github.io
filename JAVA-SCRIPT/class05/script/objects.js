// Create an object - Literal Notation

let person = {
    firstName: "Martin",
    lastName: "Panovski",
    age: 31,
    hobbies: ["swimming", "reading books", "running"],
    isLazy: false,

    getFullName: function (){
        return this.firstName + " " + this.lastName;
    },

    showHobbies: function(){
        for(let hobby of this.hobbies)
            console.log(hobby);       
    }
}


console.log(person);
console.log(person.firstName);
console.log(person.age);
console.log(person.getFullName());
person.showHobbies();


// we can change the objects after their creation
// add property or method after the object is created

person.height = 189;
console.log(person);

person.getHeight = function(){
    return this.height;
}

console.log(person.getHeight());



let laptop = {
    inch: 15.6,
    model: "HP",
    keyboard: "led",
    screen: "touch",
    speaker: "bang&olufsen",
    processor: "Intel i5",
    ram: "8GB",

    getModel: function(){
    return this.model + " " + this.inch;
},
}

console.log(laptop);
console.log(laptop.keyboard);
console.log(laptop.screen);
console.log(laptop.getModel());

