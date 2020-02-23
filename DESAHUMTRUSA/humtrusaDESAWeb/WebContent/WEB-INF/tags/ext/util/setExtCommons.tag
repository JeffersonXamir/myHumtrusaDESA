<%@ tag description="Creates Ext object before main execution." %>
<%@ include file="../inc/taglibs.jsp" %>
<jsp:doBody var="item" scope="page"></jsp:doBody>
<%	
	String ext_component_commons = (String)request.getAttribute("ext_component_commons");
	if (ext_component_commons==null)ext_component_commons= "";
	request.setAttribute("ext_component_commons",ext_component_commons+jspContext.getAttribute("item"));
%>