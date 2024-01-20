document.addEventListener("click", function(event) {
    let element = event.target.tagName
    if (element == "BUTTON" || element == "I") {
        document.getElementById("input").style.display = "inline";
        document.getElementById("input").focus();
        document.getElementById("input").style.width = "175px";
        document.getElementById("input").style.paddingRight = "34px";
        document.getElementById("input").style.paddingLeft = "10px";

        document.getElementById("button").style.left ="221px";
    }
});
