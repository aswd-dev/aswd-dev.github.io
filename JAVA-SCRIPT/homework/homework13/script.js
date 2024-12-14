function concatenate(stringsArray) {
    return stringsArray.join(" ");
}

let words = ["Hello", "there", "students", "of", "SEDC", "!"];
let result = concatenate(words);

console.log(result);