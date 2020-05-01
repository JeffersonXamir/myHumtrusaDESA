package com.humtrusa.entidades;
// Generated 30/04/2020 17:56:08 by Hibernate Tools 3.5.0.Final

import java.util.List;
import javax.naming.InitialContext;
import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.hibernate.LockMode;
import org.hibernate.SessionFactory;
import org.hibernate.criterion.Example;

/**
 * Home object for domain model class Genmarcas.
 * @see com.humtrusa.entidades.Genmarcas
 * @author Hibernate Tools
 */
public class GenmarcasHome {

	private static final Log log = LogFactory.getLog(GenmarcasHome.class);

	private final SessionFactory sessionFactory = getSessionFactory();

	protected SessionFactory getSessionFactory() {
		try {
			return (SessionFactory) new InitialContext().lookup("SessionFactory");
		} catch (Exception e) {
			log.error("Could not locate SessionFactory in JNDI", e);
			throw new IllegalStateException("Could not locate SessionFactory in JNDI");
		}
	}

	public void persist(Genmarcas transientInstance) {
		log.debug("persisting Genmarcas instance");
		try {
			sessionFactory.getCurrentSession().persist(transientInstance);
			log.debug("persist successful");
		} catch (RuntimeException re) {
			log.error("persist failed", re);
			throw re;
		}
	}

	public void attachDirty(Genmarcas instance) {
		log.debug("attaching dirty Genmarcas instance");
		try {
			sessionFactory.getCurrentSession().saveOrUpdate(instance);
			log.debug("attach successful");
		} catch (RuntimeException re) {
			log.error("attach failed", re);
			throw re;
		}
	}

	public void attachClean(Genmarcas instance) {
		log.debug("attaching clean Genmarcas instance");
		try {
			sessionFactory.getCurrentSession().lock(instance, LockMode.NONE);
			log.debug("attach successful");
		} catch (RuntimeException re) {
			log.error("attach failed", re);
			throw re;
		}
	}

	public void delete(Genmarcas persistentInstance) {
		log.debug("deleting Genmarcas instance");
		try {
			sessionFactory.getCurrentSession().delete(persistentInstance);
			log.debug("delete successful");
		} catch (RuntimeException re) {
			log.error("delete failed", re);
			throw re;
		}
	}

	public Genmarcas merge(Genmarcas detachedInstance) {
		log.debug("merging Genmarcas instance");
		try {
			Genmarcas result = (Genmarcas) sessionFactory.getCurrentSession().merge(detachedInstance);
			log.debug("merge successful");
			return result;
		} catch (RuntimeException re) {
			log.error("merge failed", re);
			throw re;
		}
	}

	public Genmarcas findById(java.lang.Long id) {
		log.debug("getting Genmarcas instance with id: " + id);
		try {
			Genmarcas instance = (Genmarcas) sessionFactory.getCurrentSession().get("com.humtrusa.entidades.Genmarcas",
					id);
			if (instance == null) {
				log.debug("get successful, no instance found");
			} else {
				log.debug("get successful, instance found");
			}
			return instance;
		} catch (RuntimeException re) {
			log.error("get failed", re);
			throw re;
		}
	}

	public List findByExample(Genmarcas instance) {
		log.debug("finding Genmarcas instance by example");
		try {
			List results = sessionFactory.getCurrentSession().createCriteria("com.humtrusa.entidades.Genmarcas")
					.add(Example.create(instance)).list();
			log.debug("find by example successful, result size: " + results.size());
			return results;
		} catch (RuntimeException re) {
			log.error("find by example failed", re);
			throw re;
		}
	}
}
