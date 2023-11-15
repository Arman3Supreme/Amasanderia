function cargarListaItems() {
    const itemsRef = firebase.database().ref('items');
    itemsRef.on('value', (snapshot) => {
        const items = snapshot.val();
        const listaItems = document.getElementById('lista-items'); // Asegúrate de tener un tbody con este ID
        listaItems.innerHTML = ''; // Limpiar la lista actual

        Object.keys(items).forEach((key, index) => {
            const item = items[key];
            const row = document.createElement('tr');
            row.innerHTML = `
                <td class="text-center">${index + 1}</td>
                <td class="text-center">${item.codigo}</td>
                <td class="text-center">${item.nombre}</td>
                <td class="text-center">${item.stock}</td>
                <td class="text-center">
                    <a href="item-update.html?id=${key}" class="btn btn-success">
                        <i class="fas fa-sync-alt"></i>
                    </a>
                </td>
                <td class="text-center">
                    <button type="button" class="btn btn-warning" onclick="eliminarItem('${key}')">
                        <i class="far fa-trash-alt"></i>
                    </button>
                </td>
            `;
            listaItems.appendChild(row);
        });
    });
}

// Llamar a esta función al cargar la página
document.addEventListener('DOMContentLoaded', cargarListaItems);

function eliminarItem(idItem) {
    const itemsRef = firebase.database().ref('items/' + idItem);
    itemsRef.remove()
    .then(() => {
        console.log('Item eliminado correctamente');
        // Recargar la lista o actualizar la UI aquí
    })
    .catch((error) => {
        console.error('Error al eliminar item:', error);
    });
}
