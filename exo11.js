var h1 = document.createElement('h1');
h1.textContent = 'Voici mon titre';

var p = document.createElement('p');
p.textContent = 'Voici mon paragraphe';

var liste = document.createElement('ul');

var li1 = document.createElement('li');
li1.textContent = 'Blablabla';
var li2 = document.createElement('li');
li2.textContent = 'Blablabla';
var li3 = document.createElement('li');
li3.textContent = 'Blablabla';
var li4 = document.createElement('li');
li4.textContent = 'Blablabla';
var li5 = document.createElement('li');
li5.textContent = 'Blablabla';

document.getElementById('div').appendChild(h1);
document.getElementById('div').appendChild(p);
document.getElementById('div').appendChild(ul);

var idUl = document.createElement('id');
document.getElementById('id').appendChild(li);