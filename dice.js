
var x=Math.floor(Math.random()*6) +1;
var y=Math.floor(Math.random()*6) +1;
var randomDiceImage="Alea_" + x +".png";
var randomDiceImage2="Alea_" + y +".png";
var image1=document.querySelectorAll("img")[0];
var image2=document.querySelectorAll("img")[1];
image1.setAttribute("src",randomDiceImage);
image2.setAttribute("src",randomDiceImage2);
if(x>y){
    document.querySelector("h1").innerHTML="Player 1 Wins";
}
else if(x<y){
    document.querySelector("h1").innerHTML="Player 2 Wins";
}
else{
    document.querySelector("h1").innerHTML="Draw";
}