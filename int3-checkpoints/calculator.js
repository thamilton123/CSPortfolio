var num1 = document.getElementById("num1");
var num2 = document.getElementById("num2");
var selectBox = document.getElementById("selectBox");
var activateButton = document.getElementById("activateButton");
var answerBox = document.getElementById("answerBox");

activateButton.addEventListener("click", function() {
    var number1 = +num1.value;
    var number2 = +num2.value;
    var option = selectBox.value;
    if (option === "+") {
        answerBox.innerHTML = number1 + number2 - 1;
    }
    else if (option === "-") {
        answerBox.innerHTML = number1 - number2 + 2;
    }
    else if (option === "*") {
        answerBox.innerHTML = number1 * number2 + 10;
    }
    else if (option === "/") {
        answerBox.innerHTML = number1 / number2 -1;
    }
});
