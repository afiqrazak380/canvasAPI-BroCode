
let canvas = document.getElementById("myCanvas");
let context = canvas.getContext("2d");
// "2d": This returns a CanvasRenderingContext2D object, which is used for drawing shapes, text, images, and other objects onto the canvas.

/*
== Draw Lines ==
context.strokeStyle = "red"; // stroke's color
context.lineWidth = 10; // width of the line
context.beginPath(); // to initiate drawing 
context.moveTo(0, 0); // to set brush's starting point
context.lineTo(250, 250); // to draw a line
context.lineTo(250, 500); // second line
context.moveTo(500, 0); // move brush to the top right corner
context.lineTo(250, 250); // third line
context.stroke()
*/

/*
== Draw Triangle ==
context.strokeStyle = "red";
context.fillStyle = "yellow";
context.lineWidth = 5;
context.beginPath();
context.moveTo(250, 0);
context.lineTo(0, 250);
context.lineTo(500, 250);
context.lineTo(250, 0);
context.stroke();
context.fill() // introduce colour black inside the triangle
*/

/*
== Draw Rectangle ==
context.fillStyle = "red"
context.fillRect(0, 0, 250, 250);
context.strokeStyle = "black";
context.strokeRect(0, 0, 250, 250);

context.fillStyle = "blue"
context.fillRect(0, 250, 250, 250);
context.strokeStyle = "black";
context.strokeRect(0, 250, 250, 250);

context.fillStyle = "yellow"
context.fillRect(250, 250, 250, 250);
context.strokeStyle = "black";
context.strokeRect(250, 250, 250, 250);

context.fillStyle = "green"
context.fillRect(250, 0, 250, 250);
context.strokeStyle = "black";
context.strokeRect(250, 0, 250, 250);\
*/

/*
== Draw Circle ==
// (x, y, r, sAngle, eAngle, counterclockwise) // sAngle = startingAngle, eAngle = endingAngle
context.fillStyle = "lightblue";
context.lineWidth = 10;
context.beginPath();
context.arc(250, 250, 200, 0, 2*Math.PI)
context.stroke()
context.fill()
*/

/*
== Draw Text ==
context.font = "50px Verdana";
context.fillStyle = "red"
context.textAlign = "center"
context.fillText("To The Moon!", canvas.width/2, canvas.height/2);
*/
