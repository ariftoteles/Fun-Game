// Cara pertama
// document.querySelector("button").addEventListener("click",buttonClick);
// function buttonClick() {
//     alert("I got Click");
// }


// Cara Kedua Anonymous function
// Make sound using mouse click
for (var i = 0; i < 7; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
        var buttonInnerHTML = this.innerHTML;
        makeSound(buttonInnerHTML);
        buttonAnimation(buttonInnerHTML);
    })
};

// Make sound using keypres

document.addEventListener("keypress", function(x) {
makeSound(x.key);
buttonAnimation(x.key);
});

function makeSound(key) {
switch (key) {
    case "w":
        new Audio("sounds/tom-1.mp3").play();
        break;
    case "a":
        new Audio("sounds/tom-2.mp3").play();
        break;
    case "s":
        new Audio("sounds/tom-3.mp3").play();
        break;
    case "d":
        new Audio("sounds/tom-4.mp3").play();
        break;
    case "j":
        new Audio("sounds/snare.mp3").play();
        break;
    case "k":
        new Audio("sounds/crash.mp3").play();
        break;
    case "l":
        new Audio("sounds/kick-bass.mp3").play();
        break;
    default:
        console.log(buttonInnerHTML);
}};

function buttonAnimation (curentKey) {
    document.querySelector("."+curentKey).classList.add("pressed");
    setTimeout(function () {
        document.querySelector("."+curentKey).classList.remove("pressed");
    }, 100)
};