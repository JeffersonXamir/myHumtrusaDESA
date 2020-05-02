<%@ attribute name="tag" required="true" type="javax.servlet.jsp.tagext.SimpleTagSupport" %>
<%@ attribute name="property" required="true" type="java.lang.String" %>
<%@ attribute name="value" required="true" type="java.lang.String" %>
<%@ tag import="org.apache.commons.beanutils.BeanUtils,javax.servlet.jsp.tagext.JspTag,javax.servlet.jsp.tagext.SimpleTagSupport,javax.servlet.jsp.tagext.SimpleTag" %>
<%
	SimpleTagSupport targetTag = (SimpleTagSupport)this.findAncestorWithClass(tag,SimpleTag.class);
	String anterior = BeanUtils.getProperty(targetTag,property);
	
	if(anterior!=null){
		BeanUtils.setProperty(targetTag,property,anterior+","+value);
	}else{
		BeanUtils.setProperty(targetTag,property,value);
	}
%>