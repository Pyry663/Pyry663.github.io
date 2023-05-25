
var parinaamt = localStorage.getItem("paramt");
var lipitysamt = localStorage.getItem("lipamt");
var edtier = localStorage.getItem("eti");
var lipitysmaksu = localStorage.getItem("lipco");
var infinityCost = localStorage.getItem("infco");
var infinityMulti = localStorage.getItem("infmul");
parinaamt = Number(parinaamt);
lipitysamt = Number(lipitysamt);
edtier = Number(edtier);
lipitysmaksu = Number(lipitysmaksu);
infinityCost = Number(infinityCost);
infinityMulti = Number(infinityMulti);
function RESET() {
    parinaamt = 0;
    lipitysamt = 1;
    edtier = 1;
    lipitysmaksu = 10;
    infinityCost = 10000;
    infinityMulti = 1;
    localStorage.setItem("paramt", parinaamt);
    localStorage.setItem("lipamt", lipitysamt);
    localStorage.setItem("eti", edtier);
    localStorage.setItem("lipco", lipitysmaksu);
    localStorage.setItem("infco", infinityCost);
    localStorage.setItem("infmul", infinityMulti);
    
}

var ppee = document.getElementById("ppe");
var inftext = document.getElementById("maksuifn");
var lippitekst = document.getElementById("maksu");
var ed = document.getElementById("ED");
var parinatxt = document.getElementById("parina");
lippitekst.textContent = "Päivitä lipitys taitoja <br> Maksaa: " + lipitysmaksu;
function clickEventimg() {
    parinaamt = parinaamt + 1 * lipitysamt * edtier;
    parinatxt.textContent = "Pärinä: " + parinaamt;
    ppee.textContent = "+" + 1 * lipitysamt * edtier;
    ppee.style.opacity = 1;

}
function clickanim() {
    ppee.style.transform = 'rotate(90deg)';
}
function infinityUpgradesscreen() {

}
function infinityED() {
    if (parinaamt >= infinityCost) {
        parinaamt = 0;
        lipitysamt = 1;
        document.getElementById("ED").src="tropicaled1.png";
        lipitysmaksu = 10;
        if (edtier == 1) {
            edtier = 2;
        }
        if (edtier <= 3) {
            
        }
        else {

        }
        infinityCost = infinityCost * 3;
        
    }
}
function sav() {
    setTimeout(savegame,8000);
}
function updateinterface() {
    parinatxt.textContent = "Pärinä: " + parinaamt;
    if (edtier == 2) {
        document.getElementById("ED").src="tropicaled1.png";
    }
    if (edtier == 1){
        document.getElementById("ED").src="edgreenfruit.png";
    }
    lippitekst.textContent = "Päivitä lipitystaitoja" + " Maksaa: " + lipitysmaksu;
    inftext.textContent = "aloita uusi loputtomuus" + " Maksaa: " + infinityCost
    setTimeout(updateinterface,50);
}
function loadin() {
    savegame();
    updateinterface();
    opacitydown();
}

function savegame() {
    localStorage.setItem("paramt", parinaamt);
    localStorage.setItem("lipamt", lipitysamt);
    localStorage.setItem("eti", edtier);
    localStorage.setItem("lipco", lipitysmaksu);
    localStorage.setItem("infco", infinityCost);
    localStorage.setItem("infmul", infinityMulti);
    setTimeout(sav,2000);
}
function lipitysosto() {
    if (parinaamt >= lipitysmaksu) {
        parinaamt = parinaamt - lipitysmaksu;
        lipitysmaksu = lipitysmaksu * 2;
        lipitysamt += 1 * infinityMulti;
        lippitekst.textContent = "Päivitä lipitys taitoja" + "Maksaa: " + lipitysmaksu;
        parinatxt.textContent = "Pärinä: " + parinaamt;
    }
}
function opacitydown() {
    ppee.style.opacity -= 0.02;
    
    setTimeout(opacitydown,20);
}