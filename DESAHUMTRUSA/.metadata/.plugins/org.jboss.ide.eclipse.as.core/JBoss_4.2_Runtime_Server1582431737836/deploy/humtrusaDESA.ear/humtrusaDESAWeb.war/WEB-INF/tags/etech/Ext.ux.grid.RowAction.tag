<%-- Config params _____________________________START --%>

actions
<%@ attribute
	name="actions"
	type="java.lang.String"
	required="false"
	description="
	 *   Array of action configuration objects. e.g.
	 *	[{
			iconIndex:'action1'
			,qtipIndex:'qtip1'
			,iconCls:'icon-guardar'
			,tooltip:'Open'
		 },{
			iconCls:'icon-modificar'
			,tooltip:'Configure'
			,qtipIndex:'qtip2'
			,iconIndex:'action2'
			,hideIndex:'hide2'
			//,text:'Open'
		 },{
			iconIndex:'action3'
			,qtipIndex:'qtip3'
			,iconCls:'icon-eliminar'
			,tooltip:'User'
			,style:'background-color:yellow'
		}]
		Cada objeto de configuracion representa un icono.
		Hay atributos redundantes como iconIndex e iconCls, en este caso iconIndex buscara la clase desde el store, iconCls definira una clase estatica
	 "
 %>
<%@ attribute
	name="callback"
	type="java.lang.String"
	required="false"
	description="
	 *   {Function} Function to call if the action icon is clicked.
	 *   This function is called with same signature as action event and in its original scope.
	 *   If you need to call it in different scope or with another signature use 
	 *   createCallback or createDelegate functions. Works for statically defined actions. Use
	 *   callbacks configuration options for store bound actions."
 %>
 <%@ attribute
	name="cb"
	type="java.lang.String"
	required="false"
	description="
	 *   Shortcut for callback"
 %>
 <%@ attribute
	name="iconIndex"
	type="java.lang.String"
	required="false"
	description="
	 *   however either iconIndex or iconCls must be
	 *   configured. Field name of the field of the grid store record that contains
	 *   css class of the icon to show. If configured, shown icons can vary depending
	 *   of the value of this field."
 %>
  <%@ attribute
	name="iconCls"
	type="java.lang.String"
	required="false"
	description="
	 *   . css class of the icon to show. It is ignored if iconIndex is
	 *   configured. Use this if you want static icons that are not base on the values in the record."
 %>
 <%@ attribute
	name="hide"
	type="java.lang.String"
	required="false"
	description="
	 *   True to hide this action while still have a space in 
	 *   the grid column allocated to it. IMO, it doesn't make too much sense, use hideIndex instead."
 %>
 <%@ attribute
	name="hideIndex"
	type="java.lang.String"
	required="false"
	description="
	 *   Optional. Field name of the field of the grid store record that
	 *   contains hide flag (falsie [null, '', 0, false, undefined] to show, anything else to hide)."
 %>
 <%@ attribute
	name="qtipIndex"
	type="java.lang.String"
	required="false"
	description="
	 *   Optional. Field name of the field of the grid store record that 
	 *   contains tooltip text. If configured, the tooltip texts are taken from the store."
 %> 
 <%@ attribute
	name="tooltip"
	type="java.lang.String"
	required="false"
	description="
	 *   Optional. Tooltip text to use as icon tooltip. It is ignored if 
	 *   qtipIndex is configured. Use this if you want static tooltips that are not taken from the store."
 %>  
 <%@ attribute
	name="qtip"
	type="java.lang.String"
	required="false"
	description="
	 *   Synonym for tooltip."
 %> 
 <%@ attribute
	name="textIndex"
	type="java.lang.String"
	required="false"
	description="
	 *   Optional. Field name of the field of the grids store record
	 *   that contains text to display on the right side of the icon. If configured, the text
	 *   shown is taken from record."
 %>
 <%@ attribute
	name="text"
	type="java.lang.String"
	required="false"
	description="
	 *   Optional. Text to display on the right side of the icon. Use this
	 *   if you want static text that are not taken from record. Ignored if textIndex is set."
 %>  
 <%@ attribute
	name="style"
	type="java.lang.String"
	required="false"
	description="
	 *   Optional. Style to apply to action icon container."
 %> 
 <%@ attribute
	name="actionEvnet"
	type="java.lang.String"
	required="false"
	description="
	 *   Event to trigger actions, e.g. click, dblclick, mouseover (defaults to 'click')"	 
 %>   
 <%@ attribute
	name="autoWidth"
	type="java.lang.String"
	required="false"
	description="
	 *   true to calculate field width for iconic actions only (defaults to true)."	 
 %> 
 <%@ attribute
	name="groupActions"
	type="java.lang.String"
	required="false"
	description="
	 *   Array of action to use for group headers of grouping grids.
	 * These actions support static icons, texts and tooltips same way as actions. There is one
	 * more action config recognized:
	 * - @cfg {String} align Set it to 'left' to place action icon next to the group header text.
	 *   (defaults to undefined = icons are placed at the right side of the group header."	 
 %> 
 <%@ attribute
	name="callbacks"
	type="java.lang.String"
	required="false"
	description="
	 *   iconCls keyed object that contains callback functions. For example:
	 * callbacks:{
	 *      'icon-open':function(...) {...}
	 *     ,'icon-save':function(...) {...}
	 * }"	 
 %> 
 <%@ attribute
	name="header"
	type="java.lang.String"
	required="false"
	description="
	 *   Actions column header"	 
 %> 

<%-- Config params _____________________________END --%>
<%-- Events _____________________________START --%>
<%@ attribute
	name="beforeaction"
	type="java.lang.String"
	required="false"
	description="(Optional) Fires before action event. Return false to cancel the subsequent action event. 
	@param {Ext.grid.GridPanel} grid
	@param {Ext.data.Record} record Record corresponding to row clicked
	@param {String} action Identifies the action icon clicked. Equals to icon css class name.
	@param {Integer} rowIndex Index of clicked grid row
	@param {Integer} colIndex Index of clicked grid column that contains all action icons"
 %>
<%@ attribute
	name="action"
	type="java.lang.String"
	required="false"
	description="Fires when icon is clicked
	@param {Ext.grid.GridPanel} grid
	@param {Ext.data.Record} record Record corresponding to row clicked
	@param {String} action Identifies the action icon clicked. Equals to icon css class name.
	@param {Integer} rowIndex Index of clicked grid row
	@param {Integer} colIndex Index of clicked grid column that contains all action icons"
 %>
 <%@ attribute
	name="beforegroupaction"
	type="java.lang.String"
	required="false"
	description="Fires before group action event. Return false to cancel the subsequent groupaction event.
	@param {Ext.grid.GridPanel} grid
	@param {Ext.data.Record} record Record corresponding to row clicked
	@param {String} action Identifies the action icon clicked. Equals to icon css class name.
	@param {Integer} rowIndex Index of clicked grid row
	@param {Integer} colIndex Index of clicked grid column that contains all action icons"
 %>
<%@ attribute
	name="groupaction"
	type="java.lang.String"
	required="false"
	description="Fires when icon in a group header is clicked
	@param {Ext.grid.GridPanel} grid
	@param {Ext.data.Record} record Record corresponding to row clicked
	@param {String} action Identifies the action icon clicked. Equals to icon css class name.
	@param {Integer} rowIndex Index of clicked grid row
	@param {Integer} colIndex Index of clicked grid column that contains all action icons"
 %>
 <%-- Events _____________________________END --%>
 <%-- Added params _____________________________START --%>  
<%@ attribute
	name="items"
	type="java.lang.String"
	required="false"
	description="(String)Editor container, generated by child tags."
 %>
 <%-- Added params _____________________________END --%> 
 <%@ include file="../ext/inc/taglibs.jsp" %>
<%@ tag 
	import="org.apache.commons.beanutils.BeanUtils,
		    javax.servlet.jsp.tagext.SimpleTag"
	dynamic-attributes="dynamicAttributes"
	description="Inserta una columna (igual a Ext:column) pero con imagenes ligadas a eventos, ideal para acciones sobre registros y no sobre celdas puntuales " 
	%>
<extutil:processTagAttributes 
		configVar="configMap" 
		eventsVar="eventsMap" 
		include="*" 
		exclude="items,listeners,cellActions"
		javaScript="editor"
		tagJspContext='<%=jspContext %>'
		dynamicAttributes="${dynamicAttributes}" />

<% 
    	int colSize = new Integer(BeanUtils.getProperty(this.findAncestorWithClass(this,SimpleTag.class),"colSize")).intValue();
    	BeanUtils.setProperty(this.findAncestorWithClass(this,SimpleTag.class),"colSize",new Integer(++colSize)); 
    %>
<c:set var="fields">name:'<%= colSize %>',</c:set>
<%-- Process JSP body --%>
<jsp:doBody/>
<c:set var="item"></c:set>
<c:if test="<%=BeanUtils.getProperty(this,"actions")!=null %>">
	actions:<% 
		String actions = BeanUtils.getProperty(this,"actions");
		jspContext.getOut().write(actions.substring(0,actions.length()-1));
	%>,
</c:if>
listeners:{
		 	<c:if test="<%= BeanUtils.getProperty(this,"listeners")!=null %>">
					<% 
								String listeners = BeanUtils.getProperty(this,"listeners");
								jspContext.getOut().write(listeners.substring(0,listeners.length()-1));
						%>
				</c:if>		  		
	 		}
<extutil:setParentProperties 
		tag='<%=this%>' 
		items="${item}"
		fields="${fields}" />		 