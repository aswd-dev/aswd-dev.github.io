console.log("========= DOM Manipulation ========");

console.log("========= Query Selectors =========");


const title = document.querySelector("h1");

const firstParagrph = document.querySelector("[name='paragrahp One']");

const secondParagraph = document.getElementsByTagName("p")[1];

const firstDiv = document.getElementById("first-div");

const secondDiv = document.querySelector(".secondDiv");




console.log("========= Get or Change data of an Element =========");
console.log(title.innerText);
console.log(title.textContent);

title.firstChild.removeAttribute("hidden");

title.style.color = "red";

let h2 = document.createElement("h2");
h2.innerText = "H2 created using JS";
h2.style.color = "blue";
document.body.appendChild(h2);


let paragrahp = document.createElement("p");
paragrahp.innerText = "Paragraph created using JS";
paragrahp.style.color = "green";
document.body.appendChild(paragrahp);