<%@ attribute name="tag" required="true" type="javax.servlet.jsp.tagext.SimpleTagSupport" %>
<%@ tag import="javax.servlet.jsp.tagext.SimpleTagSupport,org.apache.commons.beanutils.BeanUtils,javax.servlet.jsp.tagext.SimpleTag"%>
<% 
	tag = (SimpleTagSupport)this.findAncestorWithClass(tag,SimpleTag.class);
	if (tag !=null){
		String id = BeanUtils.getProperty(tag,"id");
		if (id!=null && id != ""){
			out.write(id);
		} else {
			out.write(tag.toString().replace("org.apache.jsp.tag.web.","").replace(".", "_").replace("@", ""));
		}
	} else out.write("");
%>