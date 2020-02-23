<%@ attribute name="items" type="java.lang.String" required="false" description="(String) items container, used by tag only" %>
<%@ include file="inc/taglibs.jsp" %>
<%@ tag 
	import="org.apache.commons.beanutils.BeanUtils,javax.servlet.jsp.tagext.JspTag"
	dynamic-attributes="dynamicAttributes"
	description="Simple tag collecting row cells" %>
<jsp:doBody /><c:set var="items"><%= BeanUtils.getProperty(this,"items").substring(0,BeanUtils.getProperty(this,"items").length()-1) %></c:set>
<extutil:setParentProperties tag='<%= this %>' data="[${items}]," />