
// Variables, assigns DOM elements to the variables

var colorInput = document.getElementById("colorInput");
var changeButton = document.getElementById("changeButton");

// makes an event listener to detect clicks on the button, which then activates a different function which changes the color

changeButton.addEventListener("click", function(){
    document.body.style.backgroundColor = colorInput.value;
})