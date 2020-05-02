var dashboard = function(direccion) {
	cadenaJSON = "{\"opciones\": [{\"nombreopcion\": \"Inventario\",\"padre\": [{	\"nombrepadre\": \"Articulo\",\"hijos\": [{\"nombrehijo\": \"configuraciones\",\"subhijos\": [{\"nombresubhijo\": \"Precios\"}]}, {\"nombrehijo\": \"Mantenimientos\",\"subhijos\": [{\"nombresubhijo\": \"Mantenimiento de articulos\" }, {\"nombresubhijo\": \"Mantenimiento de Marcas\"}, {\"nombresubhijo\": \"Mantenimiento de Medidas\"}]}]},{\"nombrepadre\": \"Stock\",\"hijos\": [] }]}]}";

	var Queryajax = {
		url : direccion, 
		params : {
			orden : "MENU",
			codempresa : document.parametrosSesion.codigoEmpresa,
			codusuario : document.parametrosSesion.codigoUsuario
		},
		success : function(response) {
			var respuesta = Ext.decode(response.responseText);
			if (respuesta.exito == true) { 

				// COMIENZO A DIBUJAR EL MENU
				var panel = Ext.getCmp("panelGeneral");
				//console.log("panel " + panel);

				var tbarGeneral = Ext.getCmp("tbarGeneral");
				//console.log("tbar " + tbarGeneral);

				//var lista = Ext.decode(cadenaJSON); // cambiar
				var lista = (respuesta); // cambiar 
				var tiraMenu = [];
				var listaopciones = lista.opciones;
				// LEVEL 1
				for (var i = 0; i < listaopciones.length; i++) {
					var lista1 = listaopciones[i].padre;
					var array1 = [];
					// LEVEL 2
					for (var j = 0; j < lista1.length; j++) {
						var lista2 = lista1[j].hijos;
						var array2 = [];

						// LEVEL 3
						for (var k = 0; k < lista2.length; k++) {
							var lista3 = lista2[k].subhijos;
							var array3 = [];

							// LISTA 4
							for (var l = 0; l < lista3.length; l++) {
								var obj4 = null;
								obj4 = {
									text : lista3[l].nombresubhijo,
									url:lista3[l].href,//"www.google.com",
									recursos_adicionales:lista3[l].recursos_adicionales,
									/*handler : { 
										click : function() {
											alert("Jefferson "+url);
										} 
									}*/  
									handler: function(item) {eventoMenu("OM",item.url);}
									//posi abajo
									//handler: function(item) {window.location.href = ("PantallaPrincipalDatos"/*item.url*/);} 
								}
								array3.push(obj4); 
							}
							var obj3 = null;
							if (array3.length > 0) {
								obj3 = {
									text : lista2[k].nombrehijo,
									menu : array3
								}
							}else{
								obj3 = {
									text : lista2[k].nombrehijo
								}
							}
							array2.push(obj3);
						}

						var obj2 = null;
						if (array2.length > 0) {
							obj2 = {
								text : lista1[j].nombrepadre,
								menu : array2
							}
						} else {
							obj2 = {
								text : lista1[j].nombrepadre,
								handler : function(item){eventoMenu("OI",item.text);}
							} 
						}
						array1.push(obj2);
					}
					
					var obj = null;
					if (array1.length > 0) {
						 obj = { 
							text : listaopciones[i].nombreopcion,
							menu : array1 
						}
					}else{
						obj = {
							text : listaopciones[i].nombreopcion
						}
					}
					tiraMenu.push(obj);
				}

				tbarGeneral.add(tiraMenu);
				
			}
		},
		failure : function(response) {
			Ext.MessageBox.show({
						title : "Atenci\xf3n",
						msg : "Error de Comunicaci�n, Consulte con el Dpt de Sistemas",
						buttons : Ext.MessageBox.OK,
						icon : Ext.MessageBox.ERROR
					});
		}
	};  
	Ext.Ajax.request(Queryajax);
	
	function eventoMenu(modo,url){
		if(modo == "OI"){
			if(url == "Cargar Inicio"){
				console.log("bakan listo para inicio");
		/*		paramsAjax ={ 
					url : "servlet/SIngreso",
					method :"POST", 
					params : {
						usuario : document.parametrosSesion.codigoUsuario,
						codempresa : document.parametrosSesion.codigoEmpresa,
						codagencia : document.parametrosSesion.codigoAgencia
					}
				}
				Ext.Ajax.request(paramsAjax); */ 
				//var tbarGeneral2 = Ext.getCmp("tbarGeneral");  
				//Ext.Ajax.request(Queryajax); 
				window.location.href = "../../servlet/SIngreso?usuario="+document.parametrosSesion.codigoUsuario+"&codempresa="+document.parametrosSesion.codigoEmpresa+"&codagencia="+document.parametrosSesion.codigoAgencia+"";//cambiar a post
				//"servlet/SIngreso?usuario="+usuario+"&codempresa="+codEmpresa+"&codagencia="+codAgencia+""
			}
			
		}else if(modo == "OM"){ 
			//alert("ee "+url); 
			window.location.href = url;//"servlet/ControladorVistas?codopcion=7";
		}
		
	}
	/* 
	 * alert("cad1 "+cadenaJSON); alert("cad2 "+Ext.encode(cadenaJSON));
	 * alert("cad3 "+Ext.decode(cadenaJSON));
	 */
	// var panel = document.getElementById('panelGeneral');
	// console.log("paneltba "+paneltbar);
	
	/*
	var panelnorte = Ext.getCmp("panelnorte");
	console.log("holaaaaa"); 
	var norte = [];
	 
		norte={ 	
		xtype: 'box', 
		autoEl: {  
					tag: 'div',
				  	html: '<div class="app-msg" > <img src="imagenes/dashboard/logo_humtrusa.jpg" class="app-img" /> </div>'
				}
		}; 
	
	panelnorte.add(norte);
	*/
}