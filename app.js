// Array para almacenar los amigos
let amigos = [];

//Funcion Agregar Amigo
function agregarAmigo() {
  const amigoInput = document.getElementById("amigo");
  const amigo = amigoInput.value.trim(); // Elimina espacios al principio y al final

  // Validaciones
  if (amigo === "") {
    alert("¡Por favor, ingresa un nombre para tu amigo secreto!");
  } else if (!/^[a-zA-Z\s]+$/.test(amigo)) {
    alert("¡Por favor, ingresa un nombre válido (solo letras y espacios!)");
  } else {
    // Agregar el nombre del amigo al array
    amigos.push(amigo);
    amigoInput.value = ""; // Limpiar campo de entrada después de agregar
    mostrarAmigos(); // Actualizar la lista visible de amigos
    verificarNombre(); // Verificar el estado del botón después de agregar un amigo
  }
}

//Función Mostrar Amigos
function mostrarAmigos() {
  const listaAmigos = document.getElementById("listaAmigos");
  listaAmigos.innerHTML = ""; // Limpiar la lista antes de actualizarla

  // Crear un nuevo elemento <li> por cada amigo en el array
  amigos.forEach(function (amigo) {
    const li = document.createElement("li");
    li.textContent = amigo;
    listaAmigos.appendChild(li); // Añadir el nombre a la lista HTML
  });
}
//Función Verificar Nombres
function verificarNombre() {
  const nombreInput = document.getElementById("amigo");
  const botonAñadir = document.getElementById("botonAñadir");

  // Cambiar el color del botón según si el campo está vacío o no
  if (nombreInput.value.trim() !== "") {
    botonAñadir.classList.add('activo'); // Botón verde cuando el nombre es válido
  } else {
    botonAñadir.classList.remove('activo'); // Botón rojo si el campo está vacío
  }
}

//Función Sortear Amigo
function sortearAmigo() {
  if (amigos.length === 0) {
    alert("¡Aún no has agregado a ningún amigo! Por favor, agrega uno antes de hacer el sorteo.");
  } else {
    const amigoElegido = amigos[Math.floor(Math.random() * amigos.length)];
    document.getElementById("resultado").textContent = "Tu amigo Secreto es: " + amigoElegido;
  }
}

// Función para limpiar todos los datos
function limpiarTodo() {
  // Limpiar el array de amigos
  amigos = [];
  
  // Limpiar las listas de amigos y resultado en el HTML
  document.getElementById("listaAmigos").innerHTML = "";
  document.getElementById("resultado").textContent = "";
  
  // Limpiar el campo de entrada
  document.getElementById("amigo").value = "";
  
  // Cambiar el color del botón a su estado original
  const botonAñadir = document.getElementById("botonAñadir");
  botonAñadir.classList.remove('activo');
}

// Función de confirmación para limpiar todo
function confirmarLimpiar() {
  const confirmar = confirm("¿Estás seguro de que deseas borrar todo?");
  if (confirmar) {
    limpiarTodo();
  }
}
