
let animal = {
name: "Varnaj",  
kind: "Dog",  

speak: function(message) {
console.log(`${this.kind} says: '${message}'`);
}
}
  
let dog = Object.create(animal);
  
dog.speak("Hey bro!!!"); 
  