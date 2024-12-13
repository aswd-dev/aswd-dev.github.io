let year = parseInt(prompt("Write BirthYear:"));
let formula = (year - 4) % 12;

if(formula == 0){
    console.log("Your zodiac sign is Rat");   
}
else if(formula == 1){
    console.log("Your zodiac sign is Ox");   
}
else if(formula == 2){
    console.log("Your zodiac sign is Tiger");   
}
else if(formula == 3){
    console.log("Your zodiac sign is Rabbit");   
}
else if(formula == 4){
    console.log("Your zodiac sign is Dragon");   
}
else if(formula == 5){
    console.log("Your zodiac sign is Snake");   
}
else if(formula == 6){
    console.log("Your zodiac sign is Horse");   
}
else if(formula == 7){
    console.log("Your zodiac sign is Goat");   
}
else if(formula == 8){
    console.log("Your zodiac sign is Monkey");   
}
else if(formula == 9){
    console.log("Your zodiac sign is Rooster");   
}
else if(formula == 10){
    console.log("Your zodiac sign is Dog");   
}
else if(formula == 11){
    console.log("Your zodiac sign is Pig");   
}
else{
    console.log("Enter a valid number!");
}