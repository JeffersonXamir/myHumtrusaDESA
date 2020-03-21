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
 * Home object for domain model class Permisosxusuario.
 * @see com.humtrusa.entidades.Permisosxusuario
 * @author Hibernate Tools
 */
public class PermisosxusuarioHome {

	private static final Log log = LogFactory.getLog(PermisosxusuarioHome.class);

	private final SessionFactory sessionFactory = getSessionFactory();

	protected SessionFactory getSessionFactory() {
		try {
			return (SessionFactory) new InitialContext().lookup("SessionFactory");
		} catch (Exception e) {
			log.error("Could not locate SessionFactory in JNDI", e);
			throw new IllegalStateException("Could not locate SessionFactory in JNDI");
		}
	}

	public void persist(Permisosxusuario transientInstance) {
		log.debug("persisting Permisosxusuario instance");
		try {
			sessionFactory.getCurrentSession().persist(transientInstance);
			log.debug("persist successful");
		} catch (RuntimeException re) {
			log.error("persist failed", re);
			throw re;
		}
	}

	public void attachDirty(Permisosxusuario instance) {
		log.debug("attaching dirty Permisosxusuario instance");
		try {
			sessionFactory.getCurrentSession().saveOrUpdate(instance);
			log.debug("attach successful");
		} catch (RuntimeException re) {
			log.error("attach failed", re);
			throw re;
		}
	}

	public void attachClean(Permisosxusuario instance) {
		log.debug("attaching clean Permisosxusuario instance");
		try {
			sessionFactory.getCurrentSession().lock(instance, LockMode.NONE);
			log.debug("attach successful");
		} catch (RuntimeException re) {
			log.error("attach failed", re);
			throw re;
		}
	}

	public void delete(Permisosxusuario persistentInstance) {
		log.debug("deleting Permisosxusuario instance");
		try {
			sessionFactory.getCurrentSession().delete(persistentInstance);
			log.debug("delete successful");
		} catch (RuntimeException re) {
			log.error("delete failed", re);
			throw re;
		}
	}

	public Permisosxusuario merge(Permisosxusuario detachedInstance) {
		log.debug("merging Permisosxusuario instance");
		try {
			Permisosxusuario result = (Permisosxusuario) sessionFactory.getCurrentSession().merge(detachedInstance);
			log.debug("merge successful");
			return result;
		} catch (RuntimeException re) {
			log.error("merge failed", re);
			throw re;
		}
	}

	public Permisosxusuario findById(com.humtrusa.entidades.PermisosxusuarioId id) {
		log.debug("getting Permisosxusuario instance with id: " + id);
		try {
			Permisosxusuario instance = (Permisosxusuario) sessionFactory.getCurrentSession()
					.get("com.humtrusa.entidades.Permisosxusuario", id);
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

	public List findByExample(Permisosxusuario instance) {
		log.debug("finding Permisosxusuario instance by example");
		try {
			List results = sessionFactory.getCurrentSession().createCriteria("com.humtrusa.entidades.Permisosxusuario")
					.add(Example.create(instance)).list();
			log.debug("find by example successful, result size: " + results.size());
			return results;
		} catch (RuntimeException re) {
			log.error("find by example failed", re);
			throw re;
		}
	}
}
