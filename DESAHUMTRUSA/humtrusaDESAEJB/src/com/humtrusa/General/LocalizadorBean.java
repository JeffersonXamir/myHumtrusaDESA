package com.humtrusa.General;

import javax.naming.Context;
import javax.naming.InitialContext;
import javax.naming.NamingException;

public class LocalizadorBean {

	public final Object obtenerBean(String recurso){
		Object beanObtenido = null;
		
		Context contexto = null;
		try {
			contexto = new InitialContext();
			beanObtenido = contexto.lookup(recurso);
		} catch (NamingException e) {
			e.printStackTrace();
		}
		
		return beanObtenido;
	}
}
