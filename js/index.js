function iniciarSesion() {
    const usuario = document.getElementById('usuario').value;
    const contraseña = document.getElementById('contraseña').value;

    firebase.auth().signInWithEmailAndPassword(usuario, contraseña)
    .then((userCredential) => {
        // Inicio de sesión exitoso
        console.log('Sesión iniciada con:', userCredential.user);
        // Redireccionar a la página de inicio o dashboard
        window.location.href = 'home.html';
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // Manejar errores de inicio de sesión aquí
        console.log('Error de inicio de sesión:', errorCode, errorMessage);
        // Mostrar mensaje de error al usuario
        // Puedes usar aquí Sweet Alert o un método similar
    });
}

// Añade un listener al botón de inicio de sesión
document.querySelector('.btn-login').addEventListener('click', iniciarSesion);
