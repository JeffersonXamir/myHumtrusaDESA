<%@tag import="java.io.StringReader,java.io.BufferedReader"%><%@ attribute name="items" type="java.lang.String" required="false" description="(String) Items container, generated automatically." %><%@ include file="inc/taglibs.jsp" %><%@ tag import="org.apache.commons.beanutils.BeanUtils" dynamic-attributes="dynamicAttributes" description="" %>
<c:set var="ext_component_declarations" scope="request"/><c:set var="ext_component_executions" scope="request"/><jsp:doBody var="pageHTML" />
<%
	String pageHTML = (String)jspContext.getAttribute("pageHTML");
	StringBuffer salidaHTML = new StringBuffer("");
	String pageLine = "";
	
	BufferedReader br = new BufferedReader(new StringReader(pageHTML));
	while((pageLine=br.readLine())!=null){if(pageLine.trim().length()>0){salidaHTML.append(pageLine+"\n");}}
	jspContext.setAttribute("pageHTML",salidaHTML.toString());
	
	salidaHTML.delete(0,salidaHTML.length());
	salidaHTML = null;
	pageLine = null;
%>
<script type="text/javascript">Ext.onReady(function(){${ext_component_commons}})</script>${pageHTML}<script type="text/javascript">Ext.onReady(function(){try {${ext_component_declarations};${ext_component_executions};}catch(e){};<c:if test='<%= BeanUtils.getProperty(this,"items")!=null %>'><% String itemsStr = BeanUtils.getProperty(this,"items");if(itemsStr.endsWith(",")){itemsStr = itemsStr.substring(0, itemsStr.length()-2);}if(!itemsStr.endsWith(")")){itemsStr = itemsStr.concat(")");} %>var bodyContainer = new Ext.Container({items:<%=itemsStr %>})</c:if>});</script>
<%
	// valores para aumentar la cantidad de memoria tras el render de los tags
	java.util.HashMap h1 = (java.util.HashMap)jspContext.getAttribute("dynamicAttributes");
	String contenido = (String)jspContext.getAttribute("pageHTML");
	contenido = null;
	h1.clear();
	h1 = null;
	jspContext.removeAttribute("dynamicAttributes");
	jspContext.removeAttribute("pageHTML");
	jspContext.removeAttribute("configMap"); 
	jspContext.removeAttribute("eventsMap");
%>