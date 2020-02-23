//para que los campos requeridos tengan un asterisco azul con qtip
/*MODIFICADO: JMARIDUENA
 *FECHA: 11/15/08
 *MOTIVO: Se generan los elementos span con un id para poder manipularlos posteriormente
 */
/*MODIFICADO: VANDRADE
 *FECHA: 12/10/08
 *MOTIVO: Fix para campos sin maxlenght
 */
Ext.apply(Ext.layout.FormLayout.prototype, {
    renderItem:function(D,A,C){
        if(D&&!D.rendered&&D.isFormField&&D.inputType!="hidden"){                	
            if(D.allowBlank==false){
                D.fieldLabel = D.fieldLabel+"<span id=\""+D.id+"*\" style=\"color:blue;\" ext:qtip=\"Campo requerido\"> (*) </span>"                
            }else{
            	
            	if(document.getElementById(''+D.id+'*'))
            		document.getElementById(''+D.id+'*').style.visibility='hidden';
            }
            
            if(D.xtype=='datefield'){
            	D.on('render',function(){
            		var label = Ext.get('x-form-el-'+D.id).child('input');
	            	Ext.QuickTips.register({
	            		target:label,
	            		text: "<span style=\"color:blue;\"> dd/mm/yyyy </span>",//D.tooltipText,
	            		dismissDelay: 15000,
	            		title: ''
	            	});
            	});
            	//D.fieldLabel = D.fieldLabel+" <span style=\"color:blue;\">(dd/mm/yyyy)</span> ";
            	//D.fieldLabel = " <span style=\"cursor:hand\" ext:qtip=\"(dd/mm/yyyy)\">"+D.fieldLabel+"</span> ";
            }
            var B=[
                D.id,D.fieldLabel,
                D.labelStyle||this.labelStyle||"",
                this.elementStyle||"",
                typeof D.labelSeparator=="undefined"?this.labelSeparator:D.labelSeparator,
                (D.itemCls||this.container.itemCls||"")+(D.hideLabel?" x-hide-label":""),
                D.clearCls||"x-form-clear-left"];
            if(typeof A=="number"){
                A=C.dom.childNodes[A]||null
            }
            if(A){
                this.fieldTpl.insertBefore(A,B)
            }else{
            this.fieldTpl.append(C,B)
            }
            D.render("x-form-el-"+D.id)
        }else{
            Ext.layout.FormLayout.superclass.renderItem.apply(this,arguments)
        }
    }
}); 

/*Este override sirve para escribir el atributo maxlength en los campos dom de los campos TEXTFIELD*/
/*
Ext.override(Ext.form.TextField,{
	afterRender: function(){
		Ext.form.TextField.superclass.afterRender.call(this);
		if(this.maxLength && (this.maxLength-0) > 1){
			var maxl = (this.maxLength > 1)?(this.maxLength):(1000);
			this.el.dom.setAttribute('maxlength',maxl);			
		}
		if(this.el.dom.getAttribute('maxlength') == 1){
			this.el.dom.setAttribute('maxlength',1000);	
		}
	}
});
*/
/*Este override sirve para escribir el atributo maxlength en los campos dom de los campos NUMBERFIELD*/
/*
Ext.override(Ext.form.NumberField,{
	afterRender: function(){
		Ext.form.NumberField.superclass.afterRender.call(this);
		if(this.maxLength && (this.maxLength-0) > 1){
			var maxl = (this.maxLength > 1)?(this.maxLength):(1000);
			this.el.dom.setAttribute('maxlength',maxl);			
		}
		if(this.el.dom.getAttribute('maxlength') == 1){
			this.el.dom.setAttribute('maxlength',1000);	
		}
	}
});

Ext.override(Ext.form.TextField, { 
    validator:function(text){
        if(this.allowBlank==false && Ext.util.Format.trim(text).length==0)
          return false;
        else
          return true;
    }
}); 
*/
//fix para los checks
Ext.override(Ext.form.Checkbox, {    
    // private
    afterRender : function(){
        Ext.form.Checkbox.superclass.afterRender.call(this);
        this.wrap[this.checked? 'addClass' : 'removeClass'](this.checkedCls);
    },

    // fix by @condor (also in SVN) -- http://extjs.com/forum/showthread.php?t=43356
    getValue : function(){
        if(this.rendered){
            return this.el.dom.checked;
        }
        return this.checked;
    },

    // fix by @condor (also in SVN) -- http://extjs.com/forum/showthread.php?t=43356
    setValue : function(v) {
        var checked = this.checked;
        this.checked = (v === true || v === 'true' || v == '1' || String(v).toLowerCase() == 'on');
        
        if(this.rendered){
            this.el.dom.checked = this.checked;
            this.el.dom.defaultChecked = this.checked;
            this.wrap[this.checked? 'addClass' : 'removeClass'](this.checkedCls);
        }

        if(checked != this.checked){
            this.fireEvent("check", this, this.checked);
            if(this.handler){
                this.handler.call(this.scope || this, this, this.checked);
            }
        }
    }    
});

/*App.Defaults.Layout.requiredLabelStyle = "color:red";

App.Layout.setLabelStyle = function(c){
	if(c.doLayout && c != Ext.FormPanel){
		if(c.items){
			c.items.each(App.Layout.setLabelStyle);			
		}		
	}else if(c.isFormField && c.allowBlank == false){
		Ext.applyIf(c, {
			labelStyle: App.Defaults.Layout.requiredLabelStyle
		})
	}
}*/