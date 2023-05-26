
var parinaamt = localStorage.getItem("paramt");
var lipitysamt = localStorage.getItem("lipamt");
var edtier = localStorage.getItem("eti");
var lipitysmaksu = localStorage.getItem("lipco");
var infinityCost = localStorage.getItem("infco");
var infinitypoints = localStorage.getItem("infpoin");
var edmulti = localStorage.getItem("edmult");
var autoclicker = localStorage.getItem("autcli");
parinaamt = Number(parinaamt);
lipitysamt = Number(lipitysamt);
edtier = Number(edtier);
lipitysmaksu = Number(lipitysmaksu);
infinityCost = Number(infinityCost);
infinitypoints = Number(infinitypoints);
edmulti = Number(edmulti);
autoclicker = Number(autoclicker);
function RESET() {
    parinaamt = 0;
    lipitysamt = 1;
    edtier = 1;
    lipitysmaksu = 10;
    infinityCost = 10000;
    infinitypoints = 0;
    edmulti = 0;
    autoclicker = 0;
    localStorage.setItem("paramt", parinaamt);
    localStorage.setItem("lipamt", lipitysamt);
    localStorage.setItem("eti", edtier);
    localStorage.setItem("lipco", lipitysmaksu);
    localStorage.setItem("infco", infinityCost);
    localStorage.setItem("infpoin", infinitypoints);
    localStorage.setItem("edmult",edmulti);
    localStorage.setItem("autcli",autoclicker);
    
}
var infupg = document.getElementById("infinityUP1");
var IP1 = document.getElementById("IP");
var ppee = document.getElementById("ppe");
var inftext = document.getElementById("maksuifn");
var lippitekst = document.getElementById("maksu");
var ed = document.getElementById("ED");
var parinatxt = document.getElementById("parina");
lippitekst.textContent = "Päivitä lipitys taitoja <br> Maksaa: " + lipitysmaksu;
function clickEventimg() {
    if (edmulti == 1) {
        parinaamt = parinaamt + 1 * lipitysamt * edtier * infinitypoints + 1;
        ppee.textContent = "+" + 1 * lipitysamt * edtier * infinitypoints;
    }
    else {
        parinaamt = parinaamt + 1 * lipitysamt * edtier;
        ppee.textContent = "+" + 1 * lipitysamt * edtier;
    }
    parinatxt.textContent = "Pärinä: " + parinaamt;
    
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
        

        parinatxt.textContent = "Pärinä: " + parinaamt;
        infinitypoints = infinitypoints + 1;
        IP1.textContent = "LoputtomiaPärinöitä: " + infinitypoints;
        document.getElementById("ED").src="tropicaled1.png";
        lipitysmaksu = 10;
        if (edtier == 1) {
            edtier = 2;
        }
        if (edtier <= 3) {
            
        }
        else {

        }
        infinityCost = 10000;
        
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
    IP1.textContent = "LoputtomiaPärinöitä: " + infinitypoints;
    lippitekst.textContent = "Päivitä lipitystaitoja" + " Maksaa: " + lipitysmaksu;
    inftext.textContent = "aloita uusi loputtomuus" + " Maksaa: " + infinityCost
    if (edmulti == 1) {
        
    }
    setTimeout(updateinterface,50);
    infinityCost = 10000;
    
}
function loadin() {
    savegame();
    openTab(event,"EDTab");
    updateinterface();
    opacitydown();
    autoclicker1();
}
function autoclicker1() {
    if (autoclicker == 1) {
        clickEventimg();
    }
    setTimeout(autoclicker1, 800);
    console.Log("SUSUSUS");
}
function purhaceinfupgrade(evt, InfUpgrade, price) {
    var i, infupgrades;
    if (infinitypoints >= price) {
        if (price == 5) {
            edmulti = 1;
        }
        if (InfUpgrade == "InfinityUP3") {
            autoclicker = 1;
        }
        document.getElementById(InfUpgrade).style.display = "block";
        evt.currentTarget.className += " active";
        console.Log(evt.currentTarget.className);
        infinitypoints -= price;
    }
    
}
function openTab(evt, TabName) { 
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(TabName).style.display = "block";
    evt.currentTarget.className += " active";
  }
function savegame() {
    localStorage.setItem("paramt", parinaamt);
    localStorage.setItem("lipamt", lipitysamt);
    localStorage.setItem("eti", edtier);
    localStorage.setItem("lipco", lipitysmaksu);
    localStorage.setItem("infco", infinityCost);
    localStorage.setItem("infpoin", infinitypoints);
    localStorage.setItem("edmult",edmulti);
    localStorage.setItem("autcli",autoclicker);
    setTimeout(sav,2000);
}
function lipitysosto() {
    if (parinaamt >= lipitysmaksu) {
        parinaamt = parinaamt - lipitysmaksu;
        lipitysmaksu = lipitysmaksu + 100;
        lipitysamt += 1;
        lippitekst.textContent = "Päivitä lipitys taitoja" + "Maksaa: " + lipitysmaksu;
        parinatxt.textContent = "Pärinä: " + parinaamt;
    }
}
function opacitydown() {
    ppee.style.opacity -= 0.02;
    
    setTimeout(opacitydown,20);
}