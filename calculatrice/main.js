let number_1;
let number_2;
let soustraction = false;
let addition = false;
let division = false;
let multiplication = false;
let button = document.querySelectorAll(".nombre button");
let input = document.getElementById("resultat"); //focus permet de selec automatiquement le champ3

bouttonAppuyer();

//// Permet d'excuter le changement de couleur du curseur
// var cursor = document.getElementById("cursor");
// document.body.addEventListener("mousemove", function (e) {
//   cursor.style.left = e.clientX + "px";
//   cursor.style.top = e.clientY + "px";
// });

// Permet d'afficher le boutton appuyer
function bouttonAppuyer() {
  for (let index = 0; index < button.length; index++) {
    button[index].addEventListener("click", () => {
      calcule(button[index].textContent);
    });
  }
  // event.key = Permet de renvoyer le nom de la touche
  document.addEventListener("keydown", (event) => {
    calcule(event.key);
  });
}

// permet d'effacer l'affichage
function effacerEcran() {
  input.value = "";
}

function calcule(boutonContent) {
  number = parseInt(boutonContent);
  console.log(boutonContent);
  // isNaN(valeur) : Cette fonction prend une valeur en argument et tente de la convertir en nombre.
  if (!isNaN(number) && number >= 0 && number <= 9) {
    if (input.value === "") {
      input.value = boutonContent;
    } else {
      input.value = input.value + boutonContent;
    }
  }

  function effacerChiffre() {
    let nombre = parseInt(input.value);
    let nouveauNombre = Math.floor(nombre / 10);
    input.value = nouveauNombre;
  }

  switch (boutonContent) {
    case "ac":
    case "Delete":
      effacerEcran();
      break;
    case "Backspace":
      effacerChiffre();
      break;
    case "+":
      addition = true;
      number_1 = input.value;
      effacerEcran();
      break;
    case "-":
      soustraction = true;
      number_1 = input.value;
      effacerEcran();
      break;
    case "/":
      division = true;
      number_1 = input.value;
      effacerEcran();
      break;
    case "X":
      multiplication = true;
      number_1 = input.value;
      effacerEcran();
      break;
    case "Enter":
    case "=":
      number_2 = input.value;
      if (addition === true) {
        input.value = parseInt(number_1) + parseInt(number_2);
        addition = false;
      }
      if (soustraction === true) {
        input.value = parseInt(number_1) - parseInt(number_2);
        soustraction = false;
      }
      if (division === true) {
        input.value = parseInt(number_1) / parseInt(number_2);
        division = false;
      }
      if (multiplication === true) {
        input.value = parseInt(number_1) * parseInt(number_2);
        multiplication = false;
      }
      break;
  }
}
