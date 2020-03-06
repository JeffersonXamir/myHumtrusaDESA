

var inicioLogin = function (){
	/*
	new Ext.Viewport({
	    layout: 'border',
	    items: [{
	        region: 'center',
	        html: '<h1 class="x-panel-header">Page Title</h1>',
	        tpl: '<img src="vistas/Login/logo.jpg" />',
	        autoHeight: true,
	        border: false,
	        margins: '0 0 5 0'
	    }]
	});
	*/
	var generales = {
	
		url: "servlet/SAdministracionGeneral"
	
	};
	var modeloDatos = {
			storeComboEmpresas: new Ext.data.Store({
				url: generales.url,
				autoLoad: false,
				baseParams: { orden:"OBTENER_EMPRESAS"},
				reader: new Ext.data.XmlReader({record:"empresas"},[
					{name:"codigo"},{name:"descripcion"}
				])
			}),
			
			storeComboAgencias: new Ext.data.Store({
				url: generales.url,
				autoLoad: false,
				baseParams: { orden:"OBTENER_AGENCIASXEMPRESAS", 
							  codEmpresa: "0",
							  estado:"1"},
				reader: new Ext.data.XmlReader({record:"agencias"},[
					{name:"codigo"},{name:"descripcion"}
				])
			})
	};
	
	var componentes = {
		cmbEmpresas : new Ext.form.ComboBox({
			width:160,
				allowBlank:false,
				fieldLabel: "Empresa",
				mode:"remote",
				triggerAction:"all",
				valueField:"codigo",
				displayField:"descripcion",
				emptyText:"Todas las Empresas",
				editable:false,
				forceSelection:true,
				store: modeloDatos.storeComboEmpresas
		}),
		cmbAgencias : new Ext.form.ComboBox({
				width:160,
				allowBlank:false,
				fieldLabel: "Agencia",
				mode:"remote",
				triggerAction:"all",
				valueField:"codigo",
				displayField:"descripcion",
				emptyText:"Todas las Agencias",
				editable:false,
				//forceSelection:true,
				listWidth: 180, 
				store: modeloDatos.storeComboAgencias
		})
	}
	
	var botones = {
		cmdCancelar: new Ext.Button({text:"Limpiar",icon:"imagenes/cancel.png",cls:"x-btn-text-icon"}),
		cmdIngreso: new Ext.Button({text:"Ingresar",icon:"imagenes/bullet_go.png",cls:"x-btn-text-icon"}),
		
		cmdRegresar: new Ext.Button({text:"Cancelar",icon:"imagenes/cancel.png",cls:"x-btn-text-icon"}),
		cmdAcceder: new Ext.Button({text:"Acceder",icon:"imagenes/bullet_go.png",cls:"x-btn-text-icon"})
	}
	var fieldSetsForma = { 
			flsDatosValidacion: new Ext.form.FieldSet({
				border:false,
				//title:"-PASO 1- Cantidad de Bonificados",
				items: [      
					{ xtype: 'box', 
					autoEl: { 
								tag: 'div',
							  	html: '<div class="app-msg"> <img src="imagenes/usuarioLogin.png" class="app-img" /> </br><center><b>INGRESO AL SISTEMA </b> </center> </div>'
							}
					}
				],
				//autoHeight: true
				height:200 
			}),
		
			flsDatosClasificacion: new Ext.form.FieldSet({
				title:"Inicio de Sesi&oacute;n",
				autoHeight: true,
				buttonAlign : "center",
				//height:210,
				//width:350
				items:[
					{ 
						xtype: 'textfield', 
						id: 'login-user',
						fieldLabel: 'Usuario', 
						allowBlank: false, minLength: 3, maxLength: 32,  
						msgTarget:'side',
						value:"JANCHUNDIA"
					},  
					{ 
						xtype: 'textfield', id: 'login-pwd',  
						fieldLabel: 'Contraseña',    
						inputType: 'password', allowBlank: false, minLength: 6,
						maxLength: 32, minLengthText: 'Password must be at least 6 characters long.', 
						msgTarget:'side' ,
						value:"eve25JA"
					},
					componentes.cmbEmpresas,
					componentes.cmbAgencias
				],
				buttons:[
					botones.cmdIngreso,
					botones.cmdCancelar,
					botones.cmdAcceder,
					botones.cmdRegresar
				]
			})
		};
	
	
	
	var panelSecundario = new Ext.Panel({
				layout : "column",
				region : "center",
				collapsible : true,
				//bodyStyle: 'padding:15px;background:transparent', 
				//autoHeight: true,
				height : 230, 
				border : false,
				items : [
						new Ext.Panel({
							border:false,
							bodyStyle:"padding:5px",
							layout:"form",
							columnWidth:0.4,
							height : 300,
							items:[fieldSetsForma.flsDatosValidacion]
						}),
						new Ext.Panel({
							border:false,  
							bodyStyle:"padding:40px 10px 0 10px",   
							layout:"form",
							columnWidth:0.6,    
							height : 300, 
							items:[fieldSetsForma.flsDatosClasificacion] 
						})				
				]
	});
			
	var panelPrincipal = new Ext.form.FormPanel({
		// region:"center",
		layout : "border",
		labelWidth : 70,
		style : "padding:0px",
		monitorValid : true,
		buttonAlign : "center",
		region : "center",
		items : [panelSecundario]
	});
	
	var vntLogin = new Ext.Window({
		xtype : "window",
		title : "Login",
		width : 500,
		height : 250,  
		//resizable : true,
		//modal : true,
		closable : false,
		//closeAction : "hide", 
		layout : "border", 
		items : [panelPrincipal]
			// ,
			// bbar: controladorBloqueos.crearBarraBloqueos()
		});
	//vntLogin.show();	
	vntLogin.setVisible(true);
	vntLogin.center();
	peprararVentana();

	botones.cmdCancelar.on("click",function(){
		Ext.getCmp("login-user").setValue("");
		Ext.getCmp("login-pwd").setValue("");
		
	});
	
	botones.cmdIngreso.on("click",function(){
		Ext.MessageBox.wait('Ingresando al Sistema....','MyHumtrusaWeb');
		var usuario = Ext.getCmp("login-user").getValue();
		var contra = Ext.getCmp("login-pwd").getValue();
		var respuesta =null;
		
		if( usuario == "" ){
			Ext.MessageBox.show({title:"Atenci\xf3n", 
								msg: "Ingrese un Usuario", 
								buttons:Ext.MessageBox.OK, 
								icon:Ext.MessageBox.WARNING});
			return;
		}
		if( contra == "" ){
			Ext.MessageBox.show({title:"Atenci\xf3n", 
								msg: "Ingrese una Contraseña", 
								buttons:Ext.MessageBox.OK, 
								icon:Ext.MessageBox.WARNING});
			return;
		}
		var paramsDat = {			
						url: generales.url,
						params:{
							orden: "LOGIN",
							user: usuario,
							pass: contra
							
						},
						success: function(response){
							Ext.MessageBox.hide();
							respuesta = Ext.decode(response.responseText);
							
							if(respuesta.exito == false){
								Ext.MessageBox.show({title:"Atenci\xf3n", 
													msg: respuesta.mensaje, 
													buttons:Ext.MessageBox.OK, 
													icon:Ext.MessageBox.ERROR}
													);
							}else
								
							if(respuesta.exito == true){
								//openPage("indexxxx.jsp");
								mostrarSeleccionAgencia();
							}
							 
						} 
				}
		Ext.Ajax.request(paramsDat);
		
	});
	
	componentes.cmbEmpresas.on("click",function(){
		componentes.cmbEmpresas.store.load();
	});
	componentes.cmbEmpresas.on("select",function(){
		componentes.cmbAgencias.store.removeAll();
		componentes.cmbAgencias.setValue("");
		componentes.cmbAgencias.store.baseParams.codEmpresa = componentes.cmbEmpresas.getValue()
		componentes.cmbAgencias.store.load();
		
	});
	
	botones.cmdAcceder.on("click",function(){
		openPage("indexxxx.jsp");
	});
	
	botones.cmdRegresar.on("click",function(){
		openPage("index.jsp");
	});
	
	
	function peprararVentana(){
		Ext.getCmp("login-user").getEl().up('.x-form-item').setDisplayed(true);
		Ext.getCmp("login-pwd").getEl().up('.x-form-item').setDisplayed(true);
		
		componentes.cmbAgencias.getEl().up('.x-form-item').setDisplayed(false);
		componentes.cmbEmpresas.getEl().up('.x-form-item').setDisplayed(false);
		
		botones.cmdIngreso.setVisible(true); 
		botones.cmdCancelar.setVisible(true);
		
		botones.cmdRegresar.setVisible(false);
		botones.cmdAcceder.setVisible(false);
		
	};
	
	var mostrarSeleccionAgencia = function(){
		
		Ext.getCmp("login-user").getEl().up('.x-form-item').setDisplayed(false);
		Ext.getCmp("login-pwd").getEl().up('.x-form-item').setDisplayed(false);
		
		componentes.cmbAgencias.getEl().up('.x-form-item').setDisplayed(true);
		componentes.cmbEmpresas.getEl().up('.x-form-item').setDisplayed(true);
		
		botones.cmdIngreso.setVisible(false); 
		botones.cmdCancelar.setVisible(false);
		
		botones.cmdRegresar.setVisible(true);
		botones.cmdAcceder.setVisible(true);
		
	} 
	
}

Ext.onReady(function() {
	document.pantallainicial = new inicioLogin();
});

