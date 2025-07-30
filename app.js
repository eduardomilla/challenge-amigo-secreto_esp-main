// Array para almacenar los nombres de los amigos
let listaDeAmigos = [];

// Función para agregar un amigo a la lista
function agregarAmigo() {
    // Capturar el valor del campo de entrada
    const inputAmigo = document.getElementById('amigo');
    const nombre = inputAmigo.value.trim();

    // Validar la entrada
    if (nombre === '') {
        alert('Por favor, ingrese un nombre.');
        return;
    }

    // Actualizar el array de amigos
    listaDeAmigos.push(nombre);

    // Limpiar el campo de entrada
    inputAmigo.value = '';

    // Actualizar la lista visible
    actualizarListaVisible();
}

// Función para actualizar la lista visible en la página
function actualizarListaVisible() {
    // Obtener el elemento de la lista
    const listaHTML = document.getElementById('listaAmigos');
    
    // Limpiar la lista existente
    listaHTML.innerHTML = '';
    
    // Iterar sobre el array y agregar cada amigo como un elemento de lista
    listaDeAmigos.forEach(amigo => {
        const li = document.createElement('li');
        li.textContent = amigo;
        listaHTML.appendChild(li);
    });
}

// Función para sortear un amigo aleatorio
function sortearAmigo() {
    // Validar que haya amigos disponibles
    if (listaDeAmigos.length === 0) {
        alert('Agrega al menos un amigo antes de sortear');
        return;
    }

    // Generar un índice aleatorio
    const indiceAleatorio = Math.floor(Math.random() * listaDeAmigos.length);
    
    // Obtener el nombre sorteado
    const amigoSorteado = listaDeAmigos[indiceAleatorio];
    
    // Mostrar el resultado
    const resultadoHTML = document.getElementById('resultado');
    resultadoHTML.innerHTML = `<p>¡${amigoSorteado} ha sido sorteado!</p>`;
}
