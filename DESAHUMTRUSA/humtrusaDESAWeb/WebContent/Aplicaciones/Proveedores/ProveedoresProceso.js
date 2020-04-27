var PlantillasProceso = function() {

	var configuraciones = {
		apuntador : this,
		modoActual : null,
		parametro_cambiofecha : null,
		parametro_bloqueo : null,
		codProveedor : null
	};
	
	var campoCabecera = [["S", "S"], ["1", "1"], ["2", "2"], ["3", "3"]];

	var ptr = this;

	var parametrosTransportador = {
		listarSistemas : {
			orden : "COMBO_SISTEMAS",
			nombreMetodo : "obtenerCmbSistemasXML",
			tipo : "XML",
			parametros : []
		},
		obtenerEmpresas : {
			orden : "OBTENER_EMPRESAS",
			nombreMetodo : "obtieneEmpresasxUsuario",
			tipo : "XML",
			parametros : [{
						nombre : "USUARIO_LOGONEADO",
						prototipo : "String",
						tipoParametro : "SEGURIDADES"
					}]
		},
		obtenerAgencias : {
			orden : "OBTENER_AGENCIAS",
			nombreMetodo : "obtenerAgencia",
			tipo : "XML",
			parametros : [{
						nombre : "codigoEmpresa",
						prototipo : "long",
						tipoParametro : "NORMAL"
					}, {
						nombre : "USUARIO_LOGONEADO",
						prototipo : "String",
						tipoParametro : "SEGURIDADES"
					}]
		},
		obtenerDocumentos : {
			orden : "OBTENER_DOCUMENTOS",
			nombreMetodo : "obtenerDocumentos",
			tipo : "XML",
			parametros : [{
						nombre : "codsistema",
						prototipo : "String",
						tipoParametro : "NORMAL"
					}
			// {nombre:"USUARIO_LOGONEADO",prototipo:"String",tipoParametro:"SEGURIDADES"}
			]
		},
		obtenerFechas : {
			orden : "OBTENER_FECHAS",
			nombreMetodo : "obtenerFechas",
			tipo : "XML",
			parametros : [
					// {nombre:"codigoEmpresa",prototipo:"long",tipoParametro:"NORMAL"},
					// {nombre:"USUARIO_LOGONEADO",prototipo:"String",tipoParametro:"SEGURIDADES"}
					{
				nombre : "codsistema",
				prototipo : "String",
				tipoParametro : "NORMAL"
			}, {
				nombre : "coddocumento",
				prototipo : "String",
				tipoParametro : "NORMAL"
			}, {
				nombre : "codempresa",
				prototipo : "long",
				tipoParametro : "NORMAL"
			}]
		},
		obtenerObservaciones : {
			orden : "OBTENER_OBSERVACIONES",
			nombreMetodo : "obtenerObservaciones",
			tipo : "XML",
			parametros : [
					// {nombre:"codigoEmpresa",prototipo:"long",tipoParametro:"NORMAL"},
					// {nombre:"USUARIO_LOGONEADO",prototipo:"String",tipoParametro:"SEGURIDADES"}
					{
				nombre : "codsistema",
				prototipo : "String",
				tipoParametro : "NORMAL"
			}, {
				nombre : "coddocumento",
				prototipo : "String",
				tipoParametro : "NORMAL"
			}, {
				nombre : "codempresa",
				prototipo : "long",
				tipoParametro : "NORMAL"
			}]
		},
		obtenerTipos : {
			orden : "OBTENER_TIPOS",
			nombreMetodo : "obtenerTiposCmpr",
			tipo : "XML",
			parametros : [
			// {nombre:"codigoEmpresa",prototipo:"long",tipoParametro:"NORMAL"},
			// {nombre:"USUARIO_LOGONEADO",prototipo:"String",tipoParametro:"SEGURIDADES"}
			]
		},
		listarDetallePlantillas : {
			orden : "LISTAR_DETALLE_PLANTILLA",
			nombreMetodo : "obtenerDetallePlantilla",
			tipo : "XML",
			parametros : [{
						nombre : "codempresa",
						prototipo : "long",
						tipoParametro : "NORMAL"
					}, {
						nombre : "codplantilla",
						prototipo : "String",
						tipoParametro : "NORMAL"
					}]
		},
		guardarPlantilla : {
			orden : "GUARDAR_PLANTILLA",
			nombreMetodo : "guardarPlantilla",
			tipo : "JSON",
			parametros : [{
						nombre : "codsistema",
						prototipo : "String",
						tipoParametro : "NORMAL"
					}, {
						nombre : "codtipo",
						prototipo : "String",
						tipoParametro : "NORMAL"
					}, {
						nombre : "codigo",
						prototipo : "String",
						tipoParametro : "NORMAL"
					}, {
						nombre : "descripcion",
						prototipo : "String",
						tipoParametro : "NORMAL"
					}, {
						nombre : "coddocumento",
						prototipo : "String",
						tipoParametro : "NORMAL"
					}, {
						nombre : "codfecha",
						prototipo : "String",
						tipoParametro : "NORMAL"
					}, {
						nombre : "codobservacion",
						prototipo : "String",
						tipoParametro : "NORMAL"
					}, {
						nombre : "codempresa",
						prototipo : "long",
						tipoParametro : "NORMAL"
					}, {
						nombre : "codagencia",
						prototipo : "long",
						tipoParametro : "NORMAL"
					}, {
						nombre : "jsonDetallePlantilla",
						prototipo : "String",
						tipoParametro : "NORMAL"
					}]
		},
		consultarPlantilla : {
			orden : "CONSULTAR_PLANTILLA",
			nombreMetodo : "consultarPlantilla",
			tipo : "JSON",
			parametros : [{
						nombre : "codplantilla",
						prototipo : "String",
						tipoParametro : "NORMAL"
					}, {
						nombre : "codempresa",
						prototipo : "long",
						tipoParametro : "NORMAL"
					}]
		},
		eliminarPlantilla : {
			orden : "ELIMINAR_PLANTILLA",
			nombreMetodo : "eliminarPlantilla",
			tipo : "JSON",
			parametros : [{
						nombre : "codplantilla",
						prototipo : "String",
						tipoParametro : "NORMAL"
					}, {
						nombre : "codempresa",
						prototipo : "long",
						tipoParametro : "NORMAL"
					}]
		}
	};

	var modeloDatos = {
		readerFormaGrid : new Ext.data.XmlReader({
					success : "@success",
					record : "plantilladet"
				}, [{
							name : "numcuenta"
						}, {
							name : "numcuentaid"
						}, {
							name : "descripcion"
						}, {
							name : "debito"
						}, {
							name : "credito"
						}, {
							name : "cabeceradetalle"/* ,type:"boolean" */
						}, {
							name : "sumariza",
							type : "boolean"
						}]),
		readerSistema : new Ext.data.XmlReader({
					success : "@success",
					record : "sistema"
				}, [{
							name : "codigo"
						}, {
							name : "descripcion"
						}]),
		readerTipo : new Ext.data.XmlReader({
					success : "@success",
					record : "tipo"
				}, [{
							name : "codigo"
						}, {
							name : "descripcion"
						}]),
		readerDocumento : new Ext.data.XmlReader({
					success : "@success",
					record : "documento"
				}, [{
							name : "codigo"
						}, {
							name : "descripcion"
						}]),
		readerFecha : new Ext.data.XmlReader({
					success : "@success",
					record : "fecha"
				}, [{
							name : "codigo"
						}, {
							name : "descripcion"
						}]),
		readerObservacion : new Ext.data.XmlReader({
					success : "@success",
					record : "observacion"
				}, [{
							name : "codigo"
						}, {
							name : "descripcion"
						}]),
		readerAgencia : new Ext.data.XmlReader({
					success : "@success",
					record : "agencia"
				}, [{
							name : "codigo"
						}, {
							name : "descripcion"
						}]),
		readerCampoCabecera : new Ext.data.ArrayReader({}, [{
							name : "codigo"
						}, {
							name : "descripcion"
						}])

	};

	var storeDatos = {
		storeGrid : new Ext.data.Store({
					reader : modeloDatos.readerFormaGrid,
					autoLoad : false,
					url : '../../servlet/ServicioTransporte'
				}),
		storeComboSistema : new Ext.data.Store({
					reader : modeloDatos.readerSistema,
					url : '../../servlet/ServicioTransporte',
					baseParams : {
						recursoOrden : "BADMINISTRACION_PARAMETROS",
						datosOrden : Ext
								.encode(parametrosTransportador.listarSistemas)
					},
					autoLoad : true
				}),
		storeComboTipo : new Ext.data.Store({
					reader : modeloDatos.readerTipo,
					url : '../../servlet/ServicioTransporte',
					baseParams : {
						recursoOrden : "BADMINISTRACION_PLANTILLAS",
						datosOrden : Ext
								.encode(parametrosTransportador.obtenerTipos)
					},
					autoLoad : true
				}),
		storeComboDocumento : new Ext.data.Store({
					reader : modeloDatos.readerDocumento,
					url : '../../servlet/ServicioTransporte',
					baseParams : {
						recursoOrden : "BADMINISTRACION_PLANTILLAS",
						datosOrden : Ext
								.encode(parametrosTransportador.obtenerDocumentos)
					},
					autoLoad : false
				}),
		storeComboFecha : new Ext.data.Store({
					reader : modeloDatos.readerFecha,
					url : '../../servlet/ServicioTransporte',
					baseParams : {
						recursoOrden : "BADMINISTRACION_PLANTILLAS",
						datosOrden : Ext
								.encode(parametrosTransportador.obtenerFechas)
					},
					autoLoad : false
				}),
		storeComboObservacion : new Ext.data.Store({
					reader : modeloDatos.readerObservacion,
					url : '../../servlet/ServicioTransporte',
					baseParams : {
						recursoOrden : "BADMINISTRACION_PLANTILLAS",
						datosOrden : Ext
								.encode(parametrosTransportador.obtenerObservaciones)
					},
					autoLoad : false
				}),
		storeComboAgencia : new Ext.data.Store({
					reader : modeloDatos.readerAgencia,
					url : '../../servlet/ServicioTransporte',
					baseParams : {
						recursoOrden : "BADMINISTRACION_CUENTAS_AGENCIA",
						datosOrden : Ext
								.encode(parametrosTransportador.obtenerAgencias)
					},
					autoLoad : false
				}),
		storeComboEmpresas : new Ext.data.Store({
					url : "../../servlet/ServicioTransporte",
					autoLoad : true,
					baseParams : {
						recursoOrden : "BADMINISTRACION_EMPRESAS",
						datosOrden : Ext
								.encode(parametrosTransportador.obtenerEmpresas)
					},
					reader : new Ext.data.XmlReader({
								record : "empresa",
								totalRecords : "@total_registros"
							}, [{
										name : "codigoempresa"
									}, {
										name : "nombre"
									}])
				}),

		storeComboEmpresasLocal : new Ext.data.SimpleStore({
					autoLoad : true,
					fields : ["codigo", "descripcion"],
					data : [["1", "HUMTRUSA S.A"]]
				}),

		storeCampoCabecera : new Ext.data.Store({
					reader : modeloDatos.readerCampoCabecera
				})
	};

	storeDatos.storeCampoCabecera.loadData(campoCabecera);

	var componentes = {
		cmbSistemas : new Ext.form.ComboBox({
					fieldLabel : "Sistema",
					valueField : "codigo",
					displayField : "descripcion",
					store : storeDatos.storeComboSistema,
					triggerAction : "all",
					editable : false,
					hiddenName : "sistema",
					mode : "remote",
					emptyText : "Seleccionar el Sistema",
					allowBlank : false
				}),
		cmbTipos : new Ext.form.ComboBox({
					fieldLabel : "Tipo Diario",
					valueField : "codigo",
					displayField : "descripcion",
					store : storeDatos.storeComboTipo,
					triggerAction : "all",
					editable : false,
					hiddenName : "tipo",
					mode : "remote",
					emptyText : "Seleccionar el Tipo",
					allowBlank : false
				}),
		cmbDocumentos : new Ext.form.ComboBox({
					fieldLabel : "Documento",
					valueField : "codigo",
					displayField : "descripcion",
					store : storeDatos.storeComboDocumento,
					triggerAction : "all",
					editable : false,
					hiddenName : "documento",
					mode : "remote",
					emptyText : "Seleccionar el Documento",
					allowBlank : false
				}),
		cmbFechas : new Ext.form.ComboBox({
					fieldLabel : "Fecha",
					valueField : "codigo",
					displayField : "descripcion",
					store : storeDatos.storeComboFecha,
					triggerAction : "all",
					editable : false,
					hiddenName : "fecha",
					mode : "remote",
					emptyText : "Seleccionar ",
					allowBlank : false
				}),
		cmbObservaciones : new Ext.form.ComboBox({
					fieldLabel : "Observaci�n",
					valueField : "codigo",
					displayField : "descripcion",
					store : storeDatos.storeComboObservacion,
					triggerAction : "all",
					editable : false,
					hiddenName : "observacion",
					mode : "remote",
					emptyText : "Seleccionar ",
					allowBlank : false
				}),
		cmbEmpresas : new Ext.form.ComboBox({
					fieldLabel : "Empresa",
					valueField : "codigo",
					displayField : "descripcion",
					store : storeDatos.storeComboEmpresasLocal,
					triggerAction : "all",
					editable : false,
					hiddenName : "empresa",
					mode : "local",
					emptyText : "Seleccionar la Empresa",
					allowBlank : false
				}),
		cmbAgencias : new Ext.form.ComboBox({
					fieldLabel : "Agencia",
					valueField : "codigo",
					displayField : "descripcion",
					store : storeDatos.storeComboAgencia,
					triggerAction : "all",
					editable : false,
					hiddenName : "agencia",
					mode : "remote",
					emptyText : "Seleccionar la Agencia",
					allowBlank : false
				}),
		txtCodigo : new Ext.form.TextField({
					fieldLabel : "Codigo",
					name : "codigo",
					readOnly : false,
					width : 164
				}),
		txtnombres : new Ext.form.TextField({
					fieldLabel : "Nombres",
					name : "txtnombres",
					readOnly : false,
					width : 164
				}),
		txtapellidos : new Ext.form.TextField({
					fieldLabel : "Apellidos",
					name : "txtapellidos",
					readOnly : false,
					width : 164
				}),
		txtidentificacion : new Ext.form.TextField({
					fieldLabel : "Identificacion",
					name : "txtidentificacion",
					readOnly : false,
					width : 164,
					maskRe : /[\d\.]/,
					regex : /^\d+(\.\d{1,2})?$/
				}),
		txtDireccion : new Ext.form.TextArea({
					fieldLabel : "Descripci&oacute;n",
					width : 200,
					height : 50,
					autoCreate : {
						tag : "textarea",
						maxlength : 300
					}
				}),
		txtDescripcion : new Ext.form.TextField({
					fieldLabel : "Descripcion",
					name : "descripcion",
					readOnly : false,
					width : 164
				}),
		txttelefonoCelular : new Ext.form.TextField({
					fieldLabel : "Celular",
					name : "txttelefonoCelular",
					readOnly : false,
					width : 164,
					maskRe : /[\d\.]/,
					regex : /^\d+(\.\d{1,2})?$/
				}),
		txttelefonoFijo1 : new Ext.form.TextField({
					fieldLabel : "fijo 1",
					name : "txttelefonoFijo1",
					readOnly : false,
					width : 164,
					maskRe : /[\d\.]/,
					regex : /^\d+(\.\d{1,2})?$/
				}),
		txttelefonoFijo2 : new Ext.form.TextField({
					fieldLabel : "fijo 2",
					name : "txttelefonoFijo2",
					readOnly : false,
					width : 164,
					maskRe : /[\d\.]/,
					regex : /^\d+(\.\d{1,2})?$/
				}),
		txtEmail : new Ext.form.TextField({
					fieldLabel : "Email",
					name : "txtEmail",
					readOnly : false,
					width : 164
				}),
		txtFax : new Ext.form.TextField({
					fieldLabel : "Fax",
					name : "txtFax",
					readOnly : false,
					width : 164
				}),
		dffechaValidez : new Ext.form.DateField({
					id : "dffechaValidez",
					name : "dffechaValidez",
					allowBlank : true,
					fieldLabel : 'Fecha Validez',
					maxLength : 30,
					readOnly : false,
					disabled : false,
					value : new Date(),
					dateFormat : "d/m/Y"
				}),
		cmbesTransportista : new Ext.form.ComboBox({
					fieldLabel : "Es Transportista",
					allowBlank : false,
					name : "cmbesTransportista",
					emptyText : "Seleccione uno ...",
					store : new Ext.data.SimpleStore({
								fields : ["codigo", "descripcion"],
								data : [["S", "SI"], ["N", "NO"]]
							}),
					triggerAction : "all",
					mode : "local",
					width : 180,
					typeAhead : false,
					editable : true,
					disabled : false,
					forceSelection : true,
					displayField : "descripcion",
					valueField : "codigo",
					lazyRender : true
				}),
		cmbtipoidentificacion : new Ext.form.ComboBox({
					fieldLabel : "Tipo Identificacion",
					allowBlank : false,
					name : "cmbtipoidentificacion",
					emptyText : "Seleccione uno ...",
					store : new Ext.data.SimpleStore({
								fields : ["codigo", "descripcion"],
								data : [["1", "CEDULA"], ["2", "RUC"],
										["3", "PASAPORTE"]]
							}),
					triggerAction : "all",
					mode : "local",
					width : 180,
					typeAhead : false,
					editable : true,
					disabled : false,
					forceSelection : true,
					displayField : "descripcion",
					valueField : "codigo",
					lazyRender : true
				}),
		cmbCampoCabecera : new Ext.form.ComboBox({
					displayField : "descripcion",
					valueField : "codigo",
					width : 145,
					triggerAction : "all",
					editable : false,
					mode : "local",
					forceSelection : true,
					hiddenName : "cabeceradetalle",
					store : storeDatos.storeCampoCabecera
				})

	};

	/*
	 * componentes.cmbEmpresas.on("select",function(){
	 * componentes.cmbFechas.store.baseParams.codempresa =
	 * componentes.cmbEmpresas.getValue();
	 * componentes.cmbObservaciones.store.baseParams.codempresa =
	 * componentes.cmbEmpresas.getValue();
	 * componentes.cmbAgencias.store.baseParams.codigoEmpresa =
	 * componentes.cmbEmpresas.getValue(); componentes.cmbAgencias.store.load();
	 * componentes.cmbAgencias.setValue(""); componentes.cmbAgencias.enable();
	 * });
	 */
	componentes.cmbSistemas.on("select", function() {
		componentes.cmbFechas.store.baseParams.codsistema = componentes.cmbSistemas
				.getValue();
		componentes.cmbObservaciones.store.baseParams.codsistema = componentes.cmbSistemas
				.getValue();
		componentes.cmbDocumentos.store.baseParams.codsistema = componentes.cmbSistemas
				.getValue();
		componentes.cmbDocumentos.store.load();
		componentes.cmbDocumentos.setValue("");
		componentes.cmbDocumentos.enable();
	});

	componentes.cmbDocumentos.on("select", function() {
		componentes.cmbFechas.store.baseParams.coddocumento = componentes.cmbDocumentos
				.getValue();
		componentes.cmbFechas.store.load();
		componentes.cmbFechas.setValue("");
		componentes.cmbFechas.enable();

		componentes.cmbObservaciones.store.baseParams.coddocumento = componentes.cmbDocumentos
				.getValue();
		componentes.cmbObservaciones.store.load();
		componentes.cmbObservaciones.setValue("");
		componentes.cmbObservaciones.enable();

	});

	/**
	 * Botones de la pantalla
	 */
	var botones = {
		cmdGuardar : new Ext.Button({
					text : "Guardar",
					formBind : true,
					cls : "x-btn-text-icon",
					icon : "../../imagenes/disk.png"
				}),
		cmdCancelar : new Ext.Button({
					text : "Cancelar",
					cls : "x-btn-text-icon",
					icon : "../../imagenes/door_out.png"
				}),
		cmdEliminar : new Ext.Button({
					text : "Eliminar",
					icon : "../../imagenes/page_delete.png",
					cls : "x-btn-text-icon"
				})
	};

	var checkColumnCabecera = new Ext.grid.CheckColumn({
				header : '',
				dataIndex : 'cabeceradetalle',
				width : 80,
				name : 'cabeceradetalle',
				header : 'Cabecera',
				// renderer:return "<a href='#'><img
				// src=../../imagenes/money_add.png alt='Asignar dinero'
				// onclick='asignarDinero(this);'/></a>";
				check : function(t) {/* recalculaRetenFuente(t); */
				}

			});

	var checkColumnSumariza = new Ext.grid.CheckColumn({
				header : '',
				dataIndex : 'sumariza',
				width : 80,
				name : 'sumariza',
				header : 'Sumariza',
				// renderer:return "<a href='#'><img
				// src=../../imagenes/money_add.png alt='Asignar dinero'
				// onclick='asignarDinero(this);'/></a>";
				check : function(t) {/* recalculaRetenFuente(t); */
				}

			});

	var gridDatos = new Ext.grid.EditorGridPanel({
		region : "center",
		enableColumnMove : false,
		clicksToEdit : 1,
		autoScrolls : true,
		stripeRows : true,
		border : false,
		loadMask : true,
		plugins : [checkColumnCabecera, checkColumnSumariza],
		store : storeDatos.storeGrid,
		columns : [new Ext.grid.RowNumberer(), {
					dataIndex : 'numcuenta',
					name : 'numcuenta',
					header : 'Cuenta',
					width : 120,
					editor : new Ext.form.ChooserField({
								allowBlank : false,
								onTriggerClick : function() {
									abrirAgrupador(this, "A");
								},
								listeners : {
									scope : this, 
									specialkey : function(t, e) {
										abrirVentanaSpecialKey(t, e);
									}
								}
							})
				}, {
					dataIndex : 'descripcion',
					type : 'string',
					name : 'descripcion',
					header : 'Descripci�n',
					width : 140,
					editor : new Ext.form.ChooserField({
								allowBlank : false,
								onTriggerClick : function() {
									abrirAgrupadorDescripcion(this, "A");
								},
								listeners : {
									scope : this,
									specialkey : function(t, e) {
										abrirVentanaSpecialKeyDescripcion(t, e);
									}
								}
							})
				}, {
					dataIndex : 'debito',
					type : 'string',
					name : 'debito',
					header : 'D�bito',
					width : 100,
					editor : new Ext.form.ChooserField({
								allowBlank : false,
								onTriggerClick : function() {
									abrirAgrupadorDebito(this, "A");
								},
								listeners : {
									scope : this,
									specialkey : function(t, e) {
										abrirVentanaSpecialKeyDebito(t, e);
									}
								}
							})
				}, {
					dataIndex : 'credito',
					type : 'string',
					name : 'credito',
					header : 'Cr�dito',
					width : 100,
					editor : new Ext.form.ChooserField({
								allowBlank : false,
								onTriggerClick : function() {
									abrirAgrupadorCredito(this, "A");
								},
								listeners : {
									scope : this,
									specialkey : function(t, e) {
										abrirVentanaSpecialKeyCredito(t, e);
									}
								}
							})
				}, {
					sortable : true,
					dataIndex : 'numcuentaid',
					name : 'numcuentaid',
					header : 'Cuenta Id',
					type : 'string',
					hidden : true
				}, {
					sortable : true,
					dataIndex : 'numcuentaid',
					name : 'numcuentaid',
					header : 'Cuenta Id',
					type : 'string',
					hidden : true
				}, {
					dataIndex : 'cabeceradetalle',
					name : 'cabeceradetalle',
					header : 'Cabecera',
					editor : componentes.cmbCampoCabecera
				},
				// checkColumnCabecera,
				checkColumnSumariza],
		tbar : new Ext.Toolbar({
					items : [{
								xtype : "tbseparator"
							}, {
								xtype : "button",
								text : "Nuevo ",
								icon : "../../imagenes/page_add.png",
								cls : "x-btn-text-icon",
								listeners : {
									click : function() {
										agregarDetalle();
									}
								}
							}, {
								xtype : "button",
								text : "Eliminar ",
								icon : "../../imagenes/delete.png",
								cls : "x-btn-text-icon",
								listeners : {
									click : function() {
										eliminarDetalle();
									}
								}
							}, {
								xtype : "tbseparator"
							}, {
								xtype : "tbseparator"
							}, {
								xtype : "tbseparator"
							}, {
								xtype : "radio",
								boxLabel : "Por Variable",
								id : "porvariable",
								// inputValue:"V",
								// value:"V"
								listeners : {
									check : function() {
										var rb2 = Ext.getCmp('porcuenta');
										rb2.setValue(false);
									}
								}
							}, {
								xtype : "radio",
								boxLabel : "Por Cuenta",
								id : "porcuenta",
								// inputValue:"C",
								// value:"C"
								listeners : {
									check : function() {
										var rb1 = Ext.getCmp('porvariable');
										rb1.setValue(false);
									}
								}
							}]
				})

	});

	/* Panel secundario donde finalmente estaran los componentes */
	var panelSecundario = new Ext.Panel({
				layout : "column",
				region : "center",
				collapsible : true,
				height : 180,
				border : false,
				items : [new Ext.Panel({
							width : 330,
							layout : "form",
							labelWidth : 100,
							style : "padding:10px",
							border : false,
							items : [componentes.txtnombres,
									componentes.txtapellidos,
									componentes.txtidentificacion,
									componentes.txtDireccion,
									componentes.txttelefonoCelular,
									componentes.txttelefonoFijo1,
									componentes.txttelefonoFijo2]
						}), new Ext.Panel({
							width : 330,
							layout : "form",
							labelWidth : 100,
							style : "padding:10px",
							border : false,
							items : [componentes.cmbtipoidentificacion,
									componentes.cmbesTransportista,
									componentes.txtEmail, componentes.txtFax,
									componentes.dffechaValidez]
						})

				]
			});

	botones.cmdGuardar.on("click", function() {
		var mensajeConfirmacion = "Est&aacute; seguro que desea guardar la plantilla?"
		Ext.MessageBox.confirm("Confirmaci&oacute;n", mensajeConfirmacion,
				function(opc) {
					if (opc == "yes") {
						/*
						 * if(configuraciones.modoActual=="M"){
						 * controladorBloqueos.terminarBloqueo("WMSMOVIMIENTOS",componentes.txtCodigo.getValue()); }
						 */
						guardado();
						/*
						 * configuraciones.modoActual = null;
						 * vntPrincipal.setVisible(false);
						 * panelPrincipal.getForm().reset();
						 */
					}
				});
	});

	botones.cmdCancelar.on("click", function() {
		var mensajeConfirmacion = "Cualquier cambio no guardado ser&aacute; perdido, �Est&aacute; seguro que desea continuar?"
		Ext.MessageBox.confirm("Confirmaci&oacute;n", mensajeConfirmacion,
				function(opc) {
					if (opc == "yes") {
						if (configuraciones.modoActual == "M") {
							// controladorBloqueos.terminarBloqueo("GENDOCUMENTOS",componentes.txtCodigo.getValue()+"-"+componentes.cmbSistemas.getValue());
						}

						configuraciones.modoActual = null;
						vntPrincipal.setVisible(false);
						panelPrincipal.getForm().reset();
					}
				});
	});

	botones.cmdEliminar.on("click", function() {
		var mensajeConfirmacion = "�Est� seguro que desea eliminar el registro?"
		Ext.MessageBox.confirm("Confirmaci�n", mensajeConfirmacion, function(
						opc) {
					if (opc == "yes") {
						var codplantilla = componentes.txtCodigo.getValue();
						var codempresa = componentes.cmbEmpresas.getValue();
						document.pantallaSecundariaProceso.eliminar(
								codplantilla, codempresa);
					}
				});
	});

	gridDatos.on('afteredit', function(e) {
				/*
				 * if(e.column==8){
				 * 
				 *  }
				 */

			});

	/* Panel principal de la pantalla */
	var panelPrincipal = new Ext.form.FormPanel({
		// region:"center",
		layout : "border",
		labelWidth : 70,
		style : "padding:0px",
		monitorValid : true,
		buttonAlign : "center",
		region : "center",
		items : [panelSecundario],
		buttons : [botones.cmdGuardar, botones.cmdCancelar]
	});

	/* Ventana del proceso */
	var vntPrincipal = new Ext.Window({
		xtype : "window",
		title : "Mantenimiento Proveedor",
		width : 700,
		height : 300,
		resizable : true,
		modal : true,
		closable : false,
		closeAction : "hide",
		layout : "border",
		items : [panelPrincipal]
			// ,
			// bbar: controladorBloqueos.crearBarraBloqueos()
		});

	/* Prepara los componentes de la ventana principal */
	var prepararVentana = function() {
		panelPrincipal.getForm().reset();
		// componentes.txtCodTipoMovimiento.setVisible(false);

		componentes.cmbAgencias.disable();
		componentes.cmbFechas.disable();
		componentes.cmbObservaciones.disable();
		componentes.cmbDocumentos.disable();

		botones.cmdCancelar.setVisible(true);

		if (configuraciones.modoActual == "I") {

			componentes.cmbAgencias.enable();
			componentes.txtCodigo.enable();
			componentes.cmbEmpresas.enable();
			botones.cmdEliminar.setVisible(false);
			componentes.cmbSistemas.enable();
			componentes.cmbTipos.enable();
			// botones.cmdGuardar.setVisible(true);

		} else {
			componentes.cmbAgencias.disable();
			componentes.txtCodigo.disable();
			componentes.cmbEmpresas.disable();
			componentes.cmbFechas.enable();
			componentes.cmbObservaciones.enable();
			componentes.cmbSistemas.disable();
			componentes.cmbTipos.disable();
			botones.cmdEliminar.setVisible(true);
			// botones.cmdGuardar.setVisible(false);

		}

	};

	var agregarDetalle = function() {

		var grid = gridDatos;
		gridDatos.store.commitChanges();
		// var sel = grid.getSelectionModel().getSelectedCell();

		var recd = grid.store.getAt(grid.store.getCount() - 1);

		var sel = gridDatos.getSelectionModel().getSelectedCell();

		var aux = gridDatos;
		var Fila = Ext.data.Record.create([{
					name : "numcuenta"
				}, {
					name : "numcuentaid"
				}, {
					name : "descripcion"
				}, {
					name : "debito"
				}, {
					name : "credito"
				}, {
					name : "cabeceradetalle"
				}, {
					name : "sumariza"
				}]);
		var tmpEst = new Fila({
					numcuenta : '',
					descripcion : '',
					debito : '',
					credito : '',
					cabeceradetalle : '',
					sumariza : false
				});
		aux.stopEditing();
		aux.store.insert(aux.store.getCount(), tmpEst);
		aux.getView().refresh();
		aux.startEditing(aux.store.getCount() - 1, 1);

	}

	var eliminarDetalle = function() {
		var sel = gridDatos.getSelectionModel().getSelectedCell();
		var borrame = gridDatos.getStore().getAt(sel[0]);

		var cantreg = gridDatos.store.getCount();

		var existe = 0;

		for (r = 0; r < cantreg; r++) {
			var reg = gridDatos.store.getAt(r);
			if ((reg.get('numcuenta') == borrame.get('numcuenta'))) {
				existe++;
			}
		}

		if (existe > 0) {
			Ext.Msg.show({
						title : "Error",
						msg : "Ya existe un detalle con esta cuenta.",
						icon : Ext.Msg.ERROR,
						buttons : Ext.Msg.OK
					});
		}

		gridDatos.getStore().remove(borrame);
		gridDatos.store.commitChanges();
		gridDatos.getView().refresh();

	};

	gridDatos.on('beforeedit', function(e) {
				// validaEdicionDetalle(e);
			});
	/*
	 * var validaEdicionDetalle = function(e) { var grilla=
	 * gridDatosTransferencia; grilla.suspendEvents(); var
	 * sel=grilla.getSelectionModel().getSelectedCell(); //aqui van las reglas
	 * para dejar q se editen las lineas del grid if(sel!==null){ var record =
	 * gridDatosTransferencia.getStore().getAt(sel[0]); var puedeeditar =
	 * record.get('editable'); if(!puedeeditar){ e.cancel=true; } }
	 * 
	 * grilla.resumeEvents(); }
	 * 
	 */

	/**
	 * Funcion para capturar la cadena JSON del grid
	 */
	var obtenerJsonDetalle = function() {
		var store = storeDatos.storeGrid;
		var cadena = "{data:[";
		for (i = 0; i < store.getCount(); i++) {
			var fila = store.getAt(i);

			if (i < store.getCount() - 1)
				cadena = cadena + "{numcuenta:'" + fila.get('numcuenta')
						+ "',numcuentaid:'" + fila.get('numcuentaid')
						+ "',descripcion:'" + fila.get('descripcion')
						+ "',debito:'" + fila.get('debito') + "',credito:'"
						+ fila.get('credito') + "',cabeceradetalle:'"
						+ fila.get('cabeceradetalle') + "',sumariza:'"
						+ fila.get('sumariza') + "'},";
			else
				cadena = cadena + "{numcuenta:'" + fila.get('numcuenta')
						+ "',numcuentaid:'" + fila.get('numcuentaid')
						+ "',descripcion:'" + fila.get('descripcion')
						+ "',debito:'" + fila.get('debito') + "',credito:'"
						+ fila.get('credito') + "',cabeceradetalle:'"
						+ fila.get('cabeceradetalle') + "',sumariza:'"
						+ fila.get('sumariza') + "'}";
		}
		cadena = cadena + "]}";

		return cadena;
	};

	var guardado = function() {
			var accion =null;
			if("I" == configuraciones.modoActual){
				 accion={
					orden : "MANTENIMIENTO_PROVEEDORES",
					codEmpresa : '1',
					codProveedor: configuraciones.codProveedor|| 0 ,
					nombres : componentes.txtnombres.getValue(),
					apellidos : componentes.txtapellidos.getValue(),
					tipoidentificacion : componentes.cmbtipoidentificacion.getRawValue(),
					identificacion : componentes.txtidentificacion.getValue(),
					estransportista : componentes.cmbesTransportista.getValue(),
					telefonofijo1 : componentes.txttelefonoFijo1.getValue(),
					telefonofijo2 : componentes.txttelefonoFijo2.getValue(),
					celular : componentes.txttelefonoCelular.getValue(),
					fax : componentes.txtFax.getValue(),
					email : componentes.txtEmail.getValue(),
					fechaValidez : componentes.dffechaValidez.getRawValue(),
					modo : configuraciones.modoActual
				}
			}else if("M" == configuraciones.modoActual){
				 accion = {
					orden : "MANTENIMIENTO_PROVEEDORES",
					codEmpresa:"1",
					codProveedor: configuraciones.codProveedor,
					nombres : componentes.txtnombres.getValue(),
					apellidos : componentes.txtapellidos.getValue(),
					tipoidentificacion : componentes.cmbtipoidentificacion.getRawValue(),
					identificacion : componentes.txtidentificacion.getValue(),
					estransportista : componentes.cmbesTransportista.getValue(),
					telefonofijo1 : componentes.txttelefonoFijo1.getValue(),
					telefonofijo2 : componentes.txttelefonoFijo2.getValue(),
					celular : componentes.txttelefonoCelular.getValue(),
					fax : componentes.txtFax.getValue(),
					email : componentes.txtEmail.getValue(),
					fechaValidez : componentes.dffechaValidez.getRawValue(),
					modo : configuraciones.modoActual
				}
			}
			
		
		var paramsGuardado = {
			url : "../../servlet/SAdministracionProveedores",
			params : accion,
			callback : function(option, success, response) {
				var respuesta = Ext.decode(response.responseText);

				if (success) {
					if (respuesta.exito) {

						Ext.Msg.show({
									title : "Exito",
									msg : respuesta.mensaje,
									icon : Ext.Msg.INFO,
									buttons : Ext.Msg.OK,
									fn : function() {
										vntPrincipal.setVisible(false);
										panelPrincipal.getForm().reset();
										document.pantallaPrincipalProceso
												.actualizarGridPrincipal();
									}
								});

					} else {
						Ext.Msg.show({
									title : "Error",
									msg : "Error al guardar: "
											+ respuesta.mensaje,
									icon : Ext.Msg.ERROR,
									buttons : Ext.Msg.OK
								});
					}
				} else {
					Ext.Msg.show({
						title : "Error",
						msg : "Error de comunicacion, consulte al dpto. de sistemas",
						icon : Ext.Msg.ERROR,
						buttons : Ext.Msg.OK
					});
				}
			}
		};

		Ext.Ajax.request(paramsGuardado);

	}

	var guardarPlantilla = function() {

		var grid = gridDatos;
		gridDatos.store.commitChanges();
		var sel = grid.getSelectionModel().getSelectedCell();

		if (grid.store.getCount() > 0) {
			guardado();

		} else {
			Ext.Msg.show({
						title : "Atenci&oacute;n",
						msg : "Debe ingresar al menos un detalle.",
						icon : Ext.Msg.INFO,
						buttons : Ext.Msg.OK
					});
		}

	}

	/**
	 * metodo que me permite mostrar
	 */

	var cargarPlantilla = function(codproveedor, codempresa) {

		var params = {
			url : "../../servlet/SAdministracionProveedores",
			params : {
				orden : "OBTENER_PROVEEDOR",
				// datosOrden:
				// Ext.encode(parametrosTransportador.consultarPlantilla),
				codproveedor : codproveedor,
				codempresa : codempresa
			},
			callback : function(option, success, response) {
				var respuesta = Ext.decode(response.responseText);

				if (success) {
					if (respuesta.exito) {
						configuraciones.codProveedor = respuesta.codproveedor;
						componentes.txtnombres.setValue(respuesta.nombre);
						componentes.txtapellidos.setValue(respuesta.apellido);
						componentes.txtidentificacion
								.setValue(respuesta.identificacion);
						componentes.txtDireccion.setValue(respuesta.direccion);
						componentes.txttelefonoCelular
								.setValue(respuesta.celular);
						componentes.txttelefonoFijo1.setValue(respuesta.tfijo1);
						componentes.txttelefonoFijo2.setValue(respuesta.tfijo2);
						componentes.cmbtipoidentificacion
								.setValue(respuesta.tidentificacion);
						componentes.cmbesTransportista
								.setValue(respuesta.estransportista);
						componentes.txtEmail.setValue(respuesta.email);
						componentes.txtFax.setValue(respuesta.fax);
						componentes.dffechaValidez
								.setValue(respuesta.fechavalidez);

					} else {
						Ext.Msg.show({
									title : "Error",
									msg : "Error al obtener el proveedor: "
											+ respuesta.mensaje,
									icon : Ext.Msg.ERROR,
									buttons : Ext.Msg.OK
								});
					}
				} else {
					Ext.Msg.show({
						title : "Error",
						msg : "Error de comunicacion, consulte al dpto. de sistemas",
						icon : Ext.Msg.ERROR,
						buttons : Ext.Msg.OK
					});
				}
			}
		};

		Ext.Ajax.request(params);

	};

	/* Abre la ventana en el modo indicado */
	this.abrirVentana = function(modo, codproveedor, Codempresa) {
		configuraciones.modoActual = modo;
		prepararVentana();
		vntPrincipal.setVisible(true);
		vntPrincipal.center();
		gridDatos.getStore().removeAll();

		// Ext.getCmp("porvariable").setValue(true);

		if (modo == "M")
			cargarPlantilla(codproveedor, Codempresa);

	};

	this.eliminar = function(codproveedor, codempresa) {

		var parametros = {
			url : "../../servlet/SAdministracionProveedores",
			params : {
				orden : "ELIMINAR_PROVEEDOR",
				codproveedor : codproveedor,
				codempresa : codempresa
			},
			callback : function(option, success, response) {
				var respuesta = Ext.decode(response.responseText);

				// Si hubo exito
				if (respuesta.exito) {
					// if(configuraciones.modoActual=="M")
					// controladorBloqueos.terminarBloqueo("WMSCLIENTE",codcliente);

					Ext.Msg.show({
								title : "Atenci&oacute;n",
								msg : respuesta.mensaje,
								icon : Ext.Msg.INFO,
								buttons : Ext.Msg.OK,
								fn : function() {
									vntPrincipal.setVisible(false);
									panelPrincipal.getForm().reset();
									document.pantallaPrincipalProceso.actualizarGridPrincipal();
									configuraciones.modoActual = null;
								}
							})

				} else {
					Ext.Msg.show({
								title : "Error",
								msg : respuesta.mensaje,
								icon : Ext.Msg.ERROR,
								buttons : Ext.Msg.OK
							});
				}
			}
		}

		Ext.Ajax.request(parametros);
	}

	/** ********************************************************************************************** */

	var storeAgrupadorCuenta = new Ext.data.Store({
				url : '../../servlet/SAdministracionCuentas',
				baseParams : '{orden:LISTAR_CUENTAS_VARIABLES}',
				reader : new Ext.data.XmlReader({
							record : 'objeto',
							totalRecords : '@total_registros',
							success : '@success',
							fields : [{
										name : 'codigo'
									}, {
										name : 'descripcion'
									}, {
										name : 'cuentaagencia'
									}, {
										name : 'nivel'
									}, {
										name : 'nivelmaximo'
									}]
						})
			});
	var agrCuenta = new Etech.componentes.AgrupadorAvanzado({
				url : '../../servlet/SAdministracionCuentas',
				tituloVentana : 'Agrupador',
				nombreCampoCodigo : 'codigo',
				nombreCampoDescripcion : 'descripcion',
				nombreParametroAccion : "LISTAR_CUENTAS_VARIABLES",
				registrosPorPagina : 10,
				widthVentana : 620,
				heightVentana : 340,
				store : storeAgrupadorCuenta,
				modoBusquedaIncompleta : true,
				cm : [{
							sortable : true,
							dataIndex : 'cuentaagencia',
							name : 'cuentaagencia',
							header : 'Cuenta Agencia'
						}, {
							sortable : true,
							dataIndex : 'codigo',
							name : 'codigo',
							header : 'C�digo',
							type : 'string',
							width : 180
						}, {
							sortable : true,
							dataIndex : 'descripcion',
							name : 'descripcion',
							header : 'Descripcion',
							type : 'string',
							width : 300
						}, {
							sortable : true,
							dataIndex : 'nivel',
							name : 'nivel',
							header : 'Nivel',
							type : 'string',
							width : 300
						}, {
							sortable : true,
							dataIndex : 'nivelmaximo',
							name : 'nivelmaximo',
							header : 'Nivel Maximo',
							hidden : true,
							type : 'string'
						}]
			});

	this.cargarCuenta = function() {
		// var gridPrincipal = grillaClasificaciones;
		var registroseleccionado = agrCuenta.registroSeleccionado;
		var sel = gridDatos.getSelectionModel().getSelectedCell();
		if (registroseleccionado.get('descripcion') == '') {
			gridDatos.store.getAt(sel[0]).set("numcuenta", "");
			gridDatos.store.commitChanges();
			// agrCuentas.abrirVentana();
			return;
		}

		var codigo = registroseleccionado.get("codigo");
		var descripcion = registroseleccionado.get("descripcion");
		var cuentaagencia = registroseleccionado.get("cuentaagencia");
		var nivel = registroseleccionado.get("nivel");
		var nivelmaximo = registroseleccionado.get("nivelmaximo");

		if (!Ext.getCmp("porvariable").getValue()) {
			if (nivel != nivelmaximo) {
				Ext.Msg.show({
							title : "Atenci&oacute;n",
							msg : 'Solo se pueden escoger cuentas de nivel m�ximo.',
							icon : Ext.Msg.INFO,
							buttons : Ext.Msg.OK,
							fn : function() {
								gridDatos.store.getAt(sel[0]).set("numcuenta",
										"");
								gridDatos.store.commitChanges();
								// agrCuentas.abrirVentana();
								return;
							}
						});
			}
		}

		var record = gridDatos.store.getAt(sel[0]);

		record.set("numcuenta", cuentaagencia);

		if (!Ext.getCmp("porvariable").getValue())
			record.set("numcuentaid", codigo);
		else
			record.set("numcuenta", codigo);
		// record.set("descripion",descripcion);

		gridDatos.store.commitChanges();

	};

	function abrirAgrupador(t, tipo) {

		var sel = gridDatos.getSelectionModel().getSelectedCell();
		var numcuenta = gridDatos.store.getAt(sel[0]).get("numcuenta");
		var cuentaagencia = gridDatos.store.getAt(sel[0]).get("cuentaagencia");

		agrCuenta.campoCodigo.setValue(t.getValue());

		if (!Ext.getCmp("porvariable").getValue()) {
			agrCuenta.modificarParametrosConsulta({
				orden : "LISTAR_CUENTAS_VARIABLES",
				// selecciona:'',
				// codsistema:componentes.cmbSistemas.getValue(),
				codempresa : componentes.cmbEmpresas.getValue(),
				codagencia : componentes.cmbAgencias.getValue()
					// tipo:'',
					// coddocumento:componentes.cmbDocumentos.getValue()

				});
		} else {
			agrCuenta.modificarParametrosConsulta({
						orden : "LISTAR_OBJETOS",
						selecciona : '',
						codsistema : componentes.cmbSistemas.getValue(),
						codempresa : componentes.cmbEmpresas.getValue(),
						tipo : 'V',
						coddocumento : componentes.cmbDocumentos.getValue()

					});

		}

		if (tipo == "A" || agrCuenta.campoCodigo.getValue().length == "") {
			agrCuenta.abrirVentana();
		} else {
			agrCuenta.dispararSpecialKey();
		}

	};

	function abrirVentanaSpecialKey(t, e) {
		if (e.getKey() == Ext.EventObject.ENTER
				|| e.getKey() == Ext.EventObject.TAB) {
			var sel = gridDatos.getSelectionModel().getSelectedCell();

			if (t.getValue() == '' /*
									 * &&
									 * gridDatos.store.getAt(sel[0]).get("descripcion")!=''
									 */) {
				gridDatos.store.getAt(sel[0]).set('numcuenta', '');
				// gridDatos.store.getAt(sel[0]).set('descripcion','');
				gridDatos.store.commitChanges();
				return;
			} else {
				abrirAgrupador(t, "B");
			}
		}
	};

	agrCuenta.on('actualizado', this.cargarCuenta);

	/** ********************************************************************************************** */

	var storeAgrupadorDescripcion = new Ext.data.Store({
				url : '../../servlet/SAdministracionCuentas',
				baseParams : '{orden:LISTAR_OBJETOS}',
				reader : new Ext.data.XmlReader({
							record : 'objeto',
							totalRecords : '@total_registros',
							success : '@success',
							fields : [{
										name : 'codigo'
									}, {
										name : 'descripcion'
									}]
						})
			});
	var agrDescripcion = new Etech.componentes.AgrupadorAvanzado({
				url : '../../servlet/SAdministracionCuentas',
				tituloVentana : 'Agrupador',
				nombreCampoCodigo : 'codigo',
				nombreCampoDescripcion : 'descripcion',
				nombreParametroAccion : "LISTAR_OBJETOS",
				registrosPorPagina : 10,
				widthVentana : 620,
				heightVentana : 340,
				store : storeAgrupadorDescripcion,
				modoBusquedaIncompleta : true,
				cm : [{
							sortable : true,
							dataIndex : 'codigo',
							name : 'codigo',
							header : 'C�digo',
							type : 'string',
							width : 180
						}, {
							sortable : true,
							dataIndex : 'descripcion',
							name : 'descripcion',
							header : 'Descripcion',
							type : 'string',
							width : 300
						}]
			});

	this.cargarDescripcion = function() {
		// var gridPrincipal = grillaClasificaciones;
		var registroseleccionado = agrDescripcion.registroSeleccionado;
		var sel = gridDatos.getSelectionModel().getSelectedCell();
		if (registroseleccionado.get('descripcion') == '') {
			gridDatos.store.getAt(sel[0]).set("descripcion", "");
			gridDatos.store.commitChanges();
			// agrCuentas.abrirVentana();
			return;
		}

		var codigo = registroseleccionado.get("codigo");
		var descripcion = registroseleccionado.get("descripcion");

		var record = gridDatos.store.getAt(sel[0]);

		// record.set("numcuenta",codigo);
		// record.set("descripion",descripcion);
		record.set("descripcion", codigo);

		gridDatos.store.commitChanges();

	};

	function abrirAgrupadorDescripcion(t, tipo) {

		var sel = gridDatos.getSelectionModel().getSelectedCell();
		// var numcuenta = gridDatos.store.getAt(sel[0]).get("numcuenta");

		agrDescripcion.campoCodigo.setValue(t.getValue());
		agrDescripcion.modificarParametrosConsulta({
					orden : "LISTAR_OBJETOS",
					selecciona : '',
					codsistema : componentes.cmbSistemas.getValue(),
					codempresa : componentes.cmbEmpresas.getValue(),
					tipo : 'D',
					coddocumento : componentes.cmbDocumentos.getValue()

				});

		if (tipo == "A" || agrDescripcion.campoCodigo.getValue().length == "") {
			agrDescripcion.abrirVentana();
		} else {
			agrDescripcion.dispararSpecialKey();
		}

	};

	function abrirVentanaSpecialKeyDescripcion(t, e) {
		if (e.getKey() == Ext.EventObject.ENTER
				|| e.getKey() == Ext.EventObject.TAB) {
			var sel = gridDatos.getSelectionModel().getSelectedCell();
			// if(t.getValue()=='' &&
			// gridDatos.store.getAt(sel[0]).get("descripcion")!=''){
			if (t.getValue() == '') {
				// gridDatos.store.getAt(sel[0]).set('numcuenta','');
				gridDatos.store.getAt(sel[0]).set('descripcion', '');
				gridDatos.store.commitChanges();
				return;
			} else {
				abrirAgrupadorDescripcion(t, "B");
			}
		}
	};

	agrDescripcion.on('actualizado', this.cargarDescripcion);

	/** ********************************************************************************************** */

	var storeAgrupadorDebito = new Ext.data.Store({
				url : '../../servlet/SAdministracionCuentas',
				baseParams : '{orden:LISTAR_OBJETOS}',
				reader : new Ext.data.XmlReader({
							record : 'objeto',
							totalRecords : '@total_registros',
							success : '@success',
							fields : [{
										name : 'codigo'
									}, {
										name : 'descripcion'
									}]
						})
			});
	var agrDebito = new Etech.componentes.AgrupadorAvanzado({
				url : '../../servlet/SAdministracionCuentas',
				tituloVentana : 'Agrupador',
				nombreCampoCodigo : 'codigo',
				nombreCampoDescripcion : 'descripcion',
				nombreParametroAccion : "LISTAR_OBJETOS",
				registrosPorPagina : 10,
				widthVentana : 620,
				heightVentana : 340,
				store : storeAgrupadorDebito,
				modoBusquedaIncompleta : true,
				cm : [{
							sortable : true,
							dataIndex : 'codigo',
							name : 'codigo',
							header : 'C�digo',
							type : 'string',
							width : 180
						}, {
							sortable : true,
							dataIndex : 'descripcion',
							name : 'descripcion',
							header : 'Descripcion',
							type : 'string',
							width : 300
						}]
			});

	this.cargarDebito = function() {
		// var gridPrincipal = grillaClasificaciones;
		var registroseleccionado = agrDebito.registroSeleccionado;
		var sel = gridDatos.getSelectionModel().getSelectedCell();
		if (registroseleccionado.get('descripcion') == '') {
			gridDatos.store.getAt(sel[0]).set("debito", "");
			gridDatos.store.commitChanges();
			// agrCuentas.abrirVentana();
			return;
		}

		var codigo = registroseleccionado.get("codigo");
		var descripcion = registroseleccionado.get("descripcion");

		var record = gridDatos.store.getAt(sel[0]);

		// record.set("numcuenta",codigo);
		// record.set("descripion",descripcion);
		record.set("debito", codigo);

		gridDatos.store.commitChanges();

	};

	function abrirAgrupadorDebito(t, tipo) {

		var sel = gridDatos.getSelectionModel().getSelectedCell();
		// var numcuenta = gridDatos.store.getAt(sel[0]).get("numcuenta");

		agrDebito.campoCodigo.setValue(t.getValue());
		agrDebito.modificarParametrosConsulta({
					orden : "LISTAR_OBJETOS",
					selecciona : '',
					codsistema : componentes.cmbSistemas.getValue(),
					codempresa : componentes.cmbEmpresas.getValue(),
					tipo : 'N',
					coddocumento : componentes.cmbDocumentos.getValue()

				});

		if (tipo == "A" || agrDebito.campoCodigo.getValue().length == "") {
			agrDebito.abrirVentana();
		} else {
			agrDebito.dispararSpecialKey();
		}

	};

	function abrirVentanaSpecialKeyDebito(t, e) {
		if (e.getKey() == Ext.EventObject.ENTER
				|| e.getKey() == Ext.EventObject.TAB) {
			var sel = gridDatos.getSelectionModel().getSelectedCell();
			// if(t.getValue()=='' &&
			// gridDatos.store.getAt(sel[0]).get("descripcion")!=''){
			if (t.getValue() == '') {
				// gridDatos.store.getAt(sel[0]).set('numcuenta','');
				gridDatos.store.getAt(sel[0]).set('debito', '');
				gridDatos.store.commitChanges();
				return;
			} else {
				abrirAgrupadorDebito(t, "B");
			}
		}
	};

	agrDebito.on('actualizado', this.cargarDebito);

	/** ********************************************************************************************** */

	var storeAgrupadorCredito = new Ext.data.Store({
				url : '../../servlet/SAdministracionCuentas',
				baseParams : '{orden:LISTAR_OBJETOS}',
				reader : new Ext.data.XmlReader({
							record : 'objeto',
							totalRecords : '@total_registros',
							success : '@success',
							fields : [{
										name : 'codigo'
									}, {
										name : 'descripcion'
									}]
						})
			});
	var agrCredito = new Etech.componentes.AgrupadorAvanzado({
				url : '../../servlet/SAdministracionCuentas',
				tituloVentana : 'Agrupador',
				nombreCampoCodigo : 'codigo',
				nombreCampoDescripcion : 'descripcion',
				nombreParametroAccion : "LISTAR_OBJETOS",
				registrosPorPagina : 10,
				widthVentana : 620,
				heightVentana : 340,
				store : storeAgrupadorCredito,
				modoBusquedaIncompleta : true,
				cm : [{
							sortable : true,
							dataIndex : 'codigo',
							name : 'codigo',
							header : 'C�digo',
							type : 'string',
							width : 180
						}, {
							sortable : true,
							dataIndex : 'descripcion',
							name : 'descripcion',
							header : 'Descripcion',
							type : 'string',
							width : 300
						}]
			});

	this.cargarCredito = function() {
		// var gridPrincipal = grillaClasificaciones;

		var registroseleccionado = agrCredito.registroSeleccionado;
		var sel = gridDatos.getSelectionModel().getSelectedCell();

		if (registroseleccionado.get('descripcion') == '') {
			gridDatos.store.getAt(sel[0]).set("credito", "");
			gridDatos.store.commitChanges();
			// agrCuentas.abrirVentana();
			return;
		}

		var codigo = registroseleccionado.get("codigo");
		var descripcion = registroseleccionado.get("descripcion");

		var record = gridDatos.store.getAt(sel[0]);

		// record.set("numcuenta",codigo);
		// record.set("descripion",descripcion);
		record.set("credito", codigo);

		gridDatos.store.commitChanges();

	};

	function abrirAgrupadorCredito(t, tipo) {

		var sel = gridDatos.getSelectionModel().getSelectedCell();
		// var numcuenta = gridDatos.store.getAt(sel[0]).get("numcuenta");

		agrCredito.campoCodigo.setValue(t.getValue());
		agrCredito.modificarParametrosConsulta({
					orden : "LISTAR_OBJETOS",
					selecciona : '',
					codsistema : componentes.cmbSistemas.getValue(),
					codempresa : componentes.cmbEmpresas.getValue(),
					tipo : 'N',
					coddocumento : componentes.cmbDocumentos.getValue()

				});

		if (tipo == "A" /* || agrCredito.campoCodigo.getValue().length == "" */) {
			agrCredito.abrirVentana();
		} else {
			agrCredito.dispararSpecialKey();
		}

	};

	function abrirVentanaSpecialKeyCredito(t, e) {
		if (e.getKey() == Ext.EventObject.ENTER
				|| e.getKey() == Ext.EventObject.TAB) {
			var sel = gridDatos.getSelectionModel().getSelectedCell();
			// if(t.getValue()=='' &&
			// gridDatos.store.getAt(sel[0]).get("descripcion")!=''){
			if (t.getValue() == '') {
				// gridDatos.store.getAt(sel[0]).set('numcuenta','');
				gridDatos.store.getAt(sel[0]).set('credito', '');
				gridDatos.store.commitChanges();
				return;
			} else {
				abrirAgrupadorCredito(t, "B");
			}
		}
	};

	agrCredito.on('actualizado', this.cargarCredito);

};