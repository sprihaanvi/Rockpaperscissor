var input1=Math.round(Math.ceil(Math.random()*3));

var inputImage= "images/a" + input1 + ".png";
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src",inputImage);


var input2=Math.round(Math.ceil(Math.random()*3));
var inputImage2= "images/a" + input2 + ".png";
var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src",inputImage2);


if(input1==1 && input2==2){
  document.querySelector("h1").innerHTML ="Player 1 Wins!";
}
else if(input1==1 && input2==3){
  document.querySelector("h1").innerHTML ="Player 2 Wins!";

}
else if(input1==2 && input2==1){
  document.querySelector("h1").innerHTML ="Player 2 Wins!";

}
else if(input1==2 && input2==3){
  document.querySelector("h1").innerHTML ="Player 1 Wins!";

}
else if(input1==3 && input2==1){
  document.querySelector("h1").innerHTML ="Player 1 Wins!";

}
else if(input1==3 && input2==2){
  document.querySelector("h1").innerHTML ="Player 2 Wins!";
    
}
else{
  document.querySelector("h1").innerHTML ="It's a draw!";

}
