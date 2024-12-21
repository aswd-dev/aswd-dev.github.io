// Html events Handlers

function sayHello(){
    alert("Hello there!");
}

function greet(message){
    alert(message);
}

// Traditional events Handlers

let increaseBtn = document.getElementById("increaseBtn");
let decreaseBtn = document.getElementById("decreaseBtn");
let resetBtn = document.getElementById("reset");
let resultParagraph = document.getElementById("result");
let count = 0;

increaseBtn.onclick = function() {
     count++;
     resultParagraph.innerText = count;
}

function decrease(){
    count--;
     resultParagraph.innerText = count;
}

function reset(){
    count = 0;
    resultParagraph.innerText = "0";
}

decreaseBtn.onclick = decrease;
resetBtn.onclick = reset;

// Event Listeners

let fNameInput = document.getElementById("fName");
let lNameInput = document.getElementById("lName");
let saveBtn = document.getElementById("btnSave");
let saveUserParagraph = document.getElementById("saveResult");

saveBtn.addEventListener("click", function(){
    let fNameValue = fNameInput.value;
    let lNameValue = lNameInput.value;

    saveUserParagraph.innerText = `${fNameValue} ${lNameValue} is save to database`;
    fNameInput.value = "";
    lNameInput.value = "";
});



// Exercise 

let buttoOne = document.getElementById("buttonn");

buttoOne.addEventListener("click", function(){
    alert("Muhamed Jakupi");
})