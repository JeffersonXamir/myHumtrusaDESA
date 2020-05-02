function iconoTipoColumna(tipo){
	
	if(tipo=="int" || tipo=="float"){
		return "<img src='../../imagenes/numerico.png' /> Numérico";
	}
	
	if(tipo=="string"){
		return "<img src='../../imagenes/text_lowercase.png' /> Cadena";
	}
	
	if(tipo=="date"){
		return "<img src='../../imagenes/date.png' /> Fecha";
	}
	
}

function iconoTipoCriterio(criterio){
	
	if(criterio=="like"){
		return "<img src='../../imagenes/chart_organisation.png' /> Igualdad";
	}
	
	if(criterio==">="){
		return "<img src='../../imagenes/mayor_igual.png' /> Mayor o Igual";
	}
	
	if(criterio=="<="){
		return "<img src='../../imagenes/menor_igual.png' /> Menor o Igual";
	}
	
	if(criterio==">=,<="){
		return "<img src='../../imagenes/mayor_igual.png' /><img src='../../imagenes/menor_igual.png' /> Rango";
	}
	
	if(criterio=="="){
		return "<img src='../../imagenes/igual.png' /> Igual a";
	}
}