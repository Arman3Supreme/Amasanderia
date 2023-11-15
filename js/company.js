function guardarInformacionEmpresa(event) {
    event.preventDefault(); // Prevenir la recarga de la página

    const nombre = document.getElementById('empresa_nombre').value;
    const email = document.getElementById('empresa_email').value;
    const telefono = document.getElementById('empresa_telefono').value;
    const direccion = document.getElementById('empresa_direccion').value;

    const empresaRef = firebase.database().ref('empresa');
    const nuevaEmpresaRef = empresaRef.push();

    nuevaEmpresaRef.set({
        nombre: nombre,
        email: email,
        telefono: telefono,
        direccion: direccion
    }).then(() => {
        console.log('Información de la empresa guardada correctamente');
        // Mostrar mensaje de éxito o realizar alguna acción
    }).catch((error) => {
        console.error('Error al guardar información de la empresa:', error);
        // Mostrar mensaje de error
    });
}

// Añadir listener al botón de guardar
document.querySelector('.btn-save').addEventListener('click', guardarInformacionEmpresa);

function actualizarInformacionEmpresa(event) {
    event.preventDefault(); // Prevenir la recarga de la página

    const idEmpresa = 'idDeLaEmpresa'; // Obtén el ID de la empresa a actualizar
    const datosActualizados = {
        nombre: document.getElementById('empresa_nombre').value,
        email: document.getElementById('empresa_email').value,
        telefono: document.getElementById('empresa_telefono').value,
        direccion: document.getElementById('empresa_direccion').value
    };

    const empresaRef = firebase.database().ref('empresa/' + idEmpresa);
    empresaRef.update(datosActualizados)
    .then(() => {
        console.log('Información de la empresa actualizada correctamente');
        // Mostrar mensaje de éxito o realizar alguna acción
    })
    .catch((error) => {
        console.error('Error al actualizar información de la empresa:', error);
        // Mostrar mensaje de error
    });
}

// Añadir listener al botón de actualizar
document.querySelector('.btn-update').addEventListener('click', actualizarInformacionEmpresa);
