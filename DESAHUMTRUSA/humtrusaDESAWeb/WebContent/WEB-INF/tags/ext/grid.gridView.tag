<%@ attribute
	name="autoFill"
	type="java.lang.Boolean"
	required="false"
	description="
(Boolean)True to auto expand the columns to fit the grid when the grid is created.
" %>
<%@ attribute
	name="emptyText"
	type="java.lang.String"
	required="false"
	description="
(String)Default text to display in the grid body when no rows are available (defaults to ).
" %>
<%@ attribute
	name="enableRowBody"
	type="java.lang.Boolean"
	required="false"
	description="
(Boolean)True to add a second TR element per row that can be used to provide a row body that spans beneath the data row. Use the getRowClass methods rowParams config to customize the row body.
" %>
<%@ attribute
	name="forceFit"
	type="java.lang.Boolean"
	required="false"
	description="
(Boolean)True to auto expand/contract the size of the columns to fit the grid width and prevent horizontal scrolling.
" %>
<%@ attribute
	name="listeners"
	type="java.lang.Object"
	required="false"
	description="
(Object)A config object containing one or more event handlers to be added to this object during initialization. This should be a valid listeners config object as specified in the addListener example for attaching multiple handlers at once.
" %>
<%@ attribute
	name="onBeforerefresh"
	type="java.lang.String"
	required="false"
	description="
( Ext.grid.GridView view )Internal UI Event. Fired before the view is refreshed.
" %>
<%@ attribute
	name="onBeforerowremoved"
	type="java.lang.Integer"
	required="false"
	description="
( Ext.grid.GridView view, Number rowIndex, Ext.data.Record record )Internal UI Event. Fired before a row is removed.
" %>
<%@ attribute
	name="onBeforerowsinserted"
	type="java.lang.Integer"
	required="false"
	description="
( Ext.grid.GridView view, Number firstRow, Number lastRow )Internal UI Event. Fired before rows are inserted.
" %>
<%@ attribute
	name="onRefresh"
	type="java.lang.String"
	required="false"
	description="
( Ext.grid.GridView view )Internal UI Event. Fired after the GridViews body has been refreshed.
" %>
<%@ attribute
	name="onRowremoved"
	type="java.lang.Integer"
	required="false"
	description="
( Ext.grid.GridView view, Number rowIndex, Ext.data.Record record )Internal UI Event. Fired after a row is removed.
" %>
<%@ attribute
	name="onRowsinserted"
	type="java.lang.Integer"
	required="false"
	description="
( Ext.grid.GridView view, Number firstRow, Number lastRow )Internal UI Event. Fired after rows are inserted.
" %>
<%@ attribute
	name="onRowupdated"
	type="java.lang.Integer"
	required="false"
	description="
( Ext.grid.GridView view, Number firstRow, Ext.data.record record )Internal UI Event. Fired after a row has been updated.
" %>
<%@ include file="inc/taglibs.jsp" %>
<%@ tag 
	import="org.apache.commons.beanutils.BeanUtils"
	dynamic-attributes="dynamicAttributes"
	description="This class encapsulates the user interface of an Ext.grid.GridPanel. Methods of this class may be used to access user interface elements to enable special display effects. Do not change the DOM structure of the user interface. This class does not provide ways to manipulate the underlying data. The data model of a Grid is held in an Ext.data.Store." %>
<extutil:processTagAttributes configVar="configMap" eventsVar="eventsMap" include="*" exclude="items" tagJspContext='<%=jspContext %>' dynamicAttributes="${dynamicAttributes}" />	
<c:set var="item">new Ext.grid.GridView({<c:forEach items="${configMap}" var="config">${config.key}:${config.value},</c:forEach>listeners:{<c:forEach items="${eventsMap}" var="event" varStatus="status"><c:if test="${fn:indexOf(event.value,'function(')==-1}">${event.key}:function(){${event.value}}</c:if><c:if test="${fn:indexOf(event.value,'function(')>-1}">${event.key}:${event.value}</c:if>${status.last?'':','}</c:forEach>}})</c:set>
<extutil:setParentProperties tag='<%= this %>' view="${item}" />