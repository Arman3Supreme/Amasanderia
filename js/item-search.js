function buscarItems(event) {
    event.preventDefault(); // Prevenir la recarga de la página

    const criterioBusqueda = document.getElementById('inputSearch').value;
    const itemsRef = firebase.database().ref('items');
    const listaResultados = document.getElementById('lista-resultados'); // Asegúrate de tener un tbody con este ID
    listaResultados.innerHTML = ''; // Limpiar resultados anteriores

    itemsRef.orderByChild('nombre').equalTo(criterioBusqueda).on('value', (snapshot) => {
        const items = snapshot.val();
        if (items) {
            Object.keys(items).forEach((key) => {
                const item = items[key];
                const row = document.createElement('tr');
                row.innerHTML = `
                    <td>${item.codigo}</td>
                    <td>${item.nombre}</td>
                    <td>${item.stock}</td>
                    <td>
                        <a href="item-update.html?id=${key}" class="btn btn-success">
                            <i class="fas fa-sync-alt"></i>
                        </a>
                    </td>
                    <td>
                        <button type="button" class="btn btn-warning" onclick="eliminarItem('${key}')">
                            <i class="far fa-trash-alt"></i>
                        </button>
                    </td>
                `;
                listaResultados.appendChild(row);
            });
        } else {
            // Mostrar mensaje si no se encuentran items
        }
    });
}

// Añadir listener al botón de búsqueda
document.querySelector('.btn-search').addEventListener('click', buscarItems);
