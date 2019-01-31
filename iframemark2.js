var userInput = document.getElementById("userInput");
var duelRoom1 = document.getElementById("duelRoom1");
var championGG = document.getElementById("championGG");

userInput.value = "https://";
document.onkeypress = function() {
    if (event.keyCode === 13) {
        document.getElementById("iframeMain").src = userInput.value;
        userInput.value = "https://";
    }
};

duelRoom1.addEventListener("click", function() {
    document.getElementById("iframeMain").src = "https://duelingnexus.com/game/NA-DUEL";
});

championGG.addEventListener("click", function() {
    document.getElementById("iframeMain").src = "https://champion.gg/";
});
