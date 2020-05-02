<%@ attribute
	name="id"
	type="java.lang.String"
	required="false"
	description="
(String)Name of the property within a row object that contains a record identifier value.
" %>
<%@ attribute
	name="root"
	type="java.lang.String"
	required="false"
	description="
(String)name of the property which contains the Array of row objects.
" %>
<%@ attribute
	name="successProperty"
	type="java.lang.String"
	required="false"
	description="
(String)Name of the property from which to retrieve the success attribute used by forms.
" %>
<%@ attribute
	name="totalProperty"
	type="java.lang.String"
	required="false"
	description="
(String)Name of the property from which to retrieve the total number of records in the dataset. This is only needed if the whole dataset is not passed in one go, but is being paged from the remote server.
" %>
<%@ attribute
	name="fields"
	type="java.lang.String"
	required="false"
	description="(String) Fields definition, generated automatically."
 %>
<%@ include file="inc/taglibs.jsp" %><%@ tag import="org.apache.commons.beanutils.BeanUtils"	dynamic-attributes="dynamicAttributes" description=" The Store class encapsulates a client side cache of Record objects which provide input data for Components such as the GridPanel, the ComboBox, or the DataView. A Store object uses its configured implementation of DataProxy to access a data object unless you call loadData directly and pass in your data. A Store object has no knowledge of the format of the data returned by the Proxy. A Store object uses its configured implementation of DataReader to create Record instances from the data object. These Records are cached and made available through accessor functions." %>
<extutil:processTagAttributes configVar="configMap" eventsVar="eventsMap" include="*" javaScript="fields" tagJspContext='<%=jspContext %>' dynamicAttributes="${dynamicAttributes}" />	
<jsp:doBody/><c:set var="item">new Ext.data.JsonReader({<c:forEach items="${configMap}" var="config"><c:if test="${config.key!='fields'}">${config.key}:${config.value},</c:if></c:forEach><c:if test='<%= BeanUtils.getProperty(this,"fields")!=null %>'>fields:[<%= BeanUtils.getProperty(this,"fields") %>],</c:if>listeners:{<c:forEach items="${eventsMap}" var="event" varStatus="status"><c:if test="${fn:indexOf(event.value,'function(')==-1}">${event.key}:function(){${event.value}}</c:if><c:if test="${fn:indexOf(event.value,'function(')>-1}">${event.key}:${event.value}</c:if>${status.last?'':','}</c:forEach>}})</c:set>
<extutil:setParentProperties tag='<%= this %>' reader="${item}" />