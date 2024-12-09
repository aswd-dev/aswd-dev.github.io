function calculateAge(birthyYear, curentYear = 2024){
    let year = curentYear - birthyYear;
    return year;
}

let check = prompt ("Enter Birth Year");

console.log(`You are ${calculateAge(check)} years old`);
