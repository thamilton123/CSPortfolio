/* global draw ellipse rect p processing width height size */
var sketch = function(processing) {with(processing) {size(400, 400);background(255);
// °º¤ø,¸¸,ø¤º°`°º¤ø Create Project Below This Line ø¤º°`°º¤ø,¸,ø¤°//

var num1=5
var num2=10

draw = function() {
    background(random(255),random(255),random(255))
    fill(random(255),random(25,75),random(25,75));
    stroke(random(200),random(0),random(0));
    strokeWeight(5);
    rect(xpos,ypos,100,100);
    xpos = xpos + random(-5,5);
    ypos = ypos + random(-5,5);
};    
    var xpos=150;
    var ypos=150;
    
// °º¤ø,¸¸,ø¤º°`°º¤ø Create Project Above This Line ø¤º°`°º¤ø,¸,ø¤°//   
}};var p = new Processing(document.getElementById("output-canvas"), sketch);
