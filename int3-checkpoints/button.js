var vid = document.getElementById("vid");
vid.style.position = "absolute";

function activateYikes() {
    vid.style.top = Math.random() * 500 + "px";
    vid.style.left = Math.random() * 1000 + "px";
}

        vid.addEventListener("mousemove", function() {
            activateYikes();
        });

