"use strict"; // Mode strict (slide 52)

// Déclaration de variables/constantes de types différents (slides 38 et 52)
const nom = "John";      // type string (slide 38)
const prenom = "Doe";    // type string (slide 38)
const age = 30;          // type number (slide 38)
const note = 15;         // type number (slide 38)
const PI = 3.14;         // constante de type number (slide 38)

// f1 : affiche le nom (déclaration de fonction, slide 46)
function f1() {
  console.log(nom);      // sortie dans la console (slide 34)
}

// f2 : affiche le prénom (fonction, slide 46)
function f2() {
  console.log(prenom);   // slide 34
}

// f3 : concaténation de deux chaînes avec "-" (opérateur +, slide 38)
function f3() {
  console.log(nom + "-" + prenom);
}

// f4 : affiche l'âge (fonction, slide 46)
function f4() {
  console.log(age);      // slide 34
}

// f5 : affiche la note (fonction, slide 46)
function f5() {
  console.log(note);     // slide 34
}

// f6 : affiche Pi (fonction, slide 46)
function f6() {
  console.log(PI);       // slide 34
}
