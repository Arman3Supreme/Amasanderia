function registrarNuevoUsuario(event) {
    event.preventDefault(); // Prevenir la recarga de la página

    const dni = document.getElementById('usuario_dni').value;
    const nombre = document.getElementById('usuario_nombre').value;
    const apellido = document.getElementById('usuario_apellido').value;
    const telefono = document.getElementById('usuario_telefono').value;
    const direccion = document.getElementById('usuario_direccion').value;
    const usuario = document.getElementById('usuario_usuario').value;
    const email = document.getElementById('usuario_email').value;
    const clave = document.getElementById('usuario_clave_1').value;
    const claveRepetida = document.getElementById('usuario_clave_2').value;
    const privilegio = document.querySelector('select[name="usuario_privilegio"]').value;

    // Aquí deberías agregar validaciones para los datos, como verificar que las claves coincidan

    const usuarioRef = firebase.database().ref('usuarios');
    const nuevoUsuarioRef = usuarioRef.push();

    nuevoUsuarioRef.set({
        dni: dni,
        nombre: nombre,
        apellido: apellido,
        telefono: telefono,
        direccion: direccion,
        usuario: usuario,
        email: email,
        clave: clave, // Considera encriptar la clave o usar un método más seguro
        privilegio: privilegio
    }).then(() => {
        console.log('Usuario registrado correctamente');
        // Mostrar mensaje de éxito o redirigir a otra página
    }).catch((error) => {
        console.error('Error al registrar usuario:', error);
        // Mostrar mensaje de error
    });
}

// Añadir listener al botón de registro
document.querySelector('.btn-save').addEventListener('click', registrarNuevoUsuario);
