
let dayOfWeek = parseInt(prompt("Please enter a number:"));

switch (dayOfWeek){
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;
    default:
        console.log("There is no such a day. Try again!");
        break;
}

switch(dayOfWeek){
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
        console.log("Work day!");
        break;
    case 6:
    case 7:
        console.log("Weekend!");
        break;
}