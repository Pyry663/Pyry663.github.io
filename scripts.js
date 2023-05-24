/* Place your JavaScript in this file */
var parinaamt = 0;
var lipitysmaksu = 10;
var lipitysamt = 1;
function clickEventimg() {
    var ed = document.getElementById("ED");
    var parinatxt = document.getElementById("parina");
    ed.style.height = "300px";
    ed.style.width = "99px";
    setTimeout(clickEventimgup,20)
    parinaamt = 1 * lipitysamt;
    parinatxt.textContent = "Pärinä: " + parinaamt;
}
function lipitysosto() {
    if (parinaamt >= lipitysmaksu) {
        parinaamt = parinaamt - lipitysmaksu;
        lipitysmaksu = lipitysmaksu * 2;
        lipitysamt += 1;
        document.getElementById("maksu").textContent = "Päivitä lipitys taitoja <br> Maksaa: " + lipitysmaksu;
    }
}
function clickEventimgup() {
    var ed = document.getElementById("ED");
    ed.style.height = "400px";
    ed.style.width = "132px";
}