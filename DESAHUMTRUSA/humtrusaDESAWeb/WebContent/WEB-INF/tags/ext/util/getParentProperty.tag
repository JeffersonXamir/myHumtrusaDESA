<%@ attribute name="tag" required="true" type="javax.servlet.jsp.tagext.SimpleTagSupport" %>
<%@ attribute name="property" required="true" type="java.lang.String" %>
<%@ tag import="javax.servlet.jsp.tagext.SimpleTag,javax.servlet.jsp.tagext.SimpleTagSupport,org.apache.commons.beanutils.BeanUtils"%>
<% 
	tag = (SimpleTagSupport)this.findAncestorWithClass(tag,SimpleTag.class);
	if (tag!=null){
		String value = BeanUtils.getProperty(tag,property);
		if (value != null)out.write(value.toString());
	} else out.write("");
%>