var sidemenu = document.getElementById("sidemenu");
function openmenu() {
    sidemenu.style.right = "0px"
}
function closemenu() {
    sidemenu.style.right = "-200px"
}

var tablinks = document.getElementsByClassName("tab-links");
var tabcontains = document.getElementsByClassName("tab-contain");

function opentab(tabname) {
    for (tablink of tablinks) {
        tablink.classList.remove("act-links");
    }
    for (tabcontain of tabcontains) {
        tabcontain.classList.remove("act-tab");
    }
    event.currentTarget.classList.add("act-links");
    document.getElementById(tabname).classList.add("act-tab");
}

var icon = document.getElementById("icon");
icon.onclick = function () {
    document.body.classList.toggle("dark-theme");
    if (document.body.classList.contains("dark-theme")) {
        icon.src = "sun.png "
    } else {
        icon.src = "moon.png"
    }
}