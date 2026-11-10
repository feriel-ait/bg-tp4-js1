"use strict"; // Mode strict (slide 52)

// f1 : tableau d'étudiants (tableau de chaînes, slide 39)
function f1() {
  const etudiants = ["Etudiant1", "Etudiant2", "Etudiant3"]; // tableau (slide 39)

  // Boucle for parcourant le tableau (slide 45)
  for (let i = 0; i < etudiants.length; i++) {
    console.log(etudiants[i]); // accès par indice (slide 39), affichage console (slide 34)
  }
}

// f2 : un objet étudiant (littéral d'objet, slide 40)
function f2() {
  const etudiant = {
    nom: "John",
    prenom: "DOE",
    age: 30
  };
  console.log(etudiant); // affiche l'objet entier (slides 34 et 40)
}

// f3 : tableau d'objets étudiants (slide 41)
function f3() {
  const etudiants = [
    { nom: "nom1", prenom: "prenom1", age: 21 },
    { nom: "nom2", prenom: "prenom2", age: 22 },
    { nom: "nom3", prenom: "prenom3", age: 23 }
  ];

  // Boucle for...of (slide 45)
  for (const e of etudiants) {
    // Accès aux propriétés avec le point (slide 40) + concaténation (slide 38)
    console.log(e.nom + "-" + e.prenom + "-" + e.age);
  }
}