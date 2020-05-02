<%@ tag description="Creates Ext object before main execution." %>
<%@ include file="../inc/taglibs.jsp" %>
<jsp:doBody var="item" scope="page"></jsp:doBody>
<%	
	String ext_component_executions = (String)request.getAttribute("ext_component_executions");
	if (ext_component_executions==null)ext_component_executions= "";
	request.setAttribute("ext_component_executions",ext_component_executions+jspContext.getAttribute("item"));
%>