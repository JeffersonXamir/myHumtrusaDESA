package com.humtrusa.daoext;

import java.util.List;

import org.hibernate.Query;
import org.hibernate.Session;

import com.humtrusa.Sessionfactory.HibernateSessionFactory;
import com.humtrusa.entidades.Genagencias;
import com.humtrusa.entidades.Genempresas;
import com.humtrusa.entidades.Genusuarios;

public class GenempresasDAOEXT {
	
	public List<Genempresas> obtenerEmpresas(){
		List<Genempresas> lista = null;
		try {
		Session ses = HibernateSessionFactory.getSession();
		lista = ses.createQuery(" FROM Genempresas ").list();
		
		}catch (Exception e) {
			e.printStackTrace();
		}
		return lista;
	}
	
	public List<Genagencias> obtenerAgenciasxEmpresa(long codEmpresa,long codestado){
		List<Genagencias> lista = null;
		Query query =null;
		try {
		Session ses = HibernateSessionFactory.getSession();
		query = ses.createQuery(" from Genagencias ga where 1=1 and ga.genempresas.codempresa = "+codEmpresa+" and ga.genestados.codestado = "+codestado+" ");
		System.out.println("query: "+query);
		lista = query.list();
		
		}catch (Exception e) {
			e.printStackTrace();
		}
		return lista;
	}
	
	public Genusuarios obtenerUsuario(String codusuario) {
		Query query;
		Session ses = HibernateSessionFactory.getSession();
		Genusuarios usuario =null;
		try {
			query= ses.createQuery(" from Genusuarios gu where gu.codusuario = '"+codusuario+"' ");
			usuario = (Genusuarios)query.uniqueResult();
		} catch (Exception e) {
			// TODO: handle exception
			usuario = null;
			e.printStackTrace();
		}
		return usuario;
	}
}
