var monObjet = {
	prenom : 'bob',
	nom: 'éponge',
	age : 22,
	passion : "pâté de crabe"
};

alert(monObjet['nom']);
alert(monObjet.age);


//Pour modifier la valeur d'une propriété :
monObjet['nom'] = 'patrick';
alert(monObjet['nom']);

//Pour ajouter une propriété :
monObjet.adresse = 'voisin de bob';
alert(monObjet.adresse);
