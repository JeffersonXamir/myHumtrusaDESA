<%@ attribute
	name="id"
	type="java.lang.String"
	required="false"
	description="
(String)El id unico de este componente.
" %>
<%@ attribute
	name="name"
	type="java.lang.String"
	required="false"
	description="
(String)El nombre asignado para el envio de datos de este componente en el formulario.
" %>
<%@ attribute
	name="paramsConsulta"
	type="java.lang.String"
	required="false"
	description="
(String)Una cadena JSON con parametros adicionales a enviar con las consultas.
" %>
<%@ attribute
	name="labelSeparator"
	type="java.lang.String"
	required="false"
	description="
(String)The standard separator to display after the text of each form label (defaults to the value of Ext.layout.FormLayout.labelSeparator, which is a colon ':' by default). To display no separator for this field's label specify empty string ''.
" %>
<%@ attribute
	name="fieldLabel"
	type="java.lang.String"
	required="false"
	description="
(String)El titulo a mostrar en el formulario (por defecto '')
" %>
<%@ attribute
	name="allowBlank"
	type="java.lang.Boolean"
	required="false"
	description="
(Boolean)False to validate that the value length > 0 (defaults to true)
" %>
<%@ attribute
	name="codWidth"
	type="java.lang.Integer"
	required="false"
	description="
(Integer) El tamano (en pixeles) del campo de codigo
" %>
<%@ attribute
	name="descWidth"
	type="java.lang.Integer"
	required="false"
	description="
(Integer) El tamano (en pixeles) del campo de detalle
" %>
<%@ attribute
	name="descHeight"
	type="java.lang.Integer"
	required="false"
	description="
(Integer) El alto (en pixeles) del campo de detalle
" %>
<%@ attribute
	name="nombreCampoCodigo"
	type="java.lang.String"
	required="true"
	description="
(String)El nombre del campo (tomado del modelo de datos) que se usara como dato para el campo de codigo
" %>
<%@ attribute
	name="nombreCampoDescripcion"
	type="java.lang.String"
	required="true"
	description="
(String)El nombre del campo (tomado del modelo de datos) que se usara como dato para el campo de detalle
" %>
<%@ attribute
	name="tituloVentana"
	type="java.lang.String"
	required="false"
	description="
(String) El titulo de la ventana de seleccion
" %>
<%@ attribute
	name="url"
	type="java.lang.String"
	required="true"
	description="
(String) El servicio remoto con los datos
" %>
<%@ attribute
	name="registrosPorPagina"
	type="java.lang.Integer"
	required="false"
	description="
(Integer) La cantidad de registros a mostrar por pagina
" %>
<%@ attribute
	name="fields"
	type="java.lang.String"
	required="false"
	description="(String) Campos (Generados automaticamente)"
 %>
<%@ attribute
	name="colModel"
	type="java.lang.Object"
	required="false"
	description="
(Object)ColumnModel (Generado internamente).
" %>
<%@ attribute
	name="store"
	type="java.lang.String"
	required="false"
	description="
(Ext.data.Store) El store usado para el grid de seleccion (usado internamente).
" %>
<%@ attribute
	name="widthVentana"
	type="java.lang.Integer"
	required="false"
	description="
(String) El Ancho de la ventana de seleccion
" %>
<%@ attribute
	name="heightVentana"
	type="java.lang.Integer"
	required="false"
	description="
(String) El titulo de la ventana de seleccion
" %>
<%@ attribute
	name="posicionDesc"
	type="java.lang.String"
	required="false"
	description="
(String) Define la posicion que tendra el campo de descripcion (normal | debajo | escondido).
" %>
<%@ attribute
	name="nombreParametroAccion"
	type="java.lang.String"
	required="false"
	description="
(String) Define el nombre de la accion a ejecutar con este componente (por defecto 'LISTAR_AGRUPADOR').
" %>
<%@ attribute
	name="actualizado"
	type="java.lang.String"
	required="false"
	description="
Se dispara cuando se da clic a un item de la ventana de seleccion.
" %>
<%@ attribute
	name="separadorInterno"
	type="java.lang.String"
	required="false"
	description="
Separador de valores (usado internamente al obtener valores de servicios con la notación *-*)
" %>
<%@ attribute
	name="tituloOpcionCodigo"
	type="java.lang.String"
	required="false"
	description="Titulo del radio button de codigo en la ventana interior" %>
<%@ attribute
	name="tituloOpcionDescripcion"
	type="java.lang.String"
	required="false"
	description="Titulo del radio button de descripcion en la ventana interior" %>
<%@ include file="../ext/inc/taglibs.jsp" %>
<%@ tag 
	import="org.apache.commons.beanutils.BeanUtils,java.util.Scanner,java.util.*"
	dynamic-attributes="dynamicAttributes"
	description="Provee un Data Picker usado en varios casos (como un agrupador)" %>
<extutil:processTagAttributes 
		configVar="configMap" 
		eventsVar="eventsMap" 
		include="*" 
		exclude="tituloOpcionCodigo,tituloOpcionDescripcion,separadorInterno,actualizado,paramsConsulta,nombreParametroAccion,posicionDesc,heightVentana,widthVentana,registrosPorPagina,url,tituloVentana,nombreCampoDescripcion,nombreCampoCodigo,codWidth,descWidth,descHeight"
		tagJspContext="<%=jspContext %>"
		dynamicAttributes="${dynamicAttributes}" />
<jsp:doBody /><c:set var="item">new Etech.componentes.AgrupadorAvanzado({<c:forEach items="${configMap}" var="config">${config.key}:${config.value},</c:forEach>listeners:{<c:forEach items="${eventsMap}" var="event" varStatus="status"><c:if test="${fn:indexOf(event.value,'function(')==-1}">${event.key}:function(){${event.value}}</c:if><c:if test="${fn:indexOf(event.value,'function(')>-1}">${event.key}:${event.value}</c:if>${status.last?'':','}</c:forEach>}<c:if test="${actualizado!='' && actualizado!=null}">,listeners:{actualizado:function(){<c:out value="${actualizado}" escapeXml="false"></c:out>}}</c:if><c:if test="${nombreParametroAccion!='' && nombreParametroAccion!=null}">,nombreParametroAccion:'<c:out value="${nombreParametroAccion}" escapeXml="false"></c:out>'</c:if><c:if test="${posicionDesc!='' && posicionDesc!=null}">,posicionDesc:'<c:out value="${posicionDesc}" escapeXml="false"></c:out>'</c:if><c:if test="${heightVentana!='' && heightVentana!=null}">,heightVentana:<c:out value="${heightVentana}" escapeXml="false"></c:out></c:if><c:if test="${widthVentana!='' && widthVentana!=null}">,widthVentana:<c:out value="${widthVentana}" escapeXml="false"></c:out></c:if><c:if test="${registrosPorPagina!='' && registrosPorPagina!=null}">,registrosPorPagina:<c:out value="${registrosPorPagina}" escapeXml="false"></c:out></c:if><c:if test="${url!='' && url!=null}">,url:'<c:out value="${url}" escapeXml="false"></c:out>'</c:if><c:if test="${tituloVentana!='' && tituloVentana!=null}">,tituloVentana:'<c:out value="${tituloVentana}" escapeXml="false"></c:out>'</c:if><c:if test="${nombreCampoCodigo!='' && nombreCampoCodigo!=null}">,nombreCampoCodigo:'<c:out value="${nombreCampoCodigo}" escapeXml="false"></c:out>'</c:if><c:if test="${paramsConsulta!='' && paramsConsulta!=null}">,paramsConsulta:<c:out value="${paramsConsulta}" escapeXml="false"></c:out></c:if><c:if test="${nombreCampoDescripcion!='' && nombreCampoDescripcion!=null}">,nombreCampoDescripcion:'<c:out value="${nombreCampoDescripcion}" escapeXml="false"></c:out>'</c:if><c:if test="${codWidth!='' && codWidth!=null}">,codWidth:<c:out value="${codWidth}" escapeXml="false"></c:out></c:if><c:if test="${descWidth!='' && descWidth!=null}">,descWidth:<c:out value="${descWidth}" escapeXml="false"></c:out></c:if><c:if test="${descHeight!='' && descHeight!=null}">,descHeight:<c:out value="${descHeight}" escapeXml="false"></c:out></c:if><c:if test="${separadorInterno!='' && separadorInterno!=null}">,separadorInterno:'<c:out value="${separadorInterno}" escapeXml="false"></c:out>'</c:if><c:if test="${tituloOpcionCodigo!='' && tituloOpcionCodigo!=null}">,tituloOpcionCodigo:'<c:out value="${tituloOpcionCodigo}" escapeXml="false"></c:out>'</c:if><c:if test="${tituloOpcionDescripcion!='' && tituloOpcionDescripcion!=null}">,tituloOpcionDescripcion:'<c:out value="${tituloOpcionDescripcion}" escapeXml="false"></c:out>'</c:if><c:if test='<%= BeanUtils.getProperty(this,"store")!=null %>'>,store:<%=BeanUtils.getProperty(this,"store") %></c:if>,cm:[<%= BeanUtils.getProperty(this,"colModel") %>]}),</c:set>
<extutil:setParentProperties tag="<%=this%>" items="${item}" />