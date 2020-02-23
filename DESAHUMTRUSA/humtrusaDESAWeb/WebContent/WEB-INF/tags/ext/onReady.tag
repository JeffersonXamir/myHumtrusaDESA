<%@ tag description="Wraps content by Ext.onReady(function(){})" %>
<%@ include file="inc/taglibs.jsp" %>
<script>
	Ext.onReady(function(){
		<jsp:doBody></jsp:doBody>
	});
</script>