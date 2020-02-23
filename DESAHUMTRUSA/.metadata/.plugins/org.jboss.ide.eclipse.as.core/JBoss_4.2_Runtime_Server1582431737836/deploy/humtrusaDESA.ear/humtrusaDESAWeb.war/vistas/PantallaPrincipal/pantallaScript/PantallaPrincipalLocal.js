/**
f * Representacion del constructor de pantallas principales
 * @author jvillavi
 * @param configuraciones La estructura de configuracion
 */
var PantallaPrincipalLocal = function(configuraciones){
	
	/**
	*	Incorporado en modo de compatibilidad
	*/
	var parametrosGlobales = {
		descripcion: "hola",
		tituloPanelFiltros: "filtros",
		tituloPanelCentral:  "hola",
		anchoPanelFiltros:  350,
		usaPanelFiltros:  "true",
		panelFiltros: configuraciones.panelFiltros,
		panelCentro: configuraciones.panelCentro,
		urlServicioMenus: "../../servlet/SMenu",  
		urlServicioSalida: "../../servlet/SSalida",
		urlSeccionSuperior: "../Generales/SeccionSuperior.jsp"
	};
	
	var componentes = {
		panelNorte: new Ext.Panel({
			region:"north",
			height:88,
			border:false,
			html:"<div id='contenedorCabecera'></div>",
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
	//componentesViewport[0] = componentes.panelNorte;
	componentesViewport[0] = componentes.panelCentro;
	//componentesViewport[2] = componentes.panelSur;
	
	if(parametrosGlobales.usaPanelFiltros){
		componentes.panelIzquierdo = new Ext.Panel({layout:"border",region:"west",frame : false,title:parametrosGlobales.tituloPanelFiltros,width:parametrosGlobales.anchoPanelFiltros,collapsible:true,items:[parametrosGlobales.panelFiltros]});
		componentesViewport[1] = componentes.panelIzquierdo;
	}
	
	new Ext.Viewport({
		layout:"border",
		items:componentesViewport,
		/*listeners:{
			render: function(){
				Ext.Ajax.request({
					url:parametrosGlobales.urlSeccionSuperior,
					success:function(response){
						var html = response.responseText;
						document.getElementById("contenedorCabecera").innerHTML = html;
					}
				});
			}
		}*/
	});
	
	this.obtenerPanelIzquierdo = function(){
		return (parametrosGlobales.usaPanelFiltros)?componentes.panelIzquierdo:null;
	};
	
	this.obtenerPanelCentro = function(){
		return componentes.panelDerecho;
	};
	
}