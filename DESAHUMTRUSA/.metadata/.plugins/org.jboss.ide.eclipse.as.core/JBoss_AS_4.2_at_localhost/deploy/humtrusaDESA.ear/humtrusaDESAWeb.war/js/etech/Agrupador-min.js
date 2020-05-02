/**
 * Componente Agrupador Framework de Desarrollo - E-Technology S.A Autor: Jorge
 * Villavicencio
 * 
 */
Ext.ns('Ext.ux.form');

Ext.ux.form.Agrupador = Ext.extend(Ext.form.Field, {
	defaultAutoCreate : {
		tag : 'input',
		type : 'hidden'
	},
	descWidth : 100,
	dtSeparator : ' ',
	otherToNow : true,
	descPosition : 'right' // valid values:'bellow', 'right' timePosition
	,
	separadorInterno : '-',
	initComponent : function() {
		Ext.ux.form.Agrupador.superclass.initComponent.call(this);

		this.addEvents('actualizado');

		var dateConfig = Ext.apply({}, {
					id : this.id + '-cod',
					width : this.descWidth,
					selectOnFocus : this.selectOnFocus,
					listeners : {
						blur : {
							scope : this,
							fn : this.onBlur
						},
						focus : {
							scope : this,
							fn : this.onFocus
						}
					},
					clase : this.clase,
					metodoDetalle : this.metodoDetalle,
					allowBlank : this.allowBlank,
					maskRe : /[a-zA-Z0-9]/,
					campoDetalle : this.id + '-desc',
					campoHidden : this.id,
					onTriggerClick : this.onTriggerClick
				}, this.dateConfig);
		this.df = new Ext.form.ChooserField(dateConfig);

		// create TextField
		var timeConfig = Ext.apply({}, {
					id : this.id + '-desc',
					width : this.descWidth,
					selectOnFocus : this.selectOnFocus,
					readOnly : true,
					listeners : {
						blur : {
							scope : this,
							fn : this.onBlur
						},
						focus : {
							scope : this,
							fn : this.onFocus
						}
					}
				}, this.timeConfig);
		this.tf = new Ext.form.TextField(timeConfig);
		delete(this.timeFormat);

		// relay events
		this.relayEvents(this.df, ['focus', 'specialkey', 'invalid', 'valid']);
		this.relayEvents(this.tf, ['focus', 'specialkey', 'invalid', 'valid']);

		this.actualizar = function() {
			this.fireEvent("actualizado", this);
		};

	} // eo function initComponent
	/**
	 * private Renders underlying DateField and TimeField and provides a
	 * workaround for side error icon bug
	 */
	,
	onRender : function(ct, position) {
		// don't run more than once
		if (this.isRendered) {
			return;
		}

		// render underlying hidden field
		Ext.ux.form.Agrupador.superclass.onRender.call(this, ct, position);

		// render DateField and TimeField
		// create bounding table
		var t;
		if ('bellow' === this.descPosition) {
			t = Ext.DomHelper.append(ct, {
						tag : 'table',
						style : 'border-collapse:collapse',
						children : [{
									tag : 'tr',
									children : [{
												tag : 'td',
												style : 'padding-bottom:1px',
												cls : 'ux-datetime-date'
											}]
								}, {
									tag : 'tr',
									children : [{
												tag : 'td',
												cls : 'ux-datetime-time'
											}]
								}]
					}, true);
		} else {
			t = Ext.DomHelper.append(ct, {
						tag : 'table',
						style : 'border-collapse:collapse',
						children : [{
									tag : 'tr',
									children : [{
												tag : 'td',
												style : 'padding-right:4px',
												cls : 'ux-datetime-date'
											}, {
												tag : 'td',
												cls : 'ux-datetime-time'
											}]
								}]
					}, true);
		}

		this.tableEl = t;
		this.wrap = t.wrap({
					cls : 'x-form-field-wrap'
				});
		this.wrap.on("mousedown", this.onMouseDown, this, {
					delay : 10
				});

		// render DateField & TimeField
		this.df.render(t.child('td.ux-datetime-date'));
		this.tf.render(t.child('td.ux-datetime-time'));

		// workaround for IE trigger misalignment bug
		if (Ext.isIE && Ext.isStrict) {
			t.select('input').applyStyles({
						top : 0
					});
		}

		this.on('specialkey', this.onSpecialKey, this);
		this.df.el.swallowEvent(['keydown', 'keypress']);
		this.tf.el.swallowEvent(['keydown', 'keypress']);

		// create icon for side invalid errorIcon
		if ('side' === this.msgTarget) {
			var elp = this.el.findParent('.x-form-element', 10, true);
			this.errorIcon = elp.createChild({
						cls : 'x-form-invalid-icon'
					});

			this.df.errorIcon = this.errorIcon;
			this.tf.errorIcon = this.errorIcon;
		}

		// we're rendered flag
		this.isRendered = true;

	} // eo function onRender
	// }}}
	// {{{
	/**
	 * private
	 */
	,
	adjustSize : Ext.BoxComponent.prototype.adjustSize
	// }}}
	// {{{
	/**
	 * private
	 */
	,
	alignErrorIcon : function() {
		this.errorIcon.alignTo(this.tableEl, 'tl-tr', [2, 0]);
	}
	// }}}
	// {{{
	/**
	 * private initializes internal dateValue
	 */
	,
	initDateValue : function() {
		this.dateValue = "";
	}
	// }}}
	// {{{
	/**
	 * Disable this component.
	 * 
	 * @return {Ext.Component} this
	 */
	,
	disable : function() {
		if (this.isRendered) {
			this.df.disabled = this.disabled;
			this.df.onDisable();
			this.tf.onDisable();
		}
		this.disabled = true;
		this.df.disabled = true;
		// this.df.disable();
		this.tf.disabled = true;
		this.fireEvent("disable", this);
		return this;
	} // eo function disable
	// }}}
	// {{{
	/**
	 * Enable this component.
	 * 
	 * @return {Ext.Component} this
	 */
	,
	enable : function() {
		if (this.rendered) {
			this.df.onEnable();
			this.tf.onEnable();
		}
		this.disabled = false;
		this.df.disabled = false;
		this.tf.disabled = false;
		this.fireEvent("enable", this);
		return this;
	} // eo function enable
	// }}}
	// {{{
	/**
	 * private Focus date filed
	 */
	,
	focus : function() {
		this.df.focus();
	} // eo function focus
	// }}}
	// {{{
	/**
	 * private
	 */
	,
	getPositionEl : function() {
		return this.wrap;
	}
	// }}}
	// {{{
	/**
	 * private
	 */
	,
	getResizeEl : function() {
		return this.wrap;
	}
	// }}}
	// {{{
	/**
	 * @return {Date/String} Returns value of this field
	 */
	,
	getValue : function() {
		// create new instance of date
		return this.dateValue;
	} // eo function getValue
	// }}}
	// {{{
	/**
	 * @return {Boolean} true = valid, false = invalid private Calls isValid
	 *         methods of underlying DateField and TimeField and returns the
	 *         result
	 */
	,
	isValid : function() {
		return this.df.isValid() && this.tf.isValid();
	} // eo function isValid
	// }}}
	// {{{
	/**
	 * Returns true if this component is visible
	 * 
	 * @return {boolean}
	 */
	,
	isVisible : function() {
		return this.df.rendered && this.df.getActionEl().isVisible();
	} // eo function isVisible
	// }}}
	// {{{
	/**
	 * private Handles blur event
	 */
	,
	onBlur : function(f) {
		// called by both DateField and TimeField blur events

		// revert focus to previous field if clicked in between
		if (this.wrapClick) {
			f.focus();
			this.wrapClick = false;
		}

		// update underlying value
		if (f === this.df) {
			this.updateDate();
		} else {
			this.updateTime();
		}
		this.updateHidden();

// fire events later
		(function() {
			if (!this.df.hasFocus && !this.tf.hasFocus) {
				var v = this.getValue();
				if (String(v) !== String(this.startValue)) {
					this.fireEvent("change", this, v, this.startValue);
				}
				this.hasFocus = false;
				this.fireEvent('blur', this);
			}
		}).defer(100, this);

	} // eo function onBlur
	// }}}
	// {{{
	/**
	 * private Handles focus event
	 */
	,
	onFocus : function() {
		if (!this.hasFocus) {
			this.hasFocus = true;
			this.startValue = this.getValue();
			this.fireEvent("focus", this);
		}
	}
	// }}}
	// {{{
	/**
	 * private Just to prevent blur event when clicked in the middle of fields
	 */
	,
	onMouseDown : function(e) {
		this.wrapClick = 'td' === e.target.nodeName.toLowerCase();
	}
	// }}}
	// {{{
	/**
	 * private Handles Tab and Shift-Tab events
	 */
	,
	onSpecialKey : function(t, e) {
		var key = e.getKey();
		if (key == e.TAB) {
			if (t === this.df && !e.shiftKey) {
				e.stopEvent();
				this.tf.focus();
			}
			if (t === this.tf && e.shiftKey) {
				e.stopEvent();
				this.df.focus();
			}
		}
		// otherwise it misbehaves in editor grid
		if (key == e.ENTER) {
			this.updateValue();
		}

	} // eo function onSpecialKey
	// }}}
	// {{{
	/**
	 * private Sets the value of DateField
	 */
	,
	setDate : function(date) {
		this.df.setValue(date);
	} // eo function setDate
	// }}}
	// {{{
	/**
	 * private Sets the value of TimeField
	 */
	,
	setTime : function(date) {
		this.tf.setValue(date);
	} // eo function setTime
	// }}}
	// {{{
	/**
	 * private Sets correct sizes of underlying DateField and TimeField With
	 * workarounds for IE bugs
	 */
	,
	setSize : function(w, h) {
		if (!w) {
			return;
		}
		if ('bellow' == this.descPosition) {
			this.df.setSize(w, h);
			this.tf.setSize(w, h);
			if (Ext.isIE) {
				this.df.el.up('td').setWidth(w);
				this.tf.el.up('td').setWidth(w);
			}
		} else {
			this.df.setSize(w - this.descWidth - 4, h);
			this.tf.setSize(this.descWith, h);

			if (Ext.isIE) {
				this.df.el.up('td').setWidth(w - this.descWidth - 4);
				this.tf.el.up('td').setWidth(this.descWith);
			}
		}
	} // eo function setSize
	// }}}
	// {{{
	/**
	 * @param {Mixed}
	 *            val Value to set Sets the value of this field
	 */
	,
	setValue : function(val) {
		// this.df.setValue(val);
		// this.tf.setValue(val);
		// this.updateValue();

		// Este metodo tambien se lanza cuando se da un form.reset();
		// en cuyo caso el valor recibido en val es null

		if (val == null) {
			// estamos en limpieza
			this.clear();
		} else {
			if (val.charAt(0) == "*") {
				// el setValue viene de un load de formulario
				// *1-verde loco*
				var cadenaSinSeparar = val.substring(1, val.length - 1);
				var codigos = cadenaSinSeparar.split(this.separadorInterno);
				this.df.setValue(codigos[0]);
				this.tf.setValue(codigos[1]);
			} else {
				this.df.setValue(val);
			}
		}

		this.updateHidden();
		return;
	} // eo function setValue
	// }}}
	// {{{
	/**
	 * Hide or show this component by boolean
	 * 
	 * @return {Ext.Component} this
	 */
	,
	clear : function() {
		this.df.setValue("");
		this.tf.setValue("");
	},
	setVisible : function(visible) {
		if (visible) {
			this.df.show();
			this.tf.show();
		} else {
			this.df.hide();
			this.tf.hide();
		}
		return this;
	} // eo function setVisible
	// }}}
	// {{{
	,
	show : function() {
		return this.setVisible(true);
	} // eo function show
	// }}}
	// {{{
	,
	hide : function() {
		return this.setVisible(false);
	} // eo function hide
	// }}}
	// {{{
	/**
	 * private Updates the date part
	 */
	,
	updateDate : function() {

		var d = this.df.getValue();
	} // eo function updateDate
	// }}}
	// {{{
	/**
	 * private Updates the time part
	 */
	,
	updateTime : function() {
		var t = this.tf.getValue();
	} // eo function updateTime
	// }}}
	// {{{
	/**
	 * private Updates the underlying hidden field value
	 */
	,
	updateHidden : function() {
		if (this.isRendered) {
			var value = this.df.getValue();
			this.el.dom.value = value;
		}
	}
	// }}}
	// {{{
	/**
	 * private Updates all of Date, Time and Hidden
	 */
	,
	updateValue : function() {

		this.updateDate();
		this.updateTime();
		this.updateHidden();

		return;
	} // eo function updateValue
	// }}}
	// {{{
	/**
	 * @return {Boolean} true = valid, false = invalid callse validate methods
	 *         of DateField and TimeField
	 */
	,
	validate : function() {
		return this.df.validate() && this.tf.validate();
	} // eo function validate
	// }}}
	// {{{
	/**
	 * Returns renderer suitable to render this field
	 * 
	 * @param {Object}
	 *            Column model config
	 */
	,
	renderer : function(field) {
		var format = ' ';
		var renderer = function(val) {
			return;
		};
		return renderer;
	} // eo function renderer
		// }}}

	}); // eo extend

// register xtype
Ext.reg('xagrupador', Ext.ux.form.Agrupador);