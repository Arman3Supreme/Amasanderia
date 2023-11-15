function buscarUsuarios(event) {
    event.preventDefault(); // Prevenir la recarga de la página

    const criterioBusqueda = document.getElementById('inputSearch').value;
    const usuariosRef = firebase.database().ref('usuarios');
    const listaResultados = document.getElementById('lista-resultados');
    listaResultados.innerHTML = '';

    usuariosRef.orderByChild('nombre').equalTo(criterioBusqueda).on('value', (snapshot) => {
        const usuarios = snapshot.val();
        if (usuarios) {
            Object.keys(usuarios).forEach((key, index) => {
                const usuario = usuarios[key];
                const row = document.createElement('tr');
                row.innerHTML = `
                    <td>${index + 1}</td>
                    <td>${usuario.dni}</td>
                    <td>${usuario.nombre}</td>
                    <td>${usuario.apellido}</td>
                    <td>${usuario.telefono}</td>
                    <td>${usuario.usuario}</td>
                    <td>${usuario.email}</td>
                    <td>
                        <a href="user-update.html?id=${key}" class="btn btn-success">
                            <i class="fas fa-sync-alt"></i>
                        </a>
                    </td>
                    <td>
                        <button type="button" class="btn btn-warning" onclick="eliminarUsuario('${key}')">
                            <i class="far fa-trash-alt"></i>
                        </button>
                    </td>
                `;
                listaResultados.appendChild(row);
            });
        } else {
            // Manejar el caso de que no se encuentren resultados
        }
    });
}
function eliminarUsuario(idUsuario) {
    const confirmacion = confirm('¿Estás seguro de que quieres eliminar este usuario?');
    if (confirmacion) {
        const usuarioRef = firebase.database().ref('usuarios/' + idUsuario);
        usuarioRef.remove()
        .then(() => {
            console.log('Usuario eliminado correctamente');
            // Actualizar la lista de usuarios o mostrar un mensaje
        })
        .catch((error) => {
            console.error('Error al eliminar usuario:', error);
            // Mostrar mensaje de error
        });
    }
}
// Añadir listeners
document.querySelector('.btn-search').addEventListener('click', buscarUsuarios);

// Carga inicial de datos o configuraciones adicionales
