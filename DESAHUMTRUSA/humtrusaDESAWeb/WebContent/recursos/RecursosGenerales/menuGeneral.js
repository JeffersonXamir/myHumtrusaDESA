

var ventanaprincipal = function(){

var componentesPrincipal = {
		txtcodigo : new Ext.form.TextField({
				fieldLabel: 'Codigo',
				allowBlank: false,
				width: 50,
				maxLength: 15,
				style: 'text-transform: uppercase',
				maskRe:/[0-9]/
			}),
};


var panelMenuItems = {
		menuN:[
			{text: 'Item 1'},
            {text: 'Item 2'}
			]
}

var panelMenu = {
		menuP:[{
            xtype: 'tbsplit',
            text: 'Options',
            autoHeight : true,
            //handler: optionsHandler, // handle a click on the button itself
            menu: new Ext.menu.Menu({
                items: panelMenuItems.menuN
            })
        },
        { xtype: 'tbsplit',text:'menu1',menu:new Ext.menu.Menu({items:[{text:'jefferson'}]})}]  
}

var panelPremiosFidelizacion = new Ext.Panel({
	id:'panelPremiosFidelizacion',
	name:'panelPremiosFidelizacion',
	region:"center",		
	frame:true,
	autoHeight : true,
	border:true,
	title:"Premios Tarjeta Fidelizacion",
	//items:[componentesPrincipal.txtcodigo],
	tbar:panelMenu.menuP
});


var vntPrincipal = new Ext.Window({
		id:"vtnprincipal",
		//layout:"border",
		region:"center",
		title:"Bienvenido - Asistente de Promociones",
		width:900,
		height:550,
		items:[panelPremiosFidelizacion],
		draggable:false,
		resizable:false, 
		closable:true,
		closeAction:'destroy',
		modal:true,
		shadow:false,
		//buttonAlign:"center"
	});  

this.abrirVentana = function(){
	vntPrincipal.show(); 
	vntPrincipal.center();
	//alert('putaaa');
};


//formPanelFMBtn.add(containerFinTarea);

 /*
       var win = Ext.create('Ext.window.Window', {
                title: 'EXTJS DYNAMICAL MENU FROM JSON',
                modal: true,
                width: 680,
                closable: true,
                layout: 'fit',
                items: [formPanelFMBtn]
            }).show();

    //Consuming JSON from URL using method GET
    Ext.Ajax.request({
        url: 'https://api.myjson.com/bins/1d9tdd',
        method: 'get',
        timeout: 400000,
        headers: { 'Content-Type': 'application/json' },
        //params : Ext.JSON.encode(dataJsonRequest),
        success: function(conn, response, options, eOpts) {
                var result = Ext.JSON.decode(conn.responseText);
                //passing JSON data in 'result'
                viewMenuDinamical(formPanelFMBtn,result);
            },
        failure: function(conn, response, options, eOpts) { 
                //Ext.Msg.alert(titleAlerta,msgErrorGetFin);
        }
    });

   */ 
    
/*
//Generate dynamical menu with data from JSON
//Params:   formPanelFMBtn  - > Panel
//          result          - > Json data
function viewMenuDinamical(result){

    var resultFinTarea          = result;
    var arrayCategoriaTareas    = resultFinTarea.categoriaTareas;
    var containerFinTarea       = Ext.create('Ext.form.FieldSet', {
                                        xtype: 'fieldset',
                                        title: 'Menu:',
                                        margins:'0 0 5 0',
                                        flex:1,
                                        layout: 'anchor',
                                        //autoHeight: true,
                                        autoScroll: true,
                                        height: 200,
                                        align: 'stretch',
                                        items: [

                                        ]
    });
    var arrayMenu1              = [];

    //LEVEL 1
    for(var i = 0; i < arrayCategoriaTareas.length; i++)
    {
        var categoriaPadre          = arrayCategoriaTareas[i];
        var nombrePadre             = categoriaPadre.nombreCategoria;
        var hijosPadre              = categoriaPadre.hijosCategoria;
        var arrayMenu2              = [];

            //LEVEL 2
            for(var j = 0; j<hijosPadre.length; j++)
            {
                var categoriaHijo           = hijosPadre[j];
                var nombreHijo              = categoriaHijo.nombreHijo;
                var listaTareas             = categoriaHijo.listaTareas;
                var arrayMenu3              = [];

                    //LEVEL 3
                    for(var k = 0; k < listaTareas.length; k++)
                    {
                        var tarea = listaTareas[k];
                        var nombreTarea = tarea.nombreTarea;
                        var objFinLTres =
                        {
                            text: nombreTarea,
                            handler: function () {
                                alert("CLICK XD");
                            }
                        };
                        arrayMenu3.push(objFinLTres);
                    }

                var menuLevel3          = Ext.create('Ext.menu.Menu', {
                    items: arrayMenu3
                });

                var objFinLDos;
                    if(arrayMenu3.length > 0)
                    {
                        objFinLDos = {
                            text: nombreHijo,
                            menu:menuLevel3
                        };
                    }
                    else
                    {
                        //without menu parameter If don't have children
                        objFinLDos = {
                            text: nombreHijo
                        };
                    }

                arrayMenu2.push(objFinLDos);
            }
            var menuLevel2          = Ext.create('Ext.menu.Menu', {
                items: arrayMenu2
            });
 
            var objFinLUno;
            if(arrayMenu2.length > 0)
            {
                objFinLUno = {
                    text: nombrePadre,
                    menu:menuLevel2
                };
            }
            else
            {
                //without menu parameter If don't have children
                objFinLUno = {
                    text: nombrePadre
                };
            }

            arrayMenu1.push(objFinLUno);
    }

    var mymenu      = new Ext.menu.Menu({
                        items: arrayMenu1
                    });


    containerFinTarea.add({
            xtype: 'splitbutton',
            text: 'Example xD',
            menu: mymenu
        });

   // formPanelFMBtn.add(containerFinTarea);
}
*/
};
