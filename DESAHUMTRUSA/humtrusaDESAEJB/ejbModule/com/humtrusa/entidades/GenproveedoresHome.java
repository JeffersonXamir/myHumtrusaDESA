package com.humtrusa.entidades;
// Generated 20/03/2020 14:36:49 by Hibernate Tools 3.5.0.Final

import java.util.List;
import javax.naming.InitialContext;
import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.hibernate.LockMode;
import org.hibernate.SessionFactory;
import org.hibernate.criterion.Example;

/**
 * Home object for domain model class Genproveedores.
 * @see com.humtrusa.entidades.Genproveedores
 * @author Hibernate Tools
 */
public class GenproveedoresHome {

	private static final Log log = LogFactory.getLog(GenproveedoresHome.class);

	private final SessionFactory sessionFactory = getSessionFactory();

	protected SessionFactory getSessionFactory() {
		try {
			return (SessionFactory) new InitialContext().lookup("SessionFactory");
		} catch (Exception e) {
			log.error("Could not locate SessionFactory in JNDI", e);
			throw new IllegalStateException("Could not locate SessionFactory in JNDI");
		}
	}

	public void persist(Genproveedores transientInstance) {
		log.debug("persisting Genproveedores instance");
		try {
			sessionFactory.getCurrentSession().persist(transientInstance);
			log.debug("persist successful");
		} catch (RuntimeException re) {
			log.error("persist failed", re);
			throw re;
		}
	}

	public void attachDirty(Genproveedores instance) {
		log.debug("attaching dirty Genproveedores instance");
		try {
			sessionFactory.getCurrentSession().saveOrUpdate(instance);
			log.debug("attach successful");
		} catch (RuntimeException re) {
			log.error("attach failed", re);
			throw re;
		}
	}

	public void attachClean(Genproveedores instance) {
		log.debug("attaching clean Genproveedores instance");
		try {
			sessionFactory.getCurrentSession().lock(instance, LockMode.NONE);
			log.debug("attach successful");
		} catch (RuntimeException re) {
			log.error("attach failed", re);
			throw re;
		}
	}

	public void delete(Genproveedores persistentInstance) {
		log.debug("deleting Genproveedores instance");
		try {
			sessionFactory.getCurrentSession().delete(persistentInstance);
			log.debug("delete successful");
		} catch (RuntimeException re) {
			log.error("delete failed", re);
			throw re;
		}
	}

	public Genproveedores merge(Genproveedores detachedInstance) {
		log.debug("merging Genproveedores instance");
		try {
			Genproveedores result = (Genproveedores) sessionFactory.getCurrentSession().merge(detachedInstance);
			log.debug("merge successful");
			return result;
		} catch (RuntimeException re) {
			log.error("merge failed", re);
			throw re;
		}
	}

	public Genproveedores findById(long id) {
		log.debug("getting Genproveedores instance with id: " + id);
		try {
			Genproveedores instance = (Genproveedores) sessionFactory.getCurrentSession()
					.get("com.humtrusa.entidades.Genproveedores", id);
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

	public List findByExample(Genproveedores instance) {
		log.debug("finding Genproveedores instance by example");
		try {
			List results = sessionFactory.getCurrentSession().createCriteria("com.humtrusa.entidades.Genproveedores")
					.add(Example.create(instance)).list();
			log.debug("find by example successful, result size: " + results.size());
			return results;
		} catch (RuntimeException re) {
			log.error("find by example failed", re);
			throw re;
		}
	}
}
