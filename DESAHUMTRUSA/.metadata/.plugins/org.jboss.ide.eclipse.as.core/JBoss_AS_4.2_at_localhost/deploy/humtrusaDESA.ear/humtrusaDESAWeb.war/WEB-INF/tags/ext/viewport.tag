<%@ attribute
	name="activeItem"
	type="java.lang.String"
	required="false"
	description="
(String/Number)A string component id or the numeric index of the component that should be initially activated within the containers layout on render. For example, activeItem: item-1 or activeItem: 0 (index 0 = the first item in the containers collection). activeItem only applies to layout styles that can display items one at a time (like Ext.layout.Accordion, Ext.layout.CardLayout and Ext.layout.FitLayout). Related to Ext.layout.ContainerLayout.activeItem.
" %>
<%@ attribute
	name="autoDestroy"
	type="java.lang.Boolean"
	required="false"
	description="
(Boolean)If true the container will automatically destroy any contained component that is removed from it, else destruction must be handled manually (defaults to true).
" %>
<%@ attribute
	name="autoShow"
	type="java.lang.Boolean"
	required="false"
	description="
(Boolean)True if the component should check for hidden classes (e.g. x-hidden or x-hide-display) and remove them on render (defaults to false).
" %>
<%@ attribute
	name="bufferResize"
	type="java.lang.Object"
	required="false"
	description="
(Boolean/Number)When set to true (100 milliseconds) or a number of milliseconds, the layout assigned for this container will buffer the frequency it calculates and does a re-layout of components. This is useful for heavy containers or containers with a large amount of sub components that frequent calls to layout are expensive.
" %>
<%@ attribute
	name="cls"
	type="java.lang.String"
	required="false"
	description="
(String)An optional extra CSS class that will be added to this components Element (defaults to ). This can be useful for adding customized styles to the component or any of its children using standard CSS rules.
" %>
<%@ attribute
	name="ctCls"
	type="java.lang.String"
	required="false"
	description="
(String)An optional extra CSS class that will be added to this components container (defaults to ). This can be useful for adding customized styles to the container or any of its children using standard CSS rules.
" %>
<%@ attribute
	name="defaultType"
	type="java.lang.String"
	required="false"
	description="
(String)The default type of container represented by this object as registered in Ext.ComponentMgr (defaults to panel).
" %>
<%@ attribute
	name="defaults"
	type="java.lang.Object"
	required="false"
	description="
(Object)A config object that will be applied to all components added to this container either via the items config or via the add or insert methods. The defaults config can contain any number of name/value property pairs to be added to each item, and should be valid for the types of items being added to the container. For example, to automatically apply padding to the body of each of a set of contained Ext.Panel items, you could pass: defaults: {bodyStyle:padding:15px}.
" %>
<%@ attribute
	name="disabledClass"
	type="java.lang.String"
	required="false"
	description="
(String)CSS class added to the component when it is disabled (defaults to x-item-disabled).
" %>
<%@ attribute
	name="hideBorders"
	type="java.lang.Boolean"
	required="false"
	description="
(Boolean)True to hide the borders of each contained component, false to defer to the components existing border settings (defaults to false).
" %>
<%@ attribute
	name="hideMode"
	type="java.lang.String"
	required="false"
	description="
(String)How this component should hidden. Supported values are visibility (css visibility), offsets (negative offset position) and display (css display) - defaults to display.
" %>
<%@ attribute
	name="id"
	type="java.lang.String"
	required="false"
	description="
(String)The unique id of this component (defaults to an auto-assigned id).
" %>
<%@ attribute
	name="items"
	type="java.lang.String"
	required="false"
	description="
(Mixed)A single item, or an array of child Components to be added to this container. Each item can be any type of object based on Ext.Component.

 Component config objects may also be specified in order to avoid the overhead of constructing a real Component object if lazy rendering might mean that the added Component will not be rendered immediately. To take advantage of this lazy instantiation, set the Ext.Component.xtype config property to the registered type of the Component wanted.

 For a list of all available xtypes, see Ext.Component. If a single item is being passed, it should be passed directly as an object reference (e.g., items: {...}). Multiple items should be passed as an array of objects (e.g., items: [{...}, {...}]).
" %>
<%@ attribute
	name="layout"
	type="java.lang.String"
	required="false"
	description="
(String)The layout type to be used in this container. If not specified, a default Ext.layout.ContainerLayout will be created and used. Valid values are: accordion, anchor, border, card, column, fit, form and table. Specific config values for the chosen layout type can be specified using layoutConfig.
" %>
<%@ attribute
	name="layoutConfig"
	type="java.lang.Object"
	required="false"
	description="
(Object)This is a config object containing properties specific to the chosen layout (to be used in conjunction with the layout config value). For complete details regarding the valid config options for each layout type, see the layout class corresponding to the type specified:

    * Ext.layout.Accordion
    * Ext.layout.AnchorLayout
    * Ext.layout.BorderLayout
    * Ext.layout.CardLayout
    * Ext.layout.ColumnLayout
    * Ext.layout.FitLayout
    * Ext.layout.FormLayout
    * Ext.layout.TableLayout


" %>
<%@ attribute
	name="listeners"
	type="java.lang.Object"
	required="false"
	description="
(Object)A config object containing one or more event handlers to be added to this object during initialization. This should be a valid listeners config object as specified in the addListener example for attaching multiple handlers at once.
" %>
<%@ attribute
	name="monitorResize"
	type="java.lang.Boolean"
	required="false"
	description="
(Boolean)True to automatically monitor window resize events to handle anything that is sensitive to the current size of the viewport. This value is typically managed by the chosen layout and should not need to be set manually.
" %>
<%@ attribute
	name="plugins"
	type="java.lang.Object"
	required="false"
	description="
(Object/Array)An object or array of objects that will provide custom functionality for this component. The only requirement for a valid plugin is that it contain an init method that accepts a reference of type Ext.Component. When a component is created, if any plugins are available, the component will call the init method on each plugin, passing a reference to itself. Each plugin can then call methods or respond to events on the component as needed to provide its functionality.
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
	name="xtype"
	type="java.lang.String"
	required="false"
	description="
(String)The registered xtype to create. This config option is not used when passing a config object into a constructor. This config option is used only when lazy instantiation is being used, and a child item of a Container is being specified not as a fully instantiated Component, but as a Component config object. The xtype will be looked up at render time up to determine what type of child Component to create.

 The predefined xtypes are listed here. 

 If you subclass Components to create your own Components, you may register them using Ext.ComponentMgr.registerType in order to be able to take advantage of lazy instantiation and rendering.
" %>
<%@ attribute
	name="onAdd"
	type="java.lang.Integer"
	required="false"
	description="
( Ext.Container this, Ext.Component component, Number index )Fires after any Ext.Component is added or inserted into the container.
" %>
<%@ attribute
	name="onAfterlayout"
	type="java.lang.String"
	required="false"
	description="
( Ext.Container this, ContainerLayout layout )Fires when the components in this container are arranged by the associated layout manager.
" %>
<%@ attribute
	name="onBeforeadd"
	type="java.lang.Integer"
	required="false"
	description="
( Ext.Container this, Ext.Component component, Number index )Fires before any Ext.Component is added or inserted into the container.A handler can return false to cancel the add.
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
	name="onBeforeremove"
	type="java.lang.String"
	required="false"
	description="
( Ext.Container this, Ext.Component component )Fires before any Ext.Component is removed from the container.A handler can returnfalse to cancel the remove.
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
	name="onMove"
	type="java.lang.Integer"
	required="false"
	description="
( Ext.Component this, Number x, Number y )Fires after the component is moved.
" %>
<%@ attribute
	name="onRemove"
	type="java.lang.String"
	required="false"
	description="
( Ext.Container this, Ext.Component component )Fires after any Ext.Component is removed from the container.
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
	type="java.lang.Integer"
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
<%@ include file="inc/taglibs.jsp" %>
<%@ tag 
	import="org.apache.commons.beanutils.BeanUtils"
	dynamic-attributes="dynamicAttributes"
	description="A specialized container representing the viewable application area (the browser viewport).  The Viewport renders itself to the document body, and automatically sizes itself to the size of the browser viewport and manages window resizing. There may only be one Viewport created in a page. Inner layouts are available by virtue of the fact that all Panels added to the Viewport, either through its items, or through the items, or the add method of any of its child Panels may themselves have a layout. The Viewport does not provide scrolling, so child Panels within the Viewport should provide for scrolling if needed using the autoScroll config." %>
<extutil:processTagAttributes configVar="configMap" eventsVar="eventsMap" include="*" tagJspContext='<%=jspContext %>' dynamicAttributes="${dynamicAttributes}" />
<jsp:doBody /><script>Ext.onReady(function(){var viewport = new Ext.Viewport({<c:forEach items="${configMap}" var="config">${config.key}:${config.value},</c:forEach><c:if test='<%= BeanUtils.getProperty(this,"items") != null %>'>items:[<% String items = BeanUtils.getProperty(this,"items");jspContext.getOut().write(items.substring(0,items.length()-1)); %>],</c:if>listeners:{<c:forEach items="${eventsMap}" var="event" varStatus="status"><c:if test="${fn:indexOf(event.value,'function(')==-1}">${event.key}:function(){${event.value}}</c:if><c:if test="${fn:indexOf(event.value,'function(')>-1}">${event.key}:${event.value}</c:if>${status.last?'':','}</c:forEach>}})})</script>