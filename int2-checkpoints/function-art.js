/* global size processing strokeWeight elementID fill mouseDragged mousePressed mouseX mouseY random background rect draw line*/
var sketch = function(processing) {
    with(processing) {size(1350, 680);background(255);
    
        // °º¤ø,¸¸,ø¤º°`°º¤ø Create Project Below This Line ø¤º°`°º¤ø,¸,ø¤°//

    var i = 100;
    var j = 100;
    var backgrounddark = 0;
    var inputx=0;
    var inputy=0;

    function activatedeathbeam() {
        background(255 - backgrounddark);
        fill(backgrounddark);
        rect(mouseX - 50 - inputx / 2, mouseY - 50 - inputy / 2, i + inputx, j + inputy);
        line(0, 0, mouseX - 50 - inputx / 2, mouseY - 50 - inputy / 2);
        line(0, 680, mouseX - 50 - inputx / 2, mouseY + j + inputy / 2 - 50);
        line(mouseX + i + inputx / 2 - 50, mouseY + j + inputy / 2 - 50, 1350, 680);
        line(mouseX + i + inputx / 2 - 50, mouseY - 50 - inputy / 2, 1350, 0);
        if (backgrounddark < 255) {
            backgrounddark++;
        }
        else {
            backgrounddark = 0;
            inputx=random(-200,0);
            inputy=random(-200,0);
        }
    }

    mouseDragged = function() {
        activatedeathbeam();
        inputx+=1;
        inputy+=1;
    };
    mousePressed = function() {
        activatedeathbeam();
        inputx+=10;
        inputy+=10;
        backgrounddark+=9;
    };


    // °º¤ø,¸¸,ø¤º°`°º¤ø Create Project Above This Line ø¤º°`°º¤ø,¸,ø¤°// 

}}; var p = new Processing(document.getElementById("output-canvas"), sketch);