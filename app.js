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
}
