package com.humtrusa.daoext;

import java.util.List;

import org.hibernate.Query;
import org.hibernate.Session;

import com.humtrusa.Sessionfactory.HibernateSessionFactory;
import com.humtrusa.entidades.Genproveedores;

public class GenArticulosDAOEXT {

	
	public List<Object[]> listarArticulosPedido(long codempresa, long codarticulo,String descripcion){
		List<Object[]> lista = null;
		Query query=null;

		StringBuffer hqlConsulta = new StringBuffer("");
		Session ses = HibernateSessionFactory.getSession();
		try {

			hqlConsulta.append("select ga, ge ");
			hqlConsulta.append("from Genarticulos ga ");
			hqlConsulta.append("inner join ga.genarticulosxempresas ge ");
			hqlConsulta.append("inner join ge.genmarcas gm ");
			hqlConsulta.append("inner join ge.genlineas gl ");
			hqlConsulta.append("inner join ge.gensublineas gsl ");
			hqlConsulta.append("inner join ga.genunidadesmedidaByCodunidadesmedida gu ");
			hqlConsulta.append("where 1=1 ");
			hqlConsulta.append("and ge.genempresas.codempresa = "+codempresa+" ");
			
			
			if(!"".equals(codarticulo) && codarticulo > 0)
				hqlConsulta.append("and ga.codarticulo = "+codarticulo+" ");
				//hqlConsulta.append("and gp.identificacion like '%"+identificacion+"%' ");
			
			if(!"".equals(descripcion) && descripcion!=null)
				hqlConsulta.append("and ga.descripcioncorta like '%"+descripcion+"%' ");
			
			hqlConsulta.append("order by ga.descripcioncorta asc ");
			
			System.out.println("hqlConsulta "+hqlConsulta);
			query = ses.createQuery(hqlConsulta.toString());
			lista = query.list();
		
		}catch (Exception e) {
			e.printStackTrace();
		}
		return lista;
	}
	
	public long listarArticulosPedidoCount(long codempresa, long codarticulo,String descripcion){
		long lista = 0l;
		Query query=null;

		StringBuffer hqlConsulta = new StringBuffer("");
		Session ses = HibernateSessionFactory.getSession();
		try {

			hqlConsulta.append("select count(*) ");
			hqlConsulta.append("from Genarticulos ga ");
			hqlConsulta.append("inner join ga.genarticulosxempresas ge ");
			hqlConsulta.append("inner join ge.genmarcas gm ");
			hqlConsulta.append("inner join ge.genlineas gl ");
			hqlConsulta.append("inner join ge.gensublineas gsl ");
			hqlConsulta.append("inner join ga.genunidadesmedidaByCodunidadesmedida gu ");
			hqlConsulta.append("where 1=1 ");
			hqlConsulta.append("and ge.genempresas.codempresa = "+codempresa+" ");
			
			
			if(!"".equals(codarticulo) && codarticulo > 0)
				hqlConsulta.append("and ga.codarticulo = "+codarticulo+" ");
				//hqlConsulta.append("and gp.identificacion like '%"+identificacion+"%' ");
			
			if(!"".equals(descripcion) && descripcion!=null)
				hqlConsulta.append("and ga.descripcioncorta like '%"+descripcion+"%' ");
			
			//hqlConsulta.append("order by ga.descripcioncorta asc ");
			
			System.out.println("hqlConsulta "+hqlConsulta);
			query = ses.createQuery(hqlConsulta.toString());
			lista = Long.parseLong(query.uniqueResult().toString());
		
		}catch (Exception e) {
			e.printStackTrace();
		}
		return lista;
	}
}
