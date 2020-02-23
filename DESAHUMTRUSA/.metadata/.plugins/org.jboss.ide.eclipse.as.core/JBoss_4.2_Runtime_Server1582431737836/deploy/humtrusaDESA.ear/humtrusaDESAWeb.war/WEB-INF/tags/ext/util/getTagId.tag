<%@ attribute name="tag" required="true" type="java.lang.Object" %>
<%@ tag import="javax.servlet.jsp.tagext.SimpleTagSupport,org.apache.commons.beanutils.BeanUtils,javax.servlet.jsp.tagext.SimpleTag"%>	
<% 
	if (jspContext.getAttribute("tag")!=null) {
		String id = null;
		try {
			id = BeanUtils.getProperty(tag,"id");
		} catch(Exception e){}
		if (id!=null && id != ""){
			out.write(id);
		} else {
			out.write(tag.toString().replace("org.apache.jsp.tag.web.","").replace("com.ibm.ws.jsp.tagfile.webinf.","").replace(".", "_").replace("@", ""));
		} 
	} else out.write("");

%>