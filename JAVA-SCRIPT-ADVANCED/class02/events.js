const buttonOne = document.getElementById('btnOne');
const buttonTwo = document.getElementById('btnTWo');
const buttonThree = document.getElementById('btnThree');


buttonOne.addEventListener("click", function () {
    console.log("Button One Clicked");
    
});

buttonTwo.addEventListener("click", function (event) {
    console.log(event);
    console.log(event.target);
    console.log(event.target.id);
});
    

function buttonThreeClick() {
    console.log("Button Three Clicked");
}

buttonThree.addEventListener("click", buttonThreeClick);