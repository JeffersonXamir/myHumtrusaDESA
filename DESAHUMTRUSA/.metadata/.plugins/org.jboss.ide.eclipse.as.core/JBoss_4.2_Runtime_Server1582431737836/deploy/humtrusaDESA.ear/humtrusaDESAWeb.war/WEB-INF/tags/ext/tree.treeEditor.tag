<%-- 
	ExtJS Tag Library (ExtTLD)
    Copyright (C) 2008  Jaroslav Benc <jaroslav.benc@gmail.com>

    This program is free software: you can redistribute it and/or modify
    it under the terms of the GNU General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.

    You should have received a copy of the GNU General Public License
    along with this program.  If not, see <http://www.gnu.org/licenses/>.
	
	===========================================================================
	BY USING THIS LIBRARY YOU CONFIRM THAT YOU HAVE READ, UNDERSTOOD AND ACCEPT
	OUR ETHICAL CRITERIA LISTED ON THE EXTTLD WEBSITE (WWW.EXTTLD.COM)
	===========================================================================
--%>

<%-- Config params _____________________________START --%>

<%@ attribute
	name="alignment"
	type="java.lang.String"
	required="false"
	description="
(String)The position to align to (see Ext.Element.alignTo for more details, defaults to l-l).
" %>

<%@ attribute
	name="allowDomMove"
	type="java.lang.Boolean"
	required="false"
	description="
(Boolean)Whether the component can move the Dom node when rendering (defaults to true).
" %>

<%@ attribute
	name="applyTo"
	type="java.lang.String"
	required="false"
	description="
(Mixed)The id of the node, a DOM node or an existing Element corresponding to a DIV that is already present in the document that specifies some structural markup for this component. When applyTo is used, constituent parts of the component can also be specified by id or CSS class name within the main element, and the component being created may attempt to create its subcomponents from that markup if applicable. Using this config, a call to render() is not required. If applyTo is specified, any value passed for renderTo will be ignored and the target elements parent node will automatically be used as the components container.
" %>

<%@ attribute
	name="autoShow"
	type="java.lang.Boolean"
	required="false"
	description="
(Boolean)True if the component should check for hidden classes (e.g. x-hidden or x-hide-display) and remove them on render (defaults to false).
" %>

<%@ attribute
	name="autosize"
	type="java.lang.String"
	required="false"
	description="
(Boolean/String)True for the editor to automatically adopt the size of the underlying field, width to adopt the width only, or height to adopt the height only (defaults to false)
" %>

<%@ attribute
	name="cancelOnEsc"
	type="java.lang.Boolean"
	required="false"
	description="
(Boolean)True to cancel the edit when the escape key is pressed (defaults to false)
" %>

<%@ attribute
	name="cls"
	type="java.lang.String"
	required="false"
	description="
(String)CSS class to apply to the editor (defaults to x-small-editor x-tree-editor)
" %>

<%@ attribute
	name="completeOnEnter"
	type="java.lang.Boolean"
	required="false"
	description="
(Boolean)True to complete the edit when the enter key is pressed (defaults to false)
" %>

<%@ attribute
	name="constrain"
	type="java.lang.Boolean"
	required="false"
	description="
(Boolean)True to constrain the editor to the viewport
" %>

<%@ attribute
	name="ctCls"
	type="java.lang.String"
	required="false"
	description="
(String)An optional extra CSS class that will be added to this components container (defaults to ). This can be useful for adding customized styles to the container or any of its children using standard CSS rules.
" %>

<%@ attribute
	name="disabledClass"
	type="java.lang.String"
	required="false"
	description="
(String)CSS class added to the component when it is disabled (defaults to x-item-disabled).
" %>

<%@ attribute
	name="editDelay"
	type="java.lang.Integer"
	required="false"
	description="
(Number)The number of milliseconds between clicks to register a double-click that will trigger editing on the current node (defaults to 350). If two clicks occur on the same node within this time span, the editor for the node will display, otherwise it will be processed as a regular click.
" %>

<%@ attribute
	name="hideEl"
	type="java.lang.Boolean"
	required="false"
	description="
(Boolean)True to hide the bound element while the editor is displayed (defaults to false)
" %>

<%@ attribute
	name="hideMode"
	type="java.lang.String"
	required="false"
	description="
(String)How this component should hidden. Supported values are visibility (css visibility), offsets (negative offset position) and display (css display) - defaults to display.
" %>

<%@ attribute
	name="hideParent"
	type="java.lang.Boolean"
	required="false"
	description="
(Boolean)True to hide and show the components container when hide/show is called on the component, false to hide and show the component itself (defaults to false). For example, this can be used as a shortcut for a hide button on a window by setting hide:true on the button when adding it to its parent container.
" %>

<%@ attribute
	name="id"
	type="java.lang.String"
	required="false"
	description="
(String)The unique id of this component (defaults to an auto-assigned id).
" %>

<%@ attribute
	name="ignoreNoChange"
	type="java.lang.Boolean"
	required="false"
	description="
(Boolean)True to skip the the edit completion process (no save, no events fired) if the user completes an edit and the value has not changed (defaults to false). Applies only to string values - edits for other data types will never be ignored.
" %>

<%@ attribute
	name="listeners"
	type="java.lang.Object"
	required="false"
	description="
(Object)A config object containing one or more event handlers to be added to this object during initialization. This should be a valid listeners config object as specified in the addListener example for attaching multiple handlers at once.
" %>

<%@ attribute
	name="maxWidth"
	type="java.lang.Integer"
	required="false"
	description="
(Number)The maximum width in pixels of the editor field (defaults to 250). Note that if the maxWidth would exceed the containing tree elements size, it will be automatically limited for you to the container width, taking scroll and client offsets into account prior to each edit.
" %>

<%@ attribute
	name="plugins"
	type="java.lang.Object"
	required="false"
	description="
(Object/Array)An object or array of objects that will provide custom functionality for this component. The only requirement for a valid plugin is that it contain an init method that accepts a reference of type Ext.Component. When a component is created, if any plugins are available, the component will call the init method on each plugin, passing a reference to itself. Each plugin can then call methods or respond to events on the component as needed to provide its functionality.
" %>

<%@ attribute
	name="renderTo"
	type="java.lang.String"
	required="false"
	description="
(Mixed)The id of the node, a DOM node or an existing Element that will be the container to render this component into. Using this config, a call to render() is not required.
" %>

<%@ attribute
	name="revertInvalid"
	type="java.lang.Boolean"
	required="false"
	description="
(Boolean)True to automatically revert the field value and cancel the edit when the user completes an edit and the field validation fails (defaults to true)
" %>

<%@ attribute
	name="shadow"
	type="java.lang.String"
	required="false"
	description="
(Boolean/String)sides for sides/bottom only, frame for 4-way shadow, and drop for bottom-right shadow (defaults to frame)
" %>

<%@ attribute
	name="shim"
	type="java.lang.Boolean"
	required="false"
	description="
(Boolean)True to shim the editor if selects/iframes could be displayed beneath it (defaults to false)
" %>

<%@ attribute
	name="stateEvents"
	type="java.lang.String"
	required="false"
	description="
(Array)An array of events that, when fired, should trigger this component to save its state (defaults to none). These can be any types of events supported by this component, including browser or custom events (e.g., [click, customerchange]).
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
(String)A custom style specification to be applied to this components Element. Should be a valid argument to Ext.Element.applyStyles.
" %>

<%@ attribute
	name="swallowKeys"
	type="java.lang.Boolean"
	required="false"
	description="
(Boolean)Handle the keydown/keypress events so they dont propagate (defaults to true)
" %>

<%@ attribute
	name="updateEl"
	type="java.lang.Boolean"
	required="false"
	description="
(Boolean)True to update the innerHTML of the bound element when the update completes (defaults to false)
" %>

<%@ attribute
	name="value"
	type="java.lang.String"
	required="false"
	description="
(Mixed)The data value of the underlying field (defaults to )
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

<%-- Config params _____________________________END --%>

<%-- Events _____________________________START --%>

<%@ attribute
	name="onBeforecomplete"
	type="java.lang.String"
	required="false"
	description="
( Editor this, Mixed value, Mixed startValue )Fires after a change has been made to the field, but before the change is reflected in the underlyingfield.Saving the change to the field can be canceled by returning false from the handler of this event.Note that if the value has not changed and ignoreNoChange = true, the editing will still end but thisevent will not fire since no edit actually occurred.
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
	name="onBeforestartedit"
	type="java.lang.String"
	required="false"
	description="
( Editor this, Ext.Element boundEl, Mixed value )Fires when editing is initiated, but before the value changes.Editing can be canceled by returningfalse from the handler of this event.
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
	name="onComplete"
	type="java.lang.String"
	required="false"
	description="
( Editor this, Mixed value, Mixed startValue )Fires after editing is complete and any changed value has been written to the underlying field.
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
	name="onHide"
	type="java.lang.String"
	required="false"
	description="
( Ext.Component this )Fires after the component is hidden.
" %>

<%@ attribute
	name="onRender"
	type="java.lang.String"
	required="false"
	description="
( Ext.Component this )Fires after the component is rendered.
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
	type="java.lang.Object"
	required="false"
	description="
( Ext.form.Field this, Ext.EventObject e )Fires when any key related to navigation (arrows, tab, enter, esc, etc.) is pressed.You can checkExt.EventObject.getKey to determine which key was pressed.
" %>

<%@ attribute
	name="onStartedit"
	type="java.lang.String"
	required="false"
	description="
( Ext.Element boundEl, Mixed value )Fires when this editor is displayed
" %>

<%@ attribute
	name="onStaterestore"
	type="java.lang.Object"
	required="false"
	description="
( Ext.Component this, Object state )Fires after the state of the component is restored.
" %>

<%@ attribute
	name="onStatesave"
	type="java.lang.Object"
	required="false"
	description="
( Ext.Component this, Object state )Fires after the state of the component is saved to the configured state provider.
" %>

<%-- Events _____________________________END --%>


<%@ include file="inc/taglibs.jsp" %>
<%@ tag 
	import="org.apache.commons.beanutils.BeanUtils"
	dynamic-attributes="dynamicAttributes"
	description="Provides editor functionality for inline tree node editing. Any valid Ext.form.Field can be used as the editor field." %>
	
	<extutil:processTagAttributes 
		configVar="configMap" 
		eventsVar="eventsMap" 
		include="*" 
		tagJspContext='<%=jspContext %>'
		dynamicAttributes="${dynamicAttributes}" />	
	
	<%-- Process JSP body --%>
	
	<c:set var="parentId"><extutil:getParentProperty tag='<%= this %>' property="id" /></c:set>
	<c:if test="${parentId==''}">
		<c:set var="parentId"><extutil:getParentTagId tag='<%= this %>' /></c:set>
	</c:if>
	
	<jsp:doBody/>
		
	<c:set var="item">
		    new Ext.tree.TreeEditor(${parentId},{
		  		<c:forEach items="${configMap}" var="config">
		  			${config.key}:${config.value},
		  		</c:forEach>
		  		listeners:{
			  		<c:forEach items="${eventsMap}" var="event" varStatus="status">
			  			<c:if test="${fn:indexOf(event.value,'function(')==-1}">
				  			${event.key}:function(){${event.value}}			  			
			  			</c:if>
		  				<c:if test="${fn:indexOf(event.value,'function(')>-1}">
				  			${event.key}:${event.value}
			  			</c:if>
			  			${status.last?'':','}
			  		</c:forEach>
		  		}
		    });
	</c:set>
	<extutil:setCompExecutions>${item}</extutil:setCompExecutions>