<%@ attribute
	name="activeItem"
	type="java.lang.String"
	required="false"
	description="
(String/Number)A string component id or the numeric index of the component that should be initially activated within the containers layout on render. For example, activeItem: item-1 or activeItem: 0 (index 0 = the first item in the containers collection). activeItem only applies to layout styles that can display items one at a time (like Ext.layout.Accordion, Ext.layout.CardLayout and Ext.layout.FitLayout). Related to Ext.layout.ContainerLayout.activeItem.
" %>
<%@ attribute
	name="activeTab"
	type="java.lang.String"
	required="false"
	description="
(String/Number)A string id or the numeric index of the tab that should be initially activated on render (defaults to none).
" %>
<%@ attribute
	name="allowDomMove"
	type="java.lang.Boolean"
	required="false"
	description="
(Boolean)Whether the component can move the Dom node when rendering (defaults to true).
" %>
<%@ attribute
	name="animCollapse"
	type="java.lang.Boolean"
	required="false"
	description="
(Boolean)True to animate the transition when the panel is collapsed, false to skip the animation (defaults to true if the Ext.Fx class is available, otherwise false).
" %>
<%@ attribute
	name="animScroll"
	type="java.lang.Boolean"
	required="false"
	description="
(Boolean)True to animate tab scrolling so that hidden tabs slide smoothly into view (defaults to true). Only applies when enableTabScroll = true.
" %>
<%@ attribute
	name="applyTo"
	type="java.lang.String"
	required="false"
	description="
(Mixed)The id of the node, a DOM node or an existing Element corresponding to a DIV that is already present in the document that specifies some structural markup for this component. When applyTo is used, constituent parts of the component can also be specified by id or CSS class name within the main element, and the component being created may attempt to create its subcomponents from that markup if applicable. Using this config, a call to render() is not required. If applyTo is specified, any value passed for renderTo will be ignored and the target elements parent node will automatically be used as the components container.
" %>
<%@ attribute
	name="autoDestroy"
	type="java.lang.Boolean"
	required="false"
	description="
(Boolean)If true the container will automatically destroy any contained component that is removed from it, else destruction must be handled manually (defaults to true).
" %>
<%@ attribute
	name="autoHeight"
	type="java.lang.Boolean"
	required="false"
	description="
(Boolean)True to use height:auto, false to use fixed height (defaults to false).
" %>
<%@ attribute
	name="autoLoad"
	type="java.lang.String"
	required="false"
	description="
(Object/String/Function)A valid url spec according to the Updater Ext.Updater.update method. If autoLoad is not null, the panel will attempt to load its contents immediately upon render.

The URL will become the default URL for this panels body element, so it may be refreshed at any time.

" %>
<%@ attribute
	name="autoScroll"
	type="java.lang.Boolean"
	required="false"
	description="
(Boolean)True to use overflow:auto on the panels body element and show scroll bars automatically when necessary, false to clip any overflowing content (defaults to false).
" %>
<%@ attribute
	name="autoShow"
	type="java.lang.Boolean"
	required="false"
	description="
(Boolean)True if the component should check for hidden classes (e.g. x-hidden or x-hide-display) and remove them on render (defaults to false).
" %>
<%@ attribute
	name="autoTabSelector"
	type="java.lang.String"
	required="false"
	description="
(String)The CSS selector used to search for tabs in existing markup when autoTabs = true (defaults to div.x-tab). This can be any valid selector supported by Ext.DomQuery.select. Note that the query will be executed within the scope of this tab panel only (so that multiple tab panels from markup can be supported on a page).
" %>
<%@ attribute
	name="autoTabs"
	type="java.lang.Boolean"
	required="false"
	description="
(Boolean)

True to query the DOM for any divs with a class of x-tab to be automatically converted to tabs and added to this panel (defaults to false). Note that the query will be executed within the scope of the container element only (so that multiple tab panels from markup can be supported via this method).
 

This method is only possible when the markup is structured correctly as a container with nested divs containing the class x-tab. To create TabPanels without these limitations, or to pull tab content from other elements on the page, see the example at the top of the class for generating tabs from markup.
 

There are a couple of things to note when using this method:

    * When using the autoTabs config (as opposed to passing individual tab configs in the TabPanels items collection), you must use applyTo to correctly use the specified id as the tab container. The autoTabs method replaces existing content with the TabPanel components.
    * Make sure that you set deferredRender to false so that the content elements for each tab will be rendered into the TabPanel immediately upon page load, otherwise they will not be transformed until each tab is activated and will be visible outside the TabPanel.

Example usage: 

" %>
<%@ attribute
	name="autoWidth"
	type="java.lang.Boolean"
	required="false"
	description="
(Boolean)True to use width:auto, false to use fixed width (defaults to false).
" %>
<%@ attribute
	name="baseCls"
	type="java.lang.String"
	required="false"
	description="
(String)The base CSS class applied to the panel (defaults to x-tab-panel).
" %>
<%@ attribute
	name="bbar"
	type="java.lang.Object"
	required="false"
	description="
(Object/Array)The bottom toolbar of the panel. This can be a Ext.Toolbar object, a toolbar config, or an array of buttons/button configs to be added to the toolbar. Note that this is not available as a property after render. To access the bottom toolbar after render, use getBottomToolbar.
" %>
<%@ attribute
	name="bodyBorder"
	type="java.lang.Boolean"
	required="false"
	description="
(Boolean)True to display an interior border on the body element of the panel, false to hide it (defaults to true). This only applies when border == true. If border == true and bodyBorder == false, the border will display as a 1px wide inset border, giving the entire body element an inset appearance.
" %>
<%@ attribute
	name="bodyStyle"
	type="java.lang.String"
	required="false"
	description="
(String/Object/Function)Custom CSS styles to be applied to the body element in the format expected by Ext.Element.applyStyles (defaults to null).
" %>
<%@ attribute
	name="border"
	type="java.lang.Boolean"
	required="false"
	description="
(Boolean)True to display the borders of the panels body element, false to hide them (defaults to true). By default, the border is a 2px wide inset border, but this can be further altered by setting bodyBorder to false.
" %>
<%@ attribute
	name="bufferResize"
	type="java.lang.Object"
	required="false"
	description="
(Boolean/Number)When set to true (100 milliseconds) or a number of milliseconds, the layout assigned for this container will buffer the frequency it calculates and does a re-layout of components. This is useful for heavy containers or containers with a large amount of sub components that frequent calls to layout are expensive.
" %>
<%@ attribute
	name="buttonAlign"
	type="java.lang.String"
	required="false"
	description="
(String)The alignment of any buttons added to this panel. Valid values are right, left and center (defaults to right).
" %>
<%@ attribute
	name="buttons"
	type="java.lang.String"
	required="false"
	description="
(Array)An array of Ext.Button configs used to add buttons to the footer of this panel.
" %>
<%@ attribute
	name="cls"
	type="java.lang.String"
	required="false"
	description="
(String)An optional extra CSS class that will be added to this components Element (defaults to ). This can be useful for adding customized styles to the component or any of its children using standard CSS rules.
" %>
<%@ attribute
	name="collapseFirst"
	type="java.lang.Boolean"
	required="false"
	description="
(Boolean)True to make sure the collapse/expand toggle button always renders first (to the left of) any other tools in the panels title bar, false to render it last (defaults to true).
" %>
<%@ attribute
	name="collapsed"
	type="java.lang.Boolean"
	required="false"
	description="
(Boolean)True to render the panel collapsed, false to render it expanded (defaults to false).
" %>
<%@ attribute
	name="collapsedCls"
	type="java.lang.String"
	required="false"
	description="
(String)A CSS class to add to the panels element after it has been collapsed (defaults to x-panel-collapsed).
" %>
<%@ attribute
	name="contentEl"
	type="java.lang.String"
	required="false"
	description="
(String)The id of an existing HTML node to use as the panels body content (defaults to ).
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
	name="deferredRender"
	type="java.lang.Boolean"
	required="false"
	description="
(Boolean)Internally, the TabPanel uses a Ext.layout.CardLayout to manage its tabs. This property will be passed on to the layout as its Ext.layout.CardLayout.deferredRender config value, determining whether or not each tab is rendered only when first accessed (defaults to true).
" %>
<%@ attribute
	name="disabledClass"
	type="java.lang.String"
	required="false"
	description="
(String)CSS class added to the component when it is disabled (defaults to x-item-disabled).
" %>
<%@ attribute
	name="draggable"
	type="java.lang.Boolean"
	required="false"
	description="
(Boolean)True to enable dragging of this Panel (defaults to false). For custom drag/drop implementations, an Ext.Panel.DD config could also be passed in this config instead of true, although Ext.Panel.DD is an internal, undocumented class.
" %>
<%@ attribute
	name="elements"
	type="java.lang.String"
	required="false"
	description="
(String)A comma-delimited list of panel elements to initialize when the panel is rendered. Normally, this list will be generated automatically based on the items added to the panel at config time, but sometimes it might be useful to make sure a structural element is rendered even if not specified at config time (for example, you may want to add a button or toolbar dynamically after the panel has been rendered). Adding those elements to this list will allocate the required placeholders in the panel when it is rendered. Valid values are

    * header
    * tbar (top bar)
    * body
    * bbar (bottom bar)
    * footer
*

 Defaults to body.
" %>
<%@ attribute
	name="enableTabScroll"
	type="java.lang.String"
	required="false"
	description="
(Mixed)True to enable scrolling to tabs that may be invisible due to overflowing the overall TabPanel width. Only available with tabs on top. (defaults to false).
" %>
<%@ attribute
	name="floating"
	type="java.lang.Boolean"
	required="false"
	description="
(Boolean)True to float the panel (absolute position it with automatic shimming and shadow), false to display it inline where it is rendered (defaults to false). Note that by default, setting floating to true will cause the panel to display at negative offsets so that it is hidden -- because the panel is absolute positioned, the position must be set explicitly after render (e.g., myPanel.setPosition(100,100);). Also, when floating a panel you should always assign a fixed width, otherwise it will be auto width and will expand to fill to the right edge of the viewport.
" %>
<%@ attribute
	name="footer"
	type="java.lang.Boolean"
	required="false"
	description="
(Boolean)True to create the footer element explicitly, false to skip creating it. By default, when footer is not specified, if one or more buttons have been added to the panel the footer will be created automatically, otherwise it will not.
" %>
<%@ attribute
	name="frame"
	type="java.lang.Boolean"
	required="false"
	description="
(Boolean)True to render the panel with custom rounded borders, false to render with plain 1px square borders (defaults to false).
" %>
<%@ attribute
	name="height"
	type="java.lang.Integer"
	required="false"
	description="
(Number)The height of this component in pixels (defaults to auto).
" %>
<%@ attribute
	name="hideBorders"
	type="java.lang.Boolean"
	required="false"
	description="
(Boolean)True to hide the borders of each contained component, false to defer to the components existing border settings (defaults to false).
" %>
<%@ attribute
	name="hideCollapseTool"
	type="java.lang.Boolean"
	required="false"
	description="
(Boolean)True to hide the expand/collapse toggle button when collapsible = true, false to display it (defaults to false).
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
	name="html"
	type="java.lang.String"
	required="false"
	description="
(String/Object)An HTML fragment, or a DomHelper specification to use as the panels body content (defaults to ).
" %>
<%@ attribute
	name="iconCls"
	type="java.lang.String"
	required="false"
	description="
(String)A CSS class that will provide a background image to be used as the panel header icon (defaults to ).
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
	name="keys"
	type="java.lang.Object"
	required="false"
	description="
(Object/Array)A KeyMap config object (in the format expected by Ext.KeyMap.addBinding used to assign custom key handling to this panel (defaults to null).
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
	name="layoutOnTabChange"
	type="java.lang.Boolean"
	required="false"
	description="
(Boolean)Set to true to do a layout of tab items as tabs are changed.
" %>
<%@ attribute
	name="listeners"
	type="java.lang.Object"
	required="false"
	description="
(Object)A config object containing one or more event handlers to be added to this object during initialization. This should be a valid listeners config object as specified in the addListener example for attaching multiple handlers at once.
" %>
<%@ attribute
	name="maskDisabled"
	type="java.lang.Boolean"
	required="false"
	description="
(Boolean)True to mask the panel when it is disabled, false to not mask it (defaults to true). Either way, the panel will always tell its contained elements to disable themselves when it is disabled, but masking the panel can provide an additional visual cue that the panel is disabled.
" %>
<%@ attribute
	name="minButtonWidth"
	type="java.lang.Integer"
	required="false"
	description="
(Number)Minimum width in pixels of all buttons in this panel (defaults to 75)
" %>
<%@ attribute
	name="minTabWidth"
	type="java.lang.Integer"
	required="false"
	description="
(Number)The minimum width in pixels for each tab when resizeTabs = true (defaults to 30).
" %>
<%@ attribute
	name="monitorResize"
	type="java.lang.Boolean"
	required="false"
	description="
(Boolean)True to automatically monitor window resize events and rerender the layout on browser resize (defaults to true).
" %>
<%@ attribute
	name="plain"
	type="java.lang.Boolean"
	required="false"
	description="
(Boolean)True to render the tab strip without a background container image (defaults to false).
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
	name="resizeTabs"
	type="java.lang.Boolean"
	required="false"
	description="
(Boolean)True to automatically resize each tab so that the tabs will completely fill the tab strip (defaults to false). Setting this to true may cause specific widths that might be set per tab to be overridden in order to fit them all into view (although minTabWidth will always be honored).
" %>
<%@ attribute
	name="scrollDuration"
	type="java.lang.String"
	required="false"
	description="
(Float)The number of milliseconds that each scroll animation should last (defaults to .35). Only applies when animScroll = true.
" %>
<%@ attribute
	name="scrollIncrement"
	type="java.lang.Integer"
	required="false"
	description="
(Number)The number of pixels to scroll each time a tab scroll button is pressed (defaults to 100, or if resizeTabs = true, the calculated tab width). Only applies when enableTabScroll = true.
" %>
<%@ attribute
	name="scrollRepeatInterval"
	type="java.lang.Integer"
	required="false"
	description="
(Number)Number of milliseconds between each scroll while a tab scroll button is continuously pressed (defaults to 400).
" %>
<%@ attribute
	name="shadow"
	type="java.lang.String"
	required="false"
	description="
(Boolean/String)True (or a valid Ext.Shadow Ext.Shadow.mode value) to display a shadow behind the panel, false to display no shadow (defaults to sides). Note that this option only applies when floating = true.
" %>
<%@ attribute
	name="shadowOffset"
	type="java.lang.Integer"
	required="false"
	description="
(Number)The number of pixels to offset the shadow if displayed (defaults to 4). Note that this option only applies when floating = true.
" %>
<%@ attribute
	name="shim"
	type="java.lang.Boolean"
	required="false"
	description="
(Boolean)False to disable the iframe shim in browsers which need one (defaults to true). Note that this option only applies when floating = true.
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
	name="tabMargin"
	type="java.lang.Integer"
	required="false"
	description="
(Number)The number of pixels of space to calculate into the sizing and scrolling of tabs. If you change the margin in CSS, you will need to update this value so calculations are correct with either resizeTabs or scrolling tabs. (defaults to 2)
" %>
<%@ attribute
	name="tabPosition"
	type="java.lang.String"
	required="false"
	description="
(String)The position where the tab strip should be rendered (defaults to top). The only other supported value is bottom. Note that tab scrolling is only supported for position top.
" %>
<%@ attribute
	name="tabWidth"
	type="java.lang.Integer"
	required="false"
	description="
(Number)The initial width in pixels of each new tab (defaults to 120).
" %>
<%@ attribute
	name="tbar"
	type="java.lang.Object"
	required="false"
	description="
(Object/Array)The top toolbar of the panel. This can be either an Ext.Toolbar object or an array of buttons/button configs to be added to the toolbar. Note that this is not available as a property after render. To access the top toolbar after render, use getTopToolbar.
" %>
<%@ attribute
	name="title"
	type="java.lang.String"
	required="false"
	description="
(String)The title text to display in the panel header (defaults to ). When a title is specified the header element will automatically be created and displayed unless header is explicitly set to false. If you dont want to specify a title at config time, but you may want one later, you must either specify a non-empty title (a blank space   will do) or header:true so that the container element will get created.
" %>
<%@ attribute
	name="titleCollapse"
	type="java.lang.Boolean"
	required="false"
	description="
(Boolean)True to allow expanding and collapsing the panel (when collapsible = true) by clicking anywhere in the header bar, false to allow it only by clicking to tool button (defaults to false).
" %>
<%@ attribute
	name="tools"
	type="java.lang.String"
	required="false"
	description="
(Array)An array of tool button configs to be added to the header tool area. Each tool config may contain the following properties: 

    * id : String

      Required. The type of tool to create. Values may be
          o toggle (Created by default when collapsible is true)
          o close
          o minimize
          o maximize
          o restore
          o gear
          o pin
          o unpin
          o right
          o left
          o up
          o down
          o refresh
          o minus
          o plus
          o help
          o search
          o save

 handler : Function
#

Required. The function to call when clicked. Arguments passed are:

    * event : Ext.EventObject

      The click event.
    * toolEl : Ext.Element

      The tool Element.
    * Panel : Ext.Panel

      The host Panel

 scope : Object
#

The scope in which to call the handler.
 qtip : String/Object
#

A tip string, or a config argument to Ext.QuickTip.register
 hidden : Boolean
#

True to initially render hidden.
 on : Object
#

A listener config object specifiying event listeners in the format of an argument to addListener
  Example usage: 

tools:[{id:refresh,// hidden:true,handler: function(event, toolEl, panel){// refresh logic}}]

 Note that apart from the toggle tool which is provided when a panel is collapsible, these tools only provide the visual button. Any required functionality must be provided by adding handlers that implement the necessary behavior.
" %>
<%@ attribute
	name="wheelIncrement"
	type="java.lang.Integer"
	required="false"
	description="
(Number)For scrolling tabs, the number of pixels to increment on mouse wheel scrolling (defaults to 20).
" %>
<%@ attribute
	name="width"
	type="java.lang.String"
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
	name="onActivate"
	type="java.lang.String"
	required="false"
	description="
( Ext.Panel p )Fires after the Panel has been visually activated.Note that Panels do not directly support being activated, but some Panel subclassesdo (like Ext.Window). Panels which are child Components of a TabPanel fire theactivate and deactivate events under the control of the TabPanel.
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
	name="onBeforeclose"
	type="java.lang.String"
	required="false"
	description="
( Ext.Panel p )Fires before the Panel is closed.Note that Panels do not directly support being closed, but somePanel subclasses do (like Ext.Window).This event only applies to such subclasses.A handler can return false to cancel the close.
" %>
<%@ attribute
	name="onBeforecollapse"
	type="java.lang.Boolean"
	required="false"
	description="
( Ext.Panel p, Boolean animate )Fires before the Panel is collapsed.A handler can return false to cancel the collapse.
" %>
<%@ attribute
	name="onBeforedestroy"
	type="java.lang.String"
	required="false"
	description="
( Ext.Component this )Fires before the component is destroyed. Return false to stop the destroy.
" %>
<%@ attribute
	name="onBeforeexpand"
	type="java.lang.Boolean"
	required="false"
	description="
( Ext.Panel p, Boolean animate )Fires before the Panel is expanded.A handler can return false to cancel the expand.
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
	name="onBeforetabchange"
	type="java.lang.String"
	required="false"
	description="
( TabPanel this, Panel newTab, Panel currentTab )Fires before the active tab changes. Handlers can return false to cancel the tab change.
" %>
<%@ attribute
	name="onBodyresize"
	type="java.lang.Integer"
	required="false"
	description="
( Ext.Panel p, Number width, Number height )Fires after the Panel has been resized.
" %>
<%@ attribute
	name="onClose"
	type="java.lang.String"
	required="false"
	description="
( Ext.Panel p )Fires after the Panel is closed.Note that Panels do not directly support being closed, but somePanel subclasses do (like Ext.Window).
" %>
<%@ attribute
	name="onCollapse"
	type="java.lang.String"
	required="false"
	description="
( Ext.Panel p )Fires after the Panel has been collapsed.
" %>
<%@ attribute
	name="onContextmenu"
	type="java.lang.Object"
	required="false"
	description="
( TabPanel this, Panel tab, EventObject e )Fires when the original browser contextmenu event originated from a tab element.
" %>
<%@ attribute
	name="onDeactivate"
	type="java.lang.String"
	required="false"
	description="
( Ext.Panel p )Fires after the Panel has been visually deactivated.Note that Panels do not directly support being deactivated, but some Panel subclassesdo (like Ext.Window). Panels which are child Components of a TabPanel fire theactivate and deactivate events under the control of the TabPanel.
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
	name="onExpand"
	type="java.lang.String"
	required="false"
	description="
( Ext.Panel p )Fires after the Panel has been expanded.
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
<%@ attribute
	name="onTabchange"
	type="java.lang.String"
	required="false"
	description="
( TabPanel this, Panel tab )Fires after the active tab has changed.
" %>
<%@ attribute
	name="onTitlechange"
	type="java.lang.String"
	required="false"
	description="
( Ext.Panel p, String The )Fires after the Panel title has been set or changed.
" %>
<%@ attribute
	name="region"
	type="java.lang.String"
	required="false"
	description="
(String) This regions layout position (north, south, east, west or center).
" %>
<%@ attribute
	name="animFloat"
	type="java.lang.Boolean"
	required="false"
	description="
(Boolean)When a collapsed regions bar is clicked, the regions panel will be displayed as a floated panel that will close again once the user mouses out of that panel (or clicks out if autoHide = false). Setting animFloat to false will prevent the open and close of these floated panels from being animated (defaults to true).
" %>
<%@ attribute
	name="autoHide"
	type="java.lang.Boolean"
	required="false"
	description="
(Boolean)When a collapsed regions bar is clicked, the regions panel will be displayed as a floated panel. If autoHide is true, the panel will automatically hide after the user mouses out of the panel. If autoHide is false, the panel will continue to display until the user clicks outside of the panel (defaults to true).
" %>
<%@ attribute
	name="cmargins"
	type="java.lang.Object"
	required="false"
	description="
(Object)An object containing margins to apply to the regions collapsed element in the format {left: (left margin), top: (top margin), right: (right margin), bottom: (bottom margin)}
" %>
<%@ attribute
	name="collapseMode"
	type="java.lang.String"
	required="false"
	description="
(String)By default, collapsible regions are collapsed by clicking the expand/collapse tool button that renders into the regions title bar. Optionally, when collapseMode is set to mini the regions split bar will also display a small collapse button in the center of the bar. In mini mode the region will collapse to a thinner bar than in normal mode. By default collapseMode is undefined, and the only two supported values are undefined and mini. Note that if a collapsible region does not have a title bar, then collapseMode must be set to mini in order for the region to be collapsible by the user as the tool button will not be rendered.
" %>
<%@ attribute
	name="floatable"
	type="java.lang.Boolean"
	required="false"
	description="
(Boolean)True to allow clicking a collapsed regions bar to display the regions panel floated above the layout, false to force the user to fully expand a collapsed region by clicking the expand button to see it again (defaults to true).
" %>
<%@ attribute
	name="margins"
	type="java.lang.Object"
	required="false"
	description="
(Object)An object containing margins to apply to the region in the format {left: (left margin), top: (top margin), right: (right margin), bottom: (bottom margin)}
" %>
<%@ attribute
	name="minHeight"
	type="java.lang.Integer"
	required="false"
	description="
(Number)The minimum allowable height in pixels for this region (defaults to 50)
" %>
<%@ attribute
	name="minWidth"
	type="java.lang.Integer"
	required="false"
	description="
(Number)The minimum allowable width in pixels for this region (defaults to 50)
" %>
<%@ attribute
	name="split"
	type="java.lang.Boolean"
	required="false"
	description="
(Boolean)True to display a Ext.SplitBar between this region and its neighbor, allowing the user to resize the regions dynamically (defaults to false). When split = true, it is common to specify a minSize and maxSize for the region.
" %>
<%@ attribute
	name="collapsibleSplitTip"
	type="java.lang.String"
	required="false"
	description="
(String)The tooltip to display when the user hovers over a collapsible regions split bar (defaults to Drag to resize. Double click to hide.). Only applies if useSplitTips = true.
" %>
<%@ attribute
	name="splitTip"
	type="java.lang.String"
	required="false"
	description="
(String)The tooltip to display when the user hovers over a non-collapsible regions split bar (defaults to Drag to resize.). Only applies if useSplitTips = true.
" %>
<%@ attribute
	name="useSplitTips"
	type="java.lang.Boolean"
	required="false"
	description="
(Boolean)True to display a tooltip when the user hovers over a regions split bar (defaults to false). The tooltip text will be the value of either splitTip or collapsibleSplitTip as appropriate.
" %>
<%@ include file="inc/taglibs.jsp" %>
<%@ tag import="org.apache.commons.beanutils.BeanUtils"
	dynamic-attributes="dynamicAttributes"
	description="A basic tab container. Tab panels can be used exactly like a standard Ext.Panel for layout purposes, but also have special support for containing child Panels that get automatically converted into tabs. There is no actual tab class each tab is simply an Ext.Panel. However, when rendered in a TabPanel, each child Panel can fire additional events that only exist for tabs and are not available to other Panels. " %>
<extutil:processTagAttributes configVar="configMap" eventsVar="eventsMap" include="*" javaScript="autoLoad,keys,tools" tagJspContext='<%= jspContext %>' dynamicAttributes="${dynamicAttributes}" />
<jsp:doBody var="jspBody" scope="page" />${jspBody}<c:set var="item">new Ext.TabPanel({border:false,<c:forEach items="${configMap}" var="config">${config.key}:${config.value},</c:forEach><c:if test='<%= BeanUtils.getProperty(this,"items")!=null %>'>items:[<% String items = BeanUtils.getProperty(this,"items");jspContext.getOut().write(items.substring(0,items.length()-1));%>],</c:if><c:if test='<%= BeanUtils.getProperty(this,"tbar")!=null %>'>tbar:[<% String tbar = BeanUtils.getProperty(this,"tbar");jspContext.getOut().write(tbar.substring(0,tbar.length()-1));%>],</c:if><c:if test='<%= BeanUtils.getProperty(this,"bbar")!=null %>'>bbar:[<% String bbar = BeanUtils.getProperty(this,"bbar");jspContext.getOut().write(bbar.substring(0,bbar.length()-1));%>],</c:if><c:if test='<%= BeanUtils.getProperty(this,"buttons")!=null %>'>buttons:[<% String buttons = BeanUtils.getProperty(this,"buttons");jspContext.getOut().write(buttons.substring(0,buttons.length()-1));%>],</c:if><c:if test='<%= BeanUtils.getProperty(this,"tools")!=null %>'>tools:[<%String tools = BeanUtils.getProperty(this,"tools");jspContext.getOut().write(tools.substring(0,tools.length()-1));%>],</c:if>listeners:{<c:forEach items="${eventsMap}" var="event" varStatus="status"><c:if test="${fn:indexOf(event.value,'function(')==-1}">${event.key}:function(){${event.value}}</c:if><c:if test="${fn:indexOf(event.value,'function(')>-1}">${event.key}:${event.value}</c:if>${status.last?'':','}</c:forEach>}}),</c:set>
<extutil:setParentProperties tag='<%=this%>' items="${item}" />