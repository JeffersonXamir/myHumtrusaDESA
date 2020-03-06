<%@ page language="java" pageEncoding="ISO-8859-1" session="true"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>

document.parametrosSesion = {
	codigoUsuario: '${sessionScope.modeloSeguridad.loginUsuario}',
	codigoEmpresa: ${sessionScope.modeloSeguridad.codigoEmpresa},
	codigoAgencia: ${sessionScope.modeloSeguridad.codigoAgencia},
	nivelUsuario: ${sessionScope.modeloSeguridad.nivelUsuario}		
};

document.parametrosVista = {
	codigoMantenimientoDinamico: ${sessionScope.modeloVista.codigoMantenimientoDinamico},
	nombreEntidad: "${sessionScope.modeloVista.nombreEntidad}",
	descripcion: "${sessionScope.modeloVista.descripcionPagina}",
	tituloPanelFiltros: "Filtros de Busqueda",
	tituloPanelCentral: "${sessionScope.modeloVista.tituloPanel}",
	anchoPanelFiltros: "${sessionScope.modeloVista.anchoSeccionFiltros}"
};

document.parametrosSeguridad = {
	puedeAbrir: ${sessionScope.modeloSeguridad.puedeAbrir},
	puedeModificar: ${sessionScope.modeloSeguridad.puedeModificar},
	puedeEliminar: ${sessionScope.modeloSeguridad.puedeEliminar},
	puedeGuardar: ${sessionScope.modeloSeguridad.puedeGuardar},
	permisosOpcion: new Array()
};

