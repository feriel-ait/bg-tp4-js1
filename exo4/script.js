"use strict";

console.log("=== EXERCICE 4 : GESTION D'UN MAGASIN ===");


console.log("\n--- Question 1 ---");

let produit1 = {
    nom: "PC Portable",
    prix: 120000,
    quantite: 5
};

let valeurStockProduit = produit1.prix * produit1.quantite;
console.log(`Produit : ${produit1.nom}, Prix : ${produit1.prix} DA, Quantité : ${produit1.quantite}`);
console.log(`Valeur totale du stock pour ${produit1.nom} = ${valeurStockProduit} DA`);



console.log("\n--- Question 2 ---");

let catalogue = [
    { nom: "Souris", prix: 2500, quantite: 20 },
    { nom: "Clavier", prix: 4500, quantite: 15 },
    { nom: "Écran", prix: 35000, quantite: 8 },
    { nom: "PC Portable", prix: 120000, quantite: 5 },
    { nom: "Imprimante", prix: 25000, quantite: 4 }
];


let sommePrix = catalogue.reduce((total, p) => total + p.prix, 0);
let prixMoyen = sommePrix / catalogue.length;

console.log(`Prix moyen du catalogue = ${prixMoyen} DA`);
console.log("Produits dont le prix dépasse la moyenne :");

catalogue.forEach(p => {
    if (p.prix > prixMoyen) {
        console.log(`- ${p.nom} (${p.prix} DA)`);
    }
});



console.log("\n--- Question 3 ---");

let totalArticles = catalogue.reduce((total, p) => total + p.quantite, 0);
let valeurGlobaleStock = catalogue.reduce((total, p) => total + (p.prix * p.quantite), 0);

console.log(`Nombre total d'articles dans le magasin : ${totalArticles}`);
console.log(`Valeur globale du stock : ${valeurGlobaleStock} DA`);


console.log("\n--- Question 4 ---");

function calculerValeurStock(produit) {
    return produit.prix * produit.quantite;
}


console.log(`Valeur du stock pour ${catalogue[0].nom} : ${calculerValeurStock(catalogue[0])} DA`);
console.log(`Valeur du stock pour ${catalogue[2].nom} : ${calculerValeurStock(catalogue[2])} DA`);


console.log("\n--- Question 5 ---");

function traiterCatalogue(cat, callback) {
    for (let produit of cat) {
        callback(produit);
    }
}

console.log("Affichage des noms des produits :");
traiterCatalogue(catalogue, function(p) {
    console.log(p.nom);
});

console.log("Affichage des prix des produits :");
traiterCatalogue(catalogue, function(p) {
    console.log(`${p.nom} : ${p.prix} DA`);
});