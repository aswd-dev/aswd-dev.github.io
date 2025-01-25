const divisibleBy3 = [];
for (let i = 1; i <= 1000; i++) {
    if (i % 3 === 0) {
        divisibleBy3.push(i);
    }
}
console.log(divisibleBy3);


const divisibleBy4 = [];
for (let i = 1; i <= 1000; i++) {
    if (i % 4 === 0 && i % 2 === 0) {
        divisibleBy4.push(i);
    }
}
console.log(divisibleBy4);



const endsWith1 = [];
for (let i = 1; i <= 1000; i++) {
    if (i % 10 === 1) {
        endsWith1.push(i);
    }
}
console.log(endsWith1);



let test = [true, false, 12, 13, 44, 2345, "Bob", "Jill", false, undefined, 1000, null, "Jack", "", "", 99, "Greg", undefined, NaN, 1, 22];

function cleanToStrings(array) {
    return array.filter(item => typeof item === "string");
}

let cleanedArray = cleanToStrings(test);
console.log(cleanedArray);




function getRandomColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return { r, g, b, rgbString: `rgb(${r}, ${g}, ${b})` };
}

const randomColor = getRandomColor();
document.body.style.backgroundColor = randomColor.rgbString;
document.getElementById('colorInfo').textContent = `RGB: ${randomColor.rgbString}`;