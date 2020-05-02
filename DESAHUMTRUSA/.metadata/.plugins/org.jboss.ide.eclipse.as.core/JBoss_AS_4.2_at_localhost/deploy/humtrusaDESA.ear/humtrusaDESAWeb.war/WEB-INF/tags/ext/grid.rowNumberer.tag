<%@ attribute
	name="header"
	type="java.lang.String"
	required="false"
	description="
(String)Any valid text or HTML fragment to display in the header cell for the row number column (defaults to ).
" %>
<%@ attribute
	name="sortable"
	type="java.lang.Boolean"
	required="false"
	description="
(Boolean)True if the row number column is sortable (defaults to false).
" %>
<%@ attribute
	name="width"
	type="java.lang.Integer"
	required="false"
	description="
(Number)The default width in pixels of the row number column (defaults to 23).
" %>
<%@ include file="inc/taglibs.jsp" %>
<%@ tag 
	import="org.apache.commons.beanutils.BeanUtils"
	dynamic-attributes="dynamicAttributes"
	description="A custom selection model that renders a column of checkboxes that can be toggled to select or deselect rows." %>
<extutil:processTagAttributes configVar="configMap" eventsVar="eventsMap" include="*" exclude="items" tagJspContext='<%=jspContext %>' dynamicAttributes="${dynamicAttributes}" />	
<c:set var="item">new Ext.grid.RowNumberer({<c:forEach items="${configMap}" var="config">${config.key}:${config.value},</c:forEach>listeners:{<c:forEach items="${eventsMap}" var="event" varStatus="status"><c:if test="${fn:indexOf(event.value,'function(')==-1}">${event.key}:function(){${event.value}}</c:if><c:if test="${fn:indexOf(event.value,'function(')>-1}">${event.key}:${event.value}</c:if>${status.last?'':','}</c:forEach>}}),</c:set>
<extutil:setParentProperties tag='<%=this%>' items="${item}" />