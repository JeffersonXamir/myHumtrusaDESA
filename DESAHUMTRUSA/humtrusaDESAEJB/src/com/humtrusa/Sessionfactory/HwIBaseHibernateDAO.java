package com.humtrusa.Sessionfactory;

import org.hibernate.Session;


/**
 * Data access interface for domain model
 * @author MyEclipse Persistence Tools
 */
public interface HwIBaseHibernateDAO {
	public Session getSession();
}