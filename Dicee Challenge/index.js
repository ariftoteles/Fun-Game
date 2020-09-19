// Membuat random number 1-6
var randomNumber1 = Math.floor(Math.random()*6)+1;
var randomNumber2 = Math.floor(Math.random()*6)+1;

// Display image sesuai random number 
document.querySelectorAll("img")[0].setAttribute("src","images/dice"+randomNumber1+".png");
document.querySelectorAll("img")[1].setAttribute("src","images/dice"+randomNumber2+".png");

// Condition
if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML="Player Number 1 Won";
} else if (randomNumber1 < randomNumber2) {
    document.querySelector("h1").innerHTML="Player Number 2 Won";
} else {
    document.querySelector("h1").innerHTML="You are Draw !";
}