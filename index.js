let asia={
    Country: "48",
    Area: "44.58 million km²",
    Population: "4.463 billon",
    Longest_River: "Yangtze River",
    Largest_Desert: "Gobi Desert",
    Most_Popular_Sport: "Soccer",
    Biggest_Canal: "Grand Canal",
    Richest_Man: "Mukesh Ambani",
    Language: "Chinese Mandarin",
    }
let africa={
    Country: "54",
    Area: "30.37 million km²",
    Population: "1.216 billion",
    Longest_River: "Nile River",
    Largest_Desert: "The Sahara",
    Most_Popular_Sport: "Football",
    Biggest_Canal: "Suez Canal",
    Richest_Man: "Aliko Dangote",
    Language: "Swahili",
    }
let australia={
    Country: "14",
    Area: "8.6 million km²",
    Population: "40,117,432",
    Longest_River: "Tuvalu",
    Largest_Desert: "Great Victoria",
    Most_Popular_Sport: "Cricket",
    Biggest_Canal: "Panama Canal",
    Richest_Man: "Gina Rinehart",
    Language: "English",
    }
let europe={
    Country: "50",
    Area: "10.18 million km²",
    Population: "742,976,709",
    Longest_River: "Volga River",
    Largest_Desert: "Accona Desert",
    Most_Popular_Sport: "Fussball",
    Biggest_Canal: "Bangkok Klongs",
    Richest_Man: "Bernard Arnault",
    Language: "German",
    }
let namerica={
    Country: "23",
    Area: "24.71 million km²",
    Population: "366,496,802",
    Longest_River: "Mississippi River",
    Largest_Desert: "Great Basin Desert",
    Most_Popular_Sport: "Football",
    Biggest_Canal: "Erie Canal",
    Richest_Man: "Jeff Bezos",
    Language: "English"
    }
let samerica={
    Country: "12",
    Area: "17.84 million km²",
    Population: "428,240,515",
    Longest_River: "Amazon River",
    Largest_Desert: "Atacama Desert",
    Most_Popular_Sport: "Association football",
    Biggest_Canal: "Panama Canal",
    Richest_Man: "Carlos Slim",
    Language: "Spanish"
    }
let antarctica={
    Country: "0",
    Area: "14.2 million km²",
    Population: "1,106",
    Longest_River: "Onyx River",
    Largest_Desert: "Antarctic Polar Desert",
    Most_Popular_Sport: "hockey",
    Biggest_Canal: " Grand Canyon",
    Richest_Man: "Arnold W. Donald",
    Language:"Russian"
    }


listK=["Country", "Area", "Population", "Longest_River", "Largest_Desert", "Most_Popular_Sport", "Biggest_Canal", "Richest_Man", "Language"]
listID=["cnum", "area", "population", "lriver", "ldesert", "mpsport", "bcanal", "rman", "lang"]
function fetch_data(){
    select=document.getElementById("tcon");
    cont=select.options[select.selectedIndex].text;
    fix(cont);
}

function fix(tcon) {
    if(tcon=="Asia"){
        for (let i = 0; i < listK.length; i++) {
            document.getElementById(listID[i]).innerHTML=asia[listK[i]];
        }
    }else if(tcon=="Africa"){
        for (let i = 0; i < listK.length; i++) {
            document.getElementById(listID[i]).innerHTML=africa[listK[i]];
        }
    }else if(tcon=="Australia"){
        for (let i = 0; i < listK.length; i++) {
            document.getElementById(listID[i]).innerHTML=australia[listK[i]];
        }
    }else if(tcon=="Europe"){
        for (let i = 0; i < listK.length; i++) {
            document.getElementById(listID[i]).innerHTML=europe[listK[i]];
        }
    }else if(tcon=="North America"){
        for (let i = 0; i < listK.length; i++) {
            document.getElementById(listID[i]).innerHTML=namerica[listK[i]];
        }
    }else if(tcon=="South America"){
        for (let i = 0; i < listK.length; i++) {
            document.getElementById(listID[i]).innerHTML=samerica[listK[i]];
        }
    }else{
        for (let i = 0; i < listK.length; i++) {
            document.getElementById(listID[i]).innerHTML=antarctica[listK[i]];
        }
    }
}
