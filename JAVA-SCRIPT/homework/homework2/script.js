function farToCel(celcius) {
    let result = celcius * 1.8 + 32;
    return result;
}

function celToFar(farenheits) {
    let result = (5/9) * (farenheits - 32);
    return result;
}

let personChoise = prompt ("Enter F for farenheit and C for celsius");
let personInput = parseInt(prompt("Please enter value:"));

if(personChoise === "F"){
    console.log(`${celToFar(personInput)}C`);
} 
else if(personChoise === "C"){
    console.log(`${farToCel(personInput)}F`);
}
else {
    console.log("Error!");
}