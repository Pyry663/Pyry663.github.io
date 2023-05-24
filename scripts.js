/* Place your JavaScript in this file */
var parinaamt = 0;
var lipitysmaksu = 10;
var lipitysamt = 1;
var edtier = 1;
var infinityCost = 100000;
var infinityMulti = 1;
var lippitekst = document.getElementById("maksu")
var ed = document.getElementById("ED");
var parinatxt = document.getElementById("parina");
lippitekst.textContent = "Päivitä lipitys taitoja <br> Maksaa: " + lipitysmaksu;
function clickEventimg() {

    ed.style.height = "300px";
    ed.style.width = "99px";
    setTimeout(clickEventimgup,20)
    parinaamt = parinaamt + 1 * lipitysamt * edtier;
    parinatxt.textContent = "Pärinä: " + parinaamt;
}
function infinityED() {
    if (parinaamt >= infinityCost) {
        parinaamt = 0;
        lipitysamt = 1;
        lipitysmaksu = 10;
        if (edtier = 1) {
            edtier = 2;
        }
        if (edtier <= 3) {
            
        }
        else {
            infinityMulti = infinityMulti + 1.2;
        }
        infinityCost = infinityCost * 2.71;
        
    }
}
function lipitysosto() {
    if (parinaamt >= lipitysmaksu) {
        parinaamt = parinaamt - lipitysmaksu;
        lipitysmaksu = lipitysmaksu * 1.58;
        lipitysamt += 1 * infinityMulti;
        lippitekst.textContent = "Päivitä lipitys taitoja" + "Maksaa: " + lipitysmaksu;
        parinatxt.textContent = "Pärinä: " + parinaamt;
    }
}
function clickEventimgup() {
    var ed = document.getElementById("ED");
    ed.style.height = "400px";
    ed.style.width = "132px";
}