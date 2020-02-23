<%@ attribute
	name="allowOtherMenus"
	type="java.lang.Boolean"
	required="false"
	description="
(Boolean)True to allow multiple menus to be displayed at the same time (defaults to false)
" %>
<%@ attribute
	name="defaultAlign"
	type="java.lang.String"
	required="false"
	description="
(String)The default {@link Ext.Element#alignTo) anchor position value for this menu relative to its element of origin (defaults to tl-bl?)
" %>
<%@ attribute
	name="defaults"
	type="java.lang.Object"
	required="false"
	description="
(Object)A config object that will be applied to all items added to this container either via the items config or via the add method. The defaults config can contain any number of name/value property pairs to be added to each item, and should be valid for the types of items being added to the menu.
" %>
<%@ attribute
	name="items"
	type="java.lang.String"
	required="false"
	description="
(Mixed)An array of items to be added to this menu. See add for a list of valid item types.
" %>
<%@ attribute
	name="listeners"
	type="java.lang.Object"
	required="false"
	description="
(Object)A config object containing one or more event handlers to be added to this object during initialization. This should be a valid listeners config object as specified in the addListener example for attaching multiple handlers at once.
" %>
<%@ attribute
	name="minWidth"
	type="java.lang.Integer"
	required="false"
	description="
(Number)The minimum width of the menu in pixels (defaults to 120)
" %>
<%@ attribute
	name="shadow"
	type="java.lang.String"
	required="false"
	description="
(Boolean/String)True or sides for the default effect, frame for 4-way shadow, and drop for bottom-right shadow (defaults to sides)
" %>
<%@ attribute
	name="subMenuAlign"
	type="java.lang.String"
	required="false"
	description="
(String)The Ext.Element.alignTo anchor position value to use for submenus of this menu (defaults to tl-tr?)
" %>
<%@ attribute
	name="onBeforehide"
	type="java.lang.String"
	required="false"
	description="
( Ext.menu.Menu this )Fires before this menu is hidden
" %>
<%@ attribute
	name="onBeforeshow"
	type="java.lang.String"
	required="false"
	description="
( Ext.menu.Menu this )Fires before this menu is displayed
" %>
<%@ attribute
	name="onClick"
	type="java.lang.Object"
	required="false"
	description="
( Ext.menu.Menu this, Ext.menu.Item menuItem, Ext.EventObject e )Fires when this menu is clicked (or when the enter key is pressed while it is active)
" %>
<%@ attribute
	name="onHide"
	type="java.lang.String"
	required="false"
	description="
( Ext.menu.Menu this )Fires after this menu is hidden
" %>
<%@ attribute
	name="onItemclick"
	type="java.lang.Object"
	required="false"
	description="
( Ext.menu.BaseItem baseItem, Ext.EventObject e )Fires when a menu item contained in this menu is clicked
" %>
<%@ attribute
	name="onMouseout"
	type="java.lang.Object"
	required="false"
	description="
( Ext.menu.Menu this, Ext.EventObject e, Ext.menu.Item menuItem )Fires when the mouse exits this menu
" %>
<%@ attribute
	name="onMouseover"
	type="java.lang.Object"
	required="false"
	description="
( Ext.menu.Menu this, Ext.EventObject e, Ext.menu.Item menuItem )Fires when the mouse is hovering over this menu
" %>
<%@ attribute
	name="onShow"
	type="java.lang.String"
	required="false"
	description="
( Ext.menu.Menu this )Fires after this menu is displayed
" %>
<%@ include file="inc/taglibs.jsp" %>
<%@ tag import="org.apache.commons.beanutils.BeanUtils" dynamic-attributes="dynamicAttributes" description="A menu object. This is the container to which you add all other menu items. Menu can also serve a as a base class when you want a specialzed menu based off of another component (like Ext.menu.DateMenu for example)." %>
<extutil:processTagAttributes configVar="configMap" eventsVar="eventsMap" include="*" exclude="items" tagJspContext='<%=jspContext %>' dynamicAttributes="${dynamicAttributes}" />	
<jsp:doBody/><c:set var="menu">new Ext.menu.Menu({<c:forEach items="${configMap}" var="config">${config.key}:${config.value},</c:forEach>items:[<% String items = BeanUtils.getProperty(this,"items");if(items!=null){jspContext.getOut().write(items.substring(0,items.length()-1));}%>],listeners:{<c:forEach items="${eventsMap}" var="event" varStatus="status"><c:if test="${fn:indexOf(event.value,'function(')==-1}">${event.key}:function(){${event.value}}</c:if><c:if test="${fn:indexOf(event.value,'function(')>-1}">${event.key}:${event.value}</c:if>${status.last?'':','}</c:forEach>}})</c:set>
<extutil:setParentProperties tag='<%=this%>' menu="${menu}" />