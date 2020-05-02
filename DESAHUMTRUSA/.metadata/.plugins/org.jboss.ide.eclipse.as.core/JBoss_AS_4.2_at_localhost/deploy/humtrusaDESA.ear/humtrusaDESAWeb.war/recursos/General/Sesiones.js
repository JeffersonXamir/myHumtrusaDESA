/**
*	Clase que controla la existencia de una sesion web
*	en el sistema.
*	@author jvillavi
*/
var Sesiones = function(tiempo){
	
	var reloj = null; // objeto del contador
	var tiempo = tiempo*1; // tiempo que dura cada intervalo
	var contador = tiempo*1;
	var estaActivo = false; // si el contador esta o no contando
	var apuntador = this;

	var estructura = {
		tiempo:tiempo,
		contador:contador,
		reloj:reloj,
		apuntador:apuntador
	};
	
	var evaluar = function(){
		estructura.contador--;
		if(estructura.contador==0){
			apuntador.revalidarSesion();
			apuntador.terminarContador();
			estructura.contador = estructura.tiempo;
		}
	};
	
	this.terminarContador = function(){
		clearInterval(estructura.reloj);
		estructura.reloj = null;
		estructura.contador = estructura.tiempo;
	};
	
	this.revalidarSesion = function(){
		var paramsConsulta = {
			url:'../../servlet/SSesiones',
			params:{orden:'REVALIDAR_SESION'},
			success:function(response,options){
				var respuesta = Ext.decode(response.responseText);
				if(respuesta.sesionValida){
					// todavia existe la sesion
					apuntador.iniciarContador();
				}else{
					// ya no existe sesion
					var mensajeConfirmacion =  "Su sesi&oacute;n expir&oacute;, debe reingresar al sistema"
					Ext.MessageBox.alert("Atenci&oacute;n",mensajeConfirmacion,function(){
						document.location = "../../servlet/SSalida";
					});
				}
			},
			failure:function(){
				alert("Su sesion fracaso, reingrese al sistema");
			}
		};
		Ext.Ajax.request(paramsConsulta);
	};

	this.iniciarContador = function(){
		if(estructura.reloj==null){
			estructura.reloj = setInterval(evaluar,1000);
		}
	};
	
};