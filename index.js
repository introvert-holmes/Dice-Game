function getRandom(){
    return Math.random();
}
var randomNumber1=getRandom();
randomNumber1=Math.floor(randomNumber1*6)+1;

var randomNumber2=getRandom();
randomNumber2=Math.floor(randomNumber2*6)+1;

var randomImage1="dice"+randomNumber1+".png";
document.querySelector(".img1").setAttribute("src",randomImage1);

var randomImage2="dice"+randomNumber2+".png";
document.querySelector(".img2").setAttribute("src",randomImage2);

if(randomNumber1>randomNumber2){
    document.querySelector("h1").innerHTML="Player 1 wins"
}else if(randomNumber2>randomNumber1){
    document.querySelector("h1").innerHTML="Player 2 wins"
}else{
    document.querySelector("h1").innerHTML="DRAWWW"
}

