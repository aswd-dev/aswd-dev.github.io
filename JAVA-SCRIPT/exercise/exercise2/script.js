function findEvenOrOdd(array,type){
    let resultArray = [];
    if(type === "even"){
        for(let item of array){
            if(item % 2 == 0){
                resultArray.push(item);
            }
        }
    }
    else if (type === "odd") {
        for(let item of array){
            if(item % 2 !== 0){
                resultArray.push(item);
            }
        }
    }
    else{
        console.log("No such type of number that i know of.");
        return[];
    }
    return resultArray;
}

let numbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log(findEvenOrOdd(numbersArray, "even"));
console.log(findEvenOrOdd(numbersArray, "odd"));
console.log(findEvenOrOdd(numbersArray, "Martin"));
