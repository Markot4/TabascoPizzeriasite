console.log("u pizze.js")

var pizze = {
    "mijesana": {
        "naziv": "Miješana",
        "cijena": 54,
        "slika": "pizza-mijesana.jpg",
        "sastojci": ["šunka", "sir", "šampinjoni"]
    },
    "margarita": {
        "naziv": "Majstor i Margarita",
        "cijena": 46,
        "slika": "pizza-margarita.jpg",
        "sastojci": ["sir"]
    },
    "tuna": {
        "naziv": "Tuna",
        "cijena": 50,
        "slika": "pizza-tuna.jpg",
        "sastojci": ["tuna","luk","maslina","sir"]
    },
    "sira4": {
        "naziv": "4 vrste sira",
        "cijena": 48,
        "slika": "pizza-4sira.jpg",
        "sastojci": ["sir"]
    },
    "dubrovnik": {
        "naziv": "Dubrovnik",
        "cijena": 53,
        "slika": "pizza-dubrovnik.jpg",
        "sastojci": ["pršut","sir","umak od rajčica", "rikula", "mozzarela", "parmezan", "masline"]
    }
}

function odaberiPizzu(pizza) {
    console.log("Odabrana je pizza:", pizza)
    const imeElement = document.getElementById("imepizze");
    imeElement.innerText = pizza.naziv
    const cijenaElement =document.getElementById("cijena");
    cijenaElement.innerText = pizza.cijena + " kn"
    const sastojciElement =document.getElementById("sastojci");
    sastojciElement.innerText = pizza.sastojci
    const slikaElement =document.getElementById("slika");
    slikaElement.src = "slike/" + pizza.slika
}

var listaPizzaElement = document.getElementById("popisPizza");
console.log(listaPizzaElement)
for (const [key, pizza] of Object.entries(pizze)) {
    const pizzaElement = document.createElement("li");
    pizzaElement.onclick = () => odaberiPizzu(pizza)
    pizzaElement.innerText = pizza.naziv  
    listaPizzaElement.appendChild(pizzaElement)
}


