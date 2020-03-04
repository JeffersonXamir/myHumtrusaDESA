

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
	var botones = {
		cmdCancelar: new Ext.Button({text:"Cancelar",icon:"imagenes/cancel.png",cls:"x-btn-text-icon"}),
		cmdIngreso: new Ext.Button({text:"Ingresar",icon:"imagenes/bullet_go.png",cls:"x-btn-text-icon"})
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
						msgTarget:'side'
					},  
					{ 
						xtype: 'textfield', id: 'login-pwd',  
						fieldLabel: 'Contraseņa',    
						inputType: 'password', allowBlank: false, minLength: 6,
						maxLength: 32, minLengthText: 'Password must be at least 6 characters long.', 
						msgTarget:'side'  
					} 
				],
				buttons:[
					botones.cmdIngreso,
					botones.cmdCancelar
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
}

Ext.onReady(function() {
	document.pantallainicial = new inicioLogin();
});

