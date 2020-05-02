package com.humtrusa.daoext;

import org.hibernate.Query;
import org.hibernate.Session;

import com.humtrusa.Sessionfactory.HibernateSessionFactory;
import com.humtrusa.entidades.Genunidadesmedida;

public class GenunidadesmedidaDAOEXT {
	
	public Genunidadesmedida obtenerUnidadMedida(String codmedida) {
		Genunidadesmedida  medida = null;
		Session sesion=HibernateSessionFactory.getSession();
		Query query= null;
		try {
			query = sesion.createQuery("from Genunidadesmedida g where g.codunidadmedida = '"+codmedida+"' and g.genestados.codestado = 1");
			medida = (Genunidadesmedida) query.uniqueResult();
		} catch (Exception e) {
			e.printStackTrace();
		}
		
		return medida;
	}
}
