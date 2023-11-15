function cargarInformacionUsuario(idUsuario) {
    const usuarioRef = firebase.database().ref('usuarios/' + idUsuario);
    usuarioRef.once('value', (snapshot) => {
        const usuario = snapshot.val();
        document.getElementById('usuario_dni').value = usuario.dni;
        document.getElementById('usuario_nombre').value = usuario.nombre;
        document.getElementById('usuario_apellido').value = usuario.apellido;
        // Continúa llenando los demás campos de forma similar
    });
}
function actualizarUsuario(event) {
    event.preventDefault(); // Prevenir la recarga de la página

    const idUsuario = 'idDelUsuario'; // Obtén el ID del usuario a actualizar
    const datosActualizados = {
        dni: document.getElementById('usuario_dni').value,
        nombre: document.getElementById('usuario_nombre').value,
        apellido: document.getElementById('usuario_apellido').value,
        // Continúa recogiendo los demás datos del formulario
    };

    const usuarioRef = firebase.database().ref('usuarios/' + idUsuario);
    usuarioRef.update(datosActualizados)
    .then(() => {
        console.log('Usuario actualizado correctamente');
        // Mostrar mensaje de éxito o realizar alguna acción como redirigir
    })
    .catch((error) => {
        console.error('Error al actualizar usuario:', error);
        // Mostrar mensaje de error
    });
}

// Añadir listener al botón de actualizar
document.querySelector('.btn-raised').addEventListener('click', actualizarUsuario);
