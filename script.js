var num = 0;

var rocksAndMinerals = [
    ["biotite", "biotyt"],
    ["carbonate", "węglan"],
    ["cement", "cementować"],
    ["coarse grained", "gruboziarnisty"],
    ["compact", "sprasować"],
    ["conglomerate", "zlepieniec"],
    ["contact metamorphism", "metamorfizm kontaktowy"],
    ["crystalline", "krystaliczny"],
    ["crystallise", "skrystalizować"],
    ["deposit", "osadzać się"],
    ["deposition", "osadzanie się"],
    ["erosion", "erozja"],
    ["extrusion", "ekstruzja"],
    ["extrusive rock", "skała wylewna"],
    ["feldspar", "skaleń"],
    ["fine grained", "drobnoziarnisty"],
    ["fissure", "szczelina"],
    ["igneous rock", "skała magmowa"],
    ["intrusion", "intruzja"],
    ["intrusive rock", " skała głębinowa"],
    ["lava", "lawa"],
    ["layer", "warstwa"],
    ["magma chamber", "komora magmowa"],
    ["melt", "topić"],
    ["metamorphic rock", "skała metamorficzna"],
    ["molten rock", "skała stopiona"],
    ["pebble", "otoczak"],
    ["plate", "płyta"],
    ["quartz", "kwarc"],
    ["sandstone", "piaskowiec"],
    ["sediment", "osad"],
    ["sedimentary rock", "skała osadowa"],
    ["shale", "łupek"],
    ["solid", "ciało stałe"],
    ["solidify", "zestalić"],
    ["source", "pochodzić"],
    ["texture", "tekstura "],
    ["transport", "transport"],
    ["transportation", "transport"],
    ["uplift", "wypiętrzenie"],
    ["vent", "komin"],
    ["weathering", "wietrzenie"],
    ["basalt", "bazalt"],
    ["diorite", "dioryt"],
    ["granite", "granit"],
    ["obsidian", "obsydian"],
    ["pegmatite", "pegmatyt"],
    ["breccia", "brekcja"],
    ["chert", "czert"],
    ["conglomerate", "zlepieniec"],
    ["limestone", "wapień"],
    ["sandstone", "piaskowiec"],
    ["amphibolite", "amfibolit"],
    ["gneiss", "gnejs"],
    ["hornfels", "hornfels"],
    ["marble", "marmur"],
    ["quartzite", "kwarcyt"],
    ["aggregate", "skupienie ziaren krystalicznych"],
    ["anhydrite", "anhydryt"],
    ["calcite", "kalcyt"],
    ["carbonate", "węglan"],
    ["crust", "skorupa ziemska"],
    ["crustal", "krustalny"],
    ["crystal", "kryształ"],
    ["extract", "wydobyć"],
    ["galena", "galena"],
    ["hematite", "hematyt"],
    ["occur", "występować"],
    ["olivine", "oliwin"],
    ["oxide", "tlenek"],
    ["oxygen", "tlen"],
    ["raw material", "surowiec"],
    ["silicate", "krzemian"],
    ["silicon", "krzem"],
    ["solid", "ciało stałe"],
    ["sulfate", "siarczan"],
    ["sulfide", "siarczek"],
    ["sulfur", "siarka "],
]

var ores = [
    ["element", " pierwiastek"],
    ["compound", "związek chemiczny"],
    ["hematite", "hematyt"],
    ["blast furnace", "wielki piec"],
    ["malachite", "malachit"],
    ["cinnabar", "cynober"],
    ["mercury", "rtęć"],
    ["oxide", "tlenek"],
    ["carbonate", "węglan"],
    ["sulphide", "siarczek "],
    ["quartz", " kwarc"],
    ["silicon", "krzem"],
    ["dioxide", "dwutlenek"],
    ["limeston", "wapień"],
    ["calcium", "wapń"],
    ["reactive", "reaktywny"],
    ["displace", "wyprzeć"],
    ["single displacement reaction", "reakcja pojedynczej wymiany"],
    ["crucible", "tygiel"],
    ["charcoal", "węgiel  drzewny"],
    ["coke", "koks"],
    ["native metal", "metal rodzimy"],
]

var hardCoal = [ 
    ["anoxic", "anoksyczny"],
    ["anthracite", "antracyt"],
    ["bituminous", "bitumiczny"],
    ["carbonaceous", "węglowy"],
    ["combustible", "palny"],
    ["decay", "zgnić, spróchnieć, zbutwieć"],
    ["deposit", "złoże, pokład"],
    ["hydrocarbon", "węglowodór"],
    ["inherent", "nieodłączny"],
    ["lignite", "węgiel brunatny, lignit"],
    ["luster", "połysk blask "],
    ["lustrous", "lśniący"],
    ["metamorphose", "przeobrazić, przejść, metamorfozę"],
    ["peat", "torf"],
    ["residue", "osad"],
    ["sodium chloride", "chlorek sodu"],
    ["subbituminous coal", "węgiel podbitumiczny"],
    ["subside", "osiąść, osunąć"],
    ["subsidence", "osiadanie osuwanie się"],
    ["volatile", "lotny"]
]

var crudeOil = [
    ["bore", "wywiercić"],
    ["clarify", "klarować"],
    ["clear", "klarowny"],
    ["collapse", "zawalić się"],
    ["crude oil", "ropa naftowa"],
    ["draw a sample", "pobrać próbkę"],
    ["draw up", "wciągnąć"],
    ["drill bit", "świder"],
    ["drill pipe", "żerdź wiertnicza"],
    ["drilling rig ", "wiertnia"],
    ["emulsion breaker", " demulgator"],
    ["fertilizer", "nawóz"],
    ["fuel", "napędzać"],
    ["gasoline", "benzyna"],
    ["hasten", "przyśpieszyć"],
    ["hazardous", "niebezpieczny"],
    ["hoist", "podnieść, dźwignąć"],
    ["hydrogen sulphide", "siarkowodór"],
    ["inject", "wtrysnąć"],
    ["instantaneous", "natychmiastowy"],
    ["line", "wyłożyć czymś"],
    ["mount", "umieścić"],
    ["on-site", "ostępny na miejscu"],
    ["plug", "zatkać"],
    ["ratio", "stosunek"],
    ["reading", "odczyt"],
    ["refinery", "rafineria"],
    ["reservoir", "zbiornik"],
    ["rotary table", "stół wiertniczy"],
    ["steel rod", "pręt stalowy"],
    ["stroke", "suw"],
    ["sulphur", "siarka"],
    ["thin", "rozcieńczyć"],
    ["trigger", "uruchomić"],
    ["upstroke", "suw w górę"],
    ["valve", "zawór"],
    ["vessel", "naczynie "],
    ["watery", "wodnisty"],
    ["wellhead", "głowica wiertnicza "],
]

var array = crudeOil

document.querySelector(".sub1").addEventListener("click", function sub1() {
    array = rocksAndMinerals;
    document.getElementById("title").innerHTML = "ROCKS AND MINERALS";
    deleteLi();
    createLi();
    document.getElementById("word").innerHTML = array[num][1];
    num = 0;
});
    
document.querySelector(".sub2").addEventListener("click", function sub2() {
    array = ores;
    document.getElementById("title").innerHTML = "ORES";
    deleteLi();
    createLi();
    document.getElementById("word").innerHTML = array[num][1];
    num = 0;
});

document.querySelector(".sub3").addEventListener("click", function sub2() {
    array = hardCoal;
    document.getElementById("title").innerHTML = "HARD COAL";
    deleteLi();
    createLi();
    document.getElementById("word").innerHTML = array[num][1];
    num = 0;
});

document.querySelector(".sub4").addEventListener("click", function sub2() {
    array = crudeOil;
    document.getElementById("title").innerHTML = "CRUDE OIL"
    deleteLi();
    createLi();
    document.getElementById("word").innerHTML = array[num][1];
    num = 0;
});


document.getElementById("word").innerHTML = array[num][1];

function createLi() {
    for (let i = 0; i < array.length; i++) {
        var li = document.createElement("li");
        var text = document.createTextNode(array[i][1]);
        li.setAttribute("id", "word_li"+i);
        li.appendChild(text);
        document.getElementById("pl_ul").appendChild(li);
    }
};

createLi();

function deleteLi() {
document.getElementById("pl_ul").innerHTML = "";
}

function progressBar() {
    const element = document.querySelector('#loading_bar');
    const countAll = document.querySelectorAll('.done_ok').length;
    element.style.width = (countAll/array.length)*100+"%";
    var barNum = Math.round((countAll/array.length)*100)+"%"
    document.getElementById("loading_bar_p").innerHTML = barNum;
}

async function nextWord() {
//    num = num + 1;
//    if (num >= array.length) {
//        num = 0;
//    }
    // Zamiast tego lepiej (i szybciej) użyć - % (modulo) oznacza resztę z dzielenia
    num = (num + 1) % array.length;
    slide()
    await sleep(500);
    document.getElementById("word").innerHTML = array[num][1];
    document.getElementById('answer').value = ''
    progressBar()
    
}



function checkAnswers() {
    your_answer = document.getElementById("answer").value;
    correct_answer = array[num][0];

   if (your_answer == correct_answer) {
    document.getElementById("word_li"+num).setAttribute("class", "done_ok");
    nextWord();
    document.getElementById('answer').value = ''
   } else
   document.getElementById("word_li"+num).setAttribute("class", "done_bad");
    // To ogólnie jest w miarę dobrze, ale krótszym i lepszym zapisem jest coś takiego:
    // operator "?" to tzw ternary operator, przyjmuje on pierwszą wartość jeśli wyrażenie po lewej to "prawda / true", lub przyjmuje wyrażenie po prawej jeśli "fałsz / false"
    // alert(your_answer == correct_answer ? "dobrze" : "no chyba nie");
}

document.querySelector(".nav_icon").addEventListener("click", function navbar() {
    if (document.querySelector(".nav").classList.contains("nav-open")) {
        document.querySelector(".nav").classList.remove("nav-open");
    } else
document.querySelector(".nav").classList.add("nav-open");
});

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

var element = document.getElementById("word");
// reset the transition by...
async function slide() {

    element.classList.remove("run-animation");
    await sleep(1);
    element.classList.add("run-animation");
  }

