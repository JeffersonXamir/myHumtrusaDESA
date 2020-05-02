<%@tag import="javax.servlet.jsp.tagext.SimpleTag"%>
<%@ attribute name="tag" required="true" type="java.lang.Object" %>
<%@ attribute name="ancestor" required="false" type="java.lang.String" %>
<%@ attribute name="removeComma" required="false" type="java.lang.Boolean" %>
<%@ tag import="org.apache.commons.beanutils.BeanUtils,javax.servlet.jsp.tagext.JspTag,java.util.HashMap,javax.servlet.jsp.tagext.SimpleTagSupport,javax.servlet.jsp.tagext.TagSupport,javax.servlet.jsp.tagext.TagAdapter" dynamic-attributes="dynamicAttributes" description="Simple tag collecting row cells" %>
<%
	SimpleTagSupport targetTag = (SimpleTagSupport)jspContext.getAttribute("tag");
	SimpleTagSupport currentTag = targetTag;	
	
	HashMap dynamicAttributes = (HashMap)jspContext.getAttribute("dynamicAttributes");
	String path = targetTag.getClass().getPackage().toString().replace("package ","");
	String ancestor = (String)jspContext.getAttribute("ancestor");
	
	if (ancestor!=null){
		if ("paresnt".equals(ancestor)){
			TagAdapter tagAdaptor = (TagAdapter)currentTag.getParent();
			SimpleTagSupport foreignTag = (SimpleTagSupport)tagAdaptor.getAdaptee();
			targetTag = (SimpleTagSupport)foreignTag.getParent();
		} else {
			String[] ancestors = ancestor.split(",");
			for (String ancClassName:ancestors){
				targetTag = (SimpleTagSupport)this.findAncestorWithClass(currentTag,SimpleTag.class);
				if (targetTag!=null)break;
			}
		}
	}
			
	for (Object key:dynamicAttributes.keySet()){
		String value = (String)dynamicAttributes.get(key);
		
		if (value!=null){
		String parentValue = (String)BeanUtils.getProperty(targetTag,key.toString());
			if (parentValue!=null) value = parentValue + value;
			
			Boolean removeComma = (Boolean)jspContext.getAttribute("removeComma");
			if (removeComma!=null && removeComma){
				String lastChar = value.substring(value.length()-1,value.length());
				if (",".equals(lastChar)){
					value = value.substring(0,value.length()-1);
				}					
			}
			
			BeanUtils.setProperty(targetTag,key.toString(),value);
		}
	}
%>