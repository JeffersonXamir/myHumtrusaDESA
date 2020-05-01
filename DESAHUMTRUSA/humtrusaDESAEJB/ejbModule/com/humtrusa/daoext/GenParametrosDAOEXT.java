package com.humtrusa.daoext;

import org.hibernate.Query;
import org.hibernate.Session;

import com.humtrusa.Sessionfactory.HibernateSessionFactory;

public class GenParametrosDAOEXT {
	
	public String obtenerParametroGeneral(long codempresa, String codparametro) {
		Session ses = HibernateSessionFactory.getSession();
		Query query =null;
		String retorno = "";
		
		try {
			query = ses.createQuery("select p.valor from Genparametros p where p.id.codempresa =:empresa  and p.id.codparametro =:parametro");
			query.setParameter("empresa", codempresa);
			query.setParameter("parametro", codparametro);
			
			retorno = (String) query.uniqueResult();
			
		} catch (Exception e) {
			e.printStackTrace();
		}
		
		return retorno;
	}
}
