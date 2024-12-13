function celToFar(celcius) {
    let result = celcius * 1.8 + 32;
    return result;
}

function farToCel(farenheits) {
    let result = (5/9) * (farenheits - 32);
    return result;
}

let personChoise = prompt ("Enter F for farenheit and C for celsius");
let personInput = parseInt(prompt("Please enter value:"));

if(personChoise === "F"){
    console.log(`${farToCel(personInput)}C`);
} 
else if(personChoise === "C"){
    console.log(`${celToFar(personInput)}F`);
}
else{
    console.log("Enter F for farenheit and C for celsius");
}