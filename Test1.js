function Calculer() {
  document.getElementById("TotalLigne2").value =
    document.getElementById("QTOrdi").value *
    document.getElementById("PUOrdi").value;
  document.getElementById("TotalLigne3").value =
    document.getElementById("QTECRAN").value *
    document.getElementById("PUECRAN").value;
  document.getElementById("TotalLigne4").value =
    document.getElementById("QTIMPRIMANTE").value *
    document.getElementById("PUIMPRIMANTE").value;

  document.getElementById("PRIXHT").value =
    parseFloat(document.getElementById("TotalLigne2").value) +
    parseFloat(document.getElementById("TotalLigne3").value) +
    parseFloat(document.getElementById("TotalLigne4").value);

  document.getElementById("PrixTTC").value =
    parseFloat(document.getElementById("PRIXTVA").value) *
    parseFloat(document.getElementById("PRIXHT").value);
}

// CONVERTISSEUR
// const Salary = document.querySelector(".salaire").value;

// const heureMensuel = timeWeek * (52 / 12); ok
// const NBheureSupSemaine = timeWeek - 35; ok
// const NBheureSupMois = NBheureSupSemaine * (52 / 12); ok
// const salaireHoraire35h = Salary / heureMensuel; ok
// const salaireMensuel35h = salaireHoraire35h * 151.67;
// const salaireHS = salaireHoraire35h * NBheureSupMois;
// const total = salaireMensuel35h + salaireHS;

let timeWeek = document.querySelector(".Heure").value;
let salary = document.getElementById("salaire").value;

let nb = 999;
let STR = `ABS ${nb}`;
console.log(STR)

/* Réalisation des calculs via la fonction ci-dessous */
function CalculerConvertisseur() {
  salary = document.getElementById("salaire").value;
  timeWeek = document.querySelector(".Heure").value;
  
  const heureMensuel =
  document.querySelector(".heureMensuel").value = timeWeek * (52 / 12);
  document.querySelector(".NBheureSupSemaine").value = timeWeek - (35);
  console.log(heureMensuel.toFixed(2))

  const NBheureSupMois=
  document.querySelector(".NBheureSupMois").value =
  document.querySelector(".NBheureSupSemaine").value * (52 / 12).toFixed(2);
  console.log(NBheureSupMois.toFixed(2))

  const salaireHoraire35h =
  document.querySelector(".salaireHoraire35h").value =
    salary / document.querySelector(".heureMensuel").value;
    console.log(salaireHoraire35h.toFixed(2));

    const salaireMensuel35h =
                              document.querySelector(".salaireMensuel35h").value =
                                document.querySelector(".salaireHoraire35h").value * 151.67;
                            console.log(salaireMensuel35h.toFixed(2));

    const salaireHS =
                        document.querySelector(".salaireHS").value =
                        document.querySelector(".salaireHoraire35h").value * document.querySelector(".NBheureSupMois").value;
                      console.log(salaireHS.toFixed(2));

const affichageResultat = document.querySelector("#TableauDetail");
affichageResultat.style.display = "grid";


  if (timeWeek < 35) {
    alert("Vous êtes à temps partiel, passez à l'autre convertisseur en cliquant ici !");
  } else if (timeWeek > 46) {
    alert("Votre employeur est dans l'illégalité, contactez-nous !");
  } else {
    console.log("On y go pour le calcul");
  }
}

const boutonCalcul = document.querySelector(".calculer");

boutonCalcul.addEventListener("click", CalculerConvertisseur());
/* Le "Click" ci dessus fait la même action que "onclick="CalculerConvertisseur();" présent dans le HTML */



const buttonCalcul = document.querySelector("#buttonCalculer");


// Création du paragraphe récapitulatif du résultat :
const paragrapheResult = document.createElement("h1")
paragrapheResult.innerHTML = `Concrètement, à chaque heure réalisé au delà de 35h, tu seras payé
 ${salaireHS}`
const emplacementParagrapheResult = document.querySelector("#positionParagrapheRésult")
//a créer dans le HTML
emplacementParagrapheResult.appendChild(paragrapheResult)

// CONVERTISSEUR TEMPS PARTIEL




// Création d'une structure

function Car(make, model, year) {
  this.make = make;
  this.model = model;
  this.year = year;
  this.isRunning = false;

  this.start = function() {
    this.isRunning = true;
    console.log("Car has started.");
  };

  this.stop = function() {
    this.isRunning = false;
    console.log("Car has stopped.");
  };
}

var myCar = new Car("Toyota", "Camry", 2020);
console.log(myCar.make); // Toyota
console.log(myCar.model); // Camry
console.log(myCar.year); // 2020

myCar.start(); // Car has started.
console.log(myCar.isRunning); // true

myCar.stop(); // Car has stopped.
console.log(myCar.isRunning); // false

var peugeot106 = new Car ("Peugeot", "supra", "2020");
peugeot106.start()