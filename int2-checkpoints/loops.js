/* global ellipse size stroke fill random background rect draw*/
var sketch = function(processing) {with(processing) {size(1350, 680);background(255);
// °º¤ø,¸¸,ø¤º°`°º¤ø Create Project Below This Line ø¤º°`°º¤ø,¸,ø¤°//

background(random(255),random(255),random(255));
var n=0;
var width = 1400;
var height = 750;
draw=function(){
for (var i = 0; i < width; i += 50) {
    for (var j = 0; j < height; j += 50) {
        n=random(-1,1);
        stroke(random(255), random(255), random(255));
        fill(random(255), random(255), random(255));
        if (n > 0) { ellipse(i, j, 50, 50) }
        else { rect(i-25, j-25, 50, 50) }
    }
};
}
// °º¤ø,¸¸,ø¤º°`°º¤ø Create Project Above This Line ø¤º°`°º¤ø,¸,ø¤°//   
}};
var p = new Processing(document.getElementById("output-canvas"), sketch);