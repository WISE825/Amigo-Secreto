// Lista para guardar nombres de amigos (Bloque 1)
var listaAmigos = [];

var inputAmigo = document.querySelector('#amigo');


function mostrarTextoElemento(selector, texto) {
    var elemento = document.querySelector(selector);
    if (elemento !== null) {
        elemento.innerHTML = texto;
    }
}

function agregarAmigo() {
    var nombre = inputAmigo.value;
    
    nombre = nombre.trim();

    if (nombre === '') {
        alert('Por favor, ingresa un nombre válido.');
        return;
    }

    listaAmigos.push(nombre);

    inputAmigo.value = '';

    actualizarListaAmigos();

    ulResultado.innerHTML = '';
}

function actualizarListaAmigos() {
    ulListaAmigos.innerHTML = '';

    for (var i = 0; i < listaAmigos.length; i++) {
        var li = document.createElement('li');
        
        li.textContent = listaAmigos[i];
        
        ulListaAmigos.appendChild(li);
    }
}

function sortearAmigo() {
    if (listaAmigos.length === 0) {
        alert('No hay amigos en la lista para sortear.');
        return;
    }

    var indiceAleatorio = Math.floor(Math.random() * listaAmigos.length);

    var amigoSorteado = listaAmigos[indiceAleatorio];

    ulResultado.innerHTML = '';

    var li = document.createElement('li');
    li.textContent = '¡El amigo secreto sorteado es: ' + amigoSorteado + '!';
    ulResultado.appendChild(li);
}
