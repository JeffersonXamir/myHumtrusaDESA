<%@ attribute
	name="name"
	type="java.lang.String"
	required="false"
	description="The name by which the field is referenced within the Record. This is referenced by, for example the dataIndex property in column definition objects passed to Ext.grid.ColumnModel."
 %>
<%@ attribute
	name="mapping"
	type="java.lang.String"
	required="false"
	description="(Optional) A path specification for use by the Ext.data.Reader implementation that is creating the Record to access the data value from the data object. If an Ext.data.JsonReader is being used, then this is a string containing the javascript expression to reference the data relative to the record items root. If an Ext.data.XmlReader is being used, this is an Ext.DomQuery path to the data item relative to the record element. If the mapping expression is the same as the field name, this may be omitted."
 %>
<%@ attribute
	name="type"
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
	name="sortType"
	type="java.lang.String"
	required="false"
	description="(String)(Optional) A member of Ext.data.SortTypes. "
 %>
<%@ attribute
	name="sortDir"
	type="java.lang.String"
	required="false"
	description="(Optional) Initial direction to sort. ASC or DESC."
 %>
<%@ attribute
	name="convert"
	type="java.lang.String"
	required="false"
	description="(Function)(Optional)  A function which converts the value provided by the Reader into an object that will be stored in the Record. It is passed the following parameters: v : Mixed, The data value as read by the Reader."
 %>
<%@ attribute
	name="dateFormat"
	type="java.lang.String"
	required="false"
	description="(Optional) A format String for the Date.parseDate function."
 %>
<%@ include file="inc/taglibs.jsp" %>
<%@ tag import="org.apache.commons.beanutils.BeanUtils" dynamic-attributes="dynamicAttributes" description="Field config, attributes are used from create method of data.Record object" %>
<extutil:processTagAttributes configVar="configMap" eventsVar="eventsMap" include="*" javaScript="sortType" tagJspContext='<%=jspContext %>' dynamicAttributes="${dynamicAttributes}" />	
<jsp:doBody/><c:set var="item">{<c:forEach items="${configMap}" varStatus="status" var="config">${config.key}:${config.value}<c:if test="${!status.last}">,</c:if></c:forEach>},</c:set><extutil:setParentProperties tag='<%= this %>' fields="${item}" />