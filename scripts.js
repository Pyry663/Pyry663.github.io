/* Place your JavaScript in this file */
var parinaamt = 0;
function clickEventimg() {
    var ed = document.getElementById("ED");
    var parinatxt = document.getElementById("parina");
    ed.style.height = "300px";
    ed.style.width = "99px";
    setTimeout(clickEventimgup,20)
    parinaamt++;
    parinatxt.textContent = "Pärinä: " + parinaamt;
}
function clickEventimgup() {
    var ed = document.getElementById("ED");
    ed.style.height = "400px";
    ed.style.width = "132px";
}