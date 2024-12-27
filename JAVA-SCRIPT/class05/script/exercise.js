// Object Literal Notation

let person = {
    firstName: "Muhamed",
    lastName: "Jakupi",
    birthYear: 1992,
    isEmployeed: true,
    company: "SEDC",
    position: "Trainer",

    getFullName: function(){
        return `I am ${this.firstName} ${this.lastName} from Skopje`;
    },  
}
console.log(person);

console.log(person.getFullName());


// Object Notation

let anhoch = new Object();
anhoch.name = "Anhoch"; 
anhoch.processorsName = "Intel i7";
anhoch.stock = 10;
anhoch.processorPrice = 1200;
anhoch.getInfo = function(){
    return `The store ${this.name} has ${this.stock} processors available of type ${this.processorsName} with price of ${this.processorPrice} Euros`;
};

console.log(anhoch.getInfo());


// Object constructor notation

function Person(firstName, lastName){
    this.firstName = firstName;
    this.lastName = lastName;
    this.getFullName = function(){
        return `Hello from ${this.firstName} ${this.lastName}`;
    }
}

let muki = new Person("Muhamed", "Jakupi");
console.log(muki.getFullName());
