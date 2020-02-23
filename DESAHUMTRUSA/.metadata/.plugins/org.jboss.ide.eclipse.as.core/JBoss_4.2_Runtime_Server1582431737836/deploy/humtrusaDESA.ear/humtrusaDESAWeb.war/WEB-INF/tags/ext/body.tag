<%@tag import="java.io.StringReader,java.io.BufferedReader"%><%@ attribute name="adapter" type="java.lang.String" required="false" description="(String) Includes one of the ExtJS adapters (jquery, prototype, yui) default is ext-base." %><%@ attribute name="debug" type="java.lang.Boolean" required="false" description="(Boolean) Includes ext-all-debug.js library." %><%@ attribute name="extLocation" type="java.lang.String" required="false" description="(String) Overwrites ExtJS default location (js/ext-2.2)." %><%@ attribute name="theme" type="java.lang.String" required="false" description="(String) Includes xtheme css." %><%@ attribute name="locale" type="java.lang.String" required="false" description="(String) Includes xtheme css." %><%@ attribute name="items" type="java.lang.String" required="false" description="(String) Items container, generated automatically." %><%@ attribute name="msgTarget" type="java.lang.String" required="false" description="(String) The location where error text should display. Should be one of the following values (defaults to qtip): qtip, title, under, side." %><%@ attribute name="smProvider" type="java.lang.String" required="false" description="(String) Configures the default state provider for your application (default is Ext.state.CookieProvider())." %><%@ attribute name="loadingMask" type="java.lang.String" required="false" description="(Boolean) Enables default ExtJS loading mask." %><%@ attribute name="lista_js" type="java.lang.String" required="false" description="(String) Lista de ubicaciones de archivos javascript separadas por |." %>
<%@ include file="inc/taglibs.jsp" %><%@ tag import="org.apache.commons.beanutils.BeanUtils" dynamic-attributes="dynamicAttributes" description="" %>
<c:if test="${empty(extLocation)}"><c:set var="extLocation">js/ext-2.2</c:set></c:if><link rel="stylesheet" type="text/css" href="${extLocation}/resources/css/ext-all.css" /><c:if test="${!empty(theme)}"><link rel="stylesheet" type="text/css" href="${extLocation}/resources/css/xtheme-${theme}.css" /></c:if><script type="text/javascript" src="${extLocation}/adapter/ext/ext-base.js"></script><c:if test="${adapter == 'jquery'}"><script type="text/javascript" src="${extLocation}/adapter/jquery/jquery.js"></script><script type="text/javascript" src="${extLocation}/adapter/jquery/jquery-plugins.js"></script><script type="text/javascript" src="${extLocation}/adapter/jquery/ext-jquery-adapter.js"></script></c:if><c:if test="${adapter == 'prototype'}"><script type="text/javascript" src="${extLocation}/adapter/prototype/prototype.js"></script><script type="text/javascript" src="${extLocation}/adapter/prototype/scriptaculous.js"></script><script type="text/javascript" src="${extLocation}/adapter/prototype/effects.js"></script><script type="text/javascript" src="${extLocation}/adapter/prototype/ext-prototype.adapter.js"></script></c:if><c:if test="${adapter == 'yui'}"><script type="text/javascript" src="${extLocation}/adapter/yui/yui-utilities.js"></script><script type="text/javascript" src="${extLocation}/adapter/yui/ext-yui-adapter.js"></script></c:if><c:if test="${empty(debug)}"><script type="text/javascript" src="${extLocation}/ext-all.js"></script></c:if><c:if test="${!empty(debug)}"><script type="text/javascript" src="${extLocation}/ext-all-debug.js"></script></c:if>
<script type="text/javascript" src="${extLocation}/../../recursos/General/formatos.js"></script>
<c:if test="${!empty(locale)}"><script type="text/javascript" src="${extLocation}/source/locale/ext-lang-${locale}.js"></script></c:if>
<script>Ext.BLANK_IMAGE_URL = "${extLocation}/resources/images/default/s.gif";</script><c:if test="<%= BeanUtils.getProperty(this,"lista_js")!=null %>" ><%lista_js = BeanUtils.getProperty(this,"lista_js");%><c:forEach var="sc" items='${fn:split(lista_js,"|")}' ><script type="text/javascript" src="${sc}"></script></c:forEach></c:if>
<link href="${extLocation}/../etech/UploadDialog/css/Ext.ux.UploadDialog.css" rel="stylesheet" ></link>
<script type="text/javascript" src="${extLocation}/../etech/ChooserField-min.js"></script>
<script type="text/javascript" src="${extLocation}/../etech/Agrupador-min.js"></script>
<script type="text/javascript" src="${extLocation}/../etech/AgrupadorAvanzado.js"></script>
<script type="text/javascript" src="${extLocation}/../etech/radiogroup.js"></script>
<script type="text/javascript" src="${extLocation}/../etech/UploadDialog/Ext.ux.UploadDialog.js"></script>
<script type="text/javascript" src="${extLocation}/../../recursos/Componentes/scripts/renderizadores.js"></script>
<script language="javascript" src="${extLocation}/../../recursos/General/Sesiones.js"></script>
<c:if test="${!empty(locale)}"><script type="text/javascript" src="${extLocation}/../etech/UploadDialog/locale/${locale}.utf-8.js"></script></c:if>
<style>
	.x-form-field-wrap .x-form-browse-trigger {background: transparent url(${extLocation}/../../imagenes/browse_trigger_field.gif) no-repeat 0 0;cursor: pointer;right: 0px;}
	.radios_en_toolbar{background: #D0DEF0 repeat-x scroll left top;}
	.iconoVentanaAgrupador{background: url(${extLocation}/../../imagenes/folder_page.png);}
</style>
<c:set var="ext_component_declarations" scope="request"/><c:set var="ext_component_executions" scope="request"/><script>Ext.QuickTips.init();<c:if test="${!empty(msgTarget)}">Ext.form.Field.prototype.msgTarget = '${msgTarget}';</c:if><c:if test="${empty(smProvider)}">/*Ext.state.Manager.setProvider(new Ext.state.CookieProvider());*/</c:if><c:if test="${!empty(smProvider)}">/*Ext.state.Manager.setProvider(new ${smProvider});*/</c:if></script><jsp:doBody var="pageHTML" />
<%
	String pageHTML = (String)jspContext.getAttribute("pageHTML");
	StringBuffer salidaHTML = new StringBuffer("");
	String pageLine = "";
	
	BufferedReader br = new BufferedReader(new StringReader(pageHTML));
	while((pageLine=br.readLine())!=null){if(pageLine.trim().length()>0){salidaHTML.append(pageLine+"\n");}}
	jspContext.setAttribute("pageHTML",salidaHTML.toString());
	
	salidaHTML.delete(0,salidaHTML.length());
	salidaHTML = null;
	pageLine = null;
%>
<script type="text/javascript">Ext.onReady(function(){${ext_component_commons}})</script>${pageHTML}<script type="text/javascript">Ext.onReady(function(){try{${ext_component_declarations};${ext_component_executions};} catch(e){};<c:if test='<%= BeanUtils.getProperty(this,"items")!=null %>'><% String itemsStr = BeanUtils.getProperty(this,"items");if(itemsStr.endsWith(",")){itemsStr = itemsStr.substring(0, itemsStr.length()-2);}if(!itemsStr.endsWith(")")){itemsStr = itemsStr.concat(")");} %>var bodyContainer = new Ext.Container({items:<%=itemsStr %>})</c:if>});</script>
<c:if test="${loadingMask}"><style>#loading-mask{position:absolute;left:0;top:0;width:100%;height:100%;z-index:20000;background-color:white;}#loading{position:absolute;left:45%;top:40%;padding:2px;z-index:20001; height:auto;}#loading img {margin-bottom:5px;}#loading .loading-indicator{background:white;color:#555;font:bold 13px tahoma,arial,helvetica;padding:10px;margin:0;text-align:center;height:auto;}</style><div id="loading-mask"></div><div id="loading"><div class="loading-indicator"><img src="${extLocation}/resources/images/cargador/cargando.png" width="32" height="32" style="margin-right:8px;" align="absmiddle"/>Cargando...</div></div><script type="text/javascript">Ext.onReady(function(){setTimeout(function(){Ext.get('loading').remove();Ext.get('loading-mask').fadeOut({remove:true});}, 250);});</script></c:if>
<%
	java.util.HashMap h1 = (java.util.HashMap)jspContext.getAttribute("dynamicAttributes");
	String contenido = (String)jspContext.getAttribute("pageHTML");
	contenido = null;
	h1.clear();
	h1 = null;
	jspContext.removeAttribute("dynamicAttributes");
	jspContext.removeAttribute("pageHTML");
	jspContext.removeAttribute("configMap"); 
	jspContext.removeAttribute("eventsMap");
%>