/**
*	Objeto que contiene rutinas para validar los parametros minimos
*	de funcionamiento de los clientes
*	Autor: jvillavi
*/
var Deteccion = {
	init: function () {
		this.browser = this.searchString(this.dataBrowser) || "An unknown browser";
		this.version = this.searchVersion(navigator.userAgent)
			|| this.searchVersion(navigator.appVersion)
			|| "an unknown version";
		this.OS = this.searchString(this.dataOS) || "an unknown OS";
	},
	searchString: function (data) {
		for (var i=0;i<data.length;i++)	{
			var dataString = data[i].string;
			var dataProp = data[i].prop;
			this.versionSearchString = data[i].versionSearch || data[i].identity;
			if (dataString) {
				if (dataString.indexOf(data[i].subString) != -1)
					return data[i].identity;
			}
			else if (dataProp)
				return data[i].identity;
		}
	},
	searchVersion: function (dataString) {
		var index = dataString.indexOf(this.versionSearchString);
		if (index == -1) return;
		return parseFloat(dataString.substring(index+this.versionSearchString.length+1));
	},
	dataBrowser: [
		{string: navigator.userAgent,subString: "Chrome",identity: "Chrome"},
		{string: navigator.userAgent,subString: "OmniWeb",versionSearch: "OmniWeb/",identity: "OmniWeb"},
		{string: navigator.vendor,subString: "Apple",identity: "Safari",versionSearch: "Version"},
		{prop: window.opera,identity: "Opera"},
		{string: navigator.vendor,subString: "iCab",identity: "iCab"},
		{string: navigator.vendor,subString: "KDE",identity: "Konqueror"},
		{string: navigator.userAgent,subString: "Firefox",identity: "Firefox"},
		{string: navigator.vendor,subString: "Camino",identity: "Camino"},
		{string: navigator.userAgent,subString: "Netscape",identity: "Netscape"},
		{string: navigator.userAgent,subString: "MSIE",identity: "Explorer",versionSearch: "MSIE"},
		{string: navigator.userAgent,subString: "Gecko",identity: "Mozilla",versionSearch: "rv"},
		{string: navigator.userAgent,subString: "Mozilla",identity: "Netscape",versionSearch: "Mozilla"}
	],
	dataOS : [
		{string: navigator.platform,subString: "Win",identity: "Windows"},
		{string: navigator.platform,subString: "Mac",identity: "Mac"},
		{string: navigator.platform,subString: "Linux",identity: "Linux"}
	],
	/**
	*	Detecta si el navegador es Firefox o Internet Explorer en las versiones validas
	*/
	esNavegadorValido:function(){
		this.init();
		var valido = false;
		if(this.browser=="Explorer" && (this.version)*1>=7){valido = true;}else{
			if(this.browser=="Firefox" && (this.version)*1>=3){valido = true;}
		}
		return valido;
	},
	/**
	*	Detecta si el browser tiene o no activados los cookies
	*/
	tieneCookiesHabilitados:function(){
		var tmpGalleta = new Date();
		chkcookie = (tmpGalleta.getTime() + '');
		document.cookie = "chkcookie=" + chkcookie + "; path=/";
		return((document.cookie.indexOf(chkcookie,0) < 0)?false:true);
	},
	/**
	*	Verifica si la resolucion de pantalla del cliente es superior a 800x600
	*/
	tieneResolucionAdecuada:function(){
		return((screen.width>=1024 && screen.height>=768)?true:false);
	}
};