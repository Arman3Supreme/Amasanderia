function cargarDatos() {
    const itemsRef = firebase.database().ref('items');
    const usuariosRef = firebase.database().ref('usuarios');

    itemsRef.on('value', function(snapshot) {
        const totalItems = snapshot.numChildren();
        document.getElementById('totalItems').innerText = totalItems + " Registrados";
    });

    usuariosRef.on('value', function(snapshot) {
        const totalUsuarios = snapshot.numChildren();
        document.getElementById('totalUsuarios').innerText = totalUsuarios + " Registrados";
    });
}

// Asegúrate de llamar a cargarDatos() después de que la página haya cargado
document.addEventListener('DOMContentLoaded', cargarDatos);


function toggleNavLateral() {
    const navLateral = document.getElementById('navLateral');
    navLateral.classList.toggle('active');
}

// Añade un listener al botón o elemento que deba activar esta función
document.getElementById('toggleNavButton').addEventListener('click', toggleNavLateral);
