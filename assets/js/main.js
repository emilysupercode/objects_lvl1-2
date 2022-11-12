// ======================================
//    1_2
// ======================================

// let person = {
//     name: "Emily",
//     alter: 31,
//     sagNameAlter() {
//         alert(person.name + ", you are only " + person.alter + "!")
//     }
// }

// person.sagNameAlter();

// ======================================
//    1_4
// ======================================

let unsereHaustiere = [
    {
        tiertyp: "Katze",

        names: [
            "Gipsy",
            "Nala",
            "Dinky"
        ]
    },
    {
        tiertyp: "Hunde",
        names: [
            "Knöpfchen",
            "Pinselchen",
            "Droopy"
        ]
    }
];

console.log(unsereHaustiere[0].names[1]);
console.log(unsereHaustiere[1].names[2]);
console.log(unsereHaustiere[0].names);
console.log(unsereHaustiere[1].names);
delete unsereHaustiere[1].names.pop();
console.log(unsereHaustiere[1].names);
unsereHaustiere[1].names[0] = "spot";
unsereHaustiere[1].names[1] = "patch";
console.log(unsereHaustiere[1].names);

// ======================================
//    1_5
// ======================================

let unserLager = {
    schreibtisch: {
        schublade: "Hefter"
    },
    schrank: {
        "Obere Schublade": {
            Ordner1: "Dokumente",
            Ordner2: "Geheimnisse"
        },
        "Untere Schublade": "Cola"
    }
};

let Hefter = unserLager.schreibtisch.schublade;
let Ordner2 = unserLager.schrank["Obere Schublade"].Ordner2;
let Cola = unserLager.schrank["Untere Schublade"];

console.log("Geheimnisse: ", Ordner2, "Hefter: ", Hefter, "Cola: ", Cola)

// ======================================
//    1_6
// ======================================

let myMusic = [
    {
        artist: "The Beatles",
        title: "Abbey Road",
        release_year: 1969,
        medium: ["LP", "CD", "MC", "Download"],
        gold: true
    },
    {
        artist: "Pink Floyd",
        title: "Dark Side of the Moon",
        release_year: 1978,
        medium: ["CS", "CD", "LP", "Download"],
        gold: true
    },
    {
        artist: "Led Zeppelin",
        title: "Led Zeppelin IV",
        release_year: 1971,
        medium: ["CS", "LP", "Download"],
        gold: true
    },
    {
        artist: "Metallica",
        title: "Kill ’Em All und Ride the Lightning",
        release_year: 1983,
        medium: ["LP", "CD", "MC", "Download"],
        gold: true
    }
];

myMusic.push({
    artist: "Helen Callus",
    title: "Portrait of the Viola",
    release_year: 2013,
    medium: ["CD", "MP3", "Streaming"],
    gold: false
})

console.log(myMusic)
console.log(myMusic[0].artist)
console.log("Von " + myMusic[1].artist + ": " + myMusic[1].medium[3])
console.log("Von " + myMusic[1].artist + ": " + myMusic[1].gold)
console.log(myMusic[2].release_year + " and " + myMusic[3].release_year)
console.log("Von " + myMusic[3].artist + ": " + myMusic[3].medium[2])
console.log("Von " + myMusic[3].artist + " das Wort: " + myMusic[3].title.slice(17, 22))
console.log("Von " + myMusic[2].artist + " das Wort: " + myMusic[2].title.slice(-2))
console.log("Von " + myMusic[1].artist + " das Wort: " + myMusic[1].artist.slice(-5))

// ======================================
//    1_7
// ======================================

myMusic.forEach(album => {
    console.log(album.artist)
    console.log(album.title)
    console.log(album.medium)
    document.write(album.artist + "<br>")
    document.write(album.title + "<br>")
    document.write(album.medium + "<br>")
    if (album.release_year > 1975) {
        document.
            write(album.release_year + "<br>")
    }
    document.write("<br>")
})

// ======================================
//    1_8
// ======================================
let studentData = [
    {
        name: "Alex",
        age: 23,
        coop: false,
        address: {
            street: "Don Valley Business Park",
            city: "Toronto",
            postalCode: "ONM3C3E5"
        },
        emails: ["alex69@gmail.com", "alex123@yahoo.com"]
    },
    {
        name: "Sandra",
        age: 22,
        coop: true,
        address: {
            street: "34 Lawrence Ave",
            city: "Toronto",
            postalCode: "ONM3C0E5"
        },
        emails: ["sandra@gmail.com", "sandra@yahoo.com"]
    }
];

studentData.forEach(student => {
    function function1() {
        console.log(student.name)
        console.log(student.coop)
        console.log(student.address.city)
        console.log(student.emails)
    }
    function1();
})

// ======================================
//    2_1
// ======================================

let edelMetallPreise = [
    { name: "Gold", preiseGramEuro: 42.91, veraenderung: "+0.12%" },
    { name: "Silber", preiseGramEuro: 0.51, veraenderung: "+1.02%" },
    { name: "Platin", preiseGramEuro: 25.74, veraenderung: "+0.41%" },
    { name: "Palladium", preiseGramEuro: 50.93, veraenderung: "0.00%" },
    { name: "Rhodium", preiseGramEuro: 160.12, veraenderung: "-0.10%" },
    { name: "Iridium", preiseGramEuro: 42.84, veraenderung: "0.00%" },
    { name: "Ruthenium", preiseGramEuro: 7.36, veraenderung: "0.00%" },
    { name: "Rhenium", preiseGramEuro: 37.22, veraenderung: "-0.53%" },
    { name: "Osmium", preiseGramEuro: 11.54, veraenderung: "0.00%" }
];
let metalNames = [];
let preiseGramEuro = [];
let veraenderung = [];

edelMetallPreise.forEach(metal => {
    console.log(metal.name)
    metalNames.push(metal.name)
    console.log(metal.preiseGramEuro)
    preiseGramEuro.push(metal.preiseGramEuro)
    console.log(metal.veraenderung)
    veraenderung.push(metal.veraenderung)
})

let expensiveMetals = edelMetallPreise.filter((metalName) => {
    return metalName.preiseGramEuro > 50;
});
console.log(expensiveMetals)

let newMetalNamesArray = metalNames.map(x => x);
console.log(newMetalNamesArray)

let newPreisArray = preiseGramEuro.map(x => x);
console.log(newPreisArray)

let newVeraenderungArray = veraenderung.map(x => x)
console.log(newVeraenderungArray)
console.log(metalNames)
console.log(preiseGramEuro)
console.log(veraenderung)

const keys = Object.keys(edelMetallPreise[0]);
console.log(keys)
console.log(edelMetallPreise)

function createPriceTable() {
    const tableElement = document.getElementById("tableContainer");
    const newTable = document.createElement("table");
    newTable.id = "my-table";
    newTable.style.border = "5px double black";
    const newThead = document.createElement("tHead");
    const newTr = document.createElement("tr");
    const newTh1 = document.createElement("th");
    const newTh2 = document.createElement("th");
    const newTh3 = document.createElement("th");
    const newTbody = document.createElement("tbody");

    tableElement.appendChild(newTable);
    newTable.appendChild(newThead);
    newTable.appendChild(newTbody);

    for (let i = 0; i < keys.length; i++) {
        newThead.appendChild(newTr);
        newTr.innerHTML += "<th>" + keys[i] + "</th>";

    }

    for (let j = 0; j < edelMetallPreise.length; j++) {
        newTbody.innerHTML += "<tr><td> " + newMetalNamesArray[j] + "</td> " + "<td> " + newPreisArray[j] + "</td> " + "<td> " + newVeraenderungArray[j] + "</td></tr>"
    }
    let tdCollection = document.getElementsByTagName("td");

    const tdArray = Array.from(tdCollection);

    tdArray.forEach(td => {
        td.classList.add("tableBorders");
    })

}
createPriceTable();
