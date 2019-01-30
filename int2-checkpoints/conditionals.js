/* global background mouseX mouseY fill line ellipse random size Processing stroke strokeWeight*/
var sketch = function(processing) {
    with(processing) {
        size(400, 400);
        background(255);
        // °º¤ø,¸¸,ø¤º°`°º¤ø Create Project Below This Line ø¤º°`°º¤ø,¸,ø¤°//

        background(80, 50, 0);
        line(100, 0, 100, 400);
        draw = function() {
            background();
            ellipse(mouseX, mouseY, 30, 30);
            strokeWeight(3)
            line(100, 0, 100, 400)
            line(200, 0, 200, 400)
            if (mouseX > 200) {
                fill(250);
            }
            else if (mouseX > 100) {
                fill(0);
            }
            else if (mouseX > 0) {
                fill(250);
            }
            if (mouseX > 200) {
                strokeWeight(10);
                stroke(0);
                line(random(200, 400), random(400), mouseX, mouseY, random(400));
            }
            else if (mouseX <= 100) {
                strokeWeight(10);
                stroke(0);
                line(random(100), random(400), mouseX, mouseY, random(400));
            }
            stroke(255);

        };

        // °º¤ø,¸¸,ø¤º°`°º¤ø Create Project Above This Line ø¤º°`°º¤ø,¸,ø¤°//   
    }
};
var p = new Processing(document.getElementById("output-canvas"), sketch);
