/**
 * Componente Agrupador Avanzado Framework de Desarrollo - E-Technology S.A
 * Autor: Jorge Villavicencio
 * 
 * posicionDesc puede ser normal,debajo o escondido modoBusquedaIncompleta
 * permite realizar busquedas incompletas de codigo
 */

Ext.ns('Etech.componentes.AgrupadorAvanzado');

Etech.componentes.AgrupadorAvanzado = Ext.extend(Ext.form.Field, {
	defaultAutoCreate : {
		tag : 'input',
		type : 'hidden'
	},
	codWidth : 90,
	descWidth : 100,
	separador : ' ',
	posicionDesc : 'normal',
	cm : null,
	store : null,
	url : null,
	paramsConsulta : null,
	nombreCampoCodigo : null,
	nombreCampoDescripcion : null,
	registrosPorPagina : 10,
	tituloOpcionCodigo : "Código",
	tituloOpcionDescripcion : "Descripción",
	mostrarCampoDetalle : true,
	nombreParametroAccion : 'LISTAR_AGRUPADOR',
	nombreParametroAccionVentana : '',/* ADDED BY VANDRADE */
	tituloVentana : 'Busqueda Avanzada',
	widthVentana : 600,
	heightVentana : 400,
	instanciaGridPrincipal : null,
	separadorInterno : '-',
	ultimoValido : null,
	ultimoIngresado : null,
	modoBusquedaIncompleta : false,
	modoCodigoCompuesto : false,
	instanciaGridPrincipal : null,
	initComponent : function() {
		Etech.componentes.AgrupadorAvanzado.superclass.initComponent.call(this);
		this.addEvents('actualizado');
		this.addEvents('limpiado');

		/**
		 * Parametros divididos por funcionalidad
		 */

		var paramsComponente = {
			mostrarCampoDetalle : this.mostrarCampoDetalle,
			separadorInterno : this.separadorInterno,
			modoBusquedaIncompleta : this.modoBusquedaIncompleta,
			modoCodigoCompuesto : this.modoCodigoCompuesto,
			instanciaGridPrincipal : this.instanciaGridPrincipal
		};

		var paramsVentana = {
			tituloVentana : this.tituloVentana,
			widthVentana : this.widthVentana,
			heightVentana : this.heightVentana,
			tituloOpcionCodigo : this.tituloOpcionCodigo,
			tituloOpcionDescripcion : this.tituloOpcionDescripcion
		};

		var paramsDatos = {
			url : this.url,
			store : this.store,
			cm : this.cm,
			paramsConsulta : this.paramsConsulta,
			nombreParametroAccion : this.nombreParametroAccion,
			nombreParametroAccionVentana : this.nombreParametroAccionVentana
/* ADDED BY VANDRADE */
		};

		var paramsConsulta = {
			nombreCampoCodigo : this.nombreCampoCodigo,
			nombreCampoDescripcion : this.nombreCampoDescripcion,
			registrosPorPagina : this.registrosPorPagina
		};

		var apuntador = {
			instanciaAgrupador : this
		};

		/**
		 * Control automatico de evento onSpecialKey
		 */
		this.onSpecialKey = function() {

			// Capturo el valor ingresado, e intento una llamada ajax con el
			// valor de selección
			var valor = this.getValue();

			apuntador.instanciaAgrupador.ultimoIngresado = valor;

			if (valor != null && valor != "") {
				// hay un valor, procedo a buscar

				var paramsBusqueda = {
					url : paramsDatos.url,
					method : "POST",
					params : {
						codigoRegistro : valor,
						accion : paramsDatos.nombreParametroAccion
					},
					success : function(result, request) {
						var respuesta = Ext.decode(result.responseText);

						if (respuesta.detalle != null
								&& respuesta.detalle != 'null') {

							// modo especial en el caso de un codigo compuesto
							// por varias componentes
							if (paramsComponente.modoCodigoCompuesto) {
								apuntador.instanciaAgrupador.setValue("*"
										+ respuesta.codigo
										+ paramsComponente.separadorInterno
										+ respuesta.detalle + "*");
							} else {
								apuntador.instanciaAgrupador.setValue("*"
										+ valor
										+ paramsComponente.separadorInterno
										+ respuesta.detalle + "*");
							}

							if (respuesta.detalle != '') {
								apuntador.instanciaAgrupador.ultimoValido = valor;
							}

							var modeloCol = paramsDatos.cm;
							var datosRecord = new Array();
							var contador = 0;

							for (i = 0; i < modeloCol.length; i++) {
								datosRecord[contador] = new Array();
								datosRecord[contador].name = modeloCol[i].name;
								datosRecord[contador].type = modeloCol[i].type;
								contador++;
							}

							var Fila = Ext.data.Record.create(datosRecord);

							var confRegistro = {};

							for (i = 0; i < modeloCol.length; i++) {
								eval("confRegistro." + modeloCol[i].name + "="
										+ "respuesta." + modeloCol[i].name);
							}

							var registro = new Fila(confRegistro);

							apuntador.instanciaAgrupador.registroSeleccionado = registro;

							if (apuntador.instanciaAgrupador
									.hasListener("actualizado")) {
								apuntador.instanciaAgrupador.actualizar();
							}

						} else {
							apuntador.instanciaAgrupador.setValue("*"
									+ paramsComponente.separadorInterno + "*");
						}
					}
				};

				// parametros adicionales (si los hubiere)
				if (paramsDatos.paramsConsulta != null) {
					for (datoAux in paramsDatos.paramsConsulta) {
						eval("paramsBusqueda.params." + datoAux
								+ "=paramsDatos.paramsConsulta." + datoAux
								+ ";");
					}
				}

				Ext.Ajax.request(paramsBusqueda);
			} else {
				apuntador.instanciaAgrupador.setValue("*"
						+ paramsComponente.separadorInterno + "*");
				if (apuntador.instanciaAgrupador.hasListener("limpiado")) {
					apuntador.instanciaAgrupador.limpiar();
				}
			}
		};

		this.obtenerValorCampoCodigo = function() {
			return apuntador.instanciaAgrupador.campoCodigo.getValue();
		};

		this.obtenerValorCampoDescripcion = function() {
			return apuntador.instanciaAgrupador.campoDetalle.getValue();
		};

		this.modificarModeloColumnas = function(modeloColumnas) {
			paramsDatos.cm = modeloColumnas;
		};

		this.modificarTitulo = function(titulo) {
			paramsVentana.tituloVentana = titulo;
		};

		/**
		 * Permite modificar los parametros de consulta adicionales
		 * 
		 * @param parametros
		 *            La estructura JSON con los parametros adicionales deseados
		 */
		this.modificarParametrosConsulta = function(parametrosNuevos) {
			// alert(Ext.encode(parametrosNuevos));
			paramsDatos.paramsConsulta = parametrosNuevos;
		};

		/**
		 * Validacion de estados del agrupador
		 */
		this.tieneEstadoValido = function() {
			// alert("Ultimo Valor valido:
			// "+apuntador.instanciaAgrupador.ultimoValido);
			// alert("Valor del campo codigo: "+this.obtenerValorCampoCodigo());
			return (apuntador.instanciaAgrupador.ultimoValido == this
					.obtenerValorCampoCodigo()) ? true : false;
		};

		/**
		 * Cuando cargo los datos de el componente desde una forma, inicialmente
		 * el valor es invalido, porque no provino de la llamada ajax o de la
		 * busqueda en el grid, es por ello que para simular esto, desde el load
		 * de la forma contenedora, se debe adjuntar una llamada a este metodo
		 */
		this.forzarEstadoValido = function() {
			apuntador.instanciaAgrupador.ultimoValido = this
					.obtenerValorCampoCodigo();
		};

		/**
		 * Funcion que dispara el evento specialkey del agrupador
		 */
		this.dispararSpecialKey = function() {
			this.onSpecialKey();
		};

		/**
		 * Control automatico de evento onTriggerClick (viene de ChooserField)
		 */

		this.abrirVentana = function() {
			if (!this.disabled) {

				/**
				 * Ventana Principal de busqueda
				 */
				apuntador.instanciaAgrupador.criteriosAdicionales = null;

				var storeVentanaPrincipal = paramsDatos.store;

				// if(!storeVentanaPrincipal.baseParams){
				storeVentanaPrincipal.baseParams = {
					accion : paramsDatos.nombreParametroAccion
				};
				// }
				/*
				 * AGREGADO POR: VÍCTOR ANDRADE MOTIVO: ACCION DIFERENTE PARA LA
				 * LISTA EN LA VENTANA DE CONSULTA
				 */
				if (paramsDatos.nombreParametroAccionVentana
						&& paramsDatos.nombreParametroAccionVentana != '') {/*
																			 * ADDED
																			 * BY
																			 * VANDRADE
																			 */
					storeVentanaPrincipal.baseParams.accion = paramsDatos.nombreParametroAccionVentana;
				}

				// parametros adicionales (si los hubiere)
				if (paramsDatos.paramsConsulta != null) {
					for (datoAux in paramsDatos.paramsConsulta) {
						eval("storeVentanaPrincipal.baseParams." + datoAux
								+ "=paramsDatos.paramsConsulta." + datoAux
								+ ";");
					}
				}

				var gridVentana = new Ext.grid.GridPanel({
							region : "center",
							store : storeVentanaPrincipal,
							stripeRows : true,
							loadMask : true,
							viewConfig : {
								emptyText : "-- No Hay Datos que Mostrar --"
							},
							columns : paramsDatos.cm
						});

				paramsComponente.instanciaGridPrincipal = gridVentana;

				var itemsVentana = [gridVentana];

				var botonFiltroAvanzado = new Ext.Toolbar.Button({
							text : "Filtro Avanzado",
							icon : "../../imagenes/find.png",
							cls : "x-btn-text-icon"
						});

				var txtCodBusqueda = new Ext.form.TextField({
							id : "txtCodBusqueda",
							emptyText : "Criterio de Búsqueda",
							value : this.getValue(),
							maxLength : 50
						});

				var rdBusquedaEL1 = new Ext.form.Radio({
							boxLabel : paramsVentana.tituloOpcionCodigo,
							name : "cpBusqueda",
							inputValue : "C",
							checked : true,
							ctCls : "radios_en_toolbar"
						});

				var rdBusquedaEL2 = new Ext.form.Radio({
							boxLabel : paramsVentana.tituloOpcionDescripcion,
							name : "cpBusqueda",
							inputValue : "D",
							ctCls : "radios_en_toolbar"
						});

				var grupoRadio = new Ext.form.RadioGroup({
							width : 150,
							fieldClass : "radios_en_toolbar",
							height : 24,
							columns : 2,
							style : "radios_en_toolbar",
							hideLabel : true,
							items : [rdBusquedaEL1, rdBusquedaEL2]
						});

				// Evento para ganar el foco del primer registro seleccionado
				storeVentanaPrincipal.on("load", function() {
				(function	() {
								gridVentana.focus();
								gridVentana.getSelectionModel().selectRow(0);
								gridVentana.getView().focusEl.focus();
							}).defer(100);
						});

				txtCodBusqueda.on("specialkey", function() {
					var parametrosConsulta = {
						params : {
							start : 0,
							limit : paramsConsulta.registrosPorPagina
						}
					};

					storeVentanaPrincipal.baseParams.campo = rdBusquedaEL1
							.getGroupValue();
					storeVentanaPrincipal.baseParams.valor = this.getValue();

					if (apuntador.instanciaAgrupador.criteriosAdicionales != null) {
						// existen criterios adicionales, se agregan los demas
						// parametros
						for (columna in apuntador.instanciaAgrupador.criteriosAdicionales) {
							var evaluacion = "storeVentanaPrincipal.baseParams."
									+ columna
									+ "=\""
									+ eval("apuntador.instanciaAgrupador.criteriosAdicionales."
											+ columna) + "\";";
							eval(evaluacion);
						}
					}

					storeVentanaPrincipal.load(parametrosConsulta);
				});

				var confVentana = {
					title : paramsVentana.tituloVentana,
					iconCls : "iconoVentanaAgrupador",
					width : (paramsVentana.widthVentana != null)
							? paramsVentana.widthVentana
							: 300,
					height : (paramsVentana.heightVentana != null)
							? paramsVentana.heightVentana
							: 300,
					closable : true,
					modal : true,
					layout : "border",
					items : itemsVentana,
					resizable : false,
					draggable : false,
					frame : true,
					tbar : [{
								xtype : 'tbtext',
								text : 'Criterio Primario:'
							}, new Ext.Panel({
								layout : "form",
								frame : false,
								border : false,
								bodyStyle : "background:#D0DEF0 repeat-x scroll left top",
								height : 20,
								items : [grupoRadio]
							}), txtCodBusqueda, {
								xtype : 'tbseparator'
							}, {
								xtype : 'tbtext',
								text : 'Criterio Secundario:'
							}, botonFiltroAvanzado],
					bbar : new Ext.PagingToolbar({
						displayInfo : true,
						autoShow : true,
						displayMsg : 'Mostrando registros del {0} al {1}, con un total de: {2} registro(s)',
						width : paramsVentana.widthVentana - 20,
						pageSize : paramsConsulta.registrosPorPagina,
						store : storeVentanaPrincipal
					})
				};

				/*
				 * Eventos del boton de filtros avanzados (Ventana Principal)
				 */
				botonFiltroAvanzado.on("click", function() {

					var storeVentanaSecundaria = new Ext.data.SimpleStore({
								fields : [{
											name : "columna"
										}, {
											name : "criterio"
										}, {
											name : "valor"
										}, {
											name : "tipo_columna"
										}]
							});

					// comprobacion en el caso de que ya existan parametros
					// secundarios de busqueda
					if (apuntador.instanciaAgrupador.criteriosAdicionales != null) {

						var datosCriteriosGridSecundario = new Array();
						var contCritSec = 0;
						for (colDatosGrid in apuntador.instanciaAgrupador.criteriosAdicionales) {
							datosCriteriosGridSecundario[contCritSec] = new Array();
							datosCriteriosGridSecundario[contCritSec][0] = colDatosGrid;

							var auxDecodificar = Ext
									.decode(eval("apuntador.instanciaAgrupador.criteriosAdicionales."
											+ colDatosGrid));
							datosCriteriosGridSecundario[contCritSec][1] = auxDecodificar.criterio;
							datosCriteriosGridSecundario[contCritSec][2] = auxDecodificar.valor;
							datosCriteriosGridSecundario[contCritSec][3] = auxDecodificar.tipo_columna;
							contCritSec++;
						}

						storeVentanaSecundaria
								.loadData(datosCriteriosGridSecundario);
					}

					var gridVentanaSecundaria = new Ext.grid.GridPanel({
								stripRows : true,
								region : "south",
								height : 200,
								store : storeVentanaSecundaria,
								autoExpandColumn : 3,
								stripeRows : true,
								columns : [{
											name : "columna",
											header : "Columna"
										}, {
											name : "criterio",
											header : "Criterio",
											width : 200,
											renderer : iconoTipoCriterio
										}, {
											name : "valor",
											header : "Valor",
											width : 200
										}, {
											name : "tipo_columna",
											header : "Tipo de Columna",
											renderer : iconoTipoColumna
										}],
								viewConfig : {
									emptyText : "-- No Hay Criterios Seleccionados --"
								}
							});

					/**
					 * Configuracion de fieldsets con los tipos de datos de cada
					 * columna
					 */

					var txtValorCadena = new Ext.form.TextField({
								fieldLabel : "Valor",
								maxLength : 100
							});

					var flsCadena = new Ext.form.FieldSet({
								title : "Criterios de Columna",
								hidden : true,
								height : 100,
								items : [txtValorCadena]
							});

					var fechaActualAux = new Date().format("d/m/Y");

					var txtFIFecha = new Ext.form.DateField({
								fieldLabel : "Fecha Inicial",
								format : "d/m/Y",
								value : fechaActualAux,
								readOnly : true
							});
					var txtFFFecha = new Ext.form.DateField({
								fieldLabel : "Fecha Final",
								format : "d/m/Y",
								value : fechaActualAux,
								readOnly : true
							});

					var flsFecha = new Ext.form.FieldSet({
								title : "Criterios de Columna",
								hidden : true,
								height : 100,
								items : [txtFIFecha, txtFFFecha]
							});

					var txtLTNumero = new Ext.form.TextField({
								fieldLabel : "Valor <=",
								maxLength : 100,
								maskRe : /[0-9.]/
							});
					var txtEQNumero = new Ext.form.TextField({
								fieldLabel : "Valor =",
								maxLength : 100,
								maskRe : /[0-9.]/
							});
					var txtGTNumero = new Ext.form.TextField({
								fieldLabel : "Valor >=",
								maxLength : 100,
								maskRe : /[0-9.]/
							});

					var flsNumero = new Ext.form.FieldSet({
								title : "Criterios de Columna",
								height : 120,
								hidden : true,
								items : [txtGTNumero, txtEQNumero, txtLTNumero]
							});

					/**
					 * Determinacion de los datos iniciales (columnas) a incluir
					 * en el combo de seleccion de criterios
					 */

					var datosIniciales = {
						datosInicialesColumnas : new Array()
					};

					var cont = 0;
					for (i = 0; i < paramsDatos.cm.length; i++) {
						if (paramsConsulta.nombreCampoCodigo != paramsDatos.cm[i].name
								&& paramsConsulta.nombreCampoDescripcion != paramsDatos.cm[i].name) {
							if (apuntador.instanciaAgrupador.criteriosAdicionales != null) {
								var criterioEncontrado = false;
								for (colCriterio in apuntador.instanciaAgrupador.criteriosAdicionales) {
									if (colCriterio == paramsDatos.cm[i].name) {
										// El criterio no se debe ingresar en el
										// combo, sino en el grid
										criterioEncontrado = true;
										break;
									}
								}
								if (!criterioEncontrado) {
									// El criterio no se encontro, se ingresa en
									// el combo
									datosIniciales.datosInicialesColumnas[cont] = new Array();
									datosIniciales.datosInicialesColumnas[cont][0] = paramsDatos.cm[i].name;
									datosIniciales.datosInicialesColumnas[cont][1] = paramsDatos.cm[i].header;
									datosIniciales.datosInicialesColumnas[cont][2] = paramsDatos.cm[i].type;
									cont++;
								}
							} else {
								datosIniciales.datosInicialesColumnas[cont] = new Array();
								datosIniciales.datosInicialesColumnas[cont][0] = paramsDatos.cm[i].name;
								datosIniciales.datosInicialesColumnas[cont][1] = paramsDatos.cm[i].header;
								datosIniciales.datosInicialesColumnas[cont][2] = paramsDatos.cm[i].type;
								cont++;
							}

						}
					}

					var stComboCriterios = new Ext.data.SimpleStore({
								fields : [{
											name : "codigo"
										}, {
											name : "descripcion"
										}, {
											name : "tipo"
										}],
								data : datosIniciales.datosInicialesColumnas
							});

					var cmbColumna = new Ext.form.ComboBox({
								width : 150,
								maxLength : 60,
								fieldLabel : "Columna",
								valueField : "codigo",
								displayField : "descripcion",
								emptyText : "Seleccione la Columna",
								mode : "local",
								typeAhead : false,
								forceSelection : true,
								editable : false,
								triggerAction : "all",
								store : stComboCriterios,
								listeners : {
									select : function() {
										var registro = stComboCriterios
												.getAt(stComboCriterios.find(
														"codigo", this
																.getValue()));

										flsCadena.setVisible(false);
										flsNumero.setVisible(false);
										flsFecha.setVisible(false);

										if (registro.get("tipo") == "string") {
											flsCadena.setVisible(true);
										}

										if (registro.get("tipo") == "float"
												|| registro.get("tipo") == "int") {
											flsNumero.setVisible(true);
										}

										if (registro.get("tipo") == "date") {
											flsFecha.setVisible(true);
										}
									}
								}
							});

					/**
					 * Configuracion del panel de criterios secundarios
					 */

					var cmdAgregarCriterio = new Ext.Button({
								text : "Agregar Criterio",
								icon : "../../imagenes/add.png",
								cls : "x-btn-text-icon"
							});

					var panelCriteriosSecundaria = new Ext.form.FormPanel({
						region : "center",
						height : 200,
						items : [new Ext.Panel({
							height : 230,
							layout : "column",
							frame : true,
							items : [new Ext.Panel({
												layout : "form",
												columnWidth : .5,
												bodyStyle : "padding:10px;",
												items : [new Ext.form.FieldSet(
														{
															title : "Datos de Columna",
															height : 100,
															items : [cmbColumna]
														})]
											}), new Ext.Panel({
										layout : "form",
										columnWidth : .5,
										bodyStyle : "padding:10px;",
										items : [flsCadena, flsFecha, flsNumero],
										buttons : [cmdAgregarCriterio]
									})]
						})]
					});

					var informacionAyuda = "<br><h1>Uso de filtros avanzados</h1><hr><p>Esta ventana permite definir filtros sobre";
					informacionAyuda += " las columnas mostradas en la búsqueda</p>";
					informacionAyuda += "<div align='center'><img src='../../imagenes/search_icon.jpg'></div>";

					var panelAyuda = new Ext.Panel({
								frame : false,
								region : "west",
								width : 200,
								bodyStyle : "padding:5px;",
								html : informacionAyuda
							});

					var itemsVentanaSecundaria = [panelCriteriosSecundaria,
							panelAyuda, gridVentanaSecundaria];

					var cmdAceptarVentanaSecundaria = new Ext.Button({
								text : "Aceptar",
								icon : "../../imagenes/tick.png",
								cls : "x-btn-text-icon"
							});

					var cmdCancelarVentanaSecundaria = new Ext.Button({
								text : "Cancelar",
								icon : "../../imagenes/cancel.png",
								cls : "x-btn-text-icon"
							});

					var ventanaSecundaria = new Ext.Window({
								title : "Criterios Secundarios de Búsqueda",
								iconCls : "iconoVentanaAgrupador",
								width : 810,
								height : 500,
								closable : true,
								modal : true,
								layout : "border",
								resizable : false,
								draggable : false,
								items : itemsVentanaSecundaria,
								buttons : [cmdAceptarVentanaSecundaria,
										cmdCancelarVentanaSecundaria]
							});

					/**
					 * Handlers de los botones de la ventana secundaria de
					 * criterios de busqueda
					 */

					cmdCancelarVentanaSecundaria.on("click", function() {
								ventanaSecundaria.close();
							});

					cmdAceptarVentanaSecundaria.on("click", function() {

						if (apuntador.instanciaAgrupador.criteriosAdicionales == null) {
							apuntador.instanciaAgrupador.criteriosAdicionales = {};
						}

						var referencia = "apuntador.instanciaAgrupador.criteriosAdicionales";

						for (var i = 0; i < storeVentanaSecundaria.getCount(); i++) {
							var fila = storeVentanaSecundaria.getAt(i);
							var evaluacion = referencia + "."
									+ fila.get("columna") + "=\"{criterio:'"
									+ fila.get("criterio") + "',valor:'"
									+ fila.get("valor") + "',tipo_columna:'"
									+ fila.get("tipo_columna") + "'}\";";
							eval(evaluacion);
						}

						ventanaSecundaria.close();
						// TODO no olvidar destruir la ventana secundaria

						var parametrosConsulta = {
							params : {
								start : 0,
								limit : paramsConsulta.registrosPorPagina
							}
						};

						storeVentanaPrincipal.baseParams.campo = rdBusquedaEL1
								.getGroupValue();
						storeVentanaPrincipal.baseParams.valor = txtCodBusqueda
								.getValue();

						for (var i = 0; i < storeVentanaSecundaria.getCount(); i++) {
							var fila = storeVentanaSecundaria.getAt(i);
							var evaluacion = "storeVentanaPrincipal.baseParams."
									+ fila.get("columna")
									+ "=\"{criterio:'"
									+ fila.get("criterio")
									+ "',valor:'"
									+ fila.get("valor") + "'}\";";
							eval(evaluacion);
						}

						storeVentanaPrincipal.load(parametrosConsulta);

					});

					cmdAgregarCriterio.on("click", function() {
						if (cmbColumna.getValue() != ""
								&& cmbColumna.getValue() != null) {
							// Se ha seleccionado una columna, proceder con el
							// ingreso del criterio
							// codigo,descripcion,tipo
							var indiceRegistroSeleccionado = stComboCriterios
									.find("codigo", cmbColumna.getValue());
							var registro = stComboCriterios
									.getAt(indiceRegistroSeleccionado);

							var Columna = Ext.data.Record.create([{
										name : "columna"
									}, {
										name : "criterio"
									}, {
										name : "valor"
									}, {
										name : "tipo_columna"
									}]);

							var criterio = null;
							var exito = false;

							// es numerico, comprobar los valores de esos campos
							if (registro.get("tipo") == "int"
									|| registro.get("tipo") == "float") {

								var tipoDiscriminacion = new Array();
								tipoDiscriminacion[0] = (txtGTNumero.getValue() != null && txtGTNumero
										.getValue() != "") ? true : false;
								tipoDiscriminacion[1] = (txtEQNumero.getValue() != null && txtEQNumero
										.getValue() != "") ? true : false;
								tipoDiscriminacion[2] = (txtLTNumero.getValue() != null && txtLTNumero
										.getValue() != "") ? true : false;

								if ((tipoDiscriminacion[0] == true || tipoDiscriminacion[2] == true)
										&& tipoDiscriminacion[1] == false) {
									// caso de gt o lt o ambos
									if (tipoDiscriminacion[0] == true
											&& tipoDiscriminacion[2] == true) {
										// verificar si gt es mayor que lt
										if ((txtGTNumero.getValue() * 1) < (txtLTNumero
												.getValue() * 1)) {

											criterio = new Columna({
														columna : registro
																.get("codigo"),
														criterio : ">=,<=",
														valor : txtGTNumero
																.getValue()
																+ ","
																+ txtLTNumero
																		.getValue(),
														tipo_columna : registro
																.get("tipo")
													});

											storeVentanaSecundaria
													.add(criterio);

											stComboCriterios.remove(registro);
											cmbColumna.setValue(null);

											exito = true;

										} else {
											alert("El valor de >= es menor al valor de <=  o es el mismo valor, por favor arregle esta situacion");
										}
									} else {
										// lt o gt solamente

										criterio = new Columna({
													columna : registro
															.get("codigo"),
													criterio : ((tipoDiscriminacion[0])
															? ">="
															: "<="),
													valor : ((tipoDiscriminacion[0])
															? txtGTNumero
																	.getValue()
															: txtLTNumero
																	.getValue()),
													tipo_columna : registro
															.get("tipo")
												});

										storeVentanaSecundaria.add(criterio);

										stComboCriterios.remove(registro);
										cmbColumna.setValue(null);

										exito = true;
									}
								} else {
									if (tipoDiscriminacion[1] == true
											&& (tipoDiscriminacion[0] == false && tipoDiscriminacion[2] == false)) {
										// es eq solamente
										criterio = new Columna({
													columna : registro
															.get("codigo"),
													criterio : "=",
													valor : txtEQNumero
															.getValue(),
													tipo_columna : registro
															.get("tipo")
												});

										storeVentanaSecundaria.add(criterio);

										stComboCriterios.remove(registro);
										cmbColumna.setValue(null);

										exito = true;

									} else {
										alert("Debe ingresar un valor en los campos >= y <= o solo en =");
										txtGTNumero.setValue(null);
										txtLTNumero.setValue(null);
										txtEQNumero.setValue(null);
									}
								}
							}

							// es cadena
							if (registro.get("tipo") == "string") {
								if (txtValorCadena.getValue() != null
										&& txtValorCadena.getValue() != "") {
									criterio = new Columna({
												columna : registro
														.get("codigo"),
												criterio : "like",
												valor : txtValorCadena
														.getValue(),
												tipo_columna : registro
														.get("tipo")
											});

									storeVentanaSecundaria.add(criterio);

									stComboCriterios.remove(registro);
									cmbColumna.setValue(null);

									exito = true;
								} else {
									alert("Ingrese un valor para continuar");
								}
							}

							// es fecha

							if (registro.get("tipo") == "date") {
								if (txtFIFecha.getValue() != ""
										&& txtFIFecha.getValue() != null
										&& txtFFFecha.getValue() != ""
										&& txtFFFecha.getValue() != null) {

									criterio = new Columna({
												columna : registro
														.get("codigo"),
												criterio : ">=,<=",
												valor : Ext.util.Format.date(
														txtFIFecha.getValue(),
														"d/m/Y")
														+ ","
														+ Ext.util.Format
																.date(
																		txtFFFecha
																				.getValue(),
																		"d/m/Y"),
												tipo_columna : registro
														.get("tipo")
											});

									storeVentanaSecundaria.add(criterio);

									stComboCriterios.remove(registro);
									cmbColumna.setValue(null);

									exito = true;
								} else {
									alert("Una de las fechas ingresadas es nula o inválida");
								}
							}

							if (exito) {
								flsCadena.setVisible(false);
								flsNumero.setVisible(false);
								flsFecha.setVisible(false);

								txtGTNumero.setValue(null);
								txtLTNumero.setValue(null);
								txtEQNumero.setValue(null);
								txtValorCadena.setValue(null);
							}
						}
					});

					ventanaSecundaria.setVisible(true);

				});

				var ventana = new Ext.Window(confVentana);

				/**
				 * Evento de doble clic en el grid de seleccion de registros
				 */

				gridVentana.on("celldblclick", function(grilla, rowIndex,
						columnIndex, e) {
					// Grid this,Number rowIndex,Number
					// columnIndex,Ext.EventObject e
					var fila = grilla.getSelectionModel().getSelected();

					if (fila != null) {
						var valorCampoCodigo = fila
								.get(paramsConsulta.nombreCampoCodigo);
						var valorCampoDetalle = fila
								.get(paramsConsulta.nombreCampoDescripcion);

						apuntador.instanciaAgrupador.registroSeleccionado = grilla
								.getSelectionModel().getSelected();
						apuntador.instanciaAgrupador.setValue("*"
								+ valorCampoCodigo
								+ paramsComponente.separadorInterno
								+ valorCampoDetalle + "*");
						apuntador.instanciaAgrupador.ultimoValido = valorCampoCodigo;
						apuntador.instanciaAgrupador.actualizar();

						ventana.destroy();
					}
				});

				gridVentana.on("keypress", function(evt) {
							if (evt.getKey() == 13) {
								gridVentana.fireEvent("celldblclick",
										gridVentana, 0, 0, null);
							}
						});

				ventana.setVisible(true);

				/**
				 * Primera consulta realizada al sistema
				 */

				var paramsPrimerLoad = null;

				if (this.getValue() != "") {
					paramsPrimerLoad = {
						params : {
							start : 0,
							limit : paramsConsulta.registrosPorPagina,
							campo : "C",
							valor : this.getValue()
						}
					};
				} else {
					paramsPrimerLoad = {
						params : {
							start : 0,
							limit : paramsConsulta.registrosPorPagina
						}
					};
				}

				// Si el agrupador tiene el modoBusquedaIncompleta, agregar los
				// parametros
				if (paramsComponente.modoBusquedaIncompleta) {
					storeVentanaPrincipal.baseParams.campo = rdBusquedaEL1
							.getGroupValue();
					storeVentanaPrincipal.baseParams.valor = this.getValue();
				}

				storeVentanaPrincipal.load(paramsPrimerLoad);
			}
		};

		this.onTriggerClick = function() {
			apuntador.instanciaAgrupador.abrirVentana();
		};

		/* Creacion del campo de codigo */
		var confCampoCodigo = Ext.apply({}, {
					id : this.id + "-cod",
					maxLength : 60,
					width : this.codWidth,
					selectOnFocus : this.selectOnFocus,
					listeners : {
						blur : {
							scope : this,
							fn : this.onBlur
						},
						focus : {
							scope : this,
							fn : this.onFocus
						}
					},
					allowBlank : this.allowBlank,

					/*
					 * Comentado para que acepte todo tipo de caracter autor:
					 * licaza Solicitado: Yuri Espinoza 19/oct/2011
					 */
					// maskRe: /[a-zA-Z0-9]/,
					onTriggerClick : this.onTriggerClick
				}, this.confCampoCodigo);

		this.campoCodigo = new Ext.form.ChooserField(confCampoCodigo);

		/* Creacion del campo de descripcion */

		var confcampoDetalle = Ext.apply({}, {
					id : this.id + "-desc",
					width : this.descWidth,
					height : this.descHeight,
					selectOnFocus : this.selectOnFocus,
					readOnly : true,
					listeners : {
						blur : {
							scope : this,
							fn : this.onBlur
						},
						focus : {
							scope : this,
							fn : this.onFocus
						}
					}
				}, this.confcampoDetalle);

		this.campoDetalle = new Ext.form.TextField(confcampoDetalle);

		/* Propagacion de eventos */

		this.relayEvents(this.campoCodigo, ['focus', 'specialkey', 'invalid',
						'valid']);
		this.relayEvents(this.campoDetalle, ['focus', 'specialkey', 'invalid',
						'valid']);

		this.actualizar = function() {
			this.fireEvent("actualizado", this);
		};

		this.limpiar = function() {
			this.fireEvent("limpiado", this);
		};
	},
	onRender : function(ct, posicion) {
		if (this.isRendered) {
			return;
		}

		/* renderiza el campo hidden */
		Etech.componentes.AgrupadorAvanzado.superclass.onRender.call(this, ct,
				posicion);

		// creacion de la tabla ('debajo' para poner campo de detalle debajo del
		// codigo, de lo contrario, el caso 'normal')
		var t;
		if ('debajo' === this.posicionDesc) {
			t = Ext.DomHelper.append(ct, {
						tag : 'table',
						style : 'border-collapse:collapse',
						children : [{
									tag : 'tr',
									children : [{
												tag : 'td',
												style : 'padding-bottom:1px',
												cls : 'ux-datetime-date'
											}]
								}, {
									tag : 'tr',
									children : [{
												tag : 'td',
												cls : 'ux-datetime-time'
											}]
								}]
					}, true);
		} else {
			t = Ext.DomHelper.append(ct, {
						tag : 'table',
						style : 'border-collapse:collapse',
						children : [{
									tag : 'tr',
									children : [{
												tag : 'td',
												style : 'padding-right:4px',
												cls : 'ux-datetime-date'
											}, {
												tag : 'td',
												cls : 'ux-datetime-time'
											}]
								}]
					}, true);
		}

		this.tableEl = t;
		this.wrap = t.wrap({
					cls : 'x-form-field-wrap'
				});
		this.wrap.on("mousedown", this.onMouseDown, this, {
					delay : 10
				});

		// renderizar campos de codigo y detalle
		this.campoCodigo.render(t.child('td.ux-datetime-date'));
		this.campoDetalle.render(t.child('td.ux-datetime-time'));

		if ("escondido" === this.posicionDesc) {
			// Caso especial en el que se quiere esconder el campo de detalle
			this.campoDetalle.setVisible(false);
		}

		// parche por comportamiento estupido de internet explorer
		if (Ext.isIE && Ext.isStrict) {
			t.select('input').applyStyles({
						top : 0
					});
		}

		this.on('specialkey', this.onSpecialKey, this);
		this.campoCodigo.el.swallowEvent(['keydown', 'keypress']);
		this.campoDetalle.el.swallowEvent(['keydown', 'keypress']);

		// crea un icono de validacion en la parte derecha
		if ('side' === this.msgTarget) {
			var elp = this.el.findParent('.x-form-element', 10, true);
			this.errorIcon = elp.createChild({
						cls : 'x-form-invalid-icon'
					});

			this.campoCodigo.errorIcon = this.errorIcon;
			this.campoDetalle.errorIcon = this.errorIcon;
		}

		// flag para indicar que el componente se ha renderizado
		this.isRendered = true;
	},
	adjustSize : Ext.BoxComponent.prototype.adjustSize,
	alignErrorIcon : function() {
		this.errorIcon.alignTo(this.tableEl, 'tl-tr', [2, 0]);
	},
	initCampoCodigoValue : function() {
		this.campoCodigoValue = "";
	},
	disable : function() {
		if (this.isRendered) {
			this.campoCodigo.disabled = this.disabled;
			this.campoCodigo.onDisable();
			this.campoDetalle.onDisable();
		}
		this.disabled = true;
		this.campoCodigo.disabled = true;
		this.campoDetalle.disabled = true;
		this.fireEvent("disable", this);
		return this;
	},
	enable : function() {
		if (this.rendered) {
			this.campoCodigo.onEnable();
			this.campoDetalle.onEnable();
		}
		this.disabled = false;
		this.campoCodigo.disabled = false;
		this.campoDetalle.disabled = false;
		this.fireEvent("enable", this);
		return this;
	},
	focus : function() {
		this.campoCodigo.focus();
	},
	getPositionEl : function() {
		return this.wrap;
	},
	getResizeEl : function() {
		return this.wrap;
	},
	getValue : function() {
		// muestra el valor del campo codigo
		return this.campoCodigo.getValue();
	},
	isValid : function() {
		return this.campoCodigo.isValid() && this.campoDetalle.isValid();
	},
	isVisible : function() {
		return this.campoCodigo.rendered
				&& this.campoCodigo.getActionEl().isVisible();
	},
	onBlur : function(f) {
		if (this.wrapClick) {
			f.focus();
			this.wrapClick = false;
		}
		if (f === this.campoCodigo) {
			this.actualizarCodigo();
		} else {
			this.actualizarDetalle();
		}
		this.updateHidden();
// disparar los eventos despues de un momento
		(function() {
			if (!this.campoCodigo.hasFocus && !this.campoDetalle.hasFocus) {
				var v = this.getValue();
				if (String(v) !== String(this.startValue)) {
					this.fireEvent("change", this, v, this.startValue);
				}
				this.hasFocus = false;
				this.fireEvent('blur', this);
			}
		}).defer(100, this);
	},
	onFocus : function() {
		if (!this.hasFocus) {
			this.hasFocus = true;
			this.startValue = this.getValue();
			this.fireEvent("focus", this);
		}
	},
	onMouseDown : function(e) {
		this.wrapClick = 'td' === e.target.nodeName.toLowerCase();
	},
	onSpecialKey : function(t, e) {
		var key = e.getKey();
		if (key == e.TAB) {
			if (t === this.campoCodigo && !e.shiftKey) {
				e.stopEvent();
				this.campoDetalle.focus();
			}
			if (t === this.campoDetalle && e.shiftKey) {
				e.stopEvent();
				this.campoCodigo.focus();
			}
		}
		// En el editorGrid no se pone este hack para que funcione
		if (key == e.ENTER) {
			this.updateValue();
		}
	}

	,
	setCodigo : function(date) {
		this.campoCodigo.setValue(date);
	},
	setDetalle : function(date) {
		this.campoDetalle.setValue(date);
	},
	setSize : function(w, h) {
		if (!w) {
			return;
		}
		if ('debajo' == this.posicionDesc) {
			this.campoCodigo.setSize(w, h);
			this.campoDetalle.setSize(w, h);
			if (Ext.isIE) {
				this.campoCodigo.el.up('td').setWidth(w);
				this.campoDetalle.el.up('td').setWidth(w);
			}
		} else {
			this.campoCodigo.setSize(w - this.descWidth - 4, h);
			this.campoDetalle.setSize(this.descWith, h);
			if (Ext.isIE) {
				this.campoCodigo.el.up('td').setWidth(w - this.descWidth - 4);
				this.campoDetalle.el.up('td').setWidth(this.descWith);
			}
		}
	},
	setValue : function(val) {
		// Este metodo tambien se lanza cuando se da un form.reset();
		// en cuyo caso el valor recibido en val es null o ""
		if (val == null || val == "") {
			// estamos en limpieza
			this.clear();
		} else {
			if (val.charAt(0) == "*") {
				// el setValue viene de un load de formulario
				// *1-verde loco*
				var cadenaSinSeparar = val.substring(1, val.length - 1);
				var codigos = cadenaSinSeparar.split(this.separadorInterno);
				this.campoCodigo.setValue(codigos[0]);
				this.campoDetalle.setValue(codigos[1]);
			} else {
				this.campoCodigo.setValue(val);
			}
		}
		this.updateHidden();
		return;
	},
	clear : function() {
		this.campoCodigo.setValue("");
		this.campoDetalle.setValue("");
	},
	setVisible : function(visible) {
		if (visible) {
			this.campoCodigo.show();
			this.campoDetalle.show();
		} else {
			this.campoCodigo.hide();
			this.campoDetalle.hide();
		}
		return this;
	},
	show : function() {
		return this.setVisible(true);
	},
	hide : function() {
		return this.setVisible(false);
	},
	actualizarCodigo : function() {
		var d = this.campoCodigo.getValue();
	},
	actualizarDetalle : function() {
		var t = this.campoDetalle.getValue();
	},
	updateHidden : function() {
		if (this.isRendered) {
			var value = this.campoCodigo.getValue();
			this.el.dom.value = value;
		}
	},
	updateValue : function() {
		this.actualizarCodigo();
		this.actualizarDetalle();
		this.updateHidden();
		return;
	},
	validate : function() {
		return this.campoCodigo.validate() && this.campoDetalle.validate();
	},
	renderer : function(field) {
		var format = ' ';
		var renderer = function(val) {
			return;
		};
		return renderer;
	}
});

/* Registro del xtype */
Ext.reg('xagrupadoravanzado', Etech.componentes.AgrupadorAvanzado);
