function sumMaxMin(array) {

let max = Math.max(...array);
let min = Math.min(...array);
return max + min;
}

let array = [3, 5, 6, 8, 11];
console.log(array);
console.log(sumMaxMin(array));