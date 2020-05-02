/**
 * Ext.ux.plugins
 *
 * @author    Ing. Jozef Sakalos <jsakalos@aariadne.com>
 * @copyright (c) 2007, by Ing. Jozef Sakaloz
 * @date      24. November 2007
 * @version   $Id: Ext.ux.plugins.js 596 2007-11-25 13:40:43Z jozo $
 */
Ext.namespace('Ext.ux', 'Ext.ux.plugins');
 function ordenarAsc(a,b){ 	
	return a.orden*1-b.orden*1;			
}
/**
 * Remote Validator
 * Makes remote (server) field validation easier
 *
 * To be used by form fields like TextField, NubmerField, TextArea, ...
 */

Ext.ux.plugins.RemoteValidator = {
	init:function(field) {
		// save original functions
		var isValid = field.isValid;
		var validate = field.validate;

		// apply remote validation to field
		Ext.apply(field, {
			 remoteValid:false

			// private
			,isValid:function(preventMark) {
				return isValid.call(this, preventMark) && this.remoteValid;
			}

			// private
			,validate:function() {
				var clientValid = validate.call(this);
				if(!this.disabled && !clientValid) {
					return false;
				}
				if(this.disabled || (clientValid && this.remoteValid)) {
					this.clearInvalid();
					return true;
				}
				if(!this.remoteValid) {
					this.markInvalid(this.reason);
					return false;
				}
				return false;
			}

			// private - remote validation request
			,validateRemote:function() {
				this.rvOptions.params = this.rvOptions.params || {};
				this.rvOptions.params.field = this.name;
				this.rvOptions.params.value = this.getValue();
				Ext.Ajax.request(this.rvOptions);
			}

			// private - remote validation request success handler
			,rvSuccess:function(response, options) {
				var o;
				try {
					o = Ext.decode(response.responseText);
				}
				catch(e) {
					throw this.cannotDecodeText;
				}
				if('object' !== typeof o) {
					throw this.notObjectText;
				}
				if(true !== o.success) {
					throw this.serverErrorText + ': ' + o.error;
				}
				var names = this.rvOptions.paramNames;
				this.remoteValid = true === o[names.valid];
				this.reason = o[names.reason];
				this.validate();
			}

			// private - remote validation request failure handler
			,rvFailure:function(response, options) {
				throw this.requestFailText
			}

			// private - runs from keyup event handler
			,filterRemoteValidation:function(e) {
				if(!e.isNavKeyPress()) {
					this.remoteValidationTask.delay(this.remoteValidationDelay);
				}
			}
		});

		// remote validation defaults
		Ext.applyIf(field, {
			 remoteValidationDelay:500
			,reason:'El valor de este campo no ha sido validado aun'
			,cannotDecodeText:'Imposible decodificar cadena json, comuniquese con el departamento tecnico'
			,notObjectText:'Lo sentimos, el servidor no ha enviado una respuesta'
			,serverErrorText:'Fallo el servidor de validacion'
			,requestFailText:'Fallo el requerimiento al servidor'
		});

		// install event handlers on field render
		field.on({
			render:{single:true, scope:field, fn:function() {
				this.remoteValidationTask = new Ext.util.DelayedTask(this.validateRemote, this);
				this.el.on('keyup', this.filterRemoteValidation, this);
			}}
		});

		// setup remote validation request options
		field.rvOptions = field.rvOptions || {};
		Ext.applyIf(field.rvOptions, {
			 method:'post'
			,scope:field
			,success:field.rvSuccess
			,failure:field.rvFailure
			,paramNames: {
				 valid:'valid'
				,reason:'reason'
			}
		});
	}
};//EO Ext.ux.plugins.RemoteValidator

/*****************
 * Tab Close Menu
 * Crea un menu contextual en el tabpanel con varias opciones (cerrar tabs - cerrar los otros tabs por el momento)
 *****************/
Ext.ux.TabCloseMenu = function(){
    var tabs, menu, ctxItem;
    this.init = function(tp){
        tabs = tp;
        tabs.on('contextmenu', onContextMenu);
    }

    function onContextMenu(ts, item, e){
        if(!menu){ // create context menu on first right click
            menu = new Ext.menu.Menu([{
                id: tabs.id + '-close',
                text: 'Close Tab',
                handler : function(){
                    tabs.remove(ctxItem);
                }
            },{
                id: tabs.id + '-close-others',
                text: 'Close Other Tabs',
                handler : function(){
                    tabs.items.each(function(item){
                        if(item.closable && item != ctxItem){
                            tabs.remove(item);
                        }
                    });
                }
            }]);
        }
        ctxItem = item;
        var items = menu.items;
        items.get(tabs.id + '-close').setDisabled(!item.closable);
        var disableOthers = true;
        tabs.items.each(function(){
            if(this != item && this.closable){
                disableOthers = false;
                return false;
            }
        });
        items.get(tabs.id + '-close-others').setDisabled(disableOthers);
        menu.showAt(e.getPoint());
    }
};//	EO	Ext.ux.TabCloseMenu

/*****************
 *** VANDRADE ***
 * Menu Perfiles
 * Crea un toolbar con los menus desde un documento xml el cual es generado segun el rol del usuario del sistema.
 *****************/
Ext.ux.MenuPerfiles = Ext.extend(Ext.Toolbar,{
	border:true,
	initComponent: function() {
		Ext.ux.MenuPerfiles.superclass.initComponent.call(this);
		this.run();
	},
	run: function(){
			var hubs = Ext.Ajax.request({
				url: this.url,
				scope: this,
				success: function(conn, objResponse, objOptions){
					this.successFn.apply(this, arguments);
				},
				failure: this.failFn
			});
	},
	cargarXml:function(xmlDoc){
		function crearMenuButton(attr){
			var mb = new Ext.Button({/*MODIFICADO VAN 1.11.08//BOTON SIN SPLIT*/
				text:attr.getAttribute('text'),
				iconCls:attr.getAttribute('iconCls'),
				tooltip:{
					text:attr.getAttribute('tooltip'), 
					autoHide:true
				},
				menu:crearMenu(attr.getElementsByTagName('menu')[0])
			});
			return mb;
		}		
		function crearMenu(nodo){			
			var menu = new Ext.menu.Menu();
			var hijos = nodo.childNodes;
			for(var i = 0; i < hijos.length; i++){
				var hijo = hijos[i];
				if(hijo.childNodes.length > 0 && hijo.getElementsByTagName('menu')[0] != null){
					item = {
						text: hijo.getAttribute('text'),
						iconCls:hijo.getAttribute('iconCls'),
						href: hijo.getAttribute('handler'),
						orden: hijo.getAttribute('orden'),
						tooltip:{
							text:hijo.getAttribute('tooltip'),  
							autoHide:true
						},
						menu:crearMenu(hijo.getElementsByTagName('menu')[0])
					};
				}else{
					item = {
						text: hijo.getAttribute('text'),
						iconCls:hijo.getAttribute('iconCls'),
						href: hijo.getAttribute('handler'),
						orden: hijo.getAttribute('orden'),
						tooltip:{
							text:hijo.getAttribute('tooltip'),  
							autoHide:true
						},
						menu:null
					};
				}
				menu.add(item);
			}			
			menu.items.items.sort(ordenarAsc);			
			return menu;
		}
		
		var raiz = xmlDoc.getElementsByTagName('Toolbar')[0];
		var tmButtons = raiz.getElementsByTagName('MenuButton');
		for(var i = 0; i < tmButtons.length ; i++){
			var conf = {
				text:tmButtons[i].getAttribute('text'),
				href:tmButtons[i].getAttribute('handler'),
				tooltip:{
					text:tmButtons[i].getAttribute('tooltip'),  
					autoHide:true
				},
				menu: crearMenu(tmButtons[i].getElementsByTagName('menu')[0])
			};
			var item = new Ext.Button(conf);/*MODIFICADO VAN 1.11.08//BOTON SIN SPLIT*/
			if(item){
				this.add(item);
			}
		}
	},
	successFn:function(response, options){
		this.cargarXml.call(this,response.responseXML);
	},
	failFn:function(conn, objResponse, objOptions){
		Ext.Msg.show({ 
			title:'Error', 
			msg:'Error: '+objResponse.toSource(),buttons:Ext.Msg.OK, icon:Ext.MessageBox.ERROR
			});
		}
	});//EO Ext.ux.MenuPerfiles	
	Ext.reg('menuPerfiles',Ext.ux.MenuPerfiles);

/*****
VANDRADE
fuente: http://extjs.com/forum/showthread.php?t=40842 (extjs.com)
proposito: Exponer un metodo setReadOnly(boolean flag)
*****/

//Utility class
if(!Ext.ux.Utility)
    Ext.ux.Utility = {

        isNullOrUndefined: function(obj) {
            return (typeof obj == 'undefined' || obj == null );
        },
        isFunction: function(f){
            return typeof f == 'function';
        }
        
    };

Ext.ux.FieldReadOnlyPlugin = function(){
    
    this.init = function(f){
         f.setReadOnly = function(value){            
            if(f.readOnly)//if readonly is set in the Ext way, like in cfg object, do not take any action.
            {
            	//alert("1");
            	return;
            }   
            f._readOnly = value;
            if(f.rendered){
            	//alert("2");
                if(Ext.ux.Utility.isNullOrUndefined(f.editable) || f.editable === true){
                    //alert("3");
                    var el = f.getEl();
                    el.dom.setAttribute('readOnly', value);
                    el.dom.readOnly = value;
                    
                }
            }
            else {
            	//alert("4");
                //f.readOnly = value;
            }
         };
        
        if(Ext.ux.Utility.isFunction(f.expand)){
            //alert("5");
            f.expand = f.expand.createInterceptor(function(){
                return !f._readOnly;      
            }); 
        }
        if(Ext.ux.Utility.isFunction(f.onTriggerClick)){
            //alert("6");
            f.onTriggerClick = f.onTriggerClick.createInterceptor(function(){
                return !f._readOnly;      
            });
        }
        if(Ext.ux.Utility.isFunction(f.onClick)){
            //alert("7");
            f.onClick = f.onClick.createInterceptor(function(){
                if(f._readOnly){
                    this.el.dom.checked = f.checked;
                }
                return !f._readOnly;      
            });
        }
        if(Ext.ux.Utility.isFunction(f.setValue) && f instanceof Ext.form.Checkbox){
            //alert("8");
            f.setValue = f.setValue.createInterceptor(function(){ 
                return !f._readOnly;      
            });
        } 
    }
} 
// end of file
