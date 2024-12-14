function FullNames(firstNames, lastNames) {
    
    return firstNames.map((firstName, index) => {
        let lastName = lastNames[index];
        return `${index + 1}. ${firstName} ${lastName}`;
    });
}


let first = ["Bob", "Jill"];
let last = ["Gregory", "Wurtz"];
let full = FullNames(first, last);

console.log(full);