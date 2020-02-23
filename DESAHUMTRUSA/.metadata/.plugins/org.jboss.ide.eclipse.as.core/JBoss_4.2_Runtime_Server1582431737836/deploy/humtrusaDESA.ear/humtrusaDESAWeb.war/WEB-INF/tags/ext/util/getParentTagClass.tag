<%@ attribute name="tag" required="true" type="javax.servlet.jsp.tagext.SimpleTagSupport" %>
<%@ tag import="javax.servlet.jsp.tagext.SimpleTagSupport,org.apache.commons.beanutils.BeanUtils,javax.servlet.jsp.tagext.SimpleTag"%>
<% 
	tag = (SimpleTagSupport)this.findAncestorWithClass(tag,SimpleTag.class);
	if (tag !=null){
		out.write(tag.getClass().getSimpleName());
	} else out.write("");
%>