<%@ tag import="org.apache.commons.beanutils.BeanUtils,java.util.Scanner,java.util.*" %>
<%@ include file="prerequisitos/prerequisitos.jsp" %>
<%@ attribute name="nombre" description="El nombre de la columna" required="true" type="java.lang.String" %>
<%@ attribute name="titulo" description="El titulo o nombre visible de la columna" required="true" type="java.lang.String" %>
<c:set var="columnas" value="${nombre}-${titulo}" /><etech-utilidades:utilidades tag="<%=this%>" value="${columnas}" property="columnas" />