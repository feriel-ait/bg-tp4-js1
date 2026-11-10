"use strict"; // Mode strict (slide 52)

// Données Students : [id, nom, prénom, moyenne, autre donnée] (tableau de tableaux, slide 39)
const Students = [
  [1000, "JOHN", "DOE", 14, 5],
  [2000, "BOB", "CARLTON", 7, 1],
  [3000, "RAYANE", "SMITH", 13, 3]
];

// Fonction A : parcourt les étudiants, appelle B et affiche le résultat (slide 46)
function A() {
  // Boucle for...of (slide 45)
  for (const student of Students) {
    const id = student[0];       // accès par indice (slide 39)
    const moyenne = student[3];  // accès par indice (slide 39)

    // Appel de la fonction B (slide 46) + opérateur ternaire (slide 43)
    const decision = B(moyenne) ? "ADMIS" : "AJOURNÉ";

    // Affichage un par un dans la console (slide 34) avec un template literal (slide 38)
    console.log(`${id}: ${decision}`);
  }
}

// Fonction B : un seul paramètre float (number, slide 38), retourne un booléen (slides 38 et 46)
function B(moyenne) {
  return moyenne >= 10; // opérateur de comparaison (slide 42) : admis si moyenne >= 10
}