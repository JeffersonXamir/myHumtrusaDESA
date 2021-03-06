/**

 */
var PantallaPrincipalLocal = function(configuraciones){

	var menu = new dashboard("../../servelet/SMenu");
	
	var parametrosGlobales = {
		descripcion: document.parametrosVista.descripcion,
		tituloPanelFiltros: document.parametrosVista.tituloPanelFiltros,
		tituloPanelCentral: document.parametrosVista.tituloPanelCentral,
		anchoPanelFiltros: document.parametrosVista.anchoPanelFiltros,
		usaPanelFiltros: configuraciones.usaPanelFiltros,
		panelFiltros: configuraciones.panelFiltros,
		panelCentro: configuraciones.panelCentro,
		urlServicioMenus: "../../servlet/SMenu",  
		urlServicioSalida: "../../servlet/SSalida",
		urlSeccionSuperior: "../../vistas/Dashboard/panelNorteHG.jsp"
	};
	
	var componentes = {
		panelNorte: new Ext.Panel({
			region:"north",
			id:"panelGeneral",
			height:85,  
			border:false,
			html:"<div id='contenedorCabecera'></div>",
			bbar: new Ext.Toolbar({
				id:"tbarGeneral",
				name:"tbarGeneral",
				items:[
				       new Ext.Button({text:"Cerrar Sesion",
				       handler: function(item) {document.location='../../servlet/SSalida';}})
				]
			}) 
			/*bbar:new Etech.componentes.MenuPerfiles({
				url:parametrosGlobales.urlServicioMenus,
				items:[
				       new Ext.Button({text:"Cerrar Sesion"})
				]
			})*/
		}),
		panelCentro: new Ext.Panel({region:"center",layout:"border",title:parametrosGlobales.tituloPanelCentral,items:[parametrosGlobales.panelCentro]}),
		panelSur: new Ext.Panel({region:"south",title:"Ayuda",collapsible:true,collapsed:true,html:parametrosGlobales.descripcion})
	};
	
	var componentesViewport = [];
	componentesViewport[0] = componentes.panelNorte;
	componentesViewport[1] = componentes.panelCentro; 
	//componentesViewport[2] = componentes.panelSur; 
	
	if(parametrosGlobales.usaPanelFiltros){
		componentes.panelIzquierdo = new Ext.Panel({layout:"border",region:"west",frame : false,title:parametrosGlobales.tituloPanelFiltros,width:parametrosGlobales.anchoPanelFiltros,collapsible:true,items:[parametrosGlobales.panelFiltros]});
		componentesViewport[2] = componentes.panelIzquierdo;
	}
	
	new Ext.Viewport({
		layout:"border",
		items:componentesViewport,
		listeners:{
			render: function(){
				Ext.Ajax.request({
					url:parametrosGlobales.urlSeccionSuperior,
					success:function(response){
						var html = response.responseText;
						document.getElementById("contenedorCabecera").innerHTML = html;
					}
				});
			} 
		}
	});
	
	this.obtenerPanelIzquierdo = function(){
		return (parametrosGlobales.usaPanelFiltros)?componentes.panelIzquierdo:null;
	};
	
	this.obtenerPanelCentro = function(){
		return componentes.panelDerecho;
	};
	
}