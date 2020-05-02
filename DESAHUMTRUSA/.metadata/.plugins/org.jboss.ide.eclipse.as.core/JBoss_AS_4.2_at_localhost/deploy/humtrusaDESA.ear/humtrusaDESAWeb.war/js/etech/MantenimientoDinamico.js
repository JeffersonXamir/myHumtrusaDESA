/**
*	Compositor de Mantenimientos Dinamicos
*	jvillavi - 06/07/2011
*/
var MantenimientoDinamico = function(){
	
	var parametrosGenerales = {
		urlTransportador:"../../servlet/ServicioTransporte",
		rutaLogica:"BCOMPONENTES",
		rutaColecciones:"BCOLECCIONES",
		codigoMantenimiento:document.parametrosVista.codigoMantenimientoDinamico,
		columnaId:null,
		apuntador:this,
		registroActual:null
	};
	
	var renderizadores = {
		renderizarEstado: function(val){
			if(val=='1'){
				return "<img src='../../imagenes/flag_green.png' alt='Activo' /> Activo"
			}else if(val=='2'){
				return "<img src='../../imagenes/flag_red.png' alt='Inactivo' /> Inactivo"
			}
		}
};
	
	var parametrosTransportador = {
		obtenerDefinicionFiltros:{
			orden:"OBTENER_DEFINICIONES",
			nombreMetodo:"obtenerDefinicionPantallaPrincipal",
			tipo:"JSON",
			parametros:[
				{nombre:"codigoMantenimiento",prototipo:"long",tipoParametro:"NORMAL"}
			]
		},
		obtenerDefinicionPantallaProceso:{
			orden:"OBTENER_DEFINICIONES_PROCESO",
			nombreMetodo:"obtenerDefinicionPantallaProceso",
			tipo:"JSON",
			parametros:[
				{nombre:"codigoMantenimiento",prototipo:"long",tipoParametro:"NORMAL"}
			]
		},
		obtenerColeccion:{
			orden:"OBTENER_COLECCION",
			nombreMetodo:"obtenerColeccion",
			tipo:"XML",
			parametros:[
				{nombre:"nombreColeccion",prototipo:"String",tipoParametro:"NORMAL"},
				{nombre:"parametros",prototipo:"String",tipoParametro:"NORMAL"}
			]
		},
		obtenerListadoPrincipal:{
			orden:"OBTENER_LISTADO_COLECCION",
			nombreMetodo:"obtenerListadoPrincipal",
			tipo:"XML",
			parametros:[
				{nombre:"codigoMantenimiento",prototipo:"long",tipoParametro:"NORMAL"},
				{nombre:"criteriosJSON",prototipo:"String",tipoParametro:"NORMAL"},
				{nombre:"start",prototipo:"int",tipoParametro:"NORMAL"},
				{nombre:"limit",prototipo:"int",tipoParametro:"NORMAL"},
				{nombre:"EMPRESA_LOGONEADA",prototipo:"long",tipoParametro:"SEGURIDADES"}
			]
		},
		obtenerEntidad:{
			orden:"OBTENER_ENTIDAD",
			nombreMetodo:"obtenerEntidad",
			tipo:"XML",
			parametros:[
				{nombre:"codigoMantenimiento",prototipo:"long",tipoParametro:"NORMAL"},
				{nombre:"codigoEntidad",prototipo:"String",tipoParametro:"NORMAL"}
			]
		},
		guardarEntidad:{
			orden:"GUARDAR_ENTIDAD",
			nombreMetodo:"guardarEntidad",
			tipo:"JSON",
			parametros:[
				{nombre:"codigoMantenimiento",prototipo:"long",tipoParametro:"NORMAL"},
				{nombre:"datosFormaJSON",prototipo:"String",tipoParametro:"NORMAL"}
			]
		},
		modificarEntidad:{
			orden:"MODIFICAR_ENTIDAD",
			nombreMetodo:"modificarEntidad",
			tipo:"JSON",
			parametros:[
				{nombre:"codigoMantenimiento",prototipo:"long",tipoParametro:"NORMAL"},
				{nombre:"codigoRegistro",prototipo:"String",tipoParametro:"NORMAL"},
				{nombre:"datosFormaJSON",prototipo:"String",tipoParametro:"NORMAL"}
			]
		},
		eliminarEntidad:{
			orden:"ELIMINAR_ENTIDAD",
			nombreMetodo:"eliminarEntidad",
			tipo:"JSON",
			parametros:[
				{nombre:"codigoMantenimiento",prototipo:"long",tipoParametro:"NORMAL"},
				{nombre:"codigoRegistro",prototipo:"String",tipoParametro:"NORMAL"}
			]
		}
	};
	
	var panelesPrincipales = {
		panelFiltros:null,
		panelGrid:null,
		constructorPanelFiltros: { region:"center", layout:"form", border:false, items:new Array() }
	};
	
	var panelesProceso = {
		panelProceso:null,
		ventanaProceso:null
	};
	
	var modelosDatos = {
		storeGridPrincipal:null,
		readerFormaProcesos:null,
		filtros:null,
		columnas:null,
		campos:null
	};
	
	var botonesPrincipales = {
		cmdNuevo: new Ext.Button({text:"Nuevo",icon:"../../imagenes/page_add.png",cls:"x-btn-text-icon",disabled:!document.parametrosSeguridad.puedeGuardar,listeners:{click:function(){parametrosGenerales.apuntador.mostrarVentana("I");}}}),
		cmdEliminar: new Ext.Button({text:"Eliminar",icon:"../../imagenes/page_delete.png",cls:"x-btn-text-icon",disabled:!document.parametrosSeguridad.puedeEliminar}),
		cmdBuscar: new Ext.Button({text:"Mostrar Datos",icon:"../../imagenes/buscar.png",cls:"x-btn-text-icon"}),
		cmdLimpiar: new Ext.Button({text:"Borrar Datos",icon:"../../imagenes/bin.png",cls:"x-btn-text-icon"}),
		cmdGuardar: new Ext.Button({text:"Guardar",icon:"../../imagenes/disk.png",cls:"x-btn-text-icon",formBind:true}),
		cmdModificar: new Ext.Button({text:"Modificar",icon:"../../imagenes/disk.png",cls:"x-btn-text-icon",formBind:true}),
		cmdCancelar: new Ext.Button({text:"Cancelar",icon:"../../imagenes/cancel.png",cls:"x-btn-text-icon"})
	};
	
	/**
	*	Muestra la ventana de proceso en el modo seleccionado
	*	@modo El modo de la ventana (I->Ingreso,M->Modificacion)
	*	@codigoRegistro El codigo del registro a cargar (solo aplica para modo=M)
	*/
	this.mostrarVentana = function(modo,codigoRegistro){
		
		panelesProceso.panelProceso.getForm().reset();
		panelesProceso.panelProceso.getForm().isValid();
		panelesProceso.ventanaProceso.setVisible(true);
		panelesProceso.ventanaProceso.center();
		
		botonesPrincipales.cmdGuardar.setVisible((modo=="I"));
		botonesPrincipales.cmdModificar.setVisible((modo=="M"));

		try{
			
			// Ocultar campos que tengan la propiedad visible:false desde la definicion de operaciones
			
			for(i=0;i<modelosDatos.campos.length;i++){
				
				if(!modelosDatos.campos[i].visible){
					
					var campoActual = panelesProceso.panelProceso.getForm().findField(modelosDatos.campos[i].nombre);
					
					if(campoActual!=null){
						campoActual.getEl().up(".x-form-item").setDisplayed(false);
					}
				}
			}
			
		}catch(ex){}
		
		if(modo=="I"){
			// Modo Ingreso
			parametrosGenerales.registroActual = null;
		}else{
			// Modo Modificacion
			parametrosGenerales.registroActual = codigoRegistro;
			
			panelesProceso.panelProceso.getForm().load({
				params:{
					codigoEntidad:codigoRegistro
				}
			});
		}
		
	};
	
	/**
	*	Obtiene los datos de la forma principal en un
	*	formato entendible para el motor de inferencia
	*/
	var obtenerDatosForma = function(){
		var datos = "{\"datosForma\":[";
		var camposForma = panelesProceso.panelProceso.getForm().getValues();
		
		if(camposForma!=null){
			var posicionActual = 0;
			var cantidadElementos = 0;
			
			for(campo in camposForma){
				cantidadElementos++;
			}
			
			for(campo in camposForma){
				datos += "{\"nombre\":\""+campo+"\",\"valor\":\""+camposForma[campo]+"\"}";
				
				if(posicionActual<cantidadElementos-1){
					datos += ",";
				}
				
				posicionActual++;
			}
		}
		
		datos += "]}";
		
		return datos;
	};
	
	/**
	*	Construye la ventana de procesos en base a los datos
	*	obtenidos dinamicamente desde el servidor
	*/
	var generarVentanaProcesos = function(){
		Ext.Ajax.request({
			url: parametrosGenerales.urlTransportador,
			params:{
				recursoOrden:parametrosGenerales.rutaLogica,
				datosOrden: Ext.encode(parametrosTransportador.obtenerDefinicionPantallaProceso),
				codigoMantenimiento:parametrosGenerales.codigoMantenimiento
			},
			callback: function(a,b,response){
				var respuesta = Ext.decode(response.responseText);
			
				if(respuesta.success){
					
					modelosDatos.campos = respuesta.campos;
					
					if(respuesta.campos!=null && respuesta.campos.length>0){
						
						var constructorVentanaPrincipal = {
							title:"Ingreso/Modificacion de Entidad",
							resizable:true,
							draggable:true,
							closable:false,
							modal:true,
							closeAction:"hide",
							width:400,
							height:400,
							layout:"border",
							items: new Array()
						};
						
						var constructorFormaPrincipal = {
							region:"center",
							autoScroll:true,
							url: parametrosGenerales.urlTransportador,
							baseParams:{
								recursoOrden:parametrosGenerales.rutaLogica,
								datosOrden: Ext.encode(parametrosTransportador.obtenerEntidad),
								codigoMantenimiento:parametrosGenerales.codigoMantenimiento
							},
							autoLoad:false,
							monitorValid:true,
							reader: null,
							frame:true,
							items: new Array(),
							buttons: [botonesPrincipales.cmdGuardar,botonesPrincipales.cmdModificar,botonesPrincipales.cmdCancelar]
						};
						
						var camposLectorFormaPrincipal = new Array();
						
						for(i=0;i<respuesta.campos.length;i++){
							var campoActual = respuesta.campos[i];
							
							var definicionLector = null;
							var componente = null;
							var valorPorDefecto = "";
							
							if(campoActual.valorPorDefecto=="EMPRESA_LOGONEADA"){
								valorPorDefecto = document.parametrosSesion.codigoEmpresa;
							}else if(campoActual.valorPorDefecto=="AGENCIA_LOGONEADA"){
								valorPorDefecto = document.parametrosSesion.codigoAgencia;
							}else if(campoActual.valorPorDefecto=="USUARIO_LOGONEADO"){
								valorPorDefecto = document.parametrosSesion.codigoUsuario;
							}else if(campoActual.valorPorDefecto=="FECHA_ACTUAL"){
								valorPorDefecto = new Date();
							}else{
								valorPorDefecto = campoActual.valorPorDefecto;
							}
							
							if(campoActual.tipo=="TEXTFIELD"){
								componente = new Ext.form.TextField({name:campoActual.nombre,fieldLabel:campoActual.etiqueta,readOnly:!campoActual.modificable,value:valorPorDefecto,allowBlank:false,width:200});
								definicionLector = {name: campoActual.nombre};
							}else if(campoActual.tipo=="NUMBERFIELD"){
								componente = new Ext.form.TextField({name:campoActual.nombre,fieldLabel:campoActual.etiqueta,maskRe:/[0-9.]/,readOnly:!campoActual.modificable,value:valorPorDefecto*1,allowBlank:false});
								definicionLector = {name: campoActual.nombre,type:"float"};
							}else if(campoActual.tipo=="TEXTAREA"){
								componente = new Ext.form.TextArea({name:campoActual.nombre,fieldLabel:campoActual.etiqueta,height:80,width:200,readOnly:!campoActual.modificable,value:valorPorDefecto,allowBlank:false});
								definicionLector = {name: campoActual.nombre};
							}else if(campoActual.tipo=="COMBOBOX"){
								var constructorCombo = {
									fieldLabel:campoActual.etiqueta,
									editable:false,
									forceSelection:true,
									hiddenName:campoActual.nombre,
									mode:"remote",
									triggerAction:"all",
									valueField:"codigo",
									displayField:"descripcion",
									readOnly:!campoActual.modificable,
									value:valorPorDefecto,
									allowBlank:false,
									store: new Ext.data.Store({
										url:parametrosGenerales.urlTransportador,
										autoLoad:true,
										baseParams:{
											recursoOrden: parametrosGenerales.rutaColecciones,
											datosOrden: Ext.encode(parametrosTransportador.obtenerColeccion),
											nombreColeccion: campoActual.coleccion,
											parametros:""
										},
										reader: new Ext.data.XmlReader({record:campoActual.coleccion},[
											{name:"codigo"},{name:"descripcion"}
										])
									})
								};
								
								if(!campoActual.modificable){
									constructorCombo.onTriggerClick = function(){};
								}
								
								componente = new Ext.form.ComboBox(constructorCombo);
								
								definicionLector = {name: campoActual.nombre};
								
							}else if(campoActual.tipo=="DATEFIELD"){
								
								var constructorDateField = {
									name:campoActual.nombre,
									fieldLabel:campoActual.etiqueta,
									readOnly:!campoActual.modificable,
									format:"d/m/Y",
									value:new Date(),
									value:valorPorDefecto,
									allowBlank:false
								};
								
								if(!campoActual.modificable){
									constructorDateField.onTriggerClick = function(){};
								}
								
								componente = new Ext.form.DateField(constructorDateField);
								definicionLector = {name: campoActual.nombre,type:"date",dateFormat:"d/m/Y"};
							}else{
								Ext.MessageBox.show({
									title:"Atenci&oacute;n",
									msg:"El tipo requerido no ha sido implementado aun "+ campoActual.tipo,
									icon: Ext.MessageBox.INFO,
									buttons: Ext.MessageBox.OK
								});
							}
							
							constructorFormaPrincipal.items.push(componente);
							camposLectorFormaPrincipal.push(definicionLector);
							
						}
						
						// Construccion del reader de la forma de la ventana de procesos
						modelosDatos.readerFormaProcesos = new Ext.data.XmlReader({success:"@success",record:document.parametrosVista.nombreEntidad.replace("com.etech.entidades.","")},camposLectorFormaPrincipal);
						constructorFormaPrincipal.reader = modelosDatos.readerFormaProcesos;
						
						panelesProceso.panelProceso = new Ext.form.FormPanel(constructorFormaPrincipal);
						constructorVentanaPrincipal.items.push(panelesProceso.panelProceso);
						constructorVentanaPrincipal.height = (respuesta.campos.length*40)+125;
						
						panelesProceso.ventanaProceso = new Ext.Window(constructorVentanaPrincipal);
						
					}
					
				}else{
						Ext.MessageBox.show({
							title:"Atenci&oacute;n",
							msg:"Error al obtener informacion de generacion para la pantalla de procesos, verifique el enlace a internet",
							icon: Ext.MessageBox.INFO,
							buttons: Ext.MessageBox.OK
						});
				}
			}
		});
	};
	
	/**
	* Extraccion de datos para construir la pantalla principal
	*/
	
	Ext.Ajax.request({
		url: parametrosGenerales.urlTransportador,
		params:{
			recursoOrden:parametrosGenerales.rutaLogica,
			datosOrden: Ext.encode(parametrosTransportador.obtenerDefinicionFiltros),
			codigoMantenimiento:parametrosGenerales.codigoMantenimiento
		},
		callback:function(a,b,response){
			var respuesta = Ext.decode(response.responseText);
			
			if(respuesta.success){
				
				modelosDatos.filtros = respuesta.filtros;
				modelosDatos.columnas = respuesta.columnas;
				
				if(respuesta.filtros!=null && respuesta.filtros.length>0){
					
					var constructorAgrupadorFiltros = {
						title:"Filtros de B&uacute;squeda",
						autoHeight:true,
						style:"padding:5px",
						items:new Array(),
						buttons:[botonesPrincipales.cmdLimpiar,botonesPrincipales.cmdBuscar]
					};
					
					/*var constructorPanelFiltros = {
						region:"center",
						layout:"form",
						border:false,
						items:new Array()
					};*/
					
					for(i=0;i<respuesta.filtros.length;i++){
						var filtroActual = respuesta.filtros[i];
						
						var componenteFiltro = null;
						
						if(filtroActual.tipo=="TEXTFIELD"){
							componenteFiltro = new Ext.form.TextField({fieldLabel:filtroActual.etiqueta});
						}else if(filtroActual.tipo=="NUMBERFIELD"){
							componenteFiltro = new Ext.form.TextField({fieldLabel:filtroActual.etiqueta,maskRe:/[0-9]/});
						}else if(filtroActual.tipo=="TEXTAREA"){
							componenteFiltro = new Ext.form.TextArea({fieldLabel:filtroActual.etiqueta,width:150,height:60});
						}else if(filtroActual.tipo=="COMBOBOX"){
							
							componenteFiltro = new Ext.form.ComboBox({
								fieldLabel:filtroActual.etiqueta,
								editable:false,
								forceSelection:true,
								mode:"remote",
								triggerAction:"all",
								valueField:"codigo",
								displayField:"descripcion",
								store: new Ext.data.Store({
									url:parametrosGenerales.urlTransportador,
									autoLoad:true,
									baseParams:{
										recursoOrden: parametrosGenerales.rutaColecciones,
										datosOrden: Ext.encode(parametrosTransportador.obtenerColeccion),
										nombreColeccion: filtroActual.coleccion,
										parametros:""
									},
									reader: new Ext.data.XmlReader({record:filtroActual.coleccion},[
										{name:"codigo"},{name:"descripcion"}
									])
								})
							});
							
						}else if(filtroActual.tipo=="DATEFIELD"){
							componenteFiltro = new Ext.form.DateField({fieldLabel:filtroActual.etiqueta,readOnly:true,format:"d/m/Y",value:new Date()});
						}else{
							Ext.MessageBox.show({
								title:"Atenci&oacute;n",
								msg:"El tipo requerido no ha sido implementado aun",
								icon: Ext.MessageBox.INFO,
								buttons: Ext.MessageBox.OK
							});
						}
						
						constructorAgrupadorFiltros.items.push(componenteFiltro);
					}
					
					panelesPrincipales.constructorPanelFiltros.items.push(new Ext.form.FieldSet(constructorAgrupadorFiltros));
					panelesPrincipales.panelFiltros = new Ext.FormPanel(panelesPrincipales.constructorPanelFiltros);
					
				}
				
				if(respuesta.columnas!=null && respuesta.columnas.length>0){
					
					var configuracionLectorPrincipal = new Array();
					var configuracionColumnasPrincipal = new Array();
					
					for(i=0;i<respuesta.columnas.length;i++){
						
						var columnaActual = respuesta.columnas[i];
						
						var definicionColumna = null;
						var definicionLector = null;
						
						if(columnaActual.esIdentificador){
							parametrosGenerales.columnaId = columnaActual.nombre;
						}
						
						if(columnaActual.tipo=="CADENA"){
							definicionColumna = {
								dataIndex:columnaActual.nombre,
								header: columnaActual.titulo,
								width:250
							};
							
							definicionLector = {
								name: columnaActual.nombre
							};
							
						}else if(columnaActual.tipo=="NUMERO"){
							definicionColumna = {
								dataIndex:columnaActual.nombre,
								header: columnaActual.titulo
							};
							
							definicionLector = {
								name: columnaActual.nombre,
								type: "int"
							};
							
						}else if(columnaActual.tipo=="MONEDA"){
							
							definicionColumna = {
								dataIndex:columnaActual.nombre,
								header: columnaActual.titulo,
								renderer: Ext.monedaSinSimbolo
							};
							
							definicionLector = {
								name: columnaActual.nombre,
								type: "float"
							};
						
						}else if(columnaActual.tipo=="FECHA"){
						
							definicionColumna = {
								dataIndex:columnaActual.nombre,
								header: columnaActual.titulo,
								renderer: Ext.util.Format.dateRenderer("d/m/Y")
							};
							
							definicionLector = {
								name: columnaActual.nombre,
								type: "date",
								dateFormat: "d/m/Y"
							};
							
						}else if(columnaActual.tipo=="ESTADO"){
						
							definicionColumna = {
								dataIndex:columnaActual.nombre,
								header: columnaActual.titulo,
								renderer: renderizadores.renderizarEstado
							};
							
							definicionLector = {
								name: columnaActual.nombre
							};

						}else{
							Ext.MessageBox.show({
								title:"Atenci&oacute;n",
								msg:"Columna definida con un tipo no implementado aun",
								icon: Ext.MessageBox.INFO,
								buttons: Ext.MessageBox.OK
							});
						}
						
						configuracionLectorPrincipal.push(definicionLector);
						configuracionColumnasPrincipal.push(definicionColumna);
						
					}
					
					modelosDatos.storeGridPrincipal = new Ext.data.Store({
						url:parametrosGenerales.urlTransportador,
						autoLoad:false,
						baseParams:{
							recursoOrden:parametrosGenerales.rutaLogica,
							datosOrden: Ext.encode(parametrosTransportador.obtenerListadoPrincipal),
							codigoMantenimiento:parametrosGenerales.codigoMantenimiento,
							criteriosJSON:""
						},
						reader: new Ext.data.XmlReader(
							{success:"@success",record:document.parametrosVista.nombreEntidad.replace("com.etech.entidades.",""),totalRecords:"@total_registros"},
							configuracionLectorPrincipal
						)
					});
					
					panelesPrincipales.panelGrid = new Ext.grid.GridPanel({
						region:"center",
						stripeRows:true,
						store: modelosDatos.storeGridPrincipal,
						columns: configuracionColumnasPrincipal,
						tbar: new Ext.Toolbar({
							items:[
								{xtype:"tbseparator"},
								botonesPrincipales.cmdNuevo,
								botonesPrincipales.cmdEliminar
							]
						}),
						bbar: new Ext.PagingToolbar({
							pageSize: document.parametrosGenerales.registrosPorPagina,
							displayInfo:true,
							store: modelosDatos.storeGridPrincipal
						})
					});
					
					modelosDatos.storeGridPrincipal.load({params:{start:0,limit:document.parametrosGenerales.registrosPorPagina}});
					
				}else{
					panelesPrincipales.panelGrid = new Ext.grid.Panel({
						region:"center",
						html:"<font color='red'>Error, verifique su definicion de columnas en las tablas correspondientes...</font>"
					});
				}
				
				var pantallaPrincipal = new PantallaPrincipal({
					usaPanelFiltros: (respuesta.filtros!=null && respuesta.filtros.length>0),
					panelFiltros: panelesPrincipales.panelFiltros,
					panelCentro: panelesPrincipales.panelGrid
				});
				
				panelesPrincipales.panelGrid.on("dblclick",function(){
					
					var registro = panelesPrincipales.panelGrid.getSelectionModel().getSelected();
					
					if(registro!=null){
						parametrosGenerales.apuntador.mostrarVentana("M",registro.get(parametrosGenerales.columnaId));
					}else{
							Ext.MessageBox.show({
								title:"Atenci&oacute;n",
								msg:"Debe seleccionar un registro para continuar",
								icon: Ext.MessageBox.INFO,
								buttons: Ext.MessageBox.OK
							});
					}
					
				});
				
				// Creacion de componentes de la ventana de procesos
				generarVentanaProcesos();
				
			}else{
					Ext.MessageBox.show({
						title:"Atenci&oacute;n",
						msg:"Error al obtener informacion de generacion, verifique el enlace a internet",
						icon: Ext.MessageBox.INFO,
						buttons: Ext.MessageBox.OK
					});
			}
		}
	});
	
	botonesPrincipales.cmdCancelar.on("click",function(){
	
		var mensajeConfirmacion =  "Cualquier cambio no guardado ser&aacute; perdido, ¿Est&aacute; seguro que desea continuar?"
		Ext.MessageBox.confirm("Confirmaci&oacute;n",mensajeConfirmacion,function(opc){
			if(opc=="yes"){
				// Cerrar Ventana
				panelesProceso.ventanaProceso.setVisible(false);
				panelesProceso.panelProceso.getForm().reset();
				
			}
		});
	});
	
	botonesPrincipales.cmdGuardar.on("click",function(){
		
		if(document.parametrosSeguridad.puedeGuardar){
		
			Ext.Ajax.request({
				url: parametrosGenerales.urlTransportador,
				params:{
					recursoOrden:parametrosGenerales.rutaLogica,
					datosOrden: Ext.encode(parametrosTransportador.guardarEntidad),
					codigoMantenimiento:parametrosGenerales.codigoMantenimiento,
					datosFormaJSON: obtenerDatosForma()
				},
				callback:function(a,b,response){
					var respuesta = Ext.decode(response.responseText);
					
					if(respuesta.success){
						if(respuesta.exitoOperacion){
							
							Ext.MessageBox.show({
								title:"Atenci&oacute;n",
								msg:"El registro fu&eacute; ingresado exitosamente",
								icon: Ext.MessageBox.INFO,
								buttons: Ext.MessageBox.OK
							});
							
							panelesProceso.ventanaProceso.setVisible(false);
							panelesProceso.panelProceso.getForm().reset();
							
							panelesPrincipales.panelGrid.getStore().load({
								params:{
									start:0,
									limit:document.parametrosGenerales.registrosPorPagina
								}
							});
							
						}else{
						
							Ext.MessageBox.show({
								title:"Atenci&oacute;n",
								msg: respuesta.mensajeError,
								icon: Ext.MessageBox.INFO,
								buttons: Ext.MessageBox.OK
							});
							
						}
					}else{
							Ext.MessageBox.show({
								title:"Atenci&oacute;n",
								msg:"Error de comunicaci&oacute;n, contacte al dpto. de sistemas",
								icon: Ext.MessageBox.INFO,
								buttons: Ext.MessageBox.OK
							});
					}
				}
			});
		
		}else{
			Ext.MessageBox.show({
				title:"Atenci&oacute;n",
				msg:"Usted no tiene permisos para guardar",
				icon: Ext.MessageBox.INFO,
				buttons: Ext.MessageBox.OK
			});
		}
		
	});
	
	botonesPrincipales.cmdModificar.on("click",function(){
		
		if(document.parametrosSeguridad.puedeModificar){
		
			Ext.Ajax.request({
				url: parametrosGenerales.urlTransportador,
				params:{
					recursoOrden:parametrosGenerales.rutaLogica,
					datosOrden: Ext.encode(parametrosTransportador.modificarEntidad),
					codigoMantenimiento:parametrosGenerales.codigoMantenimiento,
					codigoRegistro: parametrosGenerales.registroActual,
					datosFormaJSON: obtenerDatosForma()
				},
				callback:function(a,b,response){
					var respuesta = Ext.decode(response.responseText);
					
					if(respuesta.success){
						if(respuesta.exitoOperacion){
						
							Ext.MessageBox.show({
								title:"Atenci&oacute;n",
								msg:"El registro fu&eacute; modificado exitosamente",
								icon: Ext.MessageBox.INFO,
								buttons: Ext.MessageBox.OK
							});
							
							panelesProceso.ventanaProceso.setVisible(false);
							panelesProceso.panelProceso.getForm().reset();
							
							panelesPrincipales.panelGrid.getStore().load({
								params:{
									start:0,
									limit:document.parametrosGenerales.registrosPorPagina
								}
							});
							
						}else{
							Ext.MessageBox.show({
								title:"Atenci&oacute;n",
								msg:respuesta.mensajeError,
								icon: Ext.MessageBox.INFO,
								buttons: Ext.MessageBox.OK
							});						}
					}else{
							Ext.MessageBox.show({
								title:"Atenci&oacute;n",
								msg:"Error de comunicaci&oacute;n, contacte al dpto. de sistemas",
								icon: Ext.MessageBox.INFO,
								buttons: Ext.MessageBox.OK
							});
					}
				}
			});
			
		}else{
			
			Ext.MessageBox.show({
				title:"Atenci&oacute;n",
				msg:"Usted no se encuentra autorizado para modificar",
				icon: Ext.MessageBox.INFO,
				buttons: Ext.MessageBox.OK
			});
			
		}
		
	});
	
	botonesPrincipales.cmdEliminar.on("click",function(){
		
		if(document.parametrosSeguridad.puedeEliminar){
			var registro = panelesPrincipales.panelGrid.getSelectionModel().getSelected();
			
			if(registro!=null){
				var mensajeConfirmacion =  "¿Est&aacute; seguro que desea eliminar el registro seleccionado?"
				Ext.MessageBox.confirm("Confirmaci&oacute;n",mensajeConfirmacion,function(opc){
					if(opc=="yes"){
						
						Ext.Ajax.request({
							url: parametrosGenerales.urlTransportador,
							params:{
								recursoOrden:parametrosGenerales.rutaLogica,
								datosOrden: Ext.encode(parametrosTransportador.eliminarEntidad),
								codigoMantenimiento:parametrosGenerales.codigoMantenimiento,
								codigoRegistro: registro.get(parametrosGenerales.columnaId)
							},
							callback:function(a,b,response){
								var respuesta = Ext.decode(response.responseText);
								
								if(respuesta.success){
									if(respuesta.exitoOperacion){
									
										Ext.MessageBox.show({
											title:"Atenci&oacute;n",
											msg:"El registro fu&eacute; eliminado exitosamente",
											icon: Ext.MessageBox.INFO,
											buttons: Ext.MessageBox.OK
										});
										
										panelesPrincipales.panelGrid.getStore().load({
											params:{
												start:0,
												limit:document.parametrosGenerales.registrosPorPagina
											}
										});
										
									}else{
										Ext.MessageBox.show({
											title:"Atenci&oacute;n",
											msg:respuesta.mensajeError,
											icon: Ext.MessageBox.INFO,
											buttons: Ext.MessageBox.OK
										});
									}
								}else{
									Ext.MessageBox.show({
										title:"Atenci&oacute;n",
										msg:"Error de comunicaci&oacute;n, contacte al dpto. de sistemas",
										icon: Ext.MessageBox.INFO,
										buttons: Ext.MessageBox.OK
									});
								}
							}
						});
						
					}
				});
			}else{
				Ext.MessageBox.show({
					title:"Atenci&oacute;n",
					msg:"Debe seleccionar un registro para continuar",
					icon: Ext.MessageBox.INFO,
					buttons: Ext.MessageBox.OK
				});
			}
			
		}else{
			Ext.MessageBox.show({
				title:"Atenci&oacute;n",
				msg:"Usted no esta autorizado para eliminar",
				icon: Ext.MessageBox.INFO,
				buttons: Ext.MessageBox.OK
			});
		}
		
	});
	
	/*** Realiza la Limpieza se los filtros ****/
	botonesPrincipales.cmdLimpiar.on("click",function(){
	  panelesPrincipales.panelFiltros.getForm().reset();
	  //panelesPrincipales.panelFiltros
	});
	
	/**** Realiza la Busqueda ******/
	botonesPrincipales.cmdBuscar.on("click",function(){
		modelosDatos.storeGridPrincipal.load({params:{start:0,limit:document.parametrosGenerales.registrosPorPagina}});
	});	
};

document.programa = new MantenimientoDinamico();