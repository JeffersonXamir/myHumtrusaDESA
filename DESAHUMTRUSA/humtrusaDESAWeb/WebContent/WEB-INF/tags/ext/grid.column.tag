<%@ attribute
	name="align"
	type="java.lang.String"
	required="false"
	description="
(String)(optional) Set the CSS text-align property of the column. Defaults to undefined.
" %>
<%@ attribute
	name="dataIndex"
	type="java.lang.String"
	required="false"
	description="
(String)(optional) The name of the field in the grids Ext.data.Stores Ext.data.Record definition from which to draw the columns value. If not specified, the columns index is used as an index into the Records data Array.
" %>
<%@ attribute
	name="editor"
	type="java.lang.String"
	required="false"
	description="
(Ext.form.Field)(optional) The Ext.form.Field to use when editing values in this column if editing is supported by the grid.
" %>
<%@ attribute
	name="fixed"
	type="java.lang.Boolean"
	required="false"
	description="
(Boolean)(optional) True if the column width cannot be changed. Defaults to false.
" %>
<%@ attribute
	name="header"
	type="java.lang.String"
	required="false"
	description="
(String)The header text to display in the Grid view.
" %>
<%@ attribute
	name="hidden"
	type="java.lang.Boolean"
	required="false"
	description="
(Boolean)(optional) True to hide the column. Defaults to false.
" %>
<%@ attribute
	name="hideable"
	type="java.lang.Boolean"
	required="false"
	description="
(Boolean)(optional) Specify as false to prevent the user from hiding this column. Defaults to true.
" %>
<%@ attribute
	name="id"
	type="java.lang.String"
	required="false"
	description="
(String)(optional) Defaults to the columns initial ordinal position. A name which identifies this column. The id is used to create a CSS class name which is applied to all table cells (including headers) in that column. The class name takes the form of 

x-grid3-td-id

 

 Header cells will also recieve this class name, but will also have the class x-grid3-hd

, so to target header cells, use CSS selectors such as:

.x-grid3-hd.x-grid3-td-id

The Ext.grid.Grid.autoExpandColumn grid config option references the column via this identifier.
" %>
<%@ attribute
	name="listeners"
	type="java.lang.Object"
	required="false"
	description="
(Object)A config object containing one or more event handlers to be added to this object during initialization. This should be a valid listeners config object as specified in the addListener example for attaching multiple handlers at once.
" %>
<%@ attribute
	name="renderer"
	type="java.lang.String"
	required="false"
	description="
(Function)(optional) A function used to generate HTML markup for a cell given the cells data value. See setRenderer. If not specified, the default renderer uses the raw data value.
" %>
<%@ attribute
	name="resizable"
	type="java.lang.Boolean"
	required="false"
	description="
(Boolean)(optional) False to disable column resizing. Defaults to true.
" %>
<%@ attribute
	name="sortable"
	type="java.lang.Boolean"
	required="false"
	description="
(Boolean)(optional) True if sorting is to be allowed on this column. Defaults to the value of the defaultSortable property. Whether local/remote sorting is used is specified in Ext.data.Store.remoteSort.
" %>
<%@ attribute
	name="width"
	type="java.lang.Integer"
	required="false"
	description="
(Number)(optional) The initial width in pixels of the column. Using this instead of Ext.grid.Grid.autoSizeColumns is more efficient.
" %>
<%@ attribute
	name="onColumnmoved"
	type="java.lang.Integer"
	required="false"
	description="
( ColumnModel this, Number oldIndex, Number newIndex )Fires when a column is moved.
" %>
<%@ attribute
	name="onConfigchanged"
	type="java.lang.String"
	required="false"
	description="
( ColumnModel this )Fires when the configuration is changed
" %>
<%@ attribute
	name="onHeaderchange"
	type="java.lang.String"
	required="false"
	description="
( ColumnModel this, Number columnIndex, String newText )Fires when the text of a header changes.
" %>
<%@ attribute
	name="onHiddenchange"
	type="java.lang.Integer"
	required="false"
	description="
( ColumnModel this, Number columnIndex, Boolean hidden )Fires when a column is hidden or unhidden.
" %>
<%@ attribute
	name="onWidthchange"
	type="java.lang.Integer"
	required="false"
	description="
( ColumnModel this, Number columnIndex, Number newWidth )Fires when the width of a column changes.
" %>
<%@ attribute
	name="fieldsName"
	type="java.lang.String"
	required="false"
	description="The name by which the field is referenced within the Record. This is referenced by, for example the dataIndex property in column definition objects passed to Ext.grid.ColumnModel."
 %>
<%@ attribute
	name="fieldsMapping"
	type="java.lang.String"
	required="false"
	description="(Optional) A path specification for use by the Ext.data.Reader implementation that is creating the Record to access the data value from the data object. If an Ext.data.JsonReader is being used, then this is a string containing the javascript expression to reference the data relative to the record items root. If an Ext.data.XmlReader is being used, this is an Ext.DomQuery path to the data item relative to the record element. If the mapping expression is the same as the field name, this may be omitted."
 %>
<%@ attribute
	name="fieldsType"
	type="java.lang.String"
	required="false"
	description="(String)(Optional) The data type for conversion to displayable value. Possible values are: 
	auto (Default, implies no conversion)
    , string
    , int
    , float
    , boolean
    , date"
 %>
<%@ attribute
	name="fieldsSortType"
	type="java.lang.String"
	required="false"
	description="(String)(Optional) A member of Ext.data.SortTypes. "
 %>
<%@ attribute
	name="fieldsSortDir"
	type="java.lang.String"
	required="false"
	description="(Optional) Initial direction to sort. ASC or DESC."
 %>
<%@ attribute
	name="fieldsConvert"
	type="java.lang.String"
	required="false"
	description="(Function)(Optional)  A function which converts the value provided by the Reader into an object that will be stored in the Record. It is passed the following parameters: v : Mixed, The data value as read by the Reader."
 %>
<%@ attribute
	name="fieldsDateFormat"
	type="java.lang.String"
	required="false"
	description="(Optional) A format String for the Date.parseDate function."
 %>
<%@ attribute
	name="items"
	type="java.lang.String"
	required="false"
	description="(String)Editor container, generated by child tags."
 %>
<%-- MODIFICADO VANDRADE --%>
<%@ attribute
	name="cellActions"
	type="java.lang.String"
	required="false"
	description="
(String)(optional) Provee los parametros necesarios para el plugin cellActions.
" %>
<%@ include file="inc/taglibs.jsp" %>
<%@ tag 
	import="org.apache.commons.beanutils.BeanUtils,javax.servlet.jsp.tagext.SimpleTag"
	dynamic-attributes="dynamicAttributes"
	description=" Single radio field. Same as Checkbox, but provided as a convenience for automatically setting the input type. Radio grouping is handled automatically by the browser if you give each radio in a group the same name." %>
<extutil:processTagAttributes configVar="configMap" eventsVar="eventsMap" include="*" exclude="items,listeners,cellActions" javaScript="editor" tagJspContext='<%=jspContext %>' dynamicAttributes="${dynamicAttributes}" />	
<% int colSize = new Integer(BeanUtils.getProperty(this.findAncestorWithClass(this,SimpleTag.class),"colSize")).intValue();BeanUtils.setProperty(this.findAncestorWithClass(this,SimpleTag.class),"colSize",new Integer(++colSize)); %>
<c:set var="fields">name:'<%= colSize %>',</c:set><jsp:doBody/><c:set var="item">{dataIndex:'<%= colSize %>',<c:forEach items="${configMap}" var="config"><c:set var="key" value="${config.key}"/><c:if test="${key=='fieldsName'}">dataIndex:${config.value},</c:if><c:if test="${fn:indexOf(key,'fields')==-1}">${config.key}:${config.value},</c:if><c:if test="${fn:indexOf(key,'fields')>-1}"><c:set var="fields">${fields}<% String key = (String)jspContext.getAttribute("key");key = key.replaceFirst("fields","");String firstChar = key.substring(0,1);key = firstChar.toLowerCase()+key.substring(1,key.length());out.write(key); %>:${config.value},</c:set></c:if></c:forEach><% String items = BeanUtils.getProperty(this,"items"); %><c:if test='<%= items!=null %>'>editor:<%= items.substring(0,items.length()-1) %>,</c:if><c:if test="<%=BeanUtils.getProperty(this,"cellActions")!=null %>">cellActions:<% String cellActions = BeanUtils.getProperty(this,"cellActions");jspContext.getOut().write(cellActions.substring(0,cellActions.length()-1)); %>,</c:if>listeners:{<c:if test="<%= BeanUtils.getProperty(this,"listeners")!=null %>"><% String listeners = BeanUtils.getProperty(this,"listeners");jspContext.getOut().write(listeners.substring(0,listeners.length()-1)); %></c:if>}},</c:set>
<% String fields = (String)jspContext.getAttribute("fields");fields = fields.substring(0,fields.length()-1);jspContext.setAttribute("fields","{"+fields+"},"); %><extutil:setParentProperties tag='<%=this%>' items="${item}" fields="${fields}" />