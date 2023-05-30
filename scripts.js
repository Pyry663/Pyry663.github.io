

var parinaut1 = false;
var parinaamt = localStorage.getItem("parinaamt");
var lipitysamt = localStorage.getItem("lipitysamt");
var edtier = localStorage.getItem("edtier");
var lipitysmaksu = localStorage.getItem("lipitysmaksu");
var infinityCost = localStorage.getItem("infinityCost");
var infinitypoints = localStorage.getItem("infinitypoints");
var maxall = true;
var edmulti = localStorage.getItem("edmulti");
var autoclicker = localStorage.getItem("autoclicker");
var edmulti = Number(edmulti);
console.log(parinaamt);
var autoc = new Decimal(0);
var theme = "Auto";
if (localStorage.getItem("theme") != null) {
    theme = localStorage.getItem("theme");
    console.log(theme);
}
console.log(typeof(parinaamt));
parinaamt = new Decimal(parinaamt);
lipitysamt = new Decimal(lipitysamt);
edtier = new Decimal(edtier);
lipitysmaksu = new Decimal(lipitysmaksu);
infinityCost = new Decimal(infinityCost);
infinitypoints = new Decimal(infinitypoints);

var tubwer = new Decimal(0);
var canby = new Decimal(0);
console.log(typeof(parinaamt));
var comsed = document.getElementById("Ed skin");
Decimal.rounding = Decimal.ROUND_HALF_CEIL;
var edskinselected = "Auto";
autoclicker = Number(autoclicker);
function RESET() {
    parinaamt = new Decimal(0);
    lipitysamt = new Decimal(1);
    edtier = new Decimal(1);
    lipitysmaksu = new Decimal(10);
    infinityCost = new Decimal(10000);
    infinitypoints = new Decimal(0);
    edmulti = 0;
    autoclicker = 0;
    localStorage.setItem("parinaamt",parinaamt);
    
    localStorage.setItem("lipitysamt",lipitysamt);
    localStorage.setItem("edtier",edtier);
    localStorage.setItem("lipitysmaksu",lipitysmaksu);
    localStorage.setItem("infinityCost",infinityCost);
    localStorage.setItem("infinitypoints",infinitypoints);
    localStorage.setItem("edmulti",0);
    localStorage.setItem("autoclicker",0);
    
}
var parinaauto = document.getElementById("parinuponoff");
var autobuyertab = document.getElementById("Autobuyertabb");
var mxa2 = document.getElementById("MaxAll1");
var infupg = document.getElementById("infinityUP1");
var IP1 = document.getElementById("IP");
var ppee = document.getElementById("ppe");
var inftext = document.getElementById("maksuifn");
var lippitekst = document.getElementById("maksu");
var ed = document.getElementById("ED");
var parinatxt = document.getElementById("parina");
lippitekst.textContent = "Päivitä lipitys taitoja <br> Maksaa: " + lipitysmaksu;
function clickEventimg() {
    tubwer = new Decimal(1);
    

    if (edmulti == 1 && infinitypoints.gte(1)) {
        tubwer = tubwer.times(lipitysamt).times(edtier).times(infinitypoints)
        parinaamt = parinaamt.plus(tubwer)
        ppee.textContent = "+" + lipitysamt.times(edtier).times(infinitypoints);
    }
    else {
        tubwer = tubwer.times(lipitysamt).times(edtier)
        parinaamt = parinaamt.plus(tubwer);
        ppee.textContent = "+" + tubwer;
    }
    parinatxt.textContent = "Pärinä: " + parinaamt.round();
    
    ppee.style.opacity = 1;

}
function clickanim() {
    ppee.style.transform = 'rotate(90deg)';
}
function maxalltogl() {
    var mxa2 = document.getElementById("MaxAll1");
    maxall = !maxall;
    if (maxall) {
        mxa2.innerHTML = "Max All: On";
    }
    else {
        mxa2.innerHTML = "Max All: Off";
    }
}
function buyMaxlip(){
    while (parinaamt.gte(lipitysmaksu)) {
        if (parinaamt.gte(lipitysmaksu)) {
            if (lipitysmaksu.gte(10000)) {
                parinaamt = parinaamt.minus(lipitysmaksu);
                lipitysmaksu = lipitysmaksu.times(5);
                lipitysamt = lipitysamt.add(10);
                if (lipitysmaksu.equals(110)){
                    lipitysmaksu = lipitysmaksu.minus(10);
                }
                lippitekst.textContent = "Päivitä lipitys taitoja" + "Maksaa: " + lipitysmaksu;
                parinatxt.textContent = "Pärinä: " + parinaamt;
            }
            else{
                parinaamt = parinaamt.minus(lipitysmaksu);
                lipitysmaksu = lipitysmaksu.add(100);
                lipitysamt = lipitysamt.add(1);
                if (lipitysmaksu.equals(110)){
                    lipitysmaksu = lipitysmaksu.minus(10);
                }
                lippitekst.textContent = "Päivitä lipitys taitoja" + "Maksaa: " + lipitysmaksu;
                parinatxt.textContent = "Pärinä: " + parinaamt;
            }
            
        }
    }
    
 }
function infinityUpgradesscreen() {

}
function infinityED() {
    if (parinaamt.gte(infinityCost)) {
        lipitysamt = lipitysamt.minus(lipitysamt).plus(1);
        console.log("s");

        parinatxt.textContent = "Pärinä: " + parinaamt;
        
        IP1.textContent = "LoputtomiaPärinöitä: " + infinitypoints;
        lipitysmaksu = lipitysmaksu.minus(lipitysmaksu).plus(10);
        if (edtier.equals(1)) {
            edtier = edtier.plus(1);
        }
        if (edtier.gte(3)) {
            
            tubwer = parinaamt.divide(10000 * parinaamt.dividedBy(parinaamt.dividedBy(100)));
            tubwer = tubwer.round();
            
            console.log(tubwer);
            infinitypoints = infinitypoints.add(tubwer);
            IP1.textContent = "LoputtomiaPärinöitä: " + infinitypoints;
            parinaamt = parinaamt.minus(parinaamt);
        }
        else {
            infinitypoints = infinitypoints.plus(1);
            parinaamt = parinaamt.minus(parinaamt);
        }
        infinityCost = 10000;
        
        
    }
}
function sav() {
    setTimeout(savegame,8000);
}
function toggleparin() {
    parinaut1 = !parinaut1;
}
function updateinterface() {
    parinaamt = parinaamt.round();
    if (autoclicker == 1 ) {
        autobuyertab.style.visibility = "";
    }
    else {
        autobuyertab.style.visibility = "hidden";
    }
    parinatxt.textContent = "Pärinä: " + parinaamt.round();

    IP1.textContent = "LoputtomiaPärinöitä: " + infinitypoints;
    lippitekst.textContent = "Päivitä lipitystaitoja" + " Maksaa: " + lipitysmaksu;
    inftext.textContent = "aloita uusi loputtomuus" + " Maksaa: " + infinityCost
    if (edmulti == 1) {
        
    }
    if (edskinselected == "Auto") {
        if (edtier.equals(2)) {
            document.getElementById("ED").src="tropicaled1.png";
        }
        if (edtier.equals(1)){
            document.getElementById("ED").src="edgreenfruit.png";
        }
        if (edtier.equals(3)){
            document.getElementById("ED").src="sourstrawberry.png";
        }
    } else if (edskinselected == "sourstrawberry") {
        document.getElementById("ED").src="sourstrawberry.png";
    } else if (edskinselected == "greenfruit") {
        document.getElementById("ED").src="edgreenfruit.png";
    } else if (edskinselected == "Tropical") {
        document.getElementById("ED").src="tropicaled1.png";
    }
    if (theme == "auto")
    {
        document.body.style.backgroundColor = "aquamarine";
    } else if (theme == "dark") {
        document.body.style.backgroundColor = "black";
    }
    
    setTimeout(updateinterface,50);
    
}
$(document).ready(function() {
    $("select.edskinsele").change(function() {
        let selectedItem = $(this).children("option:selected").val();
        edskinselected = selectedItem;
    });
});
$(document).ready(function() {
    $("select.themesele").change(function() {
        let selectedItem = $(this).children("option:selected").val();
        theme = selectedItem;
    });
});
function loadin() {
    setTimeout(savegame,10000);
    openTab(event,"EDTab");
    updateinterface();
    opacitydown();
    autoclicker1();
    maxalltogl();
    maxalltogl();
    autoclickerparina();
}

function autoclicker1() {

}
function autoclickerparina() {
    if (parinaut1) {
        if (document.getElementById("parinaupgbuton").value == "0") {
            if (parinaamt.gte(lipitysmaksu)) {
                lipitysosto();
            }
        } else {
            autoc = document.getElementById("parinaupgbuton").value
            autoc = new Decimal(autoc);
            if (autoc.gt(lipitysamt) && parinaamt.gte(lipitysmaksu)) {
                lipitysosto("autoclicker");
            }
        }
    }   
    setTimeout(autoclickerparina,100);
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
        if (InfUpgrade == "InfinityUP2") {
            edtier = new Decimal(3);
        }
        document.getElementById(InfUpgrade).style.display = "block";
        evt.currentTarget.className += " active";
        infinitypoints = infinitypoints.minus(price);
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
    localStorage.setItem("parinaamt",parinaamt);
    localStorage.setItem("lipitysamt",lipitysamt);
    localStorage.setItem("edtier",edtier);
    localStorage.setItem("lipitysmaksu",lipitysmaksu);
    localStorage.setItem("infinityCost",infinityCost);
    localStorage.setItem("infinitypoints",infinitypoints);
    localStorage.setItem("autoclicker",autoclicker);
    localStorage.setItem("edmulti",edmulti);
    localStorage.setItem("theme",theme);
    setTimeout(savegame,10000);

}
function lipitysosto(au) {
    if (maxall && au != "autoclicker") {
        buyMaxlip();
    }
    else {
        if (parinaamt.gte(lipitysmaksu)) {
            if (lipitysmaksu.gte(10000)) {
                parinaamt = parinaamt.minus(lipitysmaksu);
                lipitysmaksu = lipitysmaksu.times(5);
                lipitysamt = lipitysamt.add(10);
                if (lipitysmaksu.equals(110)){
                    lipitysmaksu = lipitysmaksu.minus(10);
                }
                lippitekst.textContent = "Päivitä lipitys taitoja" + "Maksaa: " + lipitysmaksu;
                parinatxt.textContent = "Pärinä: " + parinaamt;
            }
            else{
                parinaamt = parinaamt.minus(lipitysmaksu);
                lipitysmaksu = lipitysmaksu.add(100);
                lipitysamt = lipitysamt.add(1);
                if (lipitysmaksu.equals(110)){
                    lipitysmaksu = lipitysmaksu.minus(10);
                }
                lippitekst.textContent = "Päivitä lipitys taitoja" + "Maksaa: " + lipitysmaksu;
                parinatxt.textContent = "Pärinä: " + parinaamt;
            }
            
        }
    }
    
}
function opacitydown() {
    ppee.style.opacity -= 0.02;
    
    setTimeout(opacitydown,20);
}