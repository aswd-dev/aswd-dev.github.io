let hotel = new Object();
hotel.name = "Bristol";
hotel.numberOfRooms = 100;
hotel.numberOfStars = 5;
hotel.hasSpaCenter = true;
hotel.bookedRooms = 55;
hotel.getAvailability = function(){
    return this.numberOfRooms - this.bookedRooms;
}

console.log(hotel);
console.log(hotel.name);
console.log(`The hotel ${hotel.name} has ${hotel.getAvailability()} rooms available`);


// Delete an object proptery 

delete hotel.numberOfStars;
console.log(hotel);

hotel.name = "Continental";

console.log(hotel);



let trainer = {
    name: "Stefan",
    lastName: "Stefanovski",
    academy: "SEDC",
    lecture: "Objects",

    getFullName: function(){
        return this.name + " " + this.lastName;
    },
}

delete trainer.lecture;

trainer.age = 32;

console.log(trainer);
console.log(trainer.getFullName());




