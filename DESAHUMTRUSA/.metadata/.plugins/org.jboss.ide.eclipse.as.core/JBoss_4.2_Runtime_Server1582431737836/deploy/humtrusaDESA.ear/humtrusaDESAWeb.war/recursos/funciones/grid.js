/*
* Actualiza el valor de cantidad de registros del paginador del grid,
* a la vez que realiza la actualizacion de la data contra el servicio remoto
*/

function actualizarCantidadRegistros(nombreGrid, numeroPagina, barraPaginador){
	var grid = Ext.getCmp(nombreGrid);
	
	if(Ext.getCmp(numeroPagina).getValue()>0 && Ext.getCmp(numeroPagina).getValue()<=100){
		var tmpcant = Ext.getCmp(numeroPagina).getValue();
	}else{
		Ext.MessageBox.show({
			title: 'Error',
        	msg: 'El valor que escribio esta fuera del rango valido (1-100)',
        	buttons: Ext.MessageBox.OK,
        	icon: Ext.MessageBox.ERROR
       	});
		var tmpcant = 10;
		Ext.getCmp(numeroPagina).setValue(10);
	}
	var pagin = Ext.getCmp(barraPaginador);
	pagin.pageSize = tmpcant;
   	grid.getStore().load({params:{start:0,limit: tmpcant}});
}