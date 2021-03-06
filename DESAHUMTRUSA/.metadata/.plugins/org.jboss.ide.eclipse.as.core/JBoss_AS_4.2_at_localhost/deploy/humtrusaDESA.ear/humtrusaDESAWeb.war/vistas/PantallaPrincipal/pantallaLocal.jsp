<%@ page language="java" contentType="text/html; charset=ISO-8859-1" session="true"
    pageEncoding="ISO-8859-1"%>
<%@ taglib prefix="ext" tagdir="/WEB-INF/tags/ext" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="etech" tagdir="/WEB-INF/tags/etech" %>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt"%>
<%@ page language="java" import="com.humtrusa.modelo.*" %>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>
<% 
	Seguridades modeloSeguridad = (Seguridades) request.getSession().getAttribute("modeloSeguridad");
%>
<script type="text/javascript">
	document.parametrosGlobal = {
			codigoUsuario: "<%=modeloSeguridad.getNombresUsuario()%>",
			nombreEmpresa: "<%=modeloSeguridad.getNombreEmpresa()%>",
			nombreAgencia: "<%=modeloSeguridad.getNombreAgencia()%>" 
		};	
</script>
<!DOCTYPE html>
<html> 
<head>
	<meta http-equiv="pragma" content="no-cache">
	<meta http-equiv="cache-control" content="no-cache">
	<meta http-equiv="cache-Control" content="no-store" />
	<meta http-equiv="expires" content="0">
	<meta charset="ISO-8859-1">  
	<title>${sessionScope.modeloVista.nombreEntidad}</title>
	<jsp:include page="../../vistas/Cabeceras2.jsp"></jsp:include> 
	<script type="text/javascript" src="../../vistas/PantallaPrincipal/ParametrosVista.jsp"></script>
	<script type="text/javascript" src="../../vistas/Login/vista_dashboard.js"></script>
	<script type="text/javascript" src="../../vistas/PantallaPrincipal/pantallaScript/PantallaPrincipalLocal.js"></script>
	<c:forEach items="${sessionScope.modeloVista.listaRecursos}" var="recurso"><c:choose><c:when test="${recurso.tipoRecurso == 1}" ><script language="javascript" src="${recurso.url}"></script></c:when><c:otherwise><link rel="stylesheet" href="${recurso.url}"/></c:otherwise></c:choose></c:forEach>
</head>
<body>
	<ext:body extLocation="../../js/ext-2.2" locale="es" loadingMask="true"  lista_js="../../js/etech/Ext.ux.grid.CellActions.js| ../../js/etech/Ext.ux.plugins.js| ../../js/etech/Ext.ux.grid.CheckBoxColumn.js" > 
 	 
  	</ext:body> 
</body>
</html>