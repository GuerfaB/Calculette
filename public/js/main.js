// Bouton de la calculette
let un = document.getElementById('un');
let deux = document.getElementById('deux');
let trois = document.getElementById('trois');
let quatre = document.getElementById('quatre');
let cinq = document.getElementById('cinq');
let six = document.getElementById('six');
let sept = document.getElementById('sept');
let huit = document.getElementById('huit');
let neuf = document.getElementById('neuf');
let zero =document.getElementById("zero");
let plus = document.getElementById('plus');
let moins = document.getElementById('moins');
let multiplier = document.getElementById("multiplier");
let diviser = document.getElementById("diviser");
let end = document.getElementById("end")
let egal2 = document.getElementById("egal2")

// Element de l'écran
let ecran = document.getElementById("ecran")
let facteur1 = document.getElementById("facteur1")
let operateur = document.getElementById("operateur")
let facteur2 = document.getElementById("facteur2")
let egal1 = document.getElementById("egal1")
let reponse = document.getElementById("reponse")

// Mise en place des fonctions de la calculette

const chiffre1 = () =>{
    ecran.value += un.innerText
}
un.addEventListener("click", chiffre1)

const chiffre2 = () =>{
    ecran.value += deux.innerText
}
deux.addEventListener("click", chiffre2)

const chiffre3 = () =>{
    ecran.value += trois.innerText
}
trois.addEventListener("click", chiffre3)

const chiffre4 = () =>{
    ecran.value += quatre.innerText
}
quatre.addEventListener("click", chiffre4)

const chiffre5 = () =>{
    ecran.value += cinq.innerText
}
cinq.addEventListener("click", chiffre5)

const chiffre6 = () =>{
    ecran.value += six.innerText
}
six.addEventListener("click", chiffre6)

const chiffre7 = () =>{
    ecran.value += sept.innerText
}
sept.addEventListener("click", chiffre7)

const chiffre8 = () =>{
    ecran.value += huit.innerText
}
huit.addEventListener("click", chiffre8)

const chiffre9 = () =>{
    ecran.value += neuf.innerText
}
neuf.addEventListener("click", chiffre9)

const chiffre0 = () =>{
    ecran.value += zero.innerText
}
zero.addEventListener("click", chiffre0)

const addition = () =>{
    facteur1.innerText = ecran.value
    ecran.value = " "
    operateur.innerText = plus.innerText
}
plus.addEventListener("click", addition)

const soustraction = () =>{
    facteur1.innerText = ecran.value
    ecran.value = " "
    operateur.innerText = moins.innerText
}
moins.addEventListener("click", soustraction)

const multiplication = () =>{
    facteur1.innerText = ecran.value
    ecran.value = " "
    operateur.innerText = multiplier.innerText
}
multiplier.addEventListener("click", multiplication)

const division = () =>{
    facteur1.innerText = ecran.value
    ecran.value = " "
    operateur.innerText = diviser.innerText
}
diviser.addEventListener("click", division)

const resultat = () =>{
    egal1.innerText = "="
    facteur2.innerText = ecran.value
    switch (operateur.innerText) {
        case "+":
            reponse.innerText = Number(facteur1.innerText) + Number(facteur2.innerText);
            ecran.value = reponse.innerText;
            
            break;

        case "-":
            reponse.innerText = Number(facteur1.innerText) - Number(facteur2.innerText);
            ecran.value = reponse.innerText;
            break;
        
        case "x":
            reponse.innerText = Number(facteur1.innerText) * Number(facteur2.innerText);
            ecran.value = reponse.innerText;
            break;

        case ":":
            reponse.innerText = Number(facteur1.innerText) / Number(facteur2.innerText)
            ecran.value = reponse.innerText;
            break;

        default:
            break;
    }
}
egal2.addEventListener("click", resultat)


const annulation = () =>{
    facteur1.innerText = " ";
    facteur2.innerText = " ";
    operateur.innerText = " ";
    egal1.innerText = " ";
    reponse.innerText = " ";
    ecran.value = " ";
}
end.addEventListener("click", annulation)
