/* global size background mouseMoved mouseClickedProcessing draw strokeWeight line stroke mouseX mouseY random redline blueline*/
var sketch = function(processing) {
    with(processing) {
        size(1350, 680);
        background(255);
        // °º¤ø,¸¸,ø¤º°`°º¤ø Create Project Below This Line ø¤º°`°º¤ø,¸,ø¤°//

        // variable declarations
        var toprightLine = 0;
        var toptopLine = 0;
        var bottomleftLine = 0;
        var bottombottomLine = 0;
        var deathGate = true;

        // redline function-this is what makes the spooky blinking red lines and adjusts the background.
        redline = function() {
            background(200, 200, 0);
            // loop for more lines, math
            for (var i = 0; i < 5; i++) {
                toprightLine = random(680);
                toptopLine = 1350 - toprightLine * 1.985;
                stroke(200, 0, 0);
                line(toptopLine, 0, 1350, toprightLine);
            }
        };

        // blueline function-this is what makes the spooky blinking blue lines and adjusts the background.
        blueline = function() {
            background(0, 200, 200);
            // loop for more lines, math
            for (var i = 0; i < 5; i++) {
                bottomleftLine = random(680);
                bottombottomLine = 1350 - bottomleftLine * 1.985;
                stroke(0, 0, 200);
                line(0, bottomleftLine, bottombottomLine, 680);
            }
        };
        // this is what calls on the above functions based on mouse position.
        draw = function() {
            // if deathGate is on, then it activates the background color change. Otherwise, the pain is not activated.
            if (deathGate === true) {
                mouseMoved = function() {
                    // loop for more lines
                    for (var i = 0; i < 20; i++) {
                        // if the mouse is on a line, this happens instead.
                        if (mouseX / 1.985 > 680 - mouseY - 15 && mouseX / 1.985 < 680 - mouseY + 15) {
                            background(0);
                        }
                        else {
                            if (mouseX < mouseY * 1.985 - 22) {
                                if (mouseX / 1.985 > 680 - mouseY) {
                                    redline();
                                }
                                else {
                                    blueline();
                                }
                            }
                            else if (mouseX > mouseY * 1.985 + 22) {
                                if (mouseX / 1.985 > 680 - mouseY) {
                                    blueline();
                                }
                                else {
                                    redline();
                                }
                            }
                            // if the mouse is on a line, this happens instead.
                            else {
                                background(0);
                            }
                        }
                    }
                    // this adds the white lines
                    strokeWeight(15);
                    stroke(255);
                    line(0, 680, 1350, 0);
                    line(1350, 680, 0, 0);
                    strokeWeight(5);
                };
            }
            // this activates the background shifts on mouse movement based on whether or not the deathGate variable is true or false.
            else {
                mouseMoved = function() {
                    background(random(255), random(255), random(255));
                };
            }
        };
        // when the mouse is clicked, deathGate is toggled.
        mouseClicked = function() {
            deathGate = !deathGate;
        };
        // °º¤ø,¸¸,ø¤º°`°º¤ø Create Project Above This Line ø¤º°`°º¤ø,¸,ø¤°// 

    }
};
var p = new Processing(document.getElementById("output-canvas"), sketch);
