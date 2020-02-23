<%@ attribute name="configVar" required="true" rtexprvalue="false" type="java.lang.String" %>
<%@ attribute name="eventsVar" required="true" rtexprvalue="false" type="java.lang.String" %>
<%@ attribute name="tagJspContext" required="true" type="javax.servlet.jsp.JspContext" %>
<%@ attribute name="include" required="true" type="java.lang.String" %>
<%@ attribute name="exclude" required="false" type="java.lang.String" %>
<%@ attribute name="javaScript" required="false" type="java.lang.String" %>
<%@ attribute name="dynamicAttributes" required="true" type="java.util.HashMap" %>
<%@ variable alias="configMap" name-from-attribute="configVar" variable-class="java.util.LinkedHashMap" scope="AT_BEGIN" %>
<%@ variable alias="eventsMap" name-from-attribute="eventsVar" variable-class="java.util.LinkedHashMap" scope="AT_BEGIN" %>
<%@ include file="../inc/taglibs.jsp" %>
<%@ tag import="javax.servlet.jsp.tagext.JspTag,javax.servlet.jsp.tagext.SimpleTagSupport,java.util.Enumeration,java.util.HashMap,java.util.LinkedHashMap,java.util.Iterator,org.apache.commons.beanutils.BeanUtils"%>
<%
	LinkedHashMap<String,String> configMap = new LinkedHashMap<String,String>();
	LinkedHashMap<String,String> eventsMap = new LinkedHashMap<String,String>();
	String[] includes = ((String)jspContext.getAttribute("include")).split(",");
	String exclude = ((String)jspContext.getAttribute("exclude"));
	String javaScript = ((String)jspContext.getAttribute("javaScript"));
	
	// goes through all parent attributes
	
	for (Enumeration<String> attributesEn = tagJspContext.getAttributeNamesInScope(1); attributesEn.hasMoreElements();) {
		String key = attributesEn.nextElement();
		boolean isInclude = false;
		boolean isExclude = false;
		boolean isJavaScript = false;
		boolean isEvent = false;
		
		// check if include
		for (int i=0;i<includes.length;i++){
			if (key.indexOf(includes[i])>-1 || "*".equals(includes[i])) {
				isInclude = true;
				break;
			}
		}
		// check if exclude
		// default dynamicAttributes
		if (key.equals("dynamicAttributes") || key.equals("jspBody")){
			isExclude = true;
		// other attributes from exclude 	
		} else if (exclude !=null){
			String[] excludes = exclude.split(",");
			for (int i=0;i<excludes.length;i++){
				if (key.indexOf(excludes[i])>-1) {
					isExclude = true;
					break;
				}
			}
		}
			
		// check if JS
		// default JS attributes
		if (key.equals("handler") || key.equals("plugins") || key.equals("stateEvents")
				|| key.equals("defaults")
				|| key.equals("bufferResize")
				|| key.equals("scope")
				|| key.equals("applyTo")
				|| key.equals("keys")
				|| key.equals("tools")
				|| key.equals("buttons")
				|| key.equals("loader")
				|| key.equals("renderer")
				|| key.equals("store")
				|| key.equals("width")
				|| key.equals("validator")
				|| key.equals("layoutConfig")){
			
			isJavaScript = true;
			// check if isJavaScript code
		} else if (javaScript !=null){
			String[] javaScripts = javaScript.split(",");
			for (int i=0;i<javaScripts.length;i++){
				if (key.indexOf(javaScripts[i])>-1) {
					isJavaScript = true;
					break;
				}
			}
		}
		java.util.regex.Pattern pattern = java.util.regex.Pattern.compile("^on\\p{Upper}");
		java.util.regex.Matcher preFinder = pattern.matcher(key);
		
		if(preFinder.find()){
			isEvent = true;
		}
		
		// adds to var map if not exlude
		if (isInclude && !isExclude && !isEvent){
			String value = tagJspContext.getAttribute(key).toString();
			String className = tagJspContext.getAttribute(key).getClass().getName();
			String simpleClassName = className.substring(className.lastIndexOf(".") + 1);
			
			if (key.indexOf("Str")>-1){
				key = key.replace("Str","");
			}
			
			// String attribute
			if (!"true".equals(value)&& !"false".equals(value) && !isJavaScript && !"Integer".equals(simpleClassName) && !"Float".equals(simpleClassName)){
				value = "'"+value+"'";
			}
			configMap.put(key.toString(),value);
			
		// in case of event, adds js to ext_component_events request string	
		} else if (isEvent){
			String value = tagJspContext.getAttribute(key).toString();
			String eventName = key.toLowerCase().replaceFirst("on","");
			eventsMap.put(eventName,value);			
		}
	}
	
	// dynamic attributes
	Iterator<String> dynAttrIt = dynamicAttributes.keySet().iterator();
	while (dynAttrIt.hasNext()){
		String key = dynAttrIt.next();
		String value = (String)dynamicAttributes.get(key);
		
		// String attribute
		if (!"true".equals(value)&& !"false".equals(value)){
			value = "'"+value+"'";
		}
		
		configMap.put(key.toString(),value);
	}
	
	// declare global IDs
	if (tagJspContext.getAttribute("id")!=null){
		String comDecStr = (String)request.getAttribute("ext_component_declarations");
		String comId = (String)tagJspContext.getAttribute("id");
		comDecStr += comId+" = Ext.getCmp('"+comId+"');";
		request.setAttribute("ext_component_declarations",comDecStr);
	}
	
	jspContext.setAttribute("configMap",configMap);
	jspContext.setAttribute("eventsMap",eventsMap);
	
	includes = null;
	exclude = null;
	javaScript = null;
%>