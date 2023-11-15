// Se asegura de que el documento esté completamente cargado antes de ejecutar el código.
$(document).ready(function(){

	// Evento de clic para mostrar/ocultar submenús.
	$('.nav-btn-submenu').on('click', function(e){
		// Previene la acción por defecto del evento.
		e.preventDefault();
		// Obtiene el siguiente elemento 'ul' relacionado con el botón clickeado.
		var SubMenu=$(this).next('ul');
		// Obtiene el ícono del botón.
		var iconBtn=$(this).children('.fa-chevron-down');
		// Si el SubMenu ya está mostrándose.
		if(SubMenu.hasClass('show-nav-lateral-submenu')){
			// Remueve la clase 'active' del botón.
			$(this).removeClass('active');
			// Rota el ícono a su posición original.
			iconBtn.removeClass('fa-rotate-180');
			// Oculta el SubMenu.
			SubMenu.removeClass('show-nav-lateral-submenu');
		}else{
			// Agrega la clase 'active' al botón.
			$(this).addClass('active');
			// Rota el ícono 180 grados.
			iconBtn.addClass('fa-rotate-180');
			// Muestra el SubMenu.
			SubMenu.addClass('show-nav-lateral-submenu');
		}
	});

	// Evento de clic para mostrar/ocultar el menú lateral.
	$('.show-nav-lateral').on('click', function(e){
		// Previene la acción por defecto del evento.
		e.preventDefault();
		// Obtiene el menú lateral.
		var NavLateral=$('.nav-lateral');
		// Obtiene el contenido de la página.
		var PageConten=$('.page-content');
		// Si el menú lateral ya está activo.
		if(NavLateral.hasClass('active')){
			// Oculta el menú lateral.
			NavLateral.removeClass('active');
			// Remueve la clase 'active' del contenido de la página.
			PageConten.removeClass('active');
		}else{
			// Muestra el menú lateral.
			NavLateral.addClass('active');
			// Agrega la clase 'active' al contenido de la página.
			PageConten.addClass('active');
		}
	});

	// Evento de clic para el botón de salir del sistema.
	$('.btn-exit-system').on('click', function(e){
		// Previene la acción por defecto del evento.
		e.preventDefault();
		// Muestra un cuadro de diálogo de confirmación.
		Swal.fire({
			title: 'Are you sure to close the session?',
			text: "You are about to close the session and exit the system",
			type: 'question',
			showCancelButton: true,
			confirmButtonColor: '#3085d6',
			cancelButtonColor: '#d33',
			confirmButtonText: 'Yes, exit!',
			cancelButtonText: 'No, cancel'
		}).then((result) => {
			// Si el usuario confirma, redirige a 'index.html'.
			if (result.value) {
				window.location="index.html";
			}
		});
	});
});

// Función autoinvocada para agregar barras de desplazamiento personalizadas.
(function($){
    $(window).on("load",function(){
        // Agrega una barra de desplazamiento personalizada al contenido del menú lateral.
        $(".nav-lateral-content").mCustomScrollbar({
        	theme:"light-thin",
        	scrollbarPosition: "inside",
        	autoHideScrollbar: true,
        	scrollButtons: {enable: true}
        });
        // Agrega una barra de desplazamiento personalizada al contenido de la página.
        $(".page-content").mCustomScrollbar({
        	theme:"dark-thin",
        	scrollbarPosition: "inside",
        	autoHideScrollbar: true,
        	scrollButtons: {enable: true}
        });
    });
})(jQuery);


const formGroup = document.querySelector('#form-group');

formGroup.addEventListener('submit' , (e) => {

	const usuario = document.querySelector('#usuario').value;
	const contraseña = document.querySelector('#contraseña').value;

	auth 
		.createUserWithEmailAndPassword(usuario, contraseña)
		.then(userCredential => {
			console.log('logeado')
		})
})