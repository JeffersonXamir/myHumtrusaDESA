<%@ page language="java" pageEncoding="ISO-8859-1" session="true"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>

document.parametrosSesion = {
	codigoUsuario: '${sessionScope.beanSeguridad.usuario}',
	codigoEmpresa: ${sessionScope.beanSeguridad.empresa},
	codigoAgencia: ${sessionScope.beanSeguridad.agencia}
			
};
 document.parametrosVista = {
	nombreEntidad: '${sessionScope.modeloVista.nombreEntidad}',
	descripcion: '${sessionScope.modeloVista.descripcionPagina}',
	tituloPanelFiltros: 'Filtros de Busqueda', 
	tituloPanelCentral: '${sessionScope.modeloVista.tituloPanel}',
	anchoPanelFiltros: "${sessionScope.modeloVista.anchoSeccionFiltros}"
};

document.parametrosSeguridad = {
	puedeAbrir: "${sessionScope.modeloSeguridad.puedeAbrir}",
	puedeModificar: "${sessionScope.modeloSeguridad.puedeModificar}",
	puedeEliminar: "${sessionScope.modeloSeguridad.puedeEliminar}",
	puedeGuardar: "${sessionScope.modeloSeguridad.puedeGuardar}",
	permisosOpcion: new Array()
};

<c:forEach items="${sessionScope.modeloSeguridad.permisosOpcion}" var="permiso">document.parametrosSeguridad.permisosOpcion.push("${permiso}");</c:forEach>

document.parametrosGenerales = {
	registrosPorPagina: "${sessionScope.modeloSeguridad.registrosPorPagina}"
};