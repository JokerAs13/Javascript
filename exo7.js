var ValeurDemandee = prompt('Quel jeu veux-tu ?');

var monTableau = ['Battlefield2', 'Age of empires 2', 'Call of duty', 'GTA5', 'Tekken7', 'Zelda', 'Mario'];

for (var i = 0; i < monTableau.length ; i++) 
{
	if (ValeurDemandee == monTableau[i]) 
	{
		alert('Nous avons trouvé le jeu !');
	}
	else
	{
		alert('Désolé, nous n\'avons pas trouvé le jeu !');
	}
}