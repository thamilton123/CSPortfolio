var button1 = document.getElementById("button1");
button1.style.position = "absolute";
button1.addEventListener("mousemove", function() {
        activateYikes();
});

function activateYikes() {
        button1.style.top = Math.random() * 500 + "px";
        button1.style.left = Math.random() * 500 + "px";
}