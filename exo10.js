// la variable divTags contient tous les éléments de type div de la page html
// ces éléments sont stockés sous forme de tableau
var monTableau = document.getElementsByTagName('div');

// on boucle sur le tableau divTags
for (var i = 0; i < monTableau.length; i++)
{
	// si la valeur du tableau a un attribut de type class
	if (monTableau[i].hasAttribute('class')) 
	{
	// on ne fait rien ici
	}
	else 
	{
		// si la valeur du tableau n'a pas d'attribut class
		// on en ajoute un avec une valeur (ici 'text')
		monTableau[i].setAttribute('class', 'text');
	}
}
