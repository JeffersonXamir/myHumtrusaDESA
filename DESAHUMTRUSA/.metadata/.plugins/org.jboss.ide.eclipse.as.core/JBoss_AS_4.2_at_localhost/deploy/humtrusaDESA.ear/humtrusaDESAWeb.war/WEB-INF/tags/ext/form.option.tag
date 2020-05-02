<%@ attribute
	name="text"
	type="java.lang.String"
	required="false"
	description="(String)The option text"
 %>
<%@ attribute
	name="value"
	type="java.lang.String"
	required="true"
	description="Combobox option value"
 %>
<%@ include file="inc/taglibs.jsp" %>
<%@ tag 
	import="org.apache.commons.beanutils.BeanUtils"
	dynamic-attributes="dynamicAttributes"
	description="Simple tag providing Ext.ComboboxItems (via SimpleStore)" %>
<c:if test="${empty(text)}"><jsp:doBody var="text" scope="page" /></c:if>
<extutil:processTagAttributes configVar="configMap" eventsVar="eventsMap" include="*" tagJspContext='<%=jspContext %>' dynamicAttributes="${dynamicAttributes}" />	
<c:set var="item">['${value}', '${text}'],</c:set><extutil:setParentProperties tag='<%=this%>' items="${item}" />