function guardarNuevoItem(event) {
    event.preventDefault(); // Prevenir la recarga de la página

    const codigo = document.getElementById('item_codigo').value;
    const nombre = document.getElementById('item_nombre').value;
    const stock = document.getElementById('item_stock').value;
    const estado = document.getElementById('item_estado').value;
    const detalle = document.getElementById('item_detalle').value;

    const itemRef = firebase.database().ref('items');
    const nuevoItemRef = itemRef.push();

    nuevoItemRef.set({
        codigo: codigo,
        nombre: nombre,
        stock: stock,
        estado: estado,
        detalle: detalle
    }).then(() => {
        console.log('Item agregado correctamente');
        // Mostrar mensaje de éxito o redirigir a otra página
        // Puedes usar Sweet Alert para mostrar un mensaje de éxito
    }).catch((error) => {
        console.error('Error al agregar item:', error);
        // Mostrar mensaje de error
    });
}

// Añadir listener al botón de guardar
document.querySelector('.btn-save').addEventListener('click', guardarNuevoItem);
