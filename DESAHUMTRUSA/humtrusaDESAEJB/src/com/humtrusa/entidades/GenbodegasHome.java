package com.humtrusa.entidades;
// Generated 02/05/2020 8:22:48 by Hibernate Tools 3.5.0.Final

import java.util.List;
import javax.naming.InitialContext;
import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.hibernate.LockMode;
import org.hibernate.SessionFactory;
import org.hibernate.criterion.Example;

/**
 * Home object for domain model class Genbodegas.
 * @see com.humtrusa.entidades.Genbodegas
 * @author Hibernate Tools
 */
public class GenbodegasHome {

	private static final Log log = LogFactory.getLog(GenbodegasHome.class);

	private final SessionFactory sessionFactory = getSessionFactory();

	protected SessionFactory getSessionFactory() {
		try {
			return (SessionFactory) new InitialContext().lookup("SessionFactory");
		} catch (Exception e) {
			log.error("Could not locate SessionFactory in JNDI", e);
			throw new IllegalStateException("Could not locate SessionFactory in JNDI");
		}
	}

	public void persist(Genbodegas transientInstance) {
		log.debug("persisting Genbodegas instance");
		try {
			sessionFactory.getCurrentSession().persist(transientInstance);
			log.debug("persist successful");
		} catch (RuntimeException re) {
			log.error("persist failed", re);
			throw re;
		}
	}

	public void attachDirty(Genbodegas instance) {
		log.debug("attaching dirty Genbodegas instance");
		try {
			sessionFactory.getCurrentSession().saveOrUpdate(instance);
			log.debug("attach successful");
		} catch (RuntimeException re) {
			log.error("attach failed", re);
			throw re;
		}
	}

	public void attachClean(Genbodegas instance) {
		log.debug("attaching clean Genbodegas instance");
		try {
			sessionFactory.getCurrentSession().lock(instance, LockMode.NONE);
			log.debug("attach successful");
		} catch (RuntimeException re) {
			log.error("attach failed", re);
			throw re;
		}
	}

	public void delete(Genbodegas persistentInstance) {
		log.debug("deleting Genbodegas instance");
		try {
			sessionFactory.getCurrentSession().delete(persistentInstance);
			log.debug("delete successful");
		} catch (RuntimeException re) {
			log.error("delete failed", re);
			throw re;
		}
	}

	public Genbodegas merge(Genbodegas detachedInstance) {
		log.debug("merging Genbodegas instance");
		try {
			Genbodegas result = (Genbodegas) sessionFactory.getCurrentSession().merge(detachedInstance);
			log.debug("merge successful");
			return result;
		} catch (RuntimeException re) {
			log.error("merge failed", re);
			throw re;
		}
	}

	public Genbodegas findById(java.lang.Long id) {
		log.debug("getting Genbodegas instance with id: " + id);
		try {
			Genbodegas instance = (Genbodegas) sessionFactory.getCurrentSession()
					.get("com.humtrusa.entidades.Genbodegas", id);
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

	public List findByExample(Genbodegas instance) {
		log.debug("finding Genbodegas instance by example");
		try {
			List results = sessionFactory.getCurrentSession().createCriteria("com.humtrusa.entidades.Genbodegas")
					.add(Example.create(instance)).list();
			log.debug("find by example successful, result size: " + results.size());
			return results;
		} catch (RuntimeException re) {
			log.error("find by example failed", re);
			throw re;
		}
	}
}
