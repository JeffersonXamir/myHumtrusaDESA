<%@ attribute name="tag" required="true" type="javax.servlet.jsp.tagext.SimpleTagSupport" %>
<%@ attribute name="removeComma" required="false" type="java.lang.Boolean" %>
<%@ tag 
	import="
		org.apache.commons.beanutils.BeanUtils,
		javax.servlet.jsp.tagext.JspTag,
		java.util.HashMap,
		java.util.Iterator,
		javax.servlet.jsp.tagext.SimpleTagSupport,
		javax.servlet.jsp.tagext.SimpleTag,
		javax.servlet.jsp.tagext.TagSupport,
		javax.servlet.jsp.tagext.TagAdapter"

	dynamic-attributes="dynamicAttributes"
	description="Simple tag collecting row cells" %>
<%	
	HashMap dynamicAttributes = (HashMap)jspContext.getAttribute("dynamicAttributes");	
	SimpleTagSupport targetTag = (SimpleTagSupport)this.findAncestorWithClass(tag,SimpleTag.class);
	
	Iterator dynamicAttrIt = dynamicAttributes.keySet().iterator();
	while (dynamicAttrIt.hasNext()){
		String key = (String)dynamicAttrIt.next();
		String value = (String)dynamicAttributes.get(key);
		
		if (value!=null){
		String parentValue = (String)BeanUtils.getProperty(targetTag,key.toString());
			if (parentValue!=null) value = parentValue + value;
			
			if (removeComma!=null && removeComma.booleanValue()){
				String lastChar = value.substring(value.length()-1,value.length());
				if (",".equals(lastChar)){
					value = value.substring(0,value.length()-1);
				}					
			}
			
			BeanUtils.setProperty(targetTag,key.toString(),value);
		}
	}
%>