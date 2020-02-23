/*=======================*/
/* FIX DEL SCOPE PARA IE */
/*=======================*/
var globalScope = new Array();
function ieIntervalHandler( id, strFunc )
{
	var scope = globalScope[id];
	eval( "scope." + strFunc + "()" );
}
/**
CLASE: 			RelojBloqueo
PROPOSITO: 		Encapsular la funcionalidad de el reloj de bloqueo que se implementa en las vtnas respectivas.
REQUERIMIENTOS: Hay que definir una barra de estado en la ventana y pasar a este objeto el id de dicha barra
PARAMS:
		@ idBarra 	-> (String)		id de la barra de estado incluida en la ventana
		@ fn 		-> (function)	funcion que se ejecuta al terminar el tiempo de bloqueo
		@ tiempo 	-> (int)		tiempo en segundos que se bloqueara la semana 
USO:
var cerrarVtnaIngreso = function(){
...
}

var params ={
	idBarra:'barraEstado',
	fn:cerrarVtnaIngreso,
	tiempo: 240 
};
var relojBloqueo = new RelojBloqueo(params);
...
...
relojBloqueo.iniciar();
...
...
relojBloqueo.terminar();
*/
var RelojBloqueo = function(param){//param -> {idBarra:'texto',idImgBloqueo:'texto'}
	/*=======================*
		ATRIB. PUBLICOS	
	 *=======================*/
	/*this.idBarra =  (param)?(param.idBarra):('brrreloj');
	this.func = (param)?(param.fn):null;
	this.tiempoBloqueo = (param)?(param.tiempo):(200);
	this.objParam = (param)?(param.scopeIn):(this);*/
	this.idBarra =  param.idBarra;
	this.func = param.fn;
	this.tiempoBloqueo = param.tiempo;
	this.obj = param.scopeIn;
	//PARA IDENTIFICAR SESION
	this.uniqueId = 'RELOJBLOQUEO';
	this.inciado = false;
	this.contador=0;
	this.reloj=null;
	/*=======================*
		ATRIB. PRIVADOS	
	 *=======================*/
	var txtReloj = this.idBarra+'txt';
	var imgBloqueo = this.idBarra+'imp';	
		
		
	/*=======================*/
	/*	METODOS PRIVADOS	 */
	/*=======================*/
	//formatea el tiempo
	var transformarTiempo = function (tiempo){
		var horas=0;
		var minutos=0;
		var segundos=0;
		var nuevovalor=0;
		horas=Math.floor(tiempo/3600);
		nuevovalor=tiempo%3600;
		minutos=Math.floor(nuevovalor/60);
		segundos=nuevovalor%60;
	
		if(horas<10){
			horas="0"+horas;
		}if(minutos<10){
			minutos="0"+minutos;
		}if(segundos<10){
			segundos="0"+segundos;			
		}return horas+":"+minutos+":"+segundos;
	}
	
	//decrementa el contador
	this.restaContador = function(scopeIn){		
		if(!scopeIn || scopeIn =='undefined'){
			scopeIn = this;
		}
		scopeIn.contador--;		
			
		if((scopeIn.contador-0)>0){
			document.getElementById(txtReloj).innerHTML=transformarTiempo(scopeIn.contador);
		}else{			
			clearInterval(scopeIn.reloj);
			document.getElementById(imgBloqueo).setAttribute('src','../../imagenes/lock_open.png');
			var paramsMsg = {
				title:"Error", 
				msg:"El tiempo de bloqueo ha terminado, se perdieron los datos no guardados.", 
				buttons:Ext.MessageBox.OK, 
				icon:Ext.MessageBox.ERROR,
				scope:scopeIn,
				fn:function(){					
					this.func.call(this.obj);
					Ext.getCmp(this.idBarra).setVisible(false);
				}				
			};	
			Ext.MessageBox.show(paramsMsg);			
		}	
	};	
	/*=======================*/
	/*	METODOS PUBLICOS	 */
	/*=======================*/
	this.iniciar = function(){
		Ext.getCmp(this.idBarra).setVisible(true);
		Ext.getCmp(this.idBarra).clearStatus();
		Ext.getCmp(this.idBarra).setStatus({text: "<div style='width: 150px;text-align: center'><img src='../../imagenes/lock.png' width='14px' height='14px' style='padding-right: 4px;' id='"+imgBloqueo+"'></img><b style='color: gray;'>Tiempo Bloqueo</b> <div  style='text-align: center; color: gray;font-weight: bold;' id='"+txtReloj+"'> </div></div>"});
		if( document.all ){
			globalScope[ this.uniqueId ] = this;
			this.reloj = setInterval( 'ieIntervalHandler("' + this.uniqueId + '","restaContador")', 1000 );
		}else{			
			this.reloj=setInterval(this.restaContador,1000,this,[this]);
		}
		this.iniciado = true;
		this.contador=this.tiempoBloqueo;		
	}
	this.detener = function(){
		if(this.reloj){
			clearInterval(this.reloj);
			this.contador=0;
			this.iniciado = false;
			Ext.getCmp(this.idBarra).setVisible(false);
		}else{
			alert('inicie primero el contador de bloqueo');
		}
	}
};

/*
@autor: vandrade
@desc: Esta funcion nos ayuda a mantener la relacion del estado con la descripcion
	   si es que esta no es proporcionada en la misma llamada
*/
function setEstado(codEstado){
	var descripcion = '';
	switch(codEstado){
	case 1:
		descripcion = 'Activo';
		break;
	case 2:
		descripcion = 'Inactivo';
		break;
	case 3:
		descripcion = 'Anulado';
		break;
	case 4:
		descripcion = 'Cerrada';
		break;
	case 5:
		descripcion = 'Facturado';
		break;
	case 6:
		descripcion = 'Aprobado';
		break;
	case 7:
		descripcion = 'Procesado';
		break;
	case 8:
		descripcion = 'Negado';
		break;
	case 10:
		descripcion = 'Restringido';
		break;
	case 13:
		descripcion = 'Confirmado';
		break;
	case 26:
		descripcion = 'En Proceso WMS';
		break;
	}
	
	return descripcion;
}

function abrirVentana(nombre){
	Ext.getCmp(nombre).setVisible(true);
	Ext.getCmp(nombre).center();	
}

/*
* Cambia el icono para representar el estado, si esta activo muestra una bandera verde caso contrario un bandera roja
*/
function iconoActivoInactivo(val){
	/*** (IFLORES) Lo paso a Mayusculas para comparar - Sigue manteniendo el mismo formato en pantalla ***/
	var val2 = val.toUpperCase();
	if(val2 == 'ACTIVO')
		{return "<img src=../../imagenes/flag_green.png alt='Activo' />  "+val;}
	else if(val2 == 'INACTIVO')	
		{return "<img src=../../imagenes/flag_red.png alt='Inactivo' />  "+val;}
	else if(val2=='PROCESADO')
		{return "<img src=../../imagenes/cog_go.png alt='Procesado' />  "+val;}
	else if(val2=='ANULADO')
		{return "<img src=../../imagenes/page_delete.png alt='Anulado' />  "+val;}		
	else if(val2=='CERRADA')
		{return "<img src=../../imagenes/lock.png alt='Cerrada' />  "+val;}
	else if(val2=='AÑO CERRADO')
		{return "<img src=../../imagenes/lock.png alt='Cerrada' />  "+val;}	
	else if(val2=='APROBADO')
		{return "<img src=../../imagenes/accept.png alt='Aprobado' />  "+val;}
	else if(val2=='FACTURADO')
		{return "<img src=../../imagenes/coins.png alt='Facturado' />  "+val;}
	else if(val2=='NEGADO')
		{return "<img src='../../imagenes/control_remove_blue.png' alt='Negado' />  "+val;}
	else if(val2=='RESTRINGIDO')
		{return "<img src='../../imagenes/control_remove_blue.png' alt='Restringido' />  "+val;}
	else if(val2=='MAYORIZADO')
		{return "<img src='../../imagenes/script_key.png' alt='Mayorizado' />  "+val;}
	else if(val2=='CONFIRMADO')
		{return "<img src='../../imagenes/building_go.png' alt='Confirmado' />  "+val;}	
	else if(val2=='INGRESADO CAJA')
		{return "<img src='../../imagenes/briefcase.png' alt='Restringido' />  "+val;}
	else if(val2=='CONFIRMADO')
		{return "<img src='../../imagenes/lightning_go.png' alt='Confirmado' />  "+val;}
	else if(val2=='LEGAL')
		{return "<img src='../../imagenes/legal.png' alt='Legal' />  "+val;}
	else if(val2=='PENDIENTE')
		{return "<img src='../../imagenes/flag_white.png' alt='Pendiente' />  "+val;}
	else if(val2=='CONFIRMADO MANUAL')
		{return "<img src='../../imagenes/lightning.png' alt='Confirmado Manual' />  "+val;}
	else if(val2=='CONFIRMADO AUTOMATICO')
		{return "<img src='../../imagenes/lightning_go.png' alt='Confirmado Autom&aacute;tico' />  "+val;}
	else if(val2=='EN PROCESO WMS')
		{return "<img src='../../imagenes/lorry_start.png' alt='En Proceso WMS' />  "+val;}
	else if(val2=='PROCESADO MANUAL')
		{return "<img src='../../imagenes/user_tick.png' alt='Procesado Manual' />  "+val;}
	else
		{return ""+val;}
	
}

function iconoActivoInactivo2(val){
	/*** (IFLORES) Lo paso a Mayusculas para comparar - Sigue manteniendo el mismo formato en pantalla ***/
	var val2 = val.toUpperCase();
	if(val2 == 'ACTIVO')
		{return "<a href=\'#\'><img src=\'./../../imagenes/flag_green.png\' style=\'border:0\' alt=\'Activo\' title=\'Activo\'/>  ";}		
	else if(val2 == 'INACTIVO')	
		{return "<a href=\'#\'><img src=\'./../../imagenes/flag_red.png\' style=\'border:0\' alt=\'Inactivo\' title=\'Inactivo\'/>  ";}
	else if(val2=='PROCESADO')
		{return "<a href=\'#\'><img src=\'./../../imagenes/cog_go.png\' style=\'border:0\' alt=\'Procesado\' title=\'Procesado\'/>  ";}
	else if(val2=='ANULADO')
		{return "<a href=\'#\'><img src=\'./../../imagenes/page_delete.png\' style=\'border:0\' alt=\'Anulado\' title=\'Anulado\'/>  ";}
	else if(val2=='CERRADA')
		{return "<a href=\'#\'><img src=\'./../../imagenes/lock.png\' style=\'border:0\' alt=\'Cerrada\' title=\'Cerrada\'/>  ";}
	else if(val2=='AÑO CERRADO')
		{return "<a href=\'#\'><img src=\'./../../imagenes/lock.png\' style=\'border:0\' alt=\'Cerrada\' title=\'Cerrada\'/>  ";}
	else if(val2=='APROBADO')
		{return "<a href=\'#\'><img src=\'./../../imagenes/accept.png\' style=\'border:0\' alt=\'Aprobado\' title=\'Aprobado\'/>  ";}
	else if(val2=='FACTURADO')
		{return "<a href=\'#\'><img src=\'./../../imagenes/coins.png\' style=\'border:0\' alt=\'Facturado\' title=\'Facturado\'/>  ";}
	else if(val2=='NEGADO')
		{return "<a href=\'#\'><img src=\'./../../imagenes/control_remove_blue.png\' style=\'border:0\' alt=\'Negado\' title=\'Negado\'/>  ";}
	else if(val2=='RESTRINGIDO')
		{return "<a href=\'#\'><img src=\'./../../imagenes/control_remove_blue.png\' style=\'border:0\' alt=\'Restringido\' title=\'Restringido\'/>  ";}
	else if(val2=='MAYORIZADO')
		{return "<a href=\'#\'><img src=\'./../../imagenes/script_key.png\' style=\'border:0\' alt=\'Mayorizado\' title=\'Mayorizado\'/>  ";}
	else if(val2=='CONFIRMADO')
		{return "<a href=\'#\'><img src=\'./../../imagenes/building_go.png\' style=\'border:0\' alt=\'Confirmado\' title=\'Confirmado\'/>  ";}
	else if(val2=='INGRESADO CAJA')
		{return "<a href=\'#\'><img src=\'./../../imagenes/briefcase.png\' style=\'border:0\' alt=\'Ingresado\' title=\'Ingresado\'/>  ";}
	else if(val2=='CONFIRMADO')
		{return "<a href=\'#\'><img src=\'./../../imagenes/lightning_go.png\' style=\'border:0\' alt=\'Confirmado\' title=\'Confirmado\'/>  ";}
	else if(val2=='LEGAL')
		{return "<a href=\'#\'><img src=\'./../../imagenes/legal.png\' style=\'border:0\' alt=\'Legal\' title=\'Legal\'/>  ";}
	else if(val2=='PENDIENTE')
		{return "<a href=\'#\'><img src=\'./../../imagenes/flag_white.png\' style=\'border:0\' alt=\'Pendiente\' title=\'Pendiente\'/>  ";}
	else if(val2=='CONFIRMADO MANUAL')
		{return "<a href=\'#\'><img src=\'./../../imagenes/lightning.png\' style=\'border:0\' alt=\'Confirmado Manual\' title=\'Confirmado Manual\'/>  ";}
	else if(val2=='CONFIRMADO AUTOMATICO')
		{return "<a href=\'#\'><img src=\'./../../imagenes/lightning_go.png\' style=\'border:0\' alt=\'Confirmado Autom&aacute;tico\' title=\'Confirmado Autom&aacute;tico\'/>  ";}
	else if(val2=='EN PROCESO WMS')
		{return "<a href=\'#\'><img src=\'./../../imagenes/lorry_start.png\' style=\'border:0\' alt=\'En Proceso WMS\' title=\'En Proceso WMS\'/>  ";}
	else if(val2=='PROCESADO MANUAL')
		{return "<a href=\'#\'><img src=\'./../../imagenes/user_tick.png\' style=\'border:0\' alt=\'En Proceso WMS\' title=\'Procesado Manual\'/>  ";}
	else
		{return "";}
	
}

/*** Validar si es Respaldo o no **/
function renderRespaldoPedido(val){
	var val2 = val.toUpperCase();
	if(val2 == 'S')
		{return "<img src=../../imagenes/Letter-R-icon.png alt='Existe Respaldo'/>  ";}
	else
		{return "";}
}

//parametros es una cadena JSON
function generarParametros(metodo,url,mensaje_espera,titulo_espera,parametros,success,failure){
	var params = {
				method:metodo,
  				url: url,
  				waitMsg: mensaje_espera,
  				waitTitle: titulo_espera,
  				params: parametros,
  				success: success,
  				failure: failure
  	};
  	return params;
}
/**
*	Obtiene la cadena JSON con los registros del grid dinamico
*/

function obtenerJSONGrid(grilla){
	datos = Ext.getCmp(grilla).store;
	var cadena = "{data:[";
		
	for(i=0;i<datos.getCount();i++){
		record = datos.getAt(i);
		cadena += Ext.util.JSON.encode(record.data) + ",";
	}

	cadena = cadena.substring(0,cadena.length-1) + "]}";
	
	return(cadena);
}


function obtenerJSONGridSeleccionados(grilla){
	var grid = Ext.getCmp(grilla);
	var sm1 = grid.getSelectionModel().getSelections();
	
	var record = null; 
	var cadena = "{data:[";	
	for (i=0; i<=sm1.length-1; i++) {
		record = sm1[i];
		cadena += Ext.util.JSON.encode(record.data) + ",";
	}	
	cadena = cadena.substring(0,cadena.length-1) + "]}";	
	return(cadena);
}



function obtenerJSONGridObj(grid){
	datos = grid.store;
	var cadena = "{data:[";
		
	for(i=0;i<datos.getCount();i++){
		record = datos.getAt(i);
		cadena += Ext.util.JSON.encode(record.data) + ",";
	}

	cadena = cadena.substring(0,cadena.length-1) + "]}";
	
	return(cadena);
}


function hipervinculo(val){
	return '<a href=#>'+val+'</a>';
}

function obtenerCellAction(funcion,iconCls,scope){	
	return (
		new Ext.ux.grid.CellActions({
			listeners:{
				action:function(grid, record, action, value) {
					eval(funcion+"(grid,record,action,value)");
				}
				,beforeaction:function() {
					//Ext.ux.Toast.msg('Event: beforeaction', 'You can cancel the action by returning false from this event handler.');
				},scope: scope	//autor: telejavi añadi un parametro adicional q es el scope
			}
			,callbacks:{
				/*'icon-undo':function(grid, record, action, value) {
					//Ext.ux.Toast.msg('Callback: icon-undo', 'You have clicked: <b>{0}</b>, action: <b>{1}</b>', value, action);
				}*/
			}
			,align:'left'
		}));
}

function obtenerCellActionObj(objParams){
	return (
		new  Ext.ux.grid.CellActions({callbacks:objParams,align:'left'})
	)
}

function obtenerCellActionConf(iconoCls,qTip,hide,HideMode){	
	return ({
		iconCls: iconoCls,
		qtip: qTip,
		hide:hide || true,
		hideMode:HideMode || 'display'
	});
}

Ext.apply(Ext.form.VTypes,{
	NoEspacios: function(val, field){
		var cadena=val.match(/[a-zA-Z0-9]/);																	
	  	return cadena;
	},
	NoEspaciosText: 'No puede escribir espacios como referencia'
});	


Ext.apply(Ext.form.VTypes,{
	uppercase: function(val,field){      
	        var texto = val;
	        texto = Ext.util.Format.uppercase(texto);
	        field.setRawValue(texto);
	        return true;         
	}
});


/*Metodo para obtener los datos del grid en formato JSON
parametro gridInferior , nombre del gridde donde se desean obtener los datos 
*/
				
function obtenerJSONGrid(gridInferior){

	var datos = Ext.getCmp(gridInferior).store;
	var cadena = "{data:[";
	var count = 0;	
	for(i=0;i<datos.getCount();i++){	
		record = datos.getAt(i);
		cadena += Ext.util.JSON.encode(record.data) + ",";
	}	

	cadena = cadena.substring(0,cadena.length-1) + "]}";

	return(cadena);
};	

/*Metodo para mostrar un mensaje por pantalla
parametro mensajeMostrar , texto del mensaje a mostrar 
*/
function mensaje(mensajeMostrar)
{
    
    	Ext.MessageBox.show({
			title: 'Atencion',
           	msg: mensajeMostrar,
           	buttons: Ext.MessageBox.OK,
           	icon: Ext.MessageBox.INFO
       	});

};	

function mostrarCandado(value){
	if(value=='S')
		return '<img src=\'../../imagenes/bullet_tick.png\' alt=\'cerrado\'></img>';
	else
		return '<img src=\'../../imagenes/bullet_cross.png\' alt=\'abierto\'></img>';	
}

/* Metodo para seleccionar el primero de un combobox al momento de
cargarlo, este metodo debe ser ejecutado en el evento load del
store relacionado al combobox */

function seleccionarPrimero(combobox,campo_codigo){
	var combo=Ext.getCmp(combobox);
	if(combo.store.getTotalCount()>0){				  							
		combo.setValue(combo.store.getAt(0).get(campo_codigo));
	}
}	

/* Metodo para seleccionar el primero de un combobox al momento de
cargarlo, este metodo debe ser ejecutado en el evento load del
store relacionado al combobox */

function seleccionarPorId(combobox,campo_codigo,valor){
	var combo=Ext.getCmp(combobox);
	if(combo.store.getTotalCount()>0){
		combo.store.each(function(record){
			if (valor == record.get(campo_codigo)){
				//alert(valor+' '+record.get(campo_codigo));
				combo.setValue(record.get(campo_codigo));
			}
		});
	}
}

function obtenerValorGridComboBox(store,valor,campo1,campo2){
	
	var resul;
	store.each(function(e){
		if (e.get(campo1)==valor)
			resul = e.get(campo2); 
	});
	return resul;
}


function mensajeError(result, request){
	var mensaje=result.responseXML.documentElement.getAttribute('mensaje');
	Ext.MessageBox.show({
		title: 'Atencion',
       	msg: mensaje,
       	buttons: Ext.MessageBox.OK,
       	icon: Ext.MessageBox.ERROR
   	});
   	return;
}

function mostrarMensaje(result,request,fn){
	var objetorespuesta=Ext.decode(result.responseText);
		Ext.MessageBox.hide();	
		if(objetorespuesta.valid){
			Ext.MessageBox.show({
				title: 'Exito',
       			msg: objetorespuesta.mensaje,
       			buttons: Ext.MessageBox.OK,
       			icon: Ext.MessageBox.INFO,
       			fn: fn	           			      			
   			});		 
		}else{
			Ext.MessageBox.show({
				title: 'Error',
       			msg: objetorespuesta.mensaje,
       			buttons: Ext.MessageBox.OK,
       			icon: Ext.MessageBox.ERROR       			          			      		
   			});
		}
}



function bloquear(tablap,clavep,tiempop,funcionExito){
	var params=generarParametros(
		'POST',
		'../../servlet/SConcurrencia',
		'Espere mientras se obtiene el bloqueo',
		'Espere',
		{accion: 'bloquear',tabla: tablap, clave: clavep, tiempo: tiempop},
		function(result,request){
			var mensaje=result.responseXML.documentElement.getAttribute('mensaje');
			var success=result.responseXML.documentElement.getAttribute('success');
			if(success=='false'){
				Ext.MessageBox.show({
					title: 'Atencion',
			       	msg: mensaje,
			       	buttons: Ext.MessageBox.OK,
			       	icon: Ext.MessageBox.ERROR
			   	});
			}else{
				funcionExito();
			}
		},
		mensajeError);
	Ext.Ajax.request(params);	
}
function desbloquear(tablap,clavep,funcionExito){
	var params=generarParametros(
		'POST',
		'../../servlet/SConcurrencia',
		'Espere mientras se obtiene el bloqueo',
		'Espere',
		{accion: 'desbloquear',tabla: tablap, clave: clavep},
		funcionExito,
		mensajeError);
	Ext.Ajax.request(params);
}

/**
 * @autor vandrade
 * @desc. integracion de funciones generales
 * @fecha 07/11/2008
 **/
//twink de js para soportar la funcion trim
String.prototype.trim = function() {
	return this.replace(/(?:(?:^|\n)\s+|\s+(?:$|\n))/g,"");
}

String.prototype.fulltrim = function() {
	return this.replace(/(?:(?:^|\n)\s+|\s+(?:$|\n))/g,"").replace(/\s+/g," ");
}

//para cerrar las ventanas con formas de ingreso
function cerrarVentanaIngreso(ventana, forma){	
	vent = Ext.getCmp(ventana);
	form = Ext.getCmp(forma);
   	form.getForm().reset();
    vent.setVisible(false);
}
//carga los datos de una forma
function cargarDatosForma(formName,url,params){
	forma = Ext.getCmp(formName);
	forma.getForm().load({
			url:url,
			waitMsg:'Cargando...',
			baseParams:params
	});
}
//carga los datos de una forma, el segundo parametro son parametros para el load
function cargarForma(formName,parametros){
	forma = Ext.getCmp(formName);
	if(params) forma.getForm().load({params:parametros});
	else forma.getStore().load();
}
/*------------------
**** ***  * **    ** 
*    *  * * * *  *
* ** ***  * *  *  **
*  * *  * * * *     *
**** *  * * **    **

-------------------(grids)*/

//deja el grid vacio
function encerarGrid(gridName){
	var grid = Ext.getCmp(gridName);
	grid.getStore().removeAll();
}

//elimina el registro seleccionado del store
function removerRegistroSeleccionado(gridName){
	var grid = Ext.getCmp(gridName);
	var registros = grid.getSelectionModel().getSelections();
	if(registros && registros.length > 0){	
		Ext.Msg.show({
			   	title:'Confirmación',
			   	msg: '¿Está seguro que desea eliminar los registros?',
			   	buttons: Ext.Msg.YESNO,
			   	fn: function(A){
				   if(A == 'yes'){				   		
						for(var i=0; i<registros.length; i++){
						grid.store.remove(registros[i]);	
						}
										
					}				 
				   else if(A == 'no'){}
				   else{}
				   }
		});
	}else { 
			Ext.MessageBox.show({
			title: 'Ingreso fallido',
			msg: 'Por favor seleccione un registro',
			buttons: Ext.MessageBox.OK,
			icon: Ext.MessageBox.ERROR
			});
	}
}

//carga los datos de un grid, el segundo parametro son parametros para el load
function cargarGrid(gridName, parametros){	
	grid = Ext.getCmp(gridName);
	if(parametros){		
		grid.getStore().baseParams = parametros;
		grid.getStore().load({params:parametros});
	}
	else grid.getStore().load();
}
//recarga de grids
function recargarGrid(gridName, parametros){
	grid = Ext.getCmp(gridName);	
	if(parametros){
		grid.getStore().baseParams = parametros;
		grid.getStore().reload(parametros);
	}
	else grid.getStore().reload();
}
function filtroGrid(gridName, propiedad, valor,recordActual){
	store = Ext.getCmp(gridName).getStore();
	for(var i = 0; i < store.getCount(); i++){
		tmprecord = store.getAt(i);
		if(recordActual && tmprecord != recordActual){
			if(tmprecord.get(propiedad) && tmprecord.get(propiedad) == valor){
				return tmprecord;
			} 
		}else if(!recordActual){
			if(tmprecord.get(propiedad) && tmprecord.get(propiedad) == valor){
				return tmprecord;
			} 
		}
	}
	return false;
}

//obtiene la fila seleccionada de un grid
function obtenerFilaGrid(gridName){
	grid = Ext.getCmp(gridName);
	return grid.getSelectionModel().getSelected();	
}
//obtiene un valor del grid, de la fila seleccionada
function obtenerValorCelda(gridName, valueField){
	return obtenerFilaGrid(gridName).get(valueField);
}


//acciones de tabs
//deshabilita los tabs que no estan seleccionados
function deshabilitarTabs(tabPanelName){    	
   	var tabPanel = Ext.getCmp(tabPanelName);
   	var tabActivo = tabPanel.getActiveTab();
   	tabuladorSolicitudes.items.each(function(){
   		if(this != tabActivo) this.disable();
   	});
};
//se aplica a un boton de toolbar de un Tabpanel (puede ser cualquier boton en realidad)
//da la funcion de siguiente (activa el siguiente tab)
function siguienteTab(tabPanelName){
	tabPanel = Ext.getCmp(tabPanelName);
	var activo = tabPanel.getActiveTab();
	var tabIndex = activo.tabindex*1;
	if(tabIndex < tabPanel.items.lehgth - 1){
		tabPanel.setActiveTab(tabIndex + 1);
		tabPanel.getActiveTab().setDisabled(false);
	}
}
//da la funcion de anterior
function anteriorTab(tabPanelName){
	var tabPanel = Ext.getCmp(tabPanelName);
	var activo = tabPanel.getActiveTab();	
	var tabIndex = activo.tabindex*1;
	if(tabIndex > 0){
    		tabPanel.setActiveTab(tabIndex-1);
    		tabPanel.getActiveTab().setDisabled(false);
    		//deshabilitarTabs();
    	}	 
}
//setea el tab activo en un tabPanel
function setTabActivo(tabPanelName, index){
	var tabPanel = Ext.getCmp(tabPanelName);
	tabPanel.setActiveTab(index);
}
//obtiene el tab activo en un tabPanel
function getTabActivo(tabPanelname){
	var tabPanel = Ext.getCmp(tabPanelName);
	return tabPanel.getActiveTab();
}function obtenerIndiceSeleccionado(combo){
	var s = Ext.getCmp(combo).store;
	var indice = s.indexOf(s.query(Ext.getCmp(combo).valueField, Ext.getCmp(combo).getValue()).get(0));
	return indice;				
}
function transformarTiempo(tiempo){
	var horas=0;
	var minutos=0;
	var segundos=0;
	var nuevovalor=0;
	horas=Math.floor(tiempo/3600);
	nuevovalor=tiempo%3600;
	minutos=Math.floor(nuevovalor/60);
	segundos=nuevovalor%60;
	if(horas<10)
		horas="0"+horas;
	if(minutos<10)
		minutos="0"+minutos;
	if(segundos<10)
		segundos="0"+segundos;			
	return horas+":"+minutos+":"+segundos;
}

/**********************************	CODIGO DEL EJEMPLO DE EXTJS***********************/
Ext.grid.TableGrid = function(table, config) {  
  config = config || {};
  Ext.apply(this, config);
  var cf = config.fields || [], ch = config.columns || [];
  var tableobj = Ext.get(table);
  if(tableobj!=null){
  
	  var ct = tableobj.insertSibling();
	
	  var fields = [], cols = [];
	  var headers = tableobj.query("thead th");
	  for (var i = 0, h; h = headers[i]; i++) {
	    var text = h.innerHTML;
	    var name = 'tcol-'+i;
	
	    fields.push(Ext.applyIf(cf[i] || {}, {
	      name: name,
	      mapping: 'td:nth('+(i+1)+')/@innerHTML'
	    }));
	
	    cols.push(Ext.applyIf(ch[i] || {}, {
	      'header': text,
	      'dataIndex': name,
	      'width': h.offsetWidth,
	      'tooltip': h.title,
	      'sortable': true
	    }));
	  }
	
	  var ds  = new Ext.data.Store({
	    reader: new Ext.data.XmlReader({
	      record:'tbody tr'
	    }, fields)
	  });
	
	  ds.loadData(tableobj.dom);
	
	  var cm = new Ext.grid.ColumnModel(cols);
	
	  if (config.width || config.height) {
	    ct.setSize(config.width || 'auto', config.height || 'auto');
	  } else {
	    ct.setWidth(tableobj.getWidth());
	  }
	
	  if (config.remove !== false) {
	    tableobj.remove();
	  }
	
	  Ext.applyIf(this, {
	    'ds': ds,
	    'cm': cm,
	    'sm': new Ext.grid.RowSelectionModel(),
	    autoHeight: true,
	    autoWidth: false
	  });
	  Ext.grid.TableGrid.superclass.constructor.call(this, ct, {});
	 }
};

Ext.extend(Ext.grid.TableGrid, Ext.grid.GridPanel);
/*************************************FIN DEL CODIGO DE EJEMPLO*************************/



// Funciones para hacer un trim de algun caracter a alguna cadena-----------------------
function trim(str, chars) {
	return ltrim(rtrim(str, chars), chars);
}
 
function ltrim(str, chars) {
	chars = chars || "\\s";
	return str.replace(new RegExp("^[" + chars + "]+", "g"), "");
}
 
function rtrim(str, chars) {
	chars = chars || "\\s";
	return str.replace(new RegExp("[" + chars + "]+$", "g"), "");
}
//--------------------------------------------------------------------------------------
//funcion para ubicar los totales debajo de las columnas
function ubicarTotal(index,newsize,nombrecolumna,nombrecampo){	
	var header=Ext.DomQuery.select('div[class*='+nombrecolumna+']')[0];
	if(Ext.DomQuery.select('div[class*='+nombrecolumna+']')[0]){
		header=header.parentNode;		
	}else{
		return;
	}
	var cajatotal=null;		
	cajatotal=document.getElementById(nombrecampo);
	if(cajatotal){						
		cajatotal.style.width=header.style.width;
		cajatotal.style.marginLeft=header.offsetLeft+'px';					
	}
}

//Funcion para Formatear Valor a 2 Decimales
function formateoA2(v){
 	v=(Math.round((v-0)*100))/100;
 	v=(v==Math.floor(v))?v+".00":((v*10==Math.floor(v*10))?v+"0":v);
 	v=String(v);
 	var ps=v.split(".");
 	var whole=ps[0];
 	var sub=ps[1]?"."+ps[1]:".00";
 	var r=/(\d+)(\d{3})/;
 	while(r.test(whole)){
 		whole=whole.replace(r,"$1"+","+"$2")
 	}
 	v=whole+sub;
 	if(v.charAt(0)=="-")
 	{
 		return"-"+v.substr(1)
 	}
 	return v;
}


// Validador de numero de identificacion Cedula/RUC
 var validarDocumento = function(campo) {
		numero = campo;
		var suma = 0;
		var residuo = 0;
		
		var numeroProvincias = 24; //adicional el 30 cedulas de extranjeros
		
		var ced = false;
		var rucnat = false;
		var rucpub = false;
		var rucjur = false;

		/* Aqui almacenamos los digitos de la cedula en variables. */
		d1 = numero.substr(0,1);
		d2 = numero.substr(1,1);
		d3 = numero.substr(2,1);
		d4 = numero.substr(3,1);
		d5 = numero.substr(4,1);
		d6 = numero.substr(5,1);
		d7 = numero.substr(6,1);
		d8 = numero.substr(7,1);
		d9 = numero.substr(8,1);
		d10 = numero.substr(9,1);
		
		if (numero.length==10 || numero.length==13){

			provincia = numero.substr(0,2);
			if (!((provincia >= 1 && provincia <= numeroProvincias) || (provincia == 30)))								
	      		return 'El código de la provincia (dos primeros dígitos) es inválido.';

			//cedula
			if (numero.length==10){
				modulo = 10;
				
				//cambio solo a nivel de cedula
				//if (d3 < 6)
				if (d3 <= 6)
					ced = true;

				if (!ced)
					return "Cedula -->> El tercer digito no corresponde a ningun esquema de validacion.";
				
				p1 = d1 * 2; if (p1 >= 10) p1 -= 9;
				p2 = d2 * 1; if (p2 >= 10) p2 -= 9;
				p3 = d3 * 2; if (p3 >= 10) p3 -= 9;
				p4 = d4 * 1; if (p4 >= 10) p4 -= 9;
				p5 = d5 * 2; if (p5 >= 10) p5 -= 9;
				p6 = d6 * 1; if (p6 >= 10) p6 -= 9;
				p7 = d7 * 2; if (p7 >= 10) p7 -= 9;
				p8 = d8 * 1; if (p8 >= 10) p8 -= 9;
				p9 = d9 * 2; if (p9 >= 10) p9 -= 9;
				
				suma = p1 + p2 + p3 + p4 + p5 + p6 + p7 + p8 + p9;
				
				residuo = suma % modulo;
				
				/* Si residuo=0, dig.ver.=0, caso contrario 10 - residuo*/
				digitoVerificador = residuo==0 ? 0: modulo - residuo;
				
				if (digitoVerificador!=d10)
					return "Cedula -->> El Numero es Invalido.";
			}

			//ruc
			if (numero.length==13){
				
				var x_3_digitos = numero.substr(10,3);
				
				var x_4_digitos = numero.substr(9,4);

				if (d3 <= 6){
					
					if ((x_4_digitos=='0001') && (d3==6)){
						rucpub = true;
						d11 = x_4_digitos;
					}
					else{
						rucnat = true;
						d11 = x_3_digitos;
					}
				}

				if (d3 == 9){
					rucjur = true;
					d11 = x_3_digitos;
				}
				
				if (!rucnat && !rucpub && !rucjur)
					return "Ruc -->> El tercer digito no corresponde a ningun esquema de validacion.";
				
				if ((rucnat || rucjur) && (d11 != '001'))
					return "Ruc " + (rucnat?"Natural":"Juridico") + " -->> El Numero debe terminar en 001.";

				if (rucpub && d11 != '0001')
					return "Ruc Publico -->> El Numero debe terminar en 0001.";

				if (rucnat){
					modulo = 10;
					
					p1 = d1 * 2; if (p1 >= 10) p1 -= 9;
					p2 = d2 * 1; if (p2 >= 10) p2 -= 9;
					p3 = d3 * 2; if (p3 >= 10) p3 -= 9;
					p4 = d4 * 1; if (p4 >= 10) p4 -= 9;
					p5 = d5 * 2; if (p5 >= 10) p5 -= 9;
					p6 = d6 * 1; if (p6 >= 10) p6 -= 9;
					p7 = d7 * 2; if (p7 >= 10) p7 -= 9;
					p8 = d8 * 1; if (p8 >= 10) p8 -= 9;
					p9 = d9 * 2; if (p9 >= 10) p9 -= 9;
					
					suma = p1 + p2 + p3 + p4 + p5 + p6 + p7 + p8 + p9;
					
					residuo = suma % modulo;
					
					/* Si residuo=0, dig.ver.=0, caso contrario 10 - residuo*/
					digitoVerificador = residuo==0 ? 0: modulo - residuo;
					
					if (digitoVerificador!=d10)
						return "Ruc Natural -->> El Numero es inválido.";
				}
				
				if (rucpub || rucjur){
					modulo = 11;
					
					if (rucpub){
						p1 = d1 * 3;
						p2 = d2 * 2;
						p3 = d3 * 7;
						p4 = d4 * 6;
						p5 = d5 * 5;
						p6 = d6 * 4;
						p7 = d7 * 3;
						p8 = d8 * 2;
						p9 = 0;
					}

					if (rucjur){
						p1 = d1 * 4;
						p2 = d2 * 3;
						p3 = d3 * 2;
						p4 = d4 * 7;
						p5 = d5 * 6;
						p6 = d6 * 5;
						p7 = d7 * 4;
						p8 = d8 * 3;
						p9 = d9 * 2;
					}

					suma = p1 + p2 + p3 + p4 + p5 + p6 + p7 + p8 + p9;
					
					residuo = suma % modulo;
					
					/* Si residuo=0, dig.ver.=0, caso contrario 10 - residuo*/
					digitoVerificador = residuo==0 ? 0: modulo - residuo;
					
					if (rucpub){
						if (digitoVerificador!=d9)
							return "Ruc Publico -->> El Numero es Invalido.";
					}
					if (rucjur){
						if (digitoVerificador!=d10)
							return "Ruc Juridico -->> El Numero es Invalido.";
					}
				}
			}
		}
		else
			return "El Numero es Incorrecto.";
		

		return "valido";
	};
	
	
	 function esnumero(numero){
	    if (!/^([0-9])*$/.test(numero)){
	      //alert("El valor " + numero + " no es un número");
	    	return false;
	    }
	    return true;
	  }
	
	function validarDocumentoPeru(valor){ 
		valor = trim(valor) 
		if ( esnumero( valor ) ) { 
			if ( valor.length == 8 ){ 
				
				/**** NO SE PUEDE VALIDAR FALTA DIGITO VERIFICADOR ***/
				/*suma = 0 
				for (i=0; i<valor.length-1;i++){ 
					digito = valor.charAt(i) - '0'; 
					if ( i==0 ) 
						suma += (digito*2) 
					else 
						suma += (digito*(valor.length-i)) 
				} 
				resto = suma % 11; 
				
				if ( resto == 1) 
					resto = 11; 
				
				if ( resto + ( valor.charAt( valor.length-1 ) - '0' ) == 11 ){ */
					return true 
				//} 
			}
			else if ( valor.length == 11 ){ 
				suma = 0 
				x = 6 
				for (i=0; i<valor.length-1;i++){ 
					if ( i == 4 ) 
						x = 8 
					
					digito = valor.charAt(i) - '0'; 
					x-- 
					if ( i==0 ) 
						suma += (digito*x) 
					else 
						suma += (digito*x) 
				} 
				resto = suma % 11; 
				resto = 11 - resto 
		
				if ( resto >= 10) 
					resto = resto - 10; 
				
				if ( resto == valor.charAt( valor.length-1 ) - '0' ){ 
					return true 
				} 
			} 
		} 
		return false 
	}; 
	
	/*** Iflores - Expresiones Regulares estandarizadas ****/
	document.expresionesRegularesGenerales = {
			caracteresNoValidos:/[^'",]/, //Validado
			soloNumeros:/[0-9]/,
			numerosDecimales:/[0-9.]/
	}

	//Miguel Vargas 10/02/2015
	function obtenerJSONGridRepresentacion (nombrePropiedad,gridActual){		
			var elementos = "{\""+nombrePropiedad+"\":[";		
			var cantidadElementos = gridActual.getStore().getCount();
			for(i=0;i<cantidadElementos;i++){
				elementos += Ext.encode(gridActual.getStore().getAt(i).data);
					
				if(i+1<cantidadElementos){
					elementos += ",";
				}
			}
			
			elementos += "]}";
			
			return elementos;
	}
	
	function mostrarComponente(field, valor){
		if (valor){
			field.enable();
			field.show();
			field.getEl().up('.x-form-item').setDisplayed(true);
		}
		else{
			field.disable();
			field.hide();
			field.getEl().up('.x-form-item').setDisplayed(false);
		}
	}
	
	function obtenerJSONStore(store){
		datos = store;
		var cadena = "{data:[";
			
		for(i=0;i<datos.getCount();i++){
			record = datos.getAt(i);
			cadena += Ext.util.JSON.encode(record.data) + ",";
		}

		cadena = cadena.substring(0,cadena.length-1) + "]}";
		
		return(cadena);
	}

	function deshabilitar_backspace(){
		if (typeof window.event == 'undefined'){
			   document.onkeypress = function(e){
			    var test_var=e.target.nodeName.toUpperCase();
			    if (e.target.type) var test_type=e.target.type.toUpperCase();
			    if ((test_var == 'INPUT' && test_type == 'TEXT') || test_var == 'TEXTAREA'){
			      return e.keyCode;
			    }else if (e.keyCode == 8){
			      e.preventDefault();
			    }
			   }
		}
		else{
		   document.onkeydown = function(){
		    var test_var=event.srcElement.tagName.toUpperCase();
		    if (event.srcElement.type) var test_type=event.srcElement.type.toUpperCase();
		    if ((test_var == 'INPUT' && test_type == 'TEXT') || test_var == 'TEXTAREA'){
		      return event.keyCode;
		    }else if (event.keyCode == 8){
		      event.returnValue=false;
		    }
		   }
		 }	
	}