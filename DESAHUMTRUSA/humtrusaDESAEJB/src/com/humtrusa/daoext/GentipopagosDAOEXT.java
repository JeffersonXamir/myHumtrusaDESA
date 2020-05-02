package com.humtrusa.daoext;

import org.hibernate.Query;
import org.hibernate.Session;

import com.humtrusa.Sessionfactory.HibernateSessionFactory;
import com.humtrusa.entidades.Genestados;
import com.humtrusa.entidades.Gentipopagos;

public class GentipopagosDAOEXT {
	
	
	public Gentipopagos obtenerTipoPago(long codtipopago) {
		Session ses = HibernateSessionFactory.getSession();
		Query query = null;
		Gentipopagos obj = null;
		try {
			query = ses.createQuery("from Gentipopagos g where g.codtipopago = "+codtipopago+"");
			obj = (Gentipopagos) query.uniqueResult();
		} catch (Exception e) {
			e.printStackTrace();
		}
	
		return obj;
	}
}
