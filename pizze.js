console.log("u pizze.js")

var pizze = {
    "mijesana": {
        "naziv": "Miješana",
        "velikacijena": 54,
        "jumbocijena": 61,
        "slika": "pizza-mijesana.jpg",
        "sastojci": ["šunka", "sir", "šampinjoni"]
    },
    "margarita": {
        "naziv": "Majstor i Margarita",
        "velikacijena": 46,
        "jumbocijena": 53,
        "slika": "pizza-margarita.jpg",
        "sastojci": ["sir"]
    },
    "tuna": {
        "naziv": "Tuna",
        "velikacijena": 50,
        "jumbocijena": 57,
        "slika": "pizza-tuna.jpg",
        "sastojci": ["tuna","luk","maslina","sir"]
    },
    "sira4": {
        "naziv": "4 vrste sira",
        "velikacijena": 48,
        "jumbocijena": 55,
        "slika": "pizza-4sira.jpg",
        "sastojci": ["sir"]
    },
    "dubrovnik": {
        "naziv": "Dubrovnik",
        "velikacijena": 53,
        "jumbocijena": 60,
        "slika": "pizza-dubrovnik.jpg",
        "sastojci": ["pršut","sir","umak od rajčica", "rikula", "mozzarela", "parmezan", "masline"]
    }
}

function naruciPizzu(pizza){
    console.log("Naručujem pizzu.", pizza)
    narudzbaImePizzeElement = document.getElementById("narudzbaImePizze")
    narudzbaImePizzeElement.innerText = pizza.naziv
    const narudzbaElement = document.getElementById("narudzba")
    narudzbaElement.style.display = "block"
    naruciButtonElement = document.getElementById("naruciButton")
    naruciButtonElement.style.display = "none"
    detaljiElement = document.getElementById("detaljiPizze")
    detaljiElement.style.display = "none"
    promjenaUNarudzbi()

}

function raspisiSastojke(sastojci) {
    return sastojci.join(", ")
}

function odaberiPizzu(pizza) {
    console.log("Odabrana je pizza:", pizza)
    const detaljElement = document.getElementById("detaljiPizze");
    detaljElement.style.display = "block"
    const imeElement = document.getElementById("imepizze");
    imeElement.innerText = pizza.naziv
    const velikacijenaElement =document.getElementById("velikacijena");
    velikacijenaElement.innerText = pizza.velikacijena
    const jumbocijenaElement =document.getElementById("jumbocijena");
    jumbocijenaElement.innerText = pizza.jumbocijena
    const sastojciElement =document.getElementById("sastojci");
    sastojciElement.innerText = raspisiSastojke(pizza.sastojci)
    const slikaElement =document.getElementById("slika");
    slikaElement.src = "slike/" + pizza.slika
    const buttonElement = document.getElementById("naruciButton");
    buttonElement.onclick = () => naruciPizzu(pizza)
}

function imaPodatkeZaDostavu() {
    const narudzbaFormElement = document.forms.namedItem("narudzbaForm")
    const fn=narudzbaFormElement.fname.value
    if (! fn) {
        console.log("fn missing")
        return false;
    }
    const ln=narudzbaFormElement.lname.value
    if (! ln) {
        console.log("ln missing")
        return false;
    }
    const nm=narudzbaFormElement.number.value
    if (! nm){
        console.log("nm missing")
        return false;        
    }
    const ad=narudzbaFormElement.address.value
    if (! ad){
        console.log("ad missing")
        return false;        
    }
    // ako su svi popunjeni vrati true
    return true;

}

function izracunajCijenu() {
    console.log("izracunavam cijenu")
    const velikacijenaElement = document.getElementById("velikacijena")
    const jumbocijenaElement = document.getElementById("jumbocijena")
    const velikaCijena = velikacijenaElement.innerText
    const jumboCijena = jumbocijenaElement.innerText
    const velikaIliMala = document.querySelector('input[name="velicina"]:checked').value
    let cijena
    if (velikaIliMala == "velika") {
        cijena = velikaCijena
    } else {
        cijena = jumboCijena
    }
    cijena = parseInt(cijena)
    const rajcicaElement = document.getElementById("rajcica")
    const rajcica = rajcicaElement.checked ? rajcicaElement.value : 0
    cijena = cijena + parseInt(rajcica)
    const peperoniElement = document.getElementById("peperoni")
    const peperoni = peperoniElement.checked ? peperoniElement.value : 0
    cijena = cijena + parseInt(peperoni)

    return cijena
}

function promjenaUNarudzbi() {
    console.log("Promjena u narudzbi!")
    const cijena = izracunajCijenu()
    const cijenaElement = document.getElementById("ukupnaCijena")
    cijenaElement.innerText = cijena;
    const imaSveElement = document.getElementById("imaSve")
    const nedostajuPodatciElement = document.getElementById("nedostajuPodatci")
    if (imaPodatkeZaDostavu()) {
        imaSveElement.style.display = "block"
        nedostajuPodatciElement.style.display = "none"
    } else {
        imaSveElement.style.display = "none"
        nedostajuPodatciElement.style.display = "block"
    }
}
function primljenaNarudzba(){
    console.log("Narudzba je primljena!")
    const potvrda = document.getElementById("potvrda");
    potvrda.style.display = "block"
    const narudzbaElement = document.getElementById("narudzba");
    narudzbaElement.style.display = "none"
    const detaljElement = document.getElementById("detaljiPizze");
    detaljElement.style.display = "none"
    const narudzbaImePizze = document.getElementById("narudzbaImePizze");
    const odabranapizza = document.getElementById("odabranapizza");
    const imePizze = narudzbaImePizze.innerText;
    odabranapizza.innerText = imePizze;
    const mojaadresa = document.getElementById("mojaadresa");
    const addressElement = document.getElementById("address");
    const address = addressElement.value;
    mojaadresa.innerText = address;
    const potvrdenaCijena = document.getElementById("potvrdenaCijena");
    const potCijenaElement = document.getElementById("ukupnaCijena");
    const cijena = potCijenaElement.innerText;
    potvrdenaCijena.innerText = cijena;
}

function odustani(){
    console.log("Otkazana narudzba")
    const otkazananarudzba = document.getElementById("narudzba");
    otkazananarudzba.style.display = "none"
    naruciButtonElement = document.getElementById("naruciButton")
    naruciButtonElement.style.display = "block"

}

var listaPizzaElement = document.getElementById("popisPizza");
console.log(listaPizzaElement)
for (const [key, pizza] of Object.entries(pizze)) {
    const pizzaElement = document.createElement("li");
    pizzaElement.onclick = () => odaberiPizzu(pizza)
    pizzaElement.innerText = pizza.naziv  
    listaPizzaElement.appendChild(pizzaElement)
}

function initialize() {
    const detaljElement = document.getElementById("detaljiPizze");
    detaljElement.style.display = "none"
    
    const narudzbaElement = document.getElementById("narudzba");
    narudzbaElement.style.display = "none"
    
    const potvrdaElement = document.getElementById("potvrda");
    potvrdaElement.style.display = "none"
    
} 

initialize()
