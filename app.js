// Array para almacenar los nombres de los amigos
let listaDeAmigos = [];

// Función para agregar un amigo a la lista
function agregarAmigo() {
    const inputAmigo = document.getElementById('amigo');
    const nombre = inputAmigo.value.trim();

    // Validar que el campo no esté vacío
    if (nombre === '') {
        alert('Por favor, ingresa un nombre válido');
        return;
    }

    // Agregar el nombre a la lista
    listaDeAmigos.push(nombre);
    
    // Limpiar el campo de entrada
    inputAmigo.value = '';
    
    // Actualizar la lista visible
    actualizarListaVisible();
}

// Función para actualizar la lista visible en la página
function actualizarListaVisible() {
    const listaHTML = document.getElementById('listaAmigos');
    listaHTML.innerHTML = '';
    
    listaDeAmigos.forEach(amigo => {
        const li = document.createElement('li');
        li.textContent = amigo;
        listaHTML.appendChild(li);
    });
}

// Función para sortear un amigo aleatorio
function sortearAmigo() {
    // Verificar que haya al menos un amigo en la lista
    if (listaDeAmigos.length === 0) {
        alert('Agrega al menos un amigo antes de sortear');
        return;
    }

    // Seleccionar un amigo aleatorio
    const indiceAleatorio = Math.floor(Math.random() * listaDeAmigos.length);
    const amigoSorteado = listaDeAmigos[indiceAleatorio];
    
    // Mostrar el resultado
    const resultadoHTML = document.getElementById('resultado');
    resultadoHTML.innerHTML = `<li>¡${amigoSorteado} ha sido sorteado!</li>`;
}
