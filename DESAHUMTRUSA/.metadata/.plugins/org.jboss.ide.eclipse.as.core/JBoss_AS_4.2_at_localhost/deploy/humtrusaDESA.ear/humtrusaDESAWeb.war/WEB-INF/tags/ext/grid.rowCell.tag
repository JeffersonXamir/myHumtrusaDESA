<%@ include file="inc/taglibs.jsp" %>
<%@ tag import="org.apache.commons.beanutils.BeanUtils" dynamic-attributes="dynamicAttributes" description="Simple tag collecting row cells" %>
<jsp:doBody var="item" /><extutil:setParentProperties tag='<%=this%>' items="'${item}'," />