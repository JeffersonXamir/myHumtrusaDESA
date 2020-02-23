<%@ page language="java" contentType="text/html; charset=ISO-8859-1" session="true"
    pageEncoding="ISO-8859-1"%>
<%@ taglib prefix="ext" tagdir="/WEB-INF/tags/ext" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="etech" tagdir="/WEB-INF/tags/etech" %>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt"%>
<!DOCTYPE html>
<html>
<head>
	<meta http-equiv="pragma" content="no-cache">
	<meta http-equiv="cache-control" content="no-cache">
	<meta http-equiv="cache-Control" content="no-store" />
	<meta http-equiv="expires" content="0">
	<meta charset="ISO-8859-1"> 
	<title>Insert title here humtrusa Local</title>
	<jsp:include page="../../vistas/Cabeceras2.jsp"></jsp:include>
	<script type="text/javascript" src="vistas/PantallaPrincipal/pantallaScript/PantallaPrincipalLocal.js"></script>
	<c:forEach items="${recurso}" var="recurso">
		${recurso}
	</c:forEach>
</head>
<body>
	<ext:body extLocation="js/ext-2.2" locale="es" loadingMask="true"  lista_js="js/etech/Ext.ux.grid.CellActions.js| js/etech/Ext.ux.plugins.js| js/etech/Ext.ux.grid.CheckBoxColumn.js" >

  	</ext:body>
</body>
</html>