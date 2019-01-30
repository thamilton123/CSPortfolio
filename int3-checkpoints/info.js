// grabs buttons from the html
var div1redbuttonPlus = document.getElementById("div1redbuttonPlus");
var div1greenbuttonPlus = document.getElementById("div1greenbuttonPlus");
var div1bluebuttonPlus = document.getElementById("div1bluebuttonPlus");
var div2redbuttonPlus = document.getElementById("div2redbuttonPlus");
var div2greenbuttonPlus = document.getElementById("div2greenbuttonPlus");
var div2bluebuttonPlus = document.getElementById("div2bluebuttonPlus");
var div3redbuttonPlus = document.getElementById("div3redbuttonPlus");
var div3greenbuttonPlus = document.getElementById("div3greenbuttonPlus");
var div3bluebuttonPlus = document.getElementById("div3bluebuttonPlus");
var div1redbuttonMinus = document.getElementById("div1redbuttonMinus");
var div1greenbuttonMinus = document.getElementById("div1greenbuttonMinus");
var div1bluebuttonMinus = document.getElementById("div1bluebuttonMinus");
var div2redbuttonMinus = document.getElementById("div2redbuttonMinus");
var div2greenbuttonMinus = document.getElementById("div2greenbuttonMinus");
var div2bluebuttonMinus = document.getElementById("div2bluebuttonMinus");
var div3redbuttonMinus = document.getElementById("div3redbuttonMinus");
var div3greenbuttonMinus = document.getElementById("div3greenbuttonMinus");
var div3bluebuttonMinus = document.getElementById("div3bluebuttonMinus");

// assigns initial rgb values to div1
var div1red = 0;
var div1green = 0;
var div1blue = 0;
var div1color = "rgb(" + div1red + "," +  div1green + ","  + div1blue + ")";

// assigns initial rgb values to div2
var div2red = 0;
var div2green = 0;
var div2blue = 0;
var div2color = "rgb(" + div2red + "," +  div2green + ","  + div2blue + ")";

// assigns initial rgb values to div3
var div3red = 0;
var div3green = 0;
var div3blue = 0;
var div3color = "rgb(" + div3red + "," +  div3green + ","  + div3blue + ")";

// initializes the void
    div1.style.background = div1color;
    div2.style.background = div2color;
    div3.style.background = div3color;

// changes div1 rgb backgroundcolor value based on clicks
div1redbuttonPlus.addEventListener("click", function(){
    div1red = div1red+25;
    var div1color = "rgb(" + div1red + "," +  div1green + ","  + div1blue + ")";
    div1.style.background = div1color;
});
div1greenbuttonPlus.addEventListener("click", function(){
    div1green = div1green+25;
    var div1color = "rgb(" + div1red + "," +  div1green + ","  + div1blue + ")";
    div1.style.background = div1color;
});
div1bluebuttonPlus.addEventListener("click", function(){
    div1blue = div1blue+25;
    var div1color = "rgb(" + div1red + "," +  div1green + ","  + div1blue + ")";
    div1.style.background = div1color;
});
div1redbuttonMinus.addEventListener("click", function(){
    div1red = div1red-25;
    var div1color = "rgb(" + div1red + "," +  div1green + ","  + div1blue + ")";
    div1.style.background = div1color;
});
div1greenbuttonMinus.addEventListener("click", function(){
    div1green = div1green-25;
    var div1color = "rgb(" + div1red + "," +  div1green + ","  + div1blue + ")";
    div1.style.background = div1color;
});
div1bluebuttonMinus.addEventListener("click", function(){
    div1blue = div1blue-25;
    var div1color = "rgb(" + div1red + "," +  div1green + ","  + div1blue + ")";
    div1.style.background = div1color;
});

// changes div2 rgb backgroundcolor based on clicks
div2redbuttonPlus.addEventListener("click", function(){
    div2red = div2red+25;
    var div2color = "rgb(" + div2red + "," +  div2green + ","  + div2blue + ")";
    div2.style.background = div2color;
});
div2greenbuttonPlus.addEventListener("click", function(){
    div2green = div2green+25;
    var div2color = "rgb(" + div2red + "," +  div2green + ","  + div2blue + ")";
    div2.style.background = div2color;
});
div2bluebuttonPlus.addEventListener("click", function(){
    div2blue = div2blue+25;
    var div2color = "rgb(" + div2red + "," +  div2green + ","  + div2blue + ")";
    div2.style.background = div2color;
});
div2redbuttonMinus.addEventListener("click", function(){
    div2red = div2red-25;
    var div2color = "rgb(" + div2red + "," +  div2green + ","  + div2blue + ")";
    div2.style.background = div2color;
});
div2greenbuttonMinus.addEventListener("click", function(){
    div2green = div2green-25;
    var div2color = "rgb(" + div2red + "," +  div2green + ","  + div2blue + ")";
    div2.style.background = div2color;
});
div2bluebuttonMinus.addEventListener("click", function(){
    div2blue = div2blue-25;
    var div2color = "rgb(" + div2red + "," +  div2green + ","  + div2blue + ")";
    div2.style.background = div2color;
});

// changes div3 rgb backgroundcolor based on clicks
div3redbuttonPlus.addEventListener("click", function(){
    div3red = div3red+25;
    var div3color = "rgb(" + div3red + "," +  div3green + ","  + div3blue + ")";
    div3.style.background = div3color;
});
div3greenbuttonPlus.addEventListener("click", function(){
    div3green = div3green+25;
    var div3color = "rgb(" + div3red + "," +  div3green + ","  + div3blue + ")";
    div3.style.background = div3color;
});
div3bluebuttonPlus.addEventListener("click", function(){
    div3blue = div3blue+25;
    var div3color = "rgb(" + div3red + "," +  div3green + ","  + div3blue + ")";
    div3.style.background = div3color;
});
div3redbuttonMinus.addEventListener("click", function(){
    div3red = div3red-25;
    var div3color = "rgb(" + div3red + "," +  div3green + ","  + div3blue + ")";
    div3.style.background = div3color;
});
div3greenbuttonMinus.addEventListener("click", function(){
    div3green = div3green-25;
    var div3color = "rgb(" + div3red + "," +  div3green + ","  + div3blue + ")";
    div3.style.background = div3color;
});
div3bluebuttonMinus.addEventListener("click", function(){
    div3blue = div3blue-25;
    var div3color = "rgb(" + div3red + "," +  div3green + ","  + div3blue + ")";
    div3.style.background = div3color;
});