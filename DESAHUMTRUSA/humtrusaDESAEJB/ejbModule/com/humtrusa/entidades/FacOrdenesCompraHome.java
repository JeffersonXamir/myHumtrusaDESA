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
 * Home object for domain model class FacOrdenesCompra.
 * @see com.humtrusa.entidades.FacOrdenesCompra
 * @author Hibernate Tools
 */
public class FacOrdenesCompraHome {

	private static final Log log = LogFactory.getLog(FacOrdenesCompraHome.class);

	private final SessionFactory sessionFactory = getSessionFactory();

	protected SessionFactory getSessionFactory() {
		try {
			return (SessionFactory) new InitialContext().lookup("SessionFactory");
		} catch (Exception e) {
			log.error("Could not locate SessionFactory in JNDI", e);
			throw new IllegalStateException("Could not locate SessionFactory in JNDI");
		}
	}

	public void persist(FacOrdenesCompra transientInstance) {
		log.debug("persisting FacOrdenesCompra instance");
		try {
			sessionFactory.getCurrentSession().persist(transientInstance);
			log.debug("persist successful");
		} catch (RuntimeException re) {
			log.error("persist failed", re);
			throw re;
		}
	}

	public void attachDirty(FacOrdenesCompra instance) {
		log.debug("attaching dirty FacOrdenesCompra instance");
		try {
			sessionFactory.getCurrentSession().saveOrUpdate(instance);
			log.debug("attach successful");
		} catch (RuntimeException re) {
			log.error("attach failed", re);
			throw re;
		}
	}

	public void attachClean(FacOrdenesCompra instance) {
		log.debug("attaching clean FacOrdenesCompra instance");
		try {
			sessionFactory.getCurrentSession().lock(instance, LockMode.NONE);
			log.debug("attach successful");
		} catch (RuntimeException re) {
			log.error("attach failed", re);
			throw re;
		}
	}

	public void delete(FacOrdenesCompra persistentInstance) {
		log.debug("deleting FacOrdenesCompra instance");
		try {
			sessionFactory.getCurrentSession().delete(persistentInstance);
			log.debug("delete successful");
		} catch (RuntimeException re) {
			log.error("delete failed", re);
			throw re;
		}
	}

	public FacOrdenesCompra merge(FacOrdenesCompra detachedInstance) {
		log.debug("merging FacOrdenesCompra instance");
		try {
			FacOrdenesCompra result = (FacOrdenesCompra) sessionFactory.getCurrentSession().merge(detachedInstance);
			log.debug("merge successful");
			return result;
		} catch (RuntimeException re) {
			log.error("merge failed", re);
			throw re;
		}
	}

	public FacOrdenesCompra findById(com.humtrusa.entidades.FacOrdenesCompraId id) {
		log.debug("getting FacOrdenesCompra instance with id: " + id);
		try {
			FacOrdenesCompra instance = (FacOrdenesCompra) sessionFactory.getCurrentSession()
					.get("com.humtrusa.entidades.FacOrdenesCompra", id);
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

	public List findByExample(FacOrdenesCompra instance) {
		log.debug("finding FacOrdenesCompra instance by example");
		try {
			List results = sessionFactory.getCurrentSession().createCriteria("com.humtrusa.entidades.FacOrdenesCompra")
					.add(Example.create(instance)).list();
			log.debug("find by example successful, result size: " + results.size());
			return results;
		} catch (RuntimeException re) {
			log.error("find by example failed", re);
			throw re;
		}
	}
}