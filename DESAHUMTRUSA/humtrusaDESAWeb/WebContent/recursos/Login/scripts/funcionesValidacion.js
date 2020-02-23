
/**
*	Funcion que controla el ingreso de teclado en la pantalla de validacion
*	Compatible con Firefox e Internet Explorer
*/
function chequearEnter(evento){
	var codigoCaracter;
	
	if(evento && evento.which){ // which existe (compatibilidad FFx)
		evento = evento;
		codigoCaracter = evento.which; // tomo el caracter de la propiedad which (FFx)
	}else{
		evento = event;
		codigoCaracter = evento.keyCode; // tomo el caracter de la propiedad keycode (IExplorer)
	}
	
	if(codigoCaracter==13){
		// el codigo del caracter corresponde al enter, envio los datos
		mostrarMensaje('Validando sus credenciales, por favor espere...','Validando...');
		document.forms[0].submit();
		return false;
	}else{
		return true;
	}
}

/**
*	Muestra un mensaje de espera mientras se carga la pagina
*	de validacion de usuarios
*/
function mostrarMensaje(mensaje,mensajeProgreso){
	Ext.MessageBox.show({
		msg: mensaje,
        progressText: mensajeProgreso,
        width:300,
        wait:true,
        waitConfig: {interval:200}
    });
}

/**
*	Habilita el boton de ingreso en la pantalla de ingreso
*/
function habilitarIngreso(){
	var linkIngreso = document.getElementById("cmdIngreso");
	var forma = document.getElementById("frmIngreso");
	
	forma.action = "servlet/SIngresoAgencia";
	linkIngreso.href = "javascript:ingresar();";
}

/**
*	Deshabilita el boton de ingreso en la pantalla de ingreso
*/
function deshabilitarIngreso(){
	var forma = document.getElementById("frmIngreso");
	forma.action = "seleccion_agencia.jsp";
}

/**
*	Ingreso (valido solo desde la pantalla de seleccion de agencia y empresa
*/
function ingresar(){
	mostrarMensaje('Ingresando al sistema, por favor espere...','Ingresando...');
	document.forms[0].submit();
}