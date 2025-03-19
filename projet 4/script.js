let inputReponse = document.getElementById("Reponse");
let bouttonValider = document.getElementById("valider");
let motsPropose = document.querySelector(".motsPropose span");
let affichageScore = document.querySelector(".Score span");
let inputPhraseMots = document.querySelectorAll(".Option input");
let inputnom = document.getElementById("nom");
let inputEmail = document.getElementById("email");
let BouttonEnvoyer = document.getElementById("Envoyer");
/* note: 
value : est la méthode priviligié pour récupérer et manipuler le texte d'un input
 pour accéder à la valeur saisie par l'utilisateur dans un champ de saisie utliser : value
innerText : est utilisé pour obtenir ou définir le contenu textuel rendu d'un élément HTML.
 pour des éléments comme les <div>, <p>, <span>, etc., où le texte est directement affiché à l'écran.
*/
function lancerJeux() {
  let index = 0;
  let score = 0;
  let listeProposition = ListeMots;

  //J'affiche les proposition contenue dans un tableau
  afficherProposition(listeProposition[index]);
  for (let i = 0; i < inputPhraseMots.length; i++) {
    inputPhraseMots[i].addEventListener("change", (ev) => {
      if (ev.target.value === "1") {
        listeProposition = ListeMots;
        afficherProposition(listeProposition[index]);
      } else if (ev.target.value === "2") {
        listeProposition = listPhrase;
        afficherProposition(listeProposition[index]);
      }
    });
  }

  // J'ecoute le boutton validation réponse
  bouttonValider.addEventListener("click", () => {
    let ecriture = inputReponse.value;
    if (ecriture === listeProposition[index]) {
      score++;
    }
    index++;
    if (listeProposition[index] === undefined) {
      afficherProposition("Le jeu est fini");
      bouttonValider.disabled = true;
    } else {
      afficherProposition(listeProposition[index]);
    }
    inputReponse.value = "";
    afficherResultat(score, listeProposition.length);
    scoreTotal = `${score}/ ${index}`;
  });
  gererFormulaire();
}

function afficherProposition(afficheMots) {
  motsPropose.textContent = afficheMots;
}

function afficherResultat(score, nbProposition) {
  affichageScore.innerText = `${score} / ${nbProposition}`;
}

function afficherEmail(nom, email, score) {
  let mailto = `mailto:${email}?subject=Partage du score TapTap&body=Salut, je suis ${nom} et je viens de réaliser le score ${score} sur le site TapTap !`;
  location.href = mailto;
}

function validerNom(nom) {
  if (!(nom && nom.length >= 3)) {
    throw new Error("Erreur de syntaxe : le nom n'est pas correct.");
  }
}

function validerEmail(email) {
  let ecritureEmail = new RegExp("^[a-z0-9._-]+@[a-z0-9._-]+\\.[a-z0-9._-]+$");
  if (!ecritureEmail.test(email)) {
    throw new Error("Erreur de syntaxe : l'email n'est pas correct.");
  }
}

//La fenetre PopUp
function gererFormulaire() {
  BouttonEnvoyer.addEventListener("click", (event) => {
    try {
      let nom = inputnom.value;
      let email = inputEmail.value;
      event.preventDefault();
      validerNom(nom);
      validerEmail(email);
    } catch (erreur) {
      afficherMessageErreur(erreur.message);
    }
  });
}

// Message erreur afficher a l'utilisateur
function afficherMessageErreur(erreur) {
  let span = document.getElementById("message-erreur");
  if (!span) {
    // if(span === undefined)
    span = document.createElement("span");
    span.id = "message-erreur";
    PopUp.append(span);
  }
  span.innerText = erreur;
}
