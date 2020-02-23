//
//Description:  ExtJs - Create a dynamical menu from JSON
//Autor:        Ronny Morán <ronney41@gmail.com>
//
Ext.application({
    name : 'Fiddle',
    launch : function() {

        var formPanelFMBtn = Ext.create('Ext.form.Panel', {
                bodyPadding: 2,
                waitMsgTarget: true,
                fieldDefaults: {
                    labelAlign: 'left',
                    labelWidth: 85,
                    msgTarget: 'side'
                },
                items: [
                    {
                         xtype: 'container',
                         layout: 'hbox',
                         items: [

						 ]
                      }
                ]
        });

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

    }
});

//Generate dynamical menu with data from JSON
//Params:   formPanelFMBtn  - > Panel
//          result          - > Json data
function viewMenuDinamical(formPanelFMBtn,result){

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

    formPanelFMBtn.add(containerFinTarea);
}