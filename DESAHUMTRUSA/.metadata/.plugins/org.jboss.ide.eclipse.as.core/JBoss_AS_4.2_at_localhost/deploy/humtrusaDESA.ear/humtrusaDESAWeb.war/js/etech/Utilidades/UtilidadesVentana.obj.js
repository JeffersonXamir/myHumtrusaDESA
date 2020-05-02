/**
*	Utilidades para manejar la ventana principal del sistema
*	Autor: jvillavi
*/
var UtilidadesVentana = {
	/**
	*	Muestra la ventana principal del sistema a pantalla completa
	*	@param pagina El url de la ventana principal
	*/
	mostrarVentanaPantallaCompleta:function(pagina){
		var _NAVEGADOR = navigator.appName;
		var _IDVENTANA = "VNTPRINCIPAL";
		if (_NAVEGADOR == "Microsoft Internet Explorer"){
			window.open(pagina,_IDVENTANA,'fullscreen=yes,scrollbars=auto');
		}else{
			var params =  'width=' + (screen.width-5) + ',height=' + (screen.height-30) + ',scrollbars=auto,resizable=yes';
			window.open(pagina,_IDVENTANA,params).focus();
		}
	}
};