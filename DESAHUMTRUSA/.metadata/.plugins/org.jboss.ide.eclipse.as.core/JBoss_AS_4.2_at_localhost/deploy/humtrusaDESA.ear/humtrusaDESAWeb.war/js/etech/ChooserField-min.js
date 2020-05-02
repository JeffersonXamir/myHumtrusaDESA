Ext.form.ChooserField = function(config) {
	Ext.form.ChooserField.superclass.constructor.call(this, config);
};

Ext.extend(Ext.form.ChooserField, Ext.form.TriggerField, {
			triggerClass : 'x-form-browse-trigger',
			defaultAutoCreate : {
				tag : "input",
				type : "text",
				size : "10",
				autocomplete : "off"
			},

			getValue : function() {
				return Ext.form.ChooserField.superclass.getValue.call(this)
						|| "";
			},

			setValue : function(text) {
				Ext.form.DateField.superclass.setValue.call(this, text);
			},

			onTriggerClick : function() {
				if (this.disabled) {
					return;
				}
			},

			setField : function(data) {
				this.setValue(data.name);
			},

			loadUrl : '',
			urlParams : '',
			dlgWidth : 600,
			dlgHeight : 400,
			chooser : null
		});