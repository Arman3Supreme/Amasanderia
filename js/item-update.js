function cargarInformacionItem(idItem) {
    const itemRef = firebase.database().ref('items/' + idItem);
    itemRef.once('value', (snapshot) => {
        const item = snapshot.val();
        document.getElementById('item_codigo').value = item.codigo;
        document.getElementById('item_nombre').value = item.nombre;
        document.getElementById('item_stock').value = item.stock;
        document.getElementById('item_estado').value = item.estado;
        document.getElementById('item_detalle').value = item.detalle;
    });
}

function actualizarItem(event) {
    event.preventDefault(); // Prevenir la recarga de la página

    const idItem = 'idDelItem'; // Obtén el ID del item de alguna manera, por ejemplo, a través de la URL
    const codigo = document.getElementById('item_codigo').value;
    const nombre = document.getElementById('item_nombre').value;
    const stock = document.getElementById('item_stock').value;
    const estado = document.getElementById('item_estado').value;
    const detalle = document.getElementById('item_detalle').value;

    const itemRef = firebase.database().ref('items/' + idItem);

    itemRef.update({
        codigo: codigo,
        nombre: nombre,
        stock: stock,
        estado: estado,
        detalle: detalle
    }).then(() => {
        console.log('Item actualizado correctamente');
        // Mostrar mensaje de éxito o redirigir a otra página
    }).catch((error) => {
        console.error('Error al actualizar item:', error);
        // Mostrar mensaje de error
    });
}

// Añadir listener al botón de actualizar
document.querySelector('.btn-update').addEventListener('click', actualizarItem);
