let firstHeader = document.getElementById("myTitle");

console.log(firstHeader.textContent);
console.log(firstHeader.innerText);

firstHeader.innerText = ""; // go brise text-ot


let secondDiv = document.querySelector(".myDiv");
secondDiv.innerHTML += `
<ol>
  <li>Intro to Web Dev</li>
  <li>Basic Web Development</li>
  <li>Basic JavaScript</li>
</ol>
`

let secondHeader = document.getElementById("secondHeader");

setTimeout(function(){
    secondHeader.innerText = "Noo, not so cool page";
    setTimeout(function(){
        secondHeader.innerText = "I am joking, still cool page";
    }, 1000);
}, 2000);


secondHeader.style.backgroundColor = "red";









