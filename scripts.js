/* Place your JavaScript in this file */
const listofdata = [paramt,lipamt,eti,lipco,infco,infmul]
for (let i in listofdata) {
    if (localStorage.getItem(i) == null) {
        parinaamt = 0;
        lipitysamt = 1;
        lipitysmaksu = 10;
        infinityCost = 10000;
        infinityMulti = 1;
        edtier = 1;
    }
    else {
        if (i = paramt) {
            parinaamt = localStorage.getItem(i);
        }
        if (i = lipamt) {
            lipitysamt = localStorage.getItem(i);
        }
        if (i = lipco) {
            lipitysmaksu = localStorage.getItem(i);
        }
        if (i = eti) {
            edtier = localStorage.getItem(i);
        }
        if (i = infinityCost) {
            infco = localStorage.getItem(i);
        }
        if (i = infinityMulti) {
            infmul = localStorage.getItem(i);
        }
    }
} 
var savinggg = document.getElementById("saveign");
var lippitekst = document.getElementById("maksu");
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
function sav() {
    savinggg.textContent = "";
    setTimeout(savegame,8000);
}
function savegame() {
    savinggg.textContent = "saving";
    localStorage.setItem(paramt, parinaamt);
    localStorage.setItem(lipamt, lipitysamt);
    localStorage.setItem(eti, edtier);
    localStorage.setItem(lipco, lipitysmaksu);
    localStorage.setItem(infco, infinityCost);
    localStorage.setItem(infmul, infinityMulti);
    setTimeout(sav,2000);
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