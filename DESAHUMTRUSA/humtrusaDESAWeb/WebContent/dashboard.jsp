<%@ page language="java" import="java.util.*" pageEncoding="ISO-8859-1"%>

<%@ taglib prefix="ext" tagdir="/WEB-INF/tags/ext" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="etech" tagdir="/WEB-INF/tags/etech" %>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt"%>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>
<!DOCTYPE html>
<html>
	
<head>
<script language="javascript" src="js/ext-2.2/adapter/ext/ext-base.js"></script> 
<script language="javascript" src="js/ext-2.2/ext-all.js"></script>
<script type="text/javascript" src="/humtrusaDESAWeb/vistas/PantallaPrincipal/ParametrosVista.jsp"></script> 


<link rel="stylesheet" href="js/ext-2.2/resources/css/ext-all.css"/>
<base href="<%=basePath%>">
<title>BIENVENIDOS A HUMTRUSA & COMERCIO S.A.</title>
 

 <style type="text/css">
    	.estilo_fondo {
    		background-image: url("vistas/Login/logo7.jpg");   
    		background-repeat: repeat-x repeat-y; 
    	}
    	.fondo_dashboard{ 
			background-image:url("imagenes/dashboard/icono_fondo.png");
			background-repeat:repeat-x repeat-y;
		}
 </style>  

</head>
<body>  
	<ext:body extLocation="js/ext-2.2" locale="es" loadingMask="true"  lista_js="js/etech/Ext.ux.grid.CellActions.js| js/etech/Ext.ux.plugins.js| js/etech/Ext.ux.grid.CheckBoxColumn.js" >
		<script type="text/javascript" src="vistas/Login/vista_dashboard.js"></script>
		<ext:viewport layout="border">
		<ext:form.fieldset title="HOLA A TODOS xd " region="north">
			  
		</ext:form.fieldset> 
		<ext:panel region="center" height="500" id="panelGeneral" name="panelGeneral"> 
		
		<ext:toolbar id="tbarGeneral" >
			<ext:toolbar.separator/>
   			<ext:toolbar.button text="Cerrar Sesion" onClick="document.location='servlet/SSalida';" />
		</ext:toolbar> 
		
	
			<table width="100%" height="100%" class="estilo_fondo" cellpadding="10" cellspacing="10">
				<tr >
					 <td valign="top">
					 	<div align="left"><img src="imagenes/tip_principal.png"></div> 
					 </td>
					 
					 <td valign="top">
					 	<div align="right"><img src="imagenes/tip_principal.png"></div> 
					 </td>  
					 
					    
				</tr>
			</table> 
		</ext:panel> 
		</ext:viewport>
		<ext:onReady>
				document.pantallaDashboard = new dashboard("servelet/SMenu");
		</ext:onReady>
  	</ext:body>
 
</body>
</html>