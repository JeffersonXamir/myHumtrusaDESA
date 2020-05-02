<%@ page language="java" import="java.util.*" pageEncoding="ISO-8859-1"%>

<%@ taglib prefix="ext" tagdir="/WEB-INF/tags/ext" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="etech" tagdir="/WEB-INF/tags/etech" %>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt"%>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
  <head>
  	
	<link rel="stylesheet" href="recursos/Login/estilos/estilosLogin.css" />
	<script language="javascript" src="js/ext-2.2/adapter/ext/ext-base.js"></script> 
	<script language="javascript" src="js/ext-2.2/ext-all.js"></script>
	<link rel="stylesheet" type="text/css" href="recursos/General/css/general.css" />
	<script rel="stylesheet" href="recursos/General/css/estiloTotales.css" ></script>
	<script language="javascript" src="recursos/RecursosGenerales/inicializador.js"></script>
	<script language="javascript" src="recursos/RecursosGenerales/menuGeneral.js"></script>
    <base href="<%=basePath%>">
	
    <title>HUMTRUSA DESA WEB</title>
	<link rel="stylesheet" href="js/ext-2.2/resources/css/ext-all.css"/>
	<link rel="stylesheet" href="recursos/Login/estilos/estilosLogin.css"/>
	<link rel="stylesheet" href="recursos/General/css/estiloTotales.css" type="text/css"/>
	<meta http-equiv="pragma" content="no-cache">
	<meta http-equiv="cache-control" content="no-cache">
	<meta http-equiv="expires" content="0">    
	<meta http-equiv="keywords" content="keyword1,keyword2,keyword3">
	<meta http-equiv="description" content="This is my page">
	<meta http-equiv="cache-control" content="no-cache">
	<meta http-equiv="cache-Control" content="no-store" />
	<!--
	<link rel="stylesheet" type="text/css" href="styles.css">
	-->
  </head>
  
  <body>
  <ext:body extLocation="js/ext-2.2" locale="es" loadingMask="true"  lista_js="js/etech/Ext.ux.grid.CellActions.js| js/etech/Ext.ux.plugins.js| js/etech/Ext.ux.grid.CheckBoxColumn.js" >
	<script type="text/javascript"	src="recursos/General/funciones_generales.js"></script>
	<script type="text/javascript"	src="recursos/General/js_customActions.js"></script> 
	<script type="text/javascript"	src="recursos/RecursosGenerales/general.js"></script>
	<!--  <script type="text/javascript"	src="recursos/RecursosGenerales/menu.js"></script>-->
	
	<ext:viewport layout="border">
		<ext:panel region="center" height="90">
		<ext:form.formPanel region="east" monitorValid="true" title="Traspaso de Clientes entre Vendedores" border="false" height="150" layout="column" bodyStyle="padding: 15px;">		  
					<ext:panel border="false" layout="form" width="400"  >		
			  			
			   			
			   			<!-- COMBO PROVINCIAS  -->
						<ext:form.comboBox id="cmbProvinciaTraspaso" name="codigoProvincia"  fieldLabel="Provincia" editable="false" allowBlank="true"  emptyText="Escoja una provincia" mode="local" triggerAction="all" valueField="codigo"
					  		displayField="descripcion" forceSelection="true" width="195"  >
	  							  					
  						</ext:form.comboBox>
  						<!-- *************************************** -->
			   			
			   			<!-- COMBO CIUDADES  -->
						<ext:form.comboBox id="cmbCiudadTraspaso" name="codigoCiudad"  fieldLabel="Ciudad" editable="false" allowBlank="true"  emptyText="Escoja una ciudad" mode="remote" triggerAction="all" valueField="codigo"  
					  		displayField="descripcion" forceSelection="true" width="195"  >
	  						
  						</ext:form.comboBox>
  						<!-- *************************************** -->
  					<ext:panel border="false" layout="form" width="400">		
			  			
			   			<ext:button  text="Borrar Datos2" onClick="borrarDatos()" icon= "imagenes/bin.png" cls= "x-btn-text-icon" ></ext:button>
			   			<ext:button text="Consultarx" onClick="consultarClientesVendedorOrigen()" icon= "imagenes/buscar.png" cls= "x-btn-text-icon"></ext:button>
		  			</ext:panel>	
		  			
		  			</ext:panel>
		  					  			
		  				
   								  			
				</ext:form.formPanel>
				<ext:grid.gridPanel title="Alumnos CRUD" 
					region="center" autoScroll="true" id="grdprincipal" stripeRows="true" height="300">
					<!-- viewConfig="{autoFill:true}">
					plugins="[ obtenerCellAction('cargarTransaccion','icon-edit') ]">
					 onRowdblclick="function(t,rowindex,e){cargarTransaccion2(t,rowindex,e);}"> -->
					<ext:toolbar toolbarType="tbar">
						<ext:toolbar.separator />						
						<ext:toolbar.button text="agregar Alumno" onClick="traspasarClientes()" icon= "imagenes/arrow_switch.png" cls= "x-btn-text-icon" ></ext:toolbar.button>
						<ext:toolbar.button text="agregar" onClick="openPage('PantallaPrincipalDatos')" icon= "imagenes/arrow_switch.png" cls= "x-btn-text-icon" ></ext:toolbar.button>
						<ext:toolbar.button text="agregar Local" onClick="openPage('PantallaPrincipalDatos')" icon= "imagenes/arrow_switch.png" cls= "x-btn-text-icon" ></ext:toolbar.button>
						<ext:toolbar.separator />
					</ext:toolbar>					
					<ext:grid.columnModel>
						<ext:grid.rowNumberer />
							
						<ext:grid.column width="100" dataIndex="codigo" header="Codigo"  ></ext:grid.column>
						<ext:grid.column width="300" id="nombres" dataIndex="nombres" header="Nombres" ></ext:grid.column>	
						<ext:grid.column width="400" id="apellidos" dataIndex="apellidos" 	header="apellidos"></ext:grid.column>
					    <ext:grid.column width="120" id="telefono" dataIndex="telefono" header="Teléfono"  align="left"></ext:grid.column> 
					 	<ext:grid.column width="150" id="fnac" dataIndex="fnac" header="fecha nacimiento"  align="left"></ext:grid.column>
						<ext:grid.column width="150" id="estado" dataIndex="estado" header="estado" align="left"></ext:grid.column>
					</ext:grid.columnModel>
					<center>
						<ext:grid.gridView emptyText="No hay datos para mostrar"></ext:grid.gridView>
					</center>
					<ext:data.store url="servlet/SAdministracionGeneral" 
						baseParams="{orden:'LISTAR_ALUMNOS_FILTROS',nombres:'',apellidos:'',codigoEstado:'0'}" autoLoad="true">
						<ext:data.xmlReader record="estudiante"  >
							<ext:data.fields>
								<ext:data.field name="codigo" />								
								<ext:data.field name="nombres" />
								<ext:data.field name="apellidos" />
								<ext:data.field name="telefono" />
								<ext:data.field name="fnac" />
								<ext:data.field name="estado" />
						
							</ext:data.fields>
						</ext:data.xmlReader>
					</ext:data.store>
					
				</ext:grid.gridPanel>
		</ext:panel> 
	</ext:viewport>
   <ext:onReady>
       
   </ext:onReady>
  
  </ext:body>
   
  </body>
</html>
