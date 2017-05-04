// on stocke le premier nombre fourni pas l'utilisateur dans la variable 'nomber1'
// la fonction parseInt permet de convertir la chaîne de texte en nombre
var nomber1 = parseInt(prompt('Premier nombre'));
// on demande à l'utilisateur de choisir une des 4 opérations possibles
// et on stocke la valeur dans la variable 'operate'
var operate = prompt("'+' ou '-' ou '*' ou '/'");
// même chose qu'à la ligne 3 pour le second nombre
var nomber2 = parseInt(prompt('Second nombre'));

// on compare le contenu de la variable 'operate' avec les 4 opérateurs possibles
// on utilise ici les '||' pour indiquer 'ou' à la condition
if (operate == '+' || operate == '-' || operate == '*' || operate =='/') {

	// si le contenu de la variable 'operate' est égale à '+'
	if (operate == '+') {
		// on affiche le résultat retourné par la fonction 'addition'
		// on passe en arguments les deux nombres fournis pas l'utilisateur
		alert(addition(nomber1, nomber2));
	// si le contenu de la variable 'operate' est égale à '-'
	} else if (operate == '-') {
		alert(soustraction(nomber1, nomber2));
	// si le contenu de la variable 'operate' est égale à '/'
	} else if (operate == '/') {
		alert(division(nomber1, nomber2));
	// si le contenu de la variable 'operate' est égale à '*'
	} else if (operate == '*') {
		alert(multiplication(nomber1, nomber2));
	}
// si aucun des opérateurs valide n'est entré par l'utilisateur...
} else {
	// ...on affiche un message d'erreur
	alert('L\'opération demandée n\'existe pas !');
}

// la fonction 'addition' prend deux paramètres a et b
function addition(a, b) {
	// on effectue le calcul demandé
	var result = a+b;
	// on retourne le résultat
	return result;
}

function soustraction(a, b) {
	var result = a-b;
	return result;
}

function division(a, b) {
	var result = a/b;
	return result;
}

function multiplication(a, b) {
	var result = a*b;
	return result;
}

// n'oubliez pas cette solution est une valide parmis des dizaines !