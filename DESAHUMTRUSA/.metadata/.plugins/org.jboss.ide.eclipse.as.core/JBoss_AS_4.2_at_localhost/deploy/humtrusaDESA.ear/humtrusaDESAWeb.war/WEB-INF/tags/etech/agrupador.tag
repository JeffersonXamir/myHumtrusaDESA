<%@ attribute
	name="parametrosAjax"
	type="java.lang.String"
	required="false"
	description="
(String) Lista de parametros separados por comas  e.g. codcliente:1,codunidad:'UNIDAD'}
" %>
<%@ attribute
	name="tituloVentana"
	type="java.lang.String"
	required="false"
	description="
(String) El titulo de la ventana de seleccion
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
	name="metodosDetalle"
	type="java.lang.String"
	required="false"
	description="
(String) Valor usado internamente por el tag
" %>
<%@ attribute
	name="nodoPadre"
	type="java.lang.String"
	required="true"
	description="
(String) El nombre del elemento padre del nodo referenciado en el servicio remoto
" %>
<%@ attribute
	name="cantidadRegistros"
	type="java.lang.Integer"
	required="true"
	description="
(Integer) La cantidad de registros a mostrar por pagina
" %>
<%@ attribute
	name="servicio"
	type="java.lang.String"
	required="true"
	description="
(String) El servicio remoto con los datos
" %>
<%@ attribute
	name="parametros"
	type="java.lang.String"
	required="false"
	description="
(String) Un objeto JSON con parametros opcionales a enviar durante el post al servicio remoto
Ejemplo: {codigo:'7',tipo:'3'}
" %>
<%@ attribute
	name="columnaCodigo"
	type="java.lang.String"
	required="true"
	description="
(String) El nombre de la columna que se toma para mostrar en el campo izquierdo del agrupador
" %>
<%@ attribute
	name="columnaDetalle"
	type="java.lang.String"
	required="true"
	description="
(String) El nombre de la columna que se toma para mostrar en el campo derecho del agrupador
" %>
<%@ attribute
	name="allowBlank"
	type="java.lang.Boolean"
	required="false"
	description="
(Boolean)False to validate that the value length > 0 (defaults to true)
" %>
<%@ attribute
	name="allowDomMove"
	type="java.lang.Boolean"
	required="false"
	description="
(Boolean)Whether the component can move the Dom node when rendering (defaults to true).
" %>
<%@ attribute
	name="altFormats"
	type="java.lang.String"
	required="false"
	description="
(String)Multiple date formats separated by '|' to try when parsing a user input value and it doesn't match the defined format (defaults to 'm/d/Y|m-d-y|m-d-Y|m/d|m-d|d').
" %>
<%@ attribute
	name="applyTo"
	type="java.lang.String"
	required="false"
	description="
(Mixed)The id of the node, a DOM node or an existing Element corresponding to a DIV that is already present in the document that specifies some structural markup for this component. When applyTo is used, constituent parts of the component can also be specified by id or CSS class name within the main element, and the component being created may attempt to create its subcomponents from that markup if applicable. Using this config, a call to render() is not required. If applyTo is specified, any value passed for renderTo will be ignored and the target element's parent node will automatically be used as the component's container.
" %>
<%@ attribute
	name="autoCreate"
	type="java.lang.String"
	required="false"
	description="
(String/Object)A DomHelper element spec, or true for a default element spec (defaults to {tag: 'input', type: 'text', size: '10', autocomplete: 'off'})
" %>
<%@ attribute
	name="autoHeight"
	type="java.lang.Boolean"
	required="false"
	description="
(Boolean)True to use height:'auto', false to use fixed height (defaults to false).
" %>
<%@ attribute
	name="autoShow"
	type="java.lang.Boolean"
	required="false"
	description="
(Boolean)True if the component should check for hidden classes (e.g. 'x-hidden' or 'x-hide-display') and remove them on render (defaults to false).
" %>
<%@ attribute
	name="autoWidth"
	type="java.lang.Boolean"
	required="false"
	description="
(Boolean)True to use width:'auto', false to use fixed width (defaults to false).
" %>
<%@ attribute
	name="blankText"
	type="java.lang.String"
	required="false"
	description="
(String)Error text to display if the allow blank validation fails (defaults to 'This field is required')
" %>
<%@ attribute
	name="clearCls"
	type="java.lang.String"
	required="false"
	description="
(String)The CSS class used to provide field clearing (defaults to 'x-form-clear-left')
" %>
<%@ attribute
	name="cls"
	type="java.lang.String"
	required="false"
	description="
(String)An optional extra CSS class that will be added to this component's Element (defaults to ''). This can be useful for adding customized styles to the component or any of its children using standard CSS rules.
" %>
<%@ attribute
	name="ctCls"
	type="java.lang.String"
	required="false"
	description="
(String)An optional extra CSS class that will be added to this component's container (defaults to ''). This can be useful for adding customized styles to the container or any of its children using standard CSS rules.
" %>
<%@ attribute
	name="disableKeyFilter"
	type="java.lang.Boolean"
	required="false"
	description="
(Boolean)True to disable input keystroke filtering (defaults to false)
" %>
<%@ attribute
	name="disabled"
	type="java.lang.Boolean"
	required="false"
	description="
(Boolean)True to disable the field (defaults to false).
" %>
<%@ attribute
	name="disabledClass"
	type="java.lang.String"
	required="false"
	description="
(String)CSS class added to the component when it is disabled (defaults to 'x-item-disabled').
" %>
<%@ attribute
	name="disabledDates"
	type="java.lang.String"
	required="false"
	description="
(Array)An array of 'dates' to disable, as strings. These strings will be used to build a dynamic regular expression so they are very powerful. Some examples: 

    * ['03/08/2003', '09/16/2003'] would disable those exact dates
    * ['03/08', '09/16'] would disable those days for every year
    * ['^03/08'] would only match the beginning (useful if you are using short years)
    * ['03/../2006'] would disable every day in March 2006
    * ['^03'] would disable every day in every March

 In order to support regular expressions, if you are using a date format that has '.' in it, you will have to escape the dot when restricting dates. For example: ['03\\.08\\.03'].
" %>
<%@ attribute
	name="disabledDatesText"
	type="java.lang.String"
	required="false"
	description="
(String)The tooltip text to display when the date falls on a disabled date (defaults to 'Disabled')
" %>
<%@ attribute
	name="disabledDays"
	type="java.lang.String"
	required="false"
	description="
(Array)An array of days to disable, 0 based. For example, [0, 6] disables Sunday and Saturday (defaults to null).
" %>
<%@ attribute
	name="disabledDaysText"
	type="java.lang.String"
	required="false"
	description="
(String)The tooltip to display when the date falls on a disabled day (defaults to 'Disabled')
" %>
<%@ attribute
	name="emptyClass"
	type="java.lang.String"
	required="false"
	description="
(String)The CSS class to apply to an empty field to style the emptyText (defaults to 'x-form-empty-field'). This class is automatically added and removed as needed depending on the current field value.
" %>
<%@ attribute
	name="emptyText"
	type="java.lang.String"
	required="false"
	description="
(String)The default text to display in an empty field (defaults to null).
" %>
<%@ attribute
	name="fieldClass"
	type="java.lang.String"
	required="false"
	description="
(String)The default CSS class for the field (defaults to 'x-form-field')
" %>
<%@ attribute
	name="fieldLabel"
	type="java.lang.String"
	required="false"
	description="
(String)The label text to display next to this field (defaults to '')
" %>
<%@ attribute
	name="focusClass"
	type="java.lang.String"
	required="false"
	description="
(String)The CSS class to use when the field receives focus (defaults to 'x-form-focus')
" %>
<%@ attribute
	name="format"
	type="java.lang.String"
	required="false"
	description="
(String)The default date format string which can be overriden for localization support. The format must be valid according to Date.parseDate (defaults to 'm/d/y').
" %>
<%@ attribute
	name="height"
	type="java.lang.Integer"
	required="false"
	description="
(Number)The height of this component in pixels (defaults to auto).
" %>
<%@ attribute
	name="hideLabel"
	type="java.lang.Boolean"
	required="false"
	description="
(Boolean)True to completely hide the label element (defaults to false)
" %>
<%@ attribute
	name="hideMode"
	type="java.lang.String"
	required="false"
	description="
(String)How this component should hidden. Supported values are 'visibility' (css visibility), 'offsets' (negative offset position) and 'display' (css display) - defaults to 'display'.
" %>
<%@ attribute
	name="hideParent"
	type="java.lang.Boolean"
	required="false"
	description="
(Boolean)True to hide and show the component's container when hide/show is called on the component, false to hide and show the component itself (defaults to false). For example, this can be used as a shortcut for a hide button on a window by setting hide:true on the button when adding it to its parent container.
" %>
<%@ attribute
	name="hideTrigger"
	type="java.lang.Boolean"
	required="false"
	description="
(Boolean)True to hide the trigger element and display only the base text field (defaults to false)
" %>
<%@ attribute
	name="id"
	type="java.lang.String"
	required="false"
	description="
(String)The unique id of this component (defaults to an auto-assigned id).
" %>
<%@ attribute
	name="inputType"
	type="java.lang.String"
	required="false"
	description="
(String)The type attribute for input fields -- e.g. radio, text, password (defaults to 'text').
" %>
<%@ attribute
	name="invalidClass"
	type="java.lang.String"
	required="false"
	description="
(String)The CSS class to use when marking a field invalid (defaults to 'x-form-invalid')
" %>
<%@ attribute
	name="invalidText"
	type="java.lang.String"
	required="false"
	description="
(String)The error text to display when the date in the field is invalid (defaults to '{value} is not a valid date - it must be in the format {format}').
" %>
<%@ attribute
	name="itemCls"
	type="java.lang.String"
	required="false"
	description="
(String)An additional CSS class to apply to this field (defaults to the container's itemCls value if set, or '')
" %>
<%@ attribute
	name="labelSeparator"
	type="java.lang.String"
	required="false"
	description="
(String)The standard separator to display after the text of each form label (defaults to the value of Ext.layout.FormLayout.labelSeparator, which is a colon ':' by default). To display no separator for this field's label specify empty string ''.
" %>
<%@ attribute
	name="labelStyle"
	type="java.lang.String"
	required="false"
	description="
(String)A CSS style specification to apply directly to this field's label (defaults to the container's labelStyle value if set, or ''). For example, labelStyle: 'font-weight:bold;'.
" %>
<%@ attribute
	name="listeners"
	type="java.lang.Object"
	required="false"
	description="
(Object)A config object containing one or more event handlers to be added to this object during initialization. This should be a valid listeners config object as specified in the addListener example for attaching multiple handlers at once.
" %>
<%@ attribute
	name="maskRe"
	type="java.lang.String"
	required="false"
	description="
(RegExp)An input mask regular expression that will be used to filter keystrokes that don't match (defaults to null)
" %>
<%@ attribute
	name="maxLength"
	type="java.lang.Integer"
	required="false"
	description="
(Number)Maximum input field length allowed (defaults to Number.MAX_VALUE)
" %>
<%@ attribute
	name="maxLengthText"
	type="java.lang.String"
	required="false"
	description="
(String)Error text to display if the maximum length validation fails (defaults to 'The maximum length for this field is {maxLength}')
" %>
<%@ attribute
	name="maxText"
	type="java.lang.String"
	required="false"
	description="
(String)The error text to display when the date in the cell is after maxValue (defaults to 'The date in this field must be before {maxValue}').
" %>
<%@ attribute
	name="maxValue"
	type="java.lang.String"
	required="false"
	description="
(Date/String)The maximum allowed date. Can be either a Javascript date object or a string date in a valid format (defaults to null).
" %>
<%@ attribute
	name="minLength"
	type="java.lang.Integer"
	required="false"
	description="
(Number)Minimum input field length required (defaults to 0)
" %>
<%@ attribute
	name="minLengthText"
	type="java.lang.String"
	required="false"
	description="
(String)Error text to display if the minimum length validation fails (defaults to 'The minimum length for this field is {minLength}')
" %>
<%@ attribute
	name="minText"
	type="java.lang.String"
	required="false"
	description="
(String)The error text to display when the date in the cell is before minValue (defaults to 'The date in this field must be after {minValue}').
" %>
<%@ attribute
	name="minValue"
	type="java.lang.String"
	required="false"
	description="
(Date/String)The minimum allowed date. Can be either a Javascript date object or a string date in a valid format (defaults to null).
" %>
<%@ attribute
	name="msgFx"
	type="java.lang.String"
	required="false"
	description="
(String)Experimental The effect used when displaying a validation message under the field (defaults to 'normal').
" %>
<%@ attribute
	name="msgTarget"
	type="java.lang.String"
	required="false"
	description="
(String)The location where error text should display. Should be one of the following values (defaults to 'qtip'): 

Value Description----------- ----------------------------------------------------------------------qtipDisplay a quick tip when the user hovers over the fieldtitle Display a default browser title attribute popupunder Add a block div beneath the field containing the error textsideAdd an error icon to the right of the field with a popup on hover[element id]Add the error text directly to the innerHTML of the specified element


" %>
<%@ attribute
	name="name"
	type="java.lang.String"
	required="false"
	description="
(String)The field's HTML name attribute.
" %>
<%@ attribute
	name="plugins"
	type="java.lang.Object"
	required="false"
	description="
(Object/Array)An object or array of objects that will provide custom functionality for this component. The only requirement for a valid plugin is that it contain an init method that accepts a reference of type Ext.Component. When a component is created, if any plugins are available, the component will call the init method on each plugin, passing a reference to itself. Each plugin can then call methods or respond to events on the component as needed to provide its functionality.
" %>
<%@ attribute
	name="readOnly"
	type="java.lang.Boolean"
	required="false"
	description="
(Boolean)True to mark the field as readOnly in HTML (defaults to false) -- Note: this only sets the element's readOnly DOM attribute.
" %>
<%@ attribute
	name="regex"
	type="java.lang.String"
	required="false"
	description="
(RegExp)A JavaScript RegExp object to be tested against the field value during validation (defaults to null). If available, this regex will be evaluated only after the basic validators all return true, and will be passed the current field value. If the test fails, the field will be marked invalid using regexText.
" %>
<%@ attribute
	name="regexText"
	type="java.lang.String"
	required="false"
	description="
(String)The error text to display if regex is used and the test fails during validation (defaults to '')
" %>
<%@ attribute
	name="renderTo"
	type="java.lang.String"
	required="false"
	description="
(Mixed)The id of the node, a DOM node or an existing Element that will be the container to render this component into. Using this config, a call to render() is not required.
" %>
<%@ attribute
	name="selectOnFocus"
	type="java.lang.Boolean"
	required="false"
	description="
(Boolean)True to automatically select any existing field text when the field receives input focus (defaults to false)
" %>
<%@ attribute
	name="stateEvents"
	type="java.lang.String"
	required="false"
	description="
(Array)An array of events that, when fired, should trigger this component to save its state (defaults to none). These can be any types of events supported by this component, including browser or custom events (e.g., ['click', 'customerchange']).
" %>
<%@ attribute
	name="stateId"
	type="java.lang.String"
	required="false"
	description="
(String)The unique id for this component to use for state management purposes (defaults to the component id).
" %>
<%@ attribute
	name="style"
	type="java.lang.String"
	required="false"
	description="
(String)A custom style specification to be applied to this component's Element. Should be a valid argument to Ext.Element.applyStyles.
" %>
<%@ attribute
	name="tabIndex"
	type="java.lang.Integer"
	required="false"
	description="
(Number)The tabIndex for this field. Note this only applies to fields that are rendered, not those which are built via applyTo (defaults to undefined).
" %>
<%@ attribute
	name="triggerClass"
	type="java.lang.String"
	required="false"
	description="
(String)An additional CSS class used to style the trigger button. The trigger will always get the class 'x-form-trigger' and triggerClass will be appended if specified (defaults to 'x-form-date-trigger' which displays a calendar icon).
" %>
<%@ attribute
	name="validateOnBlur"
	type="java.lang.Boolean"
	required="false"
	description="
(Boolean)Whether the field should validate when it loses focus (defaults to true).
" %>
<%@ attribute
	name="validationDelay"
	type="java.lang.Integer"
	required="false"
	description="
(Number)The length of time in milliseconds after user input begins until validation is initiated (defaults to 250)
" %>
<%@ attribute
	name="validationEvent"
	type="java.lang.String"
	required="false"
	description="
(String/Boolean)The event that should initiate field validation. Set to false to disable automatic validation (defaults to 'keyup').
" %>
<%@ attribute
	name="validator"
	type="java.lang.String"
	required="false"
	description="
(Function)A custom validation function to be called during field validation (defaults to null). If available, this function will be called only after the basic validators all return true, and will be passed the current field value and expected to return boolean true if the value is valid or a string error message if invalid.
" %>
<%@ attribute
	name="value"
	type="java.lang.String"
	required="false"
	description="
(Mixed)A value to initialize this field with.
" %>
<%@ attribute
	name="vtype"
	type="java.lang.String"
	required="false"
	description="
(String)A validation type name as defined in Ext.form.VTypes (defaults to null)
" %>
<%@ attribute
	name="vtypeText"
	type="java.lang.String"
	required="false"
	description="
(String)A custom error message to display in place of the default message provided for the vtype currently set for this field (defaults to ''). Only applies if vtype is set, else ignored.
" %>
<%@ attribute
	name="width"
	type="java.lang.Integer"
	required="false"
	description="
(Number)The width of this component in pixels (defaults to auto).
" %>
<%@ attribute
	name="xtype"
	type="java.lang.String"
	required="false"
	description="
(String)The registered xtype to create. This config option is not used when passing a config object into a constructor. This config option is used only when lazy instantiation is being used, and a child item of a Container is being specified not as a fully instantiated Component, but as a Component config object. The xtype will be looked up at render time up to determine what type of child Component to create.

 The predefined xtypes are listed here. 

 If you subclass Components to create your own Components, you may register them using Ext.ComponentMgr.registerType in order to be able to take advantage of lazy instantiation and rendering.
" %>
<%@ attribute
	name="onAutosize"
	type="java.lang.Integer"
	required="false"
	description="
( Ext.form.Field this, Number width )Fires when the autosize function is triggered.The field may or may not have actually changed sizeaccording to the default logic, but this event provides a hook for the developer to apply additionallogic at runtime to resize the field if needed.
" %>
<%@ attribute
	name="onBeforedestroy"
	type="java.lang.String"
	required="false"
	description="
( Ext.Component this )Fires before the component is destroyed. Return false to stop the destroy.
" %>
<%@ attribute
	name="onBeforehide"
	type="java.lang.String"
	required="false"
	description="
( Ext.Component this )Fires before the component is hidden. Return false to stop the hide.
" %>
<%@ attribute
	name="onBeforerender"
	type="java.lang.String"
	required="false"
	description="
( Ext.Component this )Fires before the component is rendered. Return false to stop the render.
" %>
<%@ attribute
	name="onBeforeshow"
	type="java.lang.String"
	required="false"
	description="
( Ext.Component this )Fires before the component is shown. Return false to stop the show.
" %>
<%@ attribute
	name="onBeforestaterestore"
	type="java.lang.Object"
	required="false"
	description="
( Ext.Component this, Object state )Fires before the state of the component is restored. Return false to stop the restore.
" %>
<%@ attribute
	name="onBeforestatesave"
	type="java.lang.Object"
	required="false"
	description="
( Ext.Component this, Object state )Fires before the state of the component is saved to the configured state provider. Return false to stop the save.
" %>
<%@ attribute
	name="onBlur"
	type="java.lang.String"
	required="false"
	description="
( Ext.form.Field this )Fires when this field loses input focus.
" %>
<%@ attribute
	name="onChange"
	type="java.lang.String"
	required="false"
	description="
( Ext.form.Field this, Mixed newValue, Mixed oldValue )Fires just before the field blurs if the field value has changed.
" %>
<%@ attribute
	name="onDestroy"
	type="java.lang.String"
	required="false"
	description="
( Ext.Component this )Fires after the component is destroyed.
" %>
<%@ attribute
	name="onDisable"
	type="java.lang.String"
	required="false"
	description="
( Ext.Component this )Fires after the component is disabled.
" %>
<%@ attribute
	name="onEnable"
	type="java.lang.String"
	required="false"
	description="
( Ext.Component this )Fires after the component is enabled.
" %>
<%@ attribute
	name="onFocus"
	type="java.lang.String"
	required="false"
	description="
( Ext.form.Field this )Fires when this field receives input focus.
" %>
<%@ attribute
	name="onHide"
	type="java.lang.String"
	required="false"
	description="
( Ext.Component this )Fires after the component is hidden.
" %>
<%@ attribute
	name="onInvalid"
	type="java.lang.String"
	required="false"
	description="
( Ext.form.Field this, String msg )Fires after the field has been marked as invalid.
" %>
<%@ attribute
	name="onMove"
	type="java.lang.String"
	required="false"
	description="
( Ext.Component this, Number x, Number y )Fires after the component is moved.
" %>
<%@ attribute
	name="onRender"
	type="java.lang.String"
	required="false"
	description="
( Ext.Component this )Fires after the component is rendered.
" %>
<%@ attribute
	name="onResize"
	type="java.lang.String"
	required="false"
	description="
( Ext.Component this, Number adjWidth, Number adjHeight, Number rawWidth, Number rawHeight )Fires after the component is resized.
" %>
<%@ attribute
	name="onShow"
	type="java.lang.String"
	required="false"
	description="
( Ext.Component this )Fires after the component is shown.
" %>
<%@ attribute
	name="onSpecialkey"
	type="java.lang.String"
	required="false"
	description="
( Ext.form.Field this, Ext.EventObject e )Fires when any key related to navigation (arrows, tab, enter, esc, etc.) is pressed.You can checkExt.EventObject.getKey to determine which key was pressed.
" %>
<%@ attribute
	name="onStaterestore"
	type="java.lang.String"
	required="false"
	description="
( Ext.Component this, Object state )Fires after the state of the component is restored.
" %>
<%@ attribute
	name="onStatesave"
	type="java.lang.String"
	required="false"
	description="
( Ext.Component this, Object state )Fires after the state of the component is saved to the configured state provider.
" %>
<%@ attribute
	name="onValid"
	type="java.lang.String"
	required="false"
	description="
( Ext.form.Field this )Fires after the field has been validated with no errors.
" %>
<%@ attribute
	name="onTriggerClick"
	type="java.lang.String"
	required="false"
	description="
( Ext.form.Field this )Se dispara cuando se da clic al boton de seleccion.
" %>
<%@ attribute
	name="actualizado"
	type="java.lang.String"
	required="false"
	description="
Se dispara cuando se da clic a un item de la ventana de seleccion.
" %>
<%@ attribute
	name="tipoDatoCodigo"
	type="java.lang.String"
	required="false"
	description="
El tipo de dato del codigo (integer|short|string|long)
" %>
<%@ attribute
	name="clase"
	type="java.lang.String"
	required="false"
	description="
La clase (en el caso de usar el agrupador generico)
" %>
<%@ attribute
	name="separadorInterno"
	type="java.lang.String"
	required="false"
	description="
El separador usado para partir las cadenas de llenado automatico de campo codigo y descripcion
" %>
<%@ include file="../ext/inc/taglibs.jsp" %>
<%@ tag import="org.apache.commons.beanutils.BeanUtils,java.util.Scanner,java.util.*" dynamic-attributes="dynamicAttributes" description="Provee un Data Picker usado en varios casos (como un agrupador)" %>	
<extutil:processTagAttributes configVar="configMap" eventsVar="eventsMap" include="*" exclude="separadorInterno,clase,tipoDatoCodigo,tituloVentana,widthVentana,heightVentana,actualizado,items,metodosDetalle,nodoPadre,cantidadRegistros,servicio,parametros,columnaCodigo,columnaDetalle,parametrosAjax" tagJspContext="<%=jspContext %>" dynamicAttributes="${dynamicAttributes}" />	
<jsp:doBody />
<%
		String rads = BeanUtils.getProperty(this,"metodosDetalle");
		HashMap<String,Object[]>mapaMetodos = new HashMap<String,Object[]>();
		List<String>lsClaves = new Vector<String>();
		
		if (rads!=null){
		
			StringTokenizer st = new StringTokenizer(rads,",");
			
			while(st.hasMoreTokens()){
				String aux = (String)st.nextElement();
				StringTokenizer tmp = new StringTokenizer(aux,"|");
				
				String nombre = (String)tmp.nextElement();
				String titulo = (String)tmp.nextElement();
				String ancho = (String)tmp.nextElement();
				String alineado = (String)tmp.nextElement();
				String renderizador = (String)tmp.nextElement();
				String tipoColumna = (String)tmp.nextElement();
				String formatoFecha = (String)tmp.nextElement();
				
				lsClaves.add(nombre);
				mapaMetodos.put(nombre,new Object[]{titulo,ancho,alineado,renderizador,tipoColumna,formatoFecha});
			}
		}
 %>
<c:set var="item">new Ext.ux.form.Agrupador({<c:forEach items="${configMap}" var="config">${config.key}:${config.value},</c:forEach><c:if test="${separadorInterno!='' && separadorInterno!=null}">separadorInterno:'<c:out value="${separadorInterno}" escapeXml="false"></c:out>',</c:if>listeners:{<c:forEach items="${eventsMap}" var="event" varStatus="status"><c:if test="${fn:indexOf(event.value,'function(')==-1}">${event.key}:function(){${event.value}}</c:if><c:if test="${fn:indexOf(event.value,'function(')>-1}">${event.key}:${event.value}</c:if>${status.last?'':','}</c:forEach>}<c:choose><c:when test="${onSpecialKey != '' && onSpecialKey != null}">,onSpecialKey: function(){<c:out value="${onSpecialKey}" escapeXml="false"></c:out>}</c:when><c:otherwise>,onSpecialKey: function(field,e){if((e.getKey() == Ext.EventObject.TAB) || (e.getKey()==Ext.EventObject.ENTER)){var componentePadre = this;var componenteCodigo = Ext.getCmp(componentePadre.id+"-cod");var parametrosConsulta = {clase: '${clase}',codigoRegistro: componenteCodigo.getValue(),metodoDetalle: '${columnaDetalle}',tipoDatoCodigo: '${tipoDatoCodigo}'};var paramsRequest = {method: 'POST',url: '${servicio}',waitTitle: 'Buscando codigo en el servidor...',waitMsg: 'Espere mientras se recuperan los datos del servidor...',<c:choose><c:when test="${parametrosAjax != null && parametrosAjax !=''}">params:{clase: '${clase}',codigoRegistro: componenteCodigo.getValue(),metodoDetalle: '${columnaDetalle}',tipoDatoCodigo: '${tipoDatoCodigo}',${parametrosAjax}},</c:when><c:otherwise>params: parametrosConsulta,</c:otherwise></c:choose>success: function(result,request){var respuesta = Ext.decode(result.responseText);if(respuesta.detalle!=null && respuesta.detalle!='null'){Ext.getCmp(componentePadre.id+"-desc").setValue(respuesta.detalle);Ext.getCmp(componentePadre.id).registroSeleccionado = null;/* dispara el evento onActualizado */<c:if test="${actualizado != null && actualizado !=''}">if(!Ext.getCmp(componentePadre.id).hasListener('actualizado')){Ext.getCmp(componentePadre.id).on('actualizado',function(){${actualizado}});}</c:if>Ext.getCmp(componentePadre.id).actualizar();}else{Ext.getCmp(componentePadre.id+"-desc").setValue(null);Ext.getCmp(componentePadre.id+"-cod").setValue(null);}},failure: function(){}};Ext.Ajax.request(paramsRequest);}}</c:otherwise></c:choose><c:choose><c:when test="${onTriggerClick != '' && onTriggerClick != null}">,onTriggerClick: function(){<c:out value="${onTriggerClick}" escapeXml="false"></c:out>}</c:when><c:otherwise>,onTriggerClick: function(){var componentePadre = this;/* Comprobamos si el componente esta deshabilitado, si lo esta, no lanzar el evento *//* Campos especiales para el caso del agrupador */try{var cDetalle = this.campoDetalle;var cHidden = this.campoHidden;}catch(e){};if(!componentePadre.disabled){var stx = new Ext.data.Store({autoLoad:false,url:'<%=BeanUtils.getProperty(this,"servicio")%>',<c:choose><c:when test="${parametrosAjax != null && parametrosAjax !=''}">baseParams:{${parametrosAjax} },</c:when><c:otherwise><c:if test="${parametros != null && parametros !=''}">baseParams:${parametros},</c:if></c:otherwise></c:choose>reader:new Ext.data.XmlReader({record:'<%=BeanUtils.getProperty(this,"nodoPadre")%>',totalRecords:'total_registros',fields:[<% /* Campos del xmlreader */for(Iterator i=lsClaves.iterator();i.hasNext();){String clave = (String)i.next();Object[] aux = mapaMetodos.get(clave);String tipoCol = (String)aux[4];String formatoFecha = (String)aux[5];String tipoFecha = (tipoCol.equals("date") && !formatoFecha.equals("null"))?",dateFormat:'"+formatoFecha+"'":"";String terminador = (!tipoCol.equals("null"))?",type:'"+tipoCol+"'"+tipoFecha+"}":"}";out.print("{name:'"+clave+"'"+terminador);if(i.hasNext()){out.print(",");};} %>]})});var grilla = new Ext.grid.GridPanel({stripeRows:true,height:400,autoScroll:true,viewConfig:'{autoFill:true}',loadMask:true,cm:new Ext.grid.ColumnModel([new Ext.grid.RowNumberer(),<% int cont = 1;for(Iterator i=lsClaves.iterator();i.hasNext();){String clave = (String)i.next();StringBuffer salida = new StringBuffer("{");salida.append("dataIndex:'"+cont+"',");salida.append("sortable:true,");salida.append("dataIndex:'"+clave+"',");Object[] aux = mapaMetodos.get(clave);salida.append("header:'"+aux[0]+"'");/* ancho */if(!aux[1].equals("null")){salida.append(",width:"+(String)aux[1]);}/* alineado */if(!aux[2].equals("null")){salida.append(",align:'"+(String)aux[2]+"'");}/* renderizador */if(!aux[3].equals("null")){salida.append(",renderer:"+(String)aux[3]);}salida.append("}");out.print(salida.toString());salida.delete(0,salida.length());salida = null;if(i.hasNext()){out.print(",");};} %>]),listeners:{celldblclick: function(){var grid = this;var codigo = grid.getSelectionModel().getSelected().get("<%=BeanUtils.getProperty(this,"columnaCodigo")%>");var detalle = grid.getSelectionModel().getSelected().get("<%=BeanUtils.getProperty(this,"columnaDetalle")%>");componentePadre.setValue(codigo);var idPadreAgrupador = componentePadre.id.split("-")[0];try{/* Estos 2 se agregan si se usan en conjunto con un agrupador */Ext.getCmp(cDetalle).setValue(detalle);Ext.getCmp(cHidden).setValue(codigo);}catch(e){};Ext.getCmp(idPadreAgrupador).registroSeleccionado = grid.getSelectionModel().getSelected();/* Dispara el evento onActualizado */<c:if test="${actualizado != null && actualizado !=''}">if(!Ext.getCmp(idPadreAgrupador).hasListener('actualizado')){Ext.getCmp(idPadreAgrupador).on('actualizado',function(){${actualizado}});}</c:if>Ext.getCmp(idPadreAgrupador).actualizar();vntTipos.close();}},store: stx,bbar: new Ext.PagingToolbar({displayInfo:true,autoShow:true,displayMsg:'{0} al {1}, total: {2} registros',width:420,pageSize:<%=BeanUtils.getProperty(this,"cantidadRegistros")%>,store: stx})});vntTipos = new Ext.Window({id:'vntTipos',title:<c:choose><c:when test="${tituloVentana != null && tituloVentana !=''}">'${tituloVentana}'</c:when><c:otherwise>'Ventana de Seleccion'</c:otherwise></c:choose>,height:<c:choose><c:when test="${heightVentana != null && heightVentana !=''}">${heightVentana}</c:when><c:otherwise>350</c:otherwise></c:choose>,width:<c:choose><c:when test="${widthVentana != null && widthVentana !=''}">${widthVentana}</c:when><c:otherwise>450</c:otherwise></c:choose>,layout:'fit',resizable:false,modal:true,items:[grilla]});vntTipos.show();grilla.getStore().load({params:{start:0,limit:<%=BeanUtils.getProperty(this,"cantidadRegistros")%>}});}}</c:otherwise></c:choose>}),</c:set>
<extutil:setParentProperties tag="<%=this%>" items="${item}" />