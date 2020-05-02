package com.humtrusa.Sessionfactory;

import org.hibernate.Session;


public class HwHibernateDAO implements HwIBaseHibernateDAO {
	
	public Session getSession() {
		return HibernateSessionFactory.getSession();
	}
}
