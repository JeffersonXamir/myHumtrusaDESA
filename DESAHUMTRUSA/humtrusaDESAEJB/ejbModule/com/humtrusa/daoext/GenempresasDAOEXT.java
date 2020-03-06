package com.humtrusa.daoext;

import java.util.List;

import org.hibernate.Query;
import org.hibernate.Session;

import com.humtrusa.Sessionfactory.HibernateSessionFactory;
import com.humtrusa.entidades.Genagencias;
import com.humtrusa.entidades.Genempresas;

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
}
