<%@ tag import="org.apache.commons.beanutils.BeanUtils,java.util.Scanner,java.util.*" %>
<%@ include file="prerequisitos/prerequisitos.jsp" %>
<%@ attribute 
	name="valor" 
	description="El valor del radio al ser seleccionado" 
	required="true" type="java.lang.String"
%>
<%@ attribute
	name="etiqueta" 
	description="El titulo o nombre visible del radio" 
	required="true" type="java.lang.String"
%>
<%@ attribute
	name="seleccionado" 
	description="Determina si el radio esta o no seleccionado" 
	required="true" type="java.lang.Boolean"
%>
<c:set var="radios" value="${valor}-${etiqueta}-${seleccionado}" />
<etech-utilidades:utilidades tag="<%=this%>" value="${radios}" property="radios" />