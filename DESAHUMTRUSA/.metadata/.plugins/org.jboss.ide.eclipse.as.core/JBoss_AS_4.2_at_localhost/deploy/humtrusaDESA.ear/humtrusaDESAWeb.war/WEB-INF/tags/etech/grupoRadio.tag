<%@ tag import="org.apache.commons.beanutils.BeanUtils,java.util.Scanner,java.util.*" %>
<%@ include file="prerequisitos/prerequisitos.jsp" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ attribute 
	name="radios" 
	description="Valor usado internamente por el tag" 
	required="false" type="java.lang.String" 
%>
<%@
	attribute 
	name="id" 
	description="El id de la tabla a crear" 
	required="true" type="java.lang.String"
%>
<%@
	attribute 
	name="nombre" 
	description="El nombre del elemento de forma html (name)" 
	required="true" type="java.lang.String"
%>
<%@
	attribute 
	name="horizontal" 
	description="Define como se despliega el grupo de radios (true para horizontal)" 
	required="true" type="java.lang.Boolean"
%>
<%@
	attribute 
	name="etiqueta" 
	description="La etiqueta (labelField) que muestra el componente en una forma" 
	required="true" type="java.lang.String"
%>
<jsp:doBody />
<c:set var="item">    
{
	xtype:'ux-radiogroup',
	fieldLabel:'${etiqueta}',
	name:'${nombre}',
	horizontal:${horizontal},
	id:'${id}',
	radios:[
<%
	String rads = BeanUtils.getProperty(this,"radios");
	
	if (rads!=null){
		StringTokenizer st = new StringTokenizer(rads,",");
		String salida = "";
		
		while(st.hasMoreTokens()){
			String aux = (String)st.nextElement();
			StringTokenizer tmp = new StringTokenizer(aux,"-");
			
			String valor = (String)tmp.nextElement();
			String etiqueta = (String)tmp.nextElement();
			Boolean seleccionada = new Boolean((String)tmp.nextElement()); 
			
			if(seleccionada){
				salida += "{value:'"+valor+"',boxLabel:'"+etiqueta+"',checked:'"+seleccionada+"'}";
			}else{
				salida += "{value:'"+valor+"',boxLabel:'"+etiqueta+"'}";
			}
			
			if(st.hasMoreTokens()){
				salida += ",";
			}
		}
		
		jspContext.getOut().write(salida);
	}
%>
	]
},
</c:set>
<extutil:setParentProperties tag="<%=this%>" items="${item}" />