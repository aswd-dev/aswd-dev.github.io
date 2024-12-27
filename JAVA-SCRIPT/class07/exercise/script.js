// Selecting Elements by ID

let myHeader = document.getElementById("myTitle");
console.log(myHeader);
console.log(myHeader.innerText);

// Selecting Elements by Class Name

let paragraphs = document.getElementsByClassName("myParagraph");
let secondParagraph = document.getElementsByClassName("second");
console.log(paragraphs);
console.log(paragraphs[0].innerText);
console.log(secondParagraph);
console.log(secondParagraph[0].innerText);


// Selecting Elements by Tag Name

let myParagraphs = document.getElementsByTagName("p");  
let texts = document.getElementsByTagName("text");
console.log(myParagraphs);
console.log(myParagraphs[0].innerText);
console.log(texts);
console.log(texts[0].innerText);


let divs = document.getElementsByTagName("div");
console.log(divs);
console.log(divs[0].innerText);

// Selecting Elements by Query Selector