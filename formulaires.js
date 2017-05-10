var pseudo = document.getElementById('pseudo');
pseudo.value = 'test';

pseudo.addEventListener("focus", function () 
{
	document.getElementById('aide').textContent = "Entrez votre pseudo";
});

document.getElementById('confirmation').addEventListener('change', function (e)
{
	console.log(e.target.checked);
});