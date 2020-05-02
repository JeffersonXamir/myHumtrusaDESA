/**
 * Controlador de Bloqueos Visuales Autor: jvillavi
 * 
 * @param funcionesAdicionales
 *            funcion que se ejecuta cuando el bloqueo fue retirado
 *            automaticamente
 */
var ControladorBloqueos = function(funcionesAdicionales) {

	/**
	 * jvillavi - se altero el componente porque en versiones inferiores a 3,
	 * Toolbar no conoce de html
	 */

	var configuraciones = {
		urlServicioConcurrencia : "../../servlet/ServicioConcurrencia",
		identificadorZonaCarga : "zonaCargaReloj",
		tiempoRestante : 0,
		apuntador : this,
		tarea : null,
		barraBloqueos : new Ext.Toolbar({
			items : [{
						xtype : "tbfill"
					}, {
						xtype : "panel",
						border : false,
						frame : true,
						html : "<div align='right'><img src='../../imagenes/lock.png' width='14px' height='14px' style='padding-right: 4px;' id='imgbloqueo'></img><b style='color: gray;'>Tiempo Bloqueo</b> <div  style='text-align: right; color: gray;font-weight: bold;' id='zonaCargaReloj'> </div></div>"
					}],
			height : 40
		})
	};

	var controlador = new Ext.util.TaskRunner();

	/**
	 * Obtiene la barra de bloqueos para usar en la aplicacion
	 */
	this.crearBarraBloqueos = function() {
		return configuraciones.barraBloqueos;
	}

	/**
	 * Obtiene el tiempo basado en los segundos declarados, en un formato
	 * visible para el usuario
	 */
	var obtenerTiempoRenderizado = function() {

		var segundosActuales = configuraciones.tiempoRestante;
		var horas = 0;
		var minutos = 0;
		var segundos = 0;
		var nuevovalor = 0;

		horas = Math.floor(segundosActuales / 3600);
		nuevovalor = segundosActuales % 3600;
		minutos = Math.floor(nuevovalor / 60);
		segundos = nuevovalor % 60;

		if (horas < 10) {
			horas = "0" + horas;
		}
		if (minutos < 10) {
			minutos = "0" + minutos;
		}
		if (segundos < 10) {
			segundos = "0" + segundos;
		}

		return horas + ":" + minutos + ":" + segundos;
	};

	var actualizarReloj = function() {
		var zonaCargaReloj = document
				.getElementById(configuraciones.identificadorZonaCarga);

		if (configuraciones.tiempoRestante == 0) {
			zonaCargaReloj.innerHTML = "00:00:00";
			controlador.stop(configuraciones.tarea);
			configuraciones.tarea = null;

			// Disparo funciones adicionales para controlar desbloqueos
			// automaticos
			if (funcionesAdicionales != null) {
				funcionesAdicionales();
			}
		} else {
			configuraciones.tiempoRestante--;
			zonaCargaReloj.innerHTML = obtenerTiempoRenderizado();
		}
	};

	/**
	 * Permite iniciar un bloqueo de aplicacion a un registro individual
	 * 
	 * @param nombreTabla
	 *            El nombre de la tabla a bloquear
	 * @param idRegistro
	 *            El id del registro a bloquear
	 * @param segundosBloqueo
	 *            El tiempo que se mantendra el contador (en segundos)
	 * @param funcionFracasoBloqueo
	 *            Handler de evento que se dispara al fracasar la obtencion de
	 *            un bloqueo, recibe el mensaje de error
	 * @param funcionExitoBloqueo
	 *            Handler de evento que se dispara al resultar exitosa la
	 *            obtencion de un bloqueo
	 */
	this.iniciarBloqueo = function(nombreTabla, idRegistro, segundosBloqueo,
			funcionFracasoBloqueo, funcionExitoBloqueo) {
		configuraciones.tarea = {
			run : actualizarReloj,
			interval : 1000
		};

		segundosBloqueo = (document.parametrosGenerales != null && document.parametrosGenerales.minutosBloqueo != null)
				? document.parametrosGenerales.minutosBloqueo * 60
				: segundosBloqueo;

		var configuracionEnvio = {
			url : configuraciones.urlServicioConcurrencia,
			params : {
				orden : "BLOQUEAR",
				nombreTabla : nombreTabla,
				claveRegistro : idRegistro,
				tipoBloqueo : "U"
			},
			callback : function(option, success, response) {
				var respuesta = Ext.decode(response.responseText);

				if (success) {
					if (respuesta.exitoOperacion) {

						configuraciones.tiempoRestante = segundosBloqueo;
						controlador.start(configuraciones.tarea);

						if (funcionExitoBloqueo != null) {
							funcionExitoBloqueo();
						}

					} else {
						if (funcionFracasoBloqueo != null) {
							funcionFracasoBloqueo(respuesta.mensajeError);
						} else {
							alert(respuesta.mensajeError);
						}
					}
				} else {
					alert("Error de comunicacion al intentar obtener un bloqueo");
				}
			}
		};

		Ext.Ajax.request(configuracionEnvio);
	};

	/**
	 * Permite terminar un bloqueo en demanda, sobre un registro individual
	 * 
	 * @param nombreTabla
	 *            El nombre de la tabla a desbloquear
	 * @param idRegistro
	 *            El id del registro a desbloquear
	 * @param funcionesAdicionales
	 *            Funciones ejecutadas por el cliente a manera de eventos
	 */
	this.terminarBloqueo = function(nombreTabla, idRegistro) {
		var zonaCargaReloj = document
				.getElementById(configuraciones.identificadorZonaCarga);

		var configuracionEnvio = {
			url : configuraciones.urlServicioConcurrencia,
			params : {
				orden : "DESBLOQUEAR",
				nombreTabla : nombreTabla,
				claveRegistro : idRegistro,
				tipoBloqueo : "U"
			},
			callback : function(option, success, response) {
				var respuesta = Ext.decode(response.responseText);

				if (success) {
					if (respuesta.exitoOperacion) {
						controlador.stop(configuraciones.tarea);
						configuraciones.tarea = null;
						configuraciones.tiempoRestante = 0;
						zonaCargaReloj.innerHTML = "00:00:00";
					} else {
						alert(respuesta.mensajeError);
					}
				} else {
					alert("Error de comunicacion al intentar terminar un bloqueo");
				}
			}
		};

		Ext.Ajax.request(configuracionEnvio);
	};
};