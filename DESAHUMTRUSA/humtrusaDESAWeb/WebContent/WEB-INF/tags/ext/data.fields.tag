<%@ attribute name="fields" type="java.lang.String" required="false" description="(String) Fields definition, generated automatically. You can also insert string array of fileds manualy (field1,field2,..)" %>
<%@ include file="inc/taglibs.jsp" %>
<%@ tag import="org.apache.commons.beanutils.BeanUtils" description="Fields container" %>
<jsp:doBody/><extutil:setParentProperties removeComma="true"	tag='<%= this %>' fields='<%= BeanUtils.getProperty(this,"fields") %>' />