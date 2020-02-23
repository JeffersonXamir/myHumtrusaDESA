/**
*	Representacion del componente de multiple seleccion estandar 
*	@author Ismael Flores
*   OJO: METODO GENERICO LLAMADO EN VARIOS PROCESOS DEL SISTEMA 
*   AL MODIFICAR CUIDAR DE QUE LOS DEMAS PROCESOS NO SE VEAN AFECTADOS
*/
var MultipleSelectorColecciones = function(nombreSelector,coleccion,jsonParametros){
	
	var configuraciones = {
		apuntador:this,
		parametrosAdicionales:{},
		codigos:[],
		nombres:[],
		valoresPrecargados:[],
		codigosTxt:[],
		reload: true
	};
	
	var metodos = {
			obtenerColeccion:{
				orden:"OBTENER_COLECCION",
				nombreMetodo:"obtenerColeccion",
				tipo:"XML",
				parametros:[
					{nombre:"nombreColeccion",prototipo:"String",tipoParametro:"NORMAL"},
					{nombre:"parametros",prototipo:"String",tipoParametro:"NORMAL"}
				]
			}
	};
	
	var modeloSeleccionGrid = new Ext.grid.CheckboxSelectionModel({singleSelect:false});
	
	var modelosDatos = {
		storeGrid: new Ext.data.Store({
			url:"../../servlet/ServicioTransporte",
			autoLoad:false,
			baseParams:{
				recursoOrden:"BCOLECCIONES",
				datosOrden: Ext.encode(metodos.obtenerColeccion),
				nombreColeccion:""+coleccion,
				parametros:Ext.encode(jsonParametros)
			},
			reader: new Ext.data.XmlReader({record:""+coleccion,success:"@success"},[
				{name:"codigo"}, {name:"descripcion"} 
			]),
			listeners:{
				load: function() {
					configuraciones.apuntador.clickAceptar();
				}
			}
		}),		
		modeloColumnasGrid:[
			modeloSeleccionGrid,
			{dataIndex:"codigo",header:"C&oacute;digo"},
			{dataIndex:"descripcion",header:"Descripci&oacute;n",width:200}
		]
	};
	
	modelosDatos.storeGrid.load();
	
	configuraciones.parametrosAdicionales = jsonParametros;
	
	var botones = {
		cmdAceptar: new Ext.Button({text:"Aceptar",icon:"../../imagenes/disk.png",cls:"x-btn-text-icon"}),
		cmdCancelar: new Ext.Button({text:"Cancelar",icon:"../../imagenes/decline.png",cls:"x-btn-text-icon"})
	};
	
	var grid = new Ext.grid.GridPanel({
		region:"center",
		store: modelosDatos.storeGrid,
		columns: modelosDatos.modeloColumnasGrid,
		sm: modeloSeleccionGrid,
		loadMask:true,
		viewConfig:{emptyText:"-- No hay datos que mostrar --"}	
	});
	
	var vntPrincipal = new Ext.Window({
		layout:"border",
		title:"Seleccion de "+nombreSelector,
		width:400,
		height:500,
		resizable:false,
		modal:true,
		closable:true,
		closeAction:"hide",
		items:[grid],
		buttons:[botones.cmdAceptar,botones.cmdCancelar]		
	});
	
	botones.cmdCancelar.on("click",function(){
		vntPrincipal.setVisible(false);
		configuraciones.apuntador.limpiar();
	});
	
	botones.cmdAceptar.on("click",function(){
		configuraciones.apuntador.clickAceptar();
		vntPrincipal.setVisible(false);
		
	});
	
	this.clickAceptar = function(){
		var selecciones = grid.getSelectionModel().getSelections();
		var imagenSelector = document.getElementById("iconoSelector"+nombreSelector);
	
		configuraciones.codigos = [];
		configuraciones.nombres = [];
		configuraciones.codigosTxt = [];
		
		var nombres = "";
		if(selecciones!=null && selecciones.length>0){
			for(i=0;i<selecciones.length;i++){
				configuraciones.codigos[i] = selecciones[i].get("codigo");
				nombres = selecciones[i].get("descripcion");
				nombres = nombres.replace(/%/g,"%25");
				configuraciones.nombres[i] = nombres;
				configuraciones.codigosTxt[i] = "|"+selecciones[i].get("codigo")+"|";
			}
			imagenSelector.src = "../../imagenes/flag_green.png";
		}else{
			var i=0;
			modelosDatos.storeGrid.each(function(registro){
				configuraciones.codigos[i] = registro.get("codigo");
				configuraciones.codigosTxt[i] = "|"+registro.get("codigo")+"|";
				i++;
			});
			configuraciones.nombres[0] = "TODAS";
			imagenSelector.src = "../../imagenes/exclamation.png";
		}
		
	};
	
	/**
	*	Abre la ventana de seleccion en el modo indicado
	*/
	this.abrirVentanaSeleccion = function(){
		vntPrincipal.setVisible(true);
		
		if(configuraciones.codigos.length <= 0){
			modelosDatos.storeGrid.baseParams.parametros = configuraciones.parametrosAdicionales;
			modelosDatos.storeGrid.load();
		}	
	};
	
		
	
	/**
	*	Permite modificar los parametros adicionales del servicio
	*	@param parametrosAdicionales La estructura con los parametros adicionales
	*/
	this.modificarParametrosAdicionales = function(parametrosAdicionales){
		configuraciones.reload = true;
		configuraciones.parametrosAdicionales = parametrosAdicionales;
		modelosDatos.storeGrid.baseParams.parametros = Ext.encode(configuraciones.parametrosAdicionales);
		modelosDatos.storeGrid.load({});
	};
	
	/**
	*	Obtiene los codigos que ha seleccionado el usuario en el selector
	*	@return Los codigos escogidos
	*/
	this.obtenerCodigosEscogidos = function(){
		return configuraciones.codigos;
	};
	
	this.obtenerCodigosEscogidosTxt = function(){
		return configuraciones.codigosTxt;
	};

	this.obtenerNombresEscogidos = function(){
		return configuraciones.nombres;
	};

	this.cargarDatos = function(){
		configuraciones.apuntador.clickAceptar();
	};
			
	/**
	*	Limpia los datos del componente, invalidando cualquier item escogido
	*/
	this.limpiar = function(){
		var imagenSelector = document.getElementById("iconoSelector"+nombreSelector);
		imagenSelector.src = "../../imagenes/exclamation.png";
		modelosDatos.storeGrid.reload();
		configuraciones.codigos = [];
		configuraciones.nombres = [];
		configuraciones.valoresPrecargados = [];
		configuraciones.codigosTxt = [];
	};
	
	
	/*** Construccion Objeto  a Mostrar  @author Ismael Flores *****/
	this.botonSelector = new Ext.Button({
		text: ""+nombreSelector,
		listeners: {
			click: this,
					click: function(){
						vntPrincipal.setVisible(true);
						
						//if(configuraciones.codigos.length<=0){
						if(configuraciones.reload){
							modelosDatos.storeGrid.baseParams.parametros = Ext.encode(configuraciones.parametrosAdicionales);
							modelosDatos.storeGrid.load({});
							configuraciones.reload = false;
						}
						
						if(configuraciones.valoresPrecargados.length > 0){
							(function(){
							var existe = 0;
							var recs = [];
							var i = 0;
							modelosDatos.storeGrid.each(function(registro){
								existe = configuraciones.valoresPrecargados.indexOf(registro.get("codigo"));
								if(existe >= 0){
									recs.push(i);
								}
								i++;
							});
							grid.getSelectionModel().selectRows(recs);
							configuraciones.valoresPrecargados = [];
							}).defer(150);
						}
					}
				}
	});
		
	
	this.objetosSelector = {
			panelSelector:new Ext.Panel({
							id:"panel"+nombreSelector,
							layout:"column",
							border:false,
							height:30,
							items:[
								new Ext.Panel({border:false,columnWidth:0.50,items:[this.botonSelector]}),
								new Ext.Panel({border:false,columnWidth:0.50,html:"<div style='vertical-align:middle;'><img align='middle' id='iconoSelector"+nombreSelector+"' src='../../imagenes/exclamation.png'></div>"})
								]
						})
	};
	
	
	/**** Procesar Selector *****/
	this.codigosSeleccionadosSelector = function(){
		
	    var codigosSelector = ""; 
	    var codigosSinProcesar = configuraciones.codigos;
		var cantidadCodigos = codigosSinProcesar.length;
		
		for(i=0;i<cantidadCodigos;i++){
			//codigosSelector += (("string" == tipoValores)?"'"+codigosSinProcesar[i]+"'":codigosSinProcesar[i]);
			codigosSelector += codigosSinProcesar[i];
			if(i+1 < cantidadCodigos){
				codigosSelector += ",";
			}
		}
		
		return codigosSelector;
	}
	/******************************************/
	
	//Miguel Vargas 20/10/2015
	this.obtenerSoloCodigosEscogidos = function(){
		//Verifico si existen Valores Pre - Cargados
		if(configuraciones.valoresPrecargados.length > 0){
			configuraciones.codigos = configuraciones.valoresPrecargados;
		}
		else
		{
			var selecciones = grid.getSelectionModel().getSelections();
			
			configuraciones.codigos = [];
			configuraciones.nombres = [];
			
			var nombres = "";
			if(selecciones!=null && selecciones.length>0){
				for(i=0;i<selecciones.length;i++){
					configuraciones.codigos[i] = selecciones[i].get("codigo");
					nombres = selecciones[i].get("descripcion");
					nombres = nombres.replace(/%/g,"%25");
					configuraciones.nombres[i] = nombres;
				}
			}
		}
		return configuraciones.codigos;
	}
	
	//Miguel Vargas 02/08/2016
	this.obtenerSoloCodigosEscogidosTxt = function(){
		var codigosSelector = "";
		var selecciones = grid.getSelectionModel().getSelections();
		
		configuraciones.nombres = [];
		configuraciones.codigosTxt = [];
		
		var nombres = "";
		
		if(selecciones!=null && selecciones.length>0){
			for(i=0;i<selecciones.length;i++){
				nombres = selecciones[i].get("descripcion");
				nombres = nombres.replace(/%/g,"%25");
				configuraciones.nombres[i] = nombres;
				configuraciones.codigosTxt[i] = "|"+selecciones[i].get("codigo")+"|";
				
				codigosSelector += "|"+selecciones[i].get("codigo")+"|";
				if(i+1 < selecciones.length){
					codigosSelector += ",";
				}
			}
		}
		
		return codigosSelector;
	}
	
	
	/**************************** IFLORES - PARA CARGAR/SETEAR VALORES ***************************/
	this.setearBanderaValores = function(encender, listaCodigos){		
		configuraciones.valoresPrecargados = [];
		if(listaCodigos != undefined && listaCodigos.length > 0) 
			configuraciones.valoresPrecargados = listaCodigos;
		
		var imagenSelector = document.getElementById("iconoSelector"+nombreSelector);
		if(encender){
			imagenSelector.src = "../../imagenes/flag_green.png";
		}else{
			imagenSelector.src = "../../imagenes/exclamation.png";
		}
	}
};