<%@ tag import="org.apache.commons.beanutils.BeanUtils,java.util.Scanner,java.util.*" %>
<%@ include file="prerequisitos/prerequisitos.jsp" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ attribute 
	name="columnas" 
	description="Valor usado internamente por el tag" 
	required="false" type="java.lang.String" 
%>
<%@ attribute
	name="url" 
	description="La url con el servicio remoto que regresa los datos del tag" 
	required="true" type="java.lang.String"
%>
<%@
	attribute 
	name="id" 
	description="El id de la tabla a crear" 
	required="false" type="java.lang.String"
%>
<%@
	attribute 
	name="nodoPadre" 
	description="El nodo padre del servicio remoto" 
	required="true" type="java.lang.String"
%>
<jsp:doBody />
<c:set var="item">    
new Ext.grid.GridPanel({
	id: '${id}',
	region:'center',
	stripeRows:true,
	height:400,
	autoScroll:true,
	viewConfig:'{autoFill:true}',
	loadMask:true,
	cm:new Ext.grid.ColumnModel(
		[
<%
	String cols = BeanUtils.getProperty(this,"columnas");
	List<String> lsCods = new Vector<String>();
	
	if (cols!=null){
		StringTokenizer st = new StringTokenizer(cols,",");
		String salida = "";
		
		int posicion = 0;
		while(st.hasMoreTokens()){
			posicion++;
			String aux = (String)st.nextElement();
			StringTokenizer tmp = new StringTokenizer(aux,"-");
			String nombreColumna = (String)tmp.nextElement();
			String codigoColumna = (String)tmp.nextElement();
			lsCods.add(nombreColumna);
			salida += "{dataIndex:'"+posicion+"',sortable:true,dataIndex:'"+nombreColumna+"',header:'"+codigoColumna+"'}";
			if(st.hasMoreTokens()){
				salida += ",";
			}
		}
		
		jspContext.getOut().write(salida);
	}
%>
		]
	),
	store: new Ext.data.Store({
		autoLoad:true,
		url:'${url}',
		reader:new Ext.data.XmlReader({
    		record:'${nodoPadre}',
       		fields:[
<%
	int cantElem = lsCods.size();
	int auxt = 0;
	
	for(String codG : lsCods){
		auxt++;
		jspContext.getOut().write("{name:'"+codG+"'}");
		if(auxt<cantElem){jspContext.getOut().write(",");}
	}
%>
        	]
		})
	})
}),
</c:set>
<extutil:setParentProperties tag="<%=this%>" items="${item}" />