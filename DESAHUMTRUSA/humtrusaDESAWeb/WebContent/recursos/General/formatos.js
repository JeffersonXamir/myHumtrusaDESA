/**
*	Formatos Especiales de Numeros
*/
Ext.apply(Ext.util.Format,{
	monedaSinSimbolo : function(v){
		v = (Math.round((v-0)*100))/100;v = (v == Math.floor(v)) ? v + ".00" : ((v*10 == Math.floor(v*10)) ? v + "0" : v);
		v = String(v);var ps = v.split('.');
		var whole = ps[0];var sub = ps[1] ? '.'+ ps[1] : '.00';
		var r = /(\d+)(\d{3})/;
		while (r.test(whole)){
			whole = whole.replace(r, '$1' + ',' + '$2');
		}
		v = whole + sub;
		if(v.charAt(0) == '-'){
			return '-' + v.substr(1);
		}
	return "" +  v;
	},
	monedaSinSimbolo4 : function(numero){
		var resultado = 0;
		numero = numero - 0||0;
		if(isNaN(numero)) throw('NaNException: formato de numero invalido');
		resultado = numero.toFixed(4) || 0;
		
		var numSp = resultado.split('.');
		if(numSp.length > 0){
			var entero = numSp[0];
			var decimal = numSp[1];
		}
		else if (2 < numSp.length) {
			throw('NumberFormatException: invalid format, formats should have no more than 1 period: ' + format);
		  }
		var r = /(\d+)(\d{3})/;
		while (r.test(entero)){
			entero = entero.replace(r, '$1' + ',' + '$2');
		}
		resultado = entero+'.'+decimal;
		return resultado;
	},
	monedaSinSimbolo6 : function(numero){
		var resultado = 0;
		numero = numero - 0||0;
		if(isNaN(numero)) throw('NaNException: formato de numero invalido');
		resultado = numero.toFixed(6) || 0;
		
		var numSp = resultado.split('.');
		if(numSp.length > 0){
			var entero = numSp[0];
			var decimal = numSp[1];
		}
		else if (2 < numSp.length) {
			throw('NumberFormatException: invalid format, formats should have no more than 1 period: ' + format);
		  }
		var r = /(\d+)(\d{3})/;
		while (r.test(entero)){
			entero = entero.replace(r, '$1' + ',' + '$2');
		}
		resultado = entero+'.'+decimal;		
		return resultado;
	},
	monedaSinSimbolo8 : function(numero){
		var resultado = 0;
		numero = numero - 0||0;
		if(isNaN(numero)) throw('NaNException: formato de numero invalido');
		resultado = numero.toFixed(8) || 0;
		
		var numSp = resultado.split('.');
		if(numSp.length > 0){
			var entero = numSp[0];
			var decimal = numSp[1];
		}
		else if (2 < numSp.length) {
			throw('NumberFormatException: invalid format, formats should have no more than 1 period: ' + format);
		  }
		var r = /(\d+)(\d{3})/;
		while (r.test(entero)){
			entero = entero.replace(r, '$1' + ',' + '$2');
		}
		resultado = entero+'.'+decimal;		
		return resultado;
	},
	redondeo8:function(numero){
		numero = numero - 0 || 0;
		var resultado = numero.toFixed(8); 
		return resultado;
	},
	redondeo6:function(numero){
		numero = numero - 0 || 0;
		var resultado = numero.toFixed(6); 
		return resultado;
	},
	redondeo4:function(numero){
		numero = numero - 0 || 0;
		var resultado = numero.toFixed(4); 
		return resultado;
	},
	redondeo2:function(numero){
		numero = numero - 0 || 0;
		var resultado = numero.toFixed(2); 
		return resultado;
	}	
});
