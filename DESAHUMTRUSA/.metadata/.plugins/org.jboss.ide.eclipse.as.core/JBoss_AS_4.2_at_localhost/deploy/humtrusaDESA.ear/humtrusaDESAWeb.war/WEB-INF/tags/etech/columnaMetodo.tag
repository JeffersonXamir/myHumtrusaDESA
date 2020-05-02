<%@ tag import="org.apache.commons.beanutils.BeanUtils,java.util.Scanner,java.util.*" %>
<%@ include file="prerequisitos/prerequisitos.jsp" %>
<%@ attribute 
	name="nombre" 
	description="El nombre del metodo correspondiente al objeto" 
	required="true" type="java.lang.String"
%>
<%@ attribute
	name="titulo" 
	description="El titulo o nombre visible de la columna" 
	required="true" type="java.lang.String"
%>
<%@ attribute
	name="ancho" 
	description="El ancho de la columna" 
	required="false" type="java.lang.String"
%>
<%@ attribute
	name="alineado" 
	description="El alineado de la columna (center|right|left)" 
	required="false" type="java.lang.String"
%>
<%@ attribute
	name="renderizador" 
	description="El renderer de la columna, por ejemplo money o monedaSinSimbolo" 
	required="false" type="java.lang.String"
%>
<%@ attribute
	name="tipoCampo" 
	description="El tipo de la columna (int|float|boolean|string|date)" 
	required="false" type="java.lang.String"
%>
<%@ attribute
	name="formatoFecha" 
	description="Usado SOLO cuando seteo el tipoCampo a date ejm: 'm/d/Y'" 
	required="false" type="java.lang.String"
%>
<%
	/* El orden es nombre|titulo|ancho|alineado|renderizador|tipoCampo|formatoFecha */
	StringBuffer salidaMetodo = new StringBuffer("");
	salidaMetodo.append(nombre+"|"+titulo+"|");
	salidaMetodo.append((ancho!=null)?ancho+"|":"null|");
	salidaMetodo.append((alineado!=null)?alineado+"|":"null|");
	salidaMetodo.append((renderizador!=null)?renderizador+"|":"null|");
	salidaMetodo.append((tipoCampo!=null)?tipoCampo+"|":"null|");
	salidaMetodo.append((formatoFecha!=null)?formatoFecha:"null");
	/* TODO falta el type */
	jspContext.setAttribute("metodosDetalle",salidaMetodo.toString());
	salidaMetodo.delete(0,salidaMetodo.length());
	salidaMetodo = null;
%>
<etech-utilidades:utilidades tag="<%=this%>" value="${metodosDetalle}" property="metodosDetalle" />