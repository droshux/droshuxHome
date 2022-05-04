const svgs = document.getElementsByTagName("svg")
let dropdownArrows = [];
for (i=0; i<svgs.length; i++) {
    if (svgs[i].id.startsWith("dropdown")) {
        dropdownArrows.push(svgs[i]);
    }
}
//dropdownArrows.push(document.getElementById("body"))
for (i = 0; i < dropdownArrows.length; i++) {
    dropdownArrows[i].addEventListener("animationend", function (event) {
        //event.target.style.animation = "idle"
        if (event.target.getAttribute("data-rotated") == "0") {
            event.target.setAttribute("data-rotated", "1")
        } else {
            event.target.setAttribute("data-rotated", "0")
        }
    })
    dropdownArrows[i].addEventListener("click", function (event) {
        if (event.target.tagName != "use") {
            if (event.target.getAttribute("data-rotated") == "0") {
                event.target.style.animation = "spinUP 0.5s forwards"
            } else {
                event.target.style.animation = "spinDOWN 0.5s forwards"
            }
        }
    })
}
/*uses = document.getElementsByTagName("use")
for (i = 0; i < uses.length; i++) {
    console.log(uses[i])
    var newUse = uses[i].cloneNode(true)
    uses[i].parentNode.replaceChild(newUse, uses[i])
}*/