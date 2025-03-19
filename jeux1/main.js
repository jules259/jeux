let boutton = document.querySelectorAll(".tableau button");
let partager = document.getElementById("partager");
let click = 0;
const CROIX = "X";
const ROND = "O";
const VIDE = "";
let tableauSauvegard = [
  // C'est une matrice = tableau à 2 dimensions (colonnes et lignes) (ou encore tableau de tableau)
  [VIDE, VIDE, VIDE],
  [VIDE, VIDE, VIDE],
  [VIDE, VIDE, VIDE],
];

// [0, 1, |2|, 3, 4, 5, 6, 7, 8] --> [0][2],  il y a 3 colonnes et 3 lignes [0][2] = 0 * 3 + 2
/*

[0, 1, 2], [3, 4, 5], [6, 7, 8]

[[0, 1, 2][3, 4, 5][6, 7, 8]]
M[2][2]

[2][1] = 2 * 3 + 1 = 7 / 3 + 7 % 3

7 / 3
7 % 3

M = [m X 0]
    [m 0 0]
    [m 0 X]

M[0][0] === M[1][0] == M[2][0]

if(M[0][0] === M[1][0] == M[2][0]){
  GAGNE
}

*/

function lancerJeux() {
  let container = document.getElementById("container");
  let p = document.createElement("p");
  p.textContent = " CROIX à toi jouer !!! ";
  container.appendChild(p);
  for (let i = 0; i < boutton.length; i++) {
    let bouton = boutton[i];
    bouton.addEventListener("click", () => {
      click++;
      clic(bouton, click);
      gagner();
      // afficheMatrice(tableauSauvegard);
    });
  }
}

function gagner() {
  // afficheMatrice(tableauSauvegard);
  for (let i = 0; i < 3; i++) {
    if (
      tableauSauvegard[i][0] && // Vérifie que tableauSauvegard[i][0] n'est pas vide
      tableauSauvegard[i][0] === tableauSauvegard[i][1] &&
      tableauSauvegard[i][1] === tableauSauvegard[i][2]
    ) {
      console.log("gagner en ligne");
      return;
    }
  }
  for (let i = 0; i < 3; i++) {
    if (
      tableauSauvegard[0][i] && // Vérifie que tableauSauvegard[0][i] n'est pas vide
      tableauSauvegard[0][i] === tableauSauvegard[1][i] &&
      tableauSauvegard[1][i] === tableauSauvegard[2][i]
    ) {
      console.log("gagner en colonne");
      return;
    }
  }
  if (
    tableauSauvegard[0][0] && // Vérifie que tableauSauvegard[0][0] n'est pas vide
    tableauSauvegard[0][0] === tableauSauvegard[1][1] &&
    tableauSauvegard[1][1] === tableauSauvegard[2][2]
  ) {
    console.log("gagner en diagonale");
    return;
  }
  if (
    tableauSauvegard[0][2] && // Vérifie que tableauSauvegard[0][2] n'est pas vide
    tableauSauvegard[0][2] === tableauSauvegard[1][1] &&
    tableauSauvegard[1][1] === tableauSauvegard[2][0]
  ) {
    console.log("gagner en diagonale");
    return;
  }
}
// je viens regarder si le click est pair ou impaire
function clic(bouton, click) {
  let x = Math.floor(bouton.id / 3);
  let y = bouton.id % 3;
  let img = document.createElement("img");
  let container = document.getElementById("container");
  let p = document.createElement("p");
  // Passer d'un indice dans un tableau à une position dans une matrice
  /*id = 8;
  coordX = floor(id / 3) = 8 / 3 = 2,6666666 --> 2 (On divise par 3 car il y a 3 lignes)
  coordY = id % 3 = 8 % 3 = 2 (On divise par 3 car 3 colonnes dans la matrice)
  --> M[2][2]

  id = 3
  coordX = 3/3 = 1
  coordY = 3%3 = 0*/

  // 8 % 3 --> 3 * 2 + 2
  // 7 % 3 --> 3 * 2 + 1
  // la matrice=% récupére le reste d'une division
  //CSS: font-size
  //JS:  fontSize
  p.style.fontSize = "15px";
  p.id = "tour";
  if (!bouton.querySelector("img")) {
    // je regard si le nb click est divisible par 2 et si le reste egale a 0
    if (click % 2 === 0) {
      img.src = "cercle.jpg";
      img.alt = "image cercle";
      p.textContent = " CROIX à toi jouer !!! ";
      container.appendChild(p);
      tableauSauvegard[x][y] = ROND;
      // je regard si le nb click est divisible par 2 et si le reste egale a 1
    } else if (click % 2 === 1) {
      img.src = "croix.jpg";
      img.alt = "image croix";
      p.textContent = " ROND à toi jouer !!! ";
      container.appendChild(p);
      tableauSauvegard[x][y] = CROIX;
    }
    bouton.appendChild(img);
  }
}

function afficheMatrice(m) {
  let ligne = "[";
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      let item = m[i][j];
      if (item === VIDE) {
        item = " ";
      }
      ligne += item;
    }
    ligne += "]";
    console.log(ligne + "\n");
    ligne = "[";
  }
  console.log("\n");
}

lancerJeux();
