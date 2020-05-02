<%-- MODIFICADO VANDRADE --%>
<%@ attribute
	name="cellActions"
	type="java.lang.String"
	required="false"
	description="
(String)(optional) Provee los parametros necesarios para el plugin cellActions.
" %>
<%@ attribute
	name="header"
	type="java.lang.String"
	required="false"
	description="(String)Any valid text or HTML fragment to display in the header cell for the checkbox column (defaults to div class=x-grid3-hd-checker> /div). The default CSS class of x-grid3-hd-checker displays a checkbox in the header and provides support for automatic check all/none behavior on header click. This string can be replaced by any valid HTML fragment, including a simple text string (e.g., Select Rows), but the automatic check all/none behavior will only work if the x-grid3-hd-checker class is supplied."
 %>
<%@ attribute
	name="singleSelect"
	type="java.lang.Boolean"
	required="false"
	description="(Boolean)True to allow selection of only one row at a time (defaults to false)"
 %>
<%@ attribute
	name="sortable"
	type="java.lang.Boolean"
	required="false"
	description="(Boolean)True if the checkbox column is sortable (defaults to false)."
 %>
<%@ attribute
	name="width"
	type="java.lang.Integer"
	required="false"
	description="(Number)The default width in pixels of the checkbox column (defaults to 20)."
 %>
<%@ attribute
	name="onBeforerowselect"
	type="java.lang.String"
	required="false"
	description="
( SelectionModel this, Number rowIndex, Boolean keepExisting, Record record )Fires when a row is being selected, return false to cancel.
Listeners will be called with the following arguments:

    * this : SelectionModel
    * rowIndex : Number
      The index to be selected
    * keepExisting : Boolean
      False if other selections will be cleared
    * record : Record
      The record to be selected

" %>
<%@ attribute
	name="onRowdeselect"
	type="java.lang.String"
	required="false"
	description="
( SelectionModel this, Number rowIndex, Record record )Fires when a row is deselected.
Listeners will be called with the following arguments:

    * this : SelectionModel
    * rowIndex : Number
    * record : Record

" %>
<%@ attribute
	name="onRowselect"
	type="java.lang.String"
	required="false"
	description="
( SelectionModel this, Number rowIndex, Ext.data.Record r )Fires when a row is selected.
Listeners will be called with the following arguments:

    * this : SelectionModel
    * rowIndex : Number
      The selected index
    * r : Ext.data.Record
      The selected record

" %>
<%@ attribute
	name="onSelectionchange"
	type="java.lang.String"
	required="false"
	description="
( SelectionModel this )Fires when the selection changes
Listeners will be called with the following arguments:

    * this : SelectionModel

" %>
<%@ include file="inc/taglibs.jsp" %>
<%@ tag 
	import="org.apache.commons.beanutils.BeanUtils"
	dynamic-attributes="dynamicAttributes"
	description="A custom selection model that renders a column of checkboxes that can be toggled to select or deselect rows." %>
<extutil:processTagAttributes configVar="configMap" eventsVar="eventsMap" include="*" exclude="items,cellActions" tagJspContext='<%=jspContext %>' dynamicAttributes="${dynamicAttributes}" />	
<c:set var="item">new Ext.grid.CheckboxSelectionModel({<c:if test="<%=BeanUtils.getProperty(this,"cellActions")!=null %>">cellActions:<% String cellActions = BeanUtils.getProperty(this,"cellActions");jspContext.getOut().write(cellActions.substring(0,cellActions.length()-1)); %>,</c:if><c:forEach items="${configMap}" var="config">${config.key}:${config.value},</c:forEach>listeners:{<c:forEach items="${eventsMap}" var="event" varStatus="status"><c:if test="${fn:indexOf(event.value,'function(')==-1}">${event.key}:function(){${event.value}}</c:if><c:if test="${fn:indexOf(event.value,'function(')>-1}">${event.key}:${event.value}</c:if>${status.last?'':','}</c:forEach>}}),</c:set>
<extutil:setParentProperties tag='<%=this%>' items="${item}" sm="${item}"/>