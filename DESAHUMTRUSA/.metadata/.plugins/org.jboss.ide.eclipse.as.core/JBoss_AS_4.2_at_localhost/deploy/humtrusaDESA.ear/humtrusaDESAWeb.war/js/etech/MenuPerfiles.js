/**
*	Componente Menu Perfiles
*	Framework de Desarrollo - E-Technology S.A
*	Autor: Jorge Villavicencio
*/

Ext.ns('Etech.componentes.MenuPerfiles');

Etech.componentes.MenuPerfiles = Ext.extend(Ext.Toolbar,{
	border:false,
	initComponent: function() {
		Etech.componentes.MenuPerfiles.superclass.initComponent.call(this);
		this.run();
	},
	run: function(){
		Ext.Ajax.request({
			url: this.url,
			scope: this,
			success: function(conn, objResponse, objOptions){
				this.successFn.apply(this, arguments);
			},
			failure: this.failFn
		});
	},
	cargarXml:function(xmlDoc){
		function crearMenu(nodo){
					
			var menu = new Ext.menu.Menu();
			
			var hijos = nodo.childNodes;
			for(var i = 0; i < hijos.length; i++){
				var hijo = hijos[i];
				
				var item = {
					text: hijo.getAttribute('text'),
					iconCls:hijo.getAttribute('iconCls'),
					href: hijo.getAttribute('handler'),
					orden: hijo.getAttribute('orden'),
					menu:null
				};
				
				if(hijo.childNodes.length > 0 && hijo.getElementsByTagName('menu')[0] != null){
					item.menu = crearMenu(hijo.getElementsByTagName('menu')[0]);
				}
				
				menu.add(item);
			}			
			//menu.items.items.sort(ordenarAsc);			
			return menu;
		}
		
		var raiz = xmlDoc.getElementsByTagName('Toolbar')[0];
		var tmButtons = raiz.getElementsByTagName('MenuButton');
		for(var i = 0; i < tmButtons.length ; i++){
			
			var conf = {
				xtype:"button",
				text:tmButtons[i].getAttribute('text'),
				href:tmButtons[i].getAttribute('handler'),
				menu: crearMenu(tmButtons[i].getElementsByTagName('menu')[0])
			};
			
			this.add(conf);
		}
		//this.doLayout();
	},
	successFn:function(response, options){
		this.cargarXml.call(this,response.responseXML);
	},
	failFn:function(conn, objResponse, objOptions){
		Ext.Msg.show({title:'Error',msg:"El menu dinamico no pudo ser cargado con exito",buttons:Ext.Msg.OK, icon:Ext.MessageBox.ERROR});
	}
});

Ext.reg('menuPerfiles',Etech.componentes.MenuPerfiles);