/*
     Name: Pasquale Palazzolo
     Date: 1/29/2015
     Class & Section:  WIA-01
     Comments: "HTML5 Canvas Drawing"
 */
window.onload = function(){

// Modernizer browser comp test begins
if(Modernizr.canvas){

/*******************************************
HTML5 Shape Drawing Activity
    1.  Setup the canvas and 2d context
    2.  Draw out each shape in the sections below
     
********************************************/

/*******************************************
FILE SETUP

// Setup up 7 different Canvases in index.html one for each problem.
//Link Modernizr.js
// Link the main.js file
// Setup the call to that canvas and get it's 2d context
//Use Modernizr to verify that your browser supports canvas, include 
a fallback message


/*******************************************
PART 1

Draw a rectangle starting at point (0 ,0)
That has a width of 50 px and a height of 100px
Set the color of the rectangle to a shade of blue.
Set the stroke color to black and the dimension of the stroke are the same as 
the rectangle.

Reminder - set the style first then draw.
********************************************/
var firstCanvas = document.getElementById("canvas1");
firstCanvas.width = 150;
firstCanvas.width = 150;
var ctx1 = firstCanvas.getContext("2d");
//Draw Rectangle here
	// The stroke
	ctx1.strokeStyle = "#000000";
	ctx1.lineWidth = 5;
	ctx1.strokeRect(0, 0, 50, 100);

	// The fill
	ctx1.fillStyle = "#46A9B7";
	ctx1.fillRect(0, 0, 50, 100);



	


/*******************************************
PART 2

Draw a circle starting at point (50 ,50)
That has a radius of 20 px 
Set the color of the circle to a shade of red and set the alpha to .5
Set the stroke color to black and use a radius of 30px for this circle.

Reminder - set the style first then draw.
Use the arc method
********************************************/

var secondCanvas = document.getElementById("canvas2");
secondCanvas.width = 150;
secondCanvas.height = 150;
var ctx2 = secondCanvas.getContext("2d");

// Placing my circle styles here
ctx2.strokeStyle = "#000000";
ctx2.fillStyle = "rgba(239, 71, 102, 0.5";
ctx2.lineWidth = 2;
var degrees = 360;
var radians = (degrees/180)*Math.PI;

//Draw Circle here
ctx2.beginPath();
ctx2.arc(50, 50, 20, 0, radians);
ctx2.fill();
ctx2.stroke();


/*******************************************
PART 3

Practice using Path drawing.
Create a 5-point star shaped pattern using the lineTo method.
Begin this shape at (100, 100)

Height and width and color are up to you.

********************************************/
var thirdCanvas = document.getElementById("canvas3");
thirdCanvas.width = 200;
thirdCanvas.height = 200;
var ctx3 = thirdCanvas.getContext("2d");

// Placing my Star styles here
ctx3.strokeStyle = "#000000";
ctx3.fillStyle = "rgb(255, 255, 0)";
ctx3.lineWidth = 2;

//Draw Star here
ctx3.beginPath();
ctx3.moveTo(100, 100);
ctx3.lineTo(110, 120);
ctx3.lineTo(130, 120);
ctx3.lineTo(110, 140);
ctx3.lineTo(120, 160);
ctx3.lineTo(100, 150);
ctx3.lineTo(80, 160);
ctx3.lineTo(90, 140);
ctx3.lineTo(70, 120);
ctx3.lineTo(90, 120);
ctx3.lineTo(100, 100);
ctx3.stroke();
ctx3.fill();

/*******************************************
PART 4

Practice drawing with Bezier curves.
Try drawing the top to an umbrella.
This should have one large arc (a half circle) on the top and scalloped edges on the 
bottom.

Position, height, width and color are your choice.
Do not overlap any other object.

********************************************/
var fourthCanvas = document.getElementById("canvas4");
fourthCanvas.width = 300;
fourthCanvas.height = 300;
var ctx4 = fourthCanvas.getContext("2d");

// Placing my umbrella styles here
ctx4.strokeStyle = "#000000";
ctx4.fillStyle = "rgba(239, 71, 102, 0.5";
ctx4.lineWidth = 2;



//Draw Umbrella top here
ctx4.beginPath();
ctx4.arc(150, 150, 100, 2*Math.PI, 1*Math.PI, true);
ctx4.moveTo(50,150);
ctx4.bezierCurveTo(75, 100, 100, 150, 100, 150);
ctx4.moveTo(100,150);
ctx4.bezierCurveTo(125,100, 150, 150, 150, 150);
ctx4.moveTo(150,150);
ctx4.bezierCurveTo(175,100, 200, 150, 200, 150);
ctx4.moveTo(200,150);
ctx4.bezierCurveTo(225, 100, 250, 150, 250, 150);

ctx4.stroke();


/*******************************************
PART 5

Practice using text.
Draw text into your canvas.  It can said whatever you would like in any color.

********************************************/
// Placing my text styles here
var fifthCanvas = document.getElementById("canvas5");
fifthCanvas.width = 300;
fifthCanvas.height = 150;
var ctx5 = fifthCanvas.getContext("2d");



//Draw text here
var textString1 = "NO! SLEEP! TILL...";
ctx5.font = "18px Verdana";
ctx5.fillStyle = "rgb(0, 0, 0)";
ctx5.fillText(textString1, 20, 40);


var textString2 = "BROOKLYN!!!";
ctx5.font = "40px Times";
ctx5.fillStyle = "rgb(254, 0, 245)";
ctx5.textBaseline = "middle";
ctx5.strokeStyle = "rgba(0, 150, 0, .8)";
ctx5.fillText(textString2, 20, 100);
ctx5.strokeText(textString2, 20, 100);


/*******************************************
PART 6

Pixel manipulation.
Draw the image logo.png into the canvas in the following 3 ways.
1. The image exactly as it is.
2. Shrink the image by 50%
3. Slice a section of the logo out and draw that onto the canvas.

Reminder to use the drawImage method for all 3 of the ways.

********************************************/
var sixthCanvas = document.getElementById("canvas6");
sixthCanvas.width = 3300;
sixthCanvas.height = 2100;
var ctx6 = sixthCanvas.getContext("2d");
var myImg = document.getElementById("img1");
var textString3 = "Image at 100%";
var textString4 = "Image at 50%";
var textString5 = "Ampersand sliced from the original logo";
ctx6.font = "24px Verdana";
ctx6.fillStyle = "rgb(0, 0, 0)";
ctx6.fillText(textString3, 10, 40);
ctx6.fillText(textString4, 10, 1090);
ctx6.fillText(textString5, 10, 1650);



//Draw images here

// 1. Exactly as it is
ctx6.drawImage(myImg, 0, 41);

// 2. Scaled down 50%
ctx6.drawImage(myImg, 0, 1091, 1650, 544);

// 3. Slice from the main image
ctx6.drawImage(myImg, 320, 596, 313, 404, 10, 1660, 313, 404);

/*******************************************
PART 7

Putting it all together. 

Using a combination of all the methods. 
Create a complex scene.
You must use at least 3 different methods.

********************************************/
var seventhCanvas = document.getElementById("canvas7");
seventhCanvas.width = 600;
seventhCanvas.height = 240;
var ctx7 = seventhCanvas.getContext("2d");


// Draw scene here

// Some bezier curved seagulls




// A large rectangle to fill the sky
ctx7.strokeStyle = "#000000";
ctx7.lineWidth = 1;
ctx7.strokeRect(0, 0, 600, 240);
ctx7.fillStyle = "#00ccff";
ctx7.fillRect(0, 0, 600, 240);

// A circle to create the bright sun rising
ctx7.fillStyle = "#fd7d01";
ctx7.lineWidth = 2;
var degrees = 360;
var radians = (degrees/180)*Math.PI;
ctx7.beginPath();
ctx7.arc(300, 180, 100, 0, radians);
ctx7.fill();


// A rectangle to make the calm sea	
ctx7.strokeStyle = "#000000";
ctx7.lineWidth = 1;
ctx7.strokeRect(0, 170, 610, 100);
ctx7.fillStyle = "#46A9B7";
ctx7.fillRect(0, 170,610,100);

// Pixel manipulated clouds
var clouds = document.getElementById("cloudImg");
ctx7.drawImage(clouds, 0, 0, 211, 145);
// one small cloud sliced out and placed to the right of the sun



} // closes Modernizr browser comp test

} // closes the window.onload