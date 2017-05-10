/*
var titresElts = document.getElementsByTagName('h2');
console.log(titresElts[0]); // Affiche le 1er titre h2.
console.log(titresElts.length); // Affiche le nombre de titres h2 dans la page (3 en l'occurence)
console.log(titresElts); // Affiche tous les titres h2.
// Le nom de la variable titresElts stockant la liste des titres se termine par Elts, 
// abréviation de "éléments". Cela permet d'indiquer que le contenu de cette variable 
// correspond à des éléments du DOM, et non à de simples valeurs. Il s'agit d'une bonne pratique.
// Une variable stockant un seul élément du DOM sera suffixée par Elt, abréviation de "élément".
// P.S. : getElementsByTagName est une méthode. Tandis que childNodes ou encore parentNode sont des propriétés.
*/


// Modification du contenu HTML de la liste : ajout d'un langage
document.getElementById("langages").innerHTML += '<li id="c">C</li>';
// Suppression du contenu HTML de la liste
document.getElementById("langages").innerHTML = "";

// Modification du contenu textuel du premier titre
document.querySelector("h1").textContent += " de programmation";

// Créer un attribut id pour le titre h1
document.querySelector("h1").setAttribute("id", "blablabla");
