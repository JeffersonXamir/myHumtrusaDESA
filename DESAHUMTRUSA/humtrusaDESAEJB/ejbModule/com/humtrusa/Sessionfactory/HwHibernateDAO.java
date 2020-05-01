package com.humtrusa.Sessionfactory;

import org.hibernate.Session;


public class HwHibernateDAO {
	
	public Session getSession() {
		return HibernateSessionFactory.getSession();
	}
}
