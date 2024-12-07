function calculateAge(birthyYear,currentYear){
    let year = 2024 - birthyYear;
    return year;
}

let check = prompt ("Enter Birth Year");


console.log(`You are ${calculateAge(check)} years old`);
