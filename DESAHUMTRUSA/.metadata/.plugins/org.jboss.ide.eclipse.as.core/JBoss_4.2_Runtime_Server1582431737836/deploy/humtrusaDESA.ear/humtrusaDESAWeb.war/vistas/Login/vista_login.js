

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
	var panelSecundario = new Ext.Panel({
				layout : "column",
				region : "center",
				collapsible : true,
				height : 180,
				border : false
				//items : [	]
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
		//buttons : [botones.cmdGuardar, botones.cmdCancelar]
	});
	
	var vntLogin = new Ext.Window({
		xtype : "window",
		title : "Login",
		width : 700,
		height : 300,
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

