package com.humtrusa.daoext;

import java.util.List;

import org.hibernate.Query;
import org.hibernate.Session;

import com.humtrusa.Sessionfactory.HibernateSessionFactory;
import com.humtrusa.entidades.Genestados;

public class GenestadosDAOEXT { 
	
	public static final long ESTADO_ACTIVO 			= 1;
	public static final long ESTADO_INACTIVO 		= 2;
	public static final long ESTADO_ANULADO 		= 3;
	public static final long ESTADO_CERRADO 		= 4;
	public static final long ESTADO_FACTURADO 		= 5;
	public static final long ESTADO_APROBADO 		= 6;
	public static final long ESTADO_PROCESADO 		= 7;
	public static final long ESTADO_NEGADO 			= 8;
	public static final long ESTADO_MAYORIZADO 		= 9;
	public static final long ESTADO_RESTRINGIDO 	= 10;
	public static final long ESTADO_INGRESADO_CAJA 	= 11;
	public static final long ESTADO_HISTORICO 		= 12;
	public static final long ESTADO_CONFIRMADO		= 13;
	public static final long ESTADO_LIQUIDADO		= 14;
	public static final long ESTADO_PRE_LIQUIDADO	= 15;
	public static final long ESTADO_AÑO_CERRADO		= 16;
	/* Estados de Manejos de Requerimientos */
	public static final long ESTADO_PROCESO_CARGA 	    	= 17;
	public static final long ESTADO_VERIFICANDO_STOCK   	= 18;
	public static final long ESTADO_EN_TRANSITO             = 20;
	public static final long ESTADO_DESPACHO_TERMINADO		= 21;	
	public static final long ESTADO_CONFIRMADO_MANUAL		= 22;
	public static final long ESTADO_CONFIRMADO_AUTOMATICO	= 23;
	public static final long ESTADO_INGRESO_VERIFICADO		= 24;	
	public static final long ESTADO_PENDIENTE				= 25;
	public static final long ESTADO_EN_PROCESO_WMS 			= 26;
	
	public static final long ESTADO_EN_PUERTO_DESTINO		= 60;
	public static final long ESTADO_RECIBIDO_PARCIAL		= 64;
	
	
	public static final long ESTADO_PROCESADO_MANUAL		= 75;
	
	public List<Genestados> obtenerEstados(){
		try{
			Session objsesion=HibernateSessionFactory.getSession();
			return objsesion.createCriteria(Genestados.class).list();
		}catch(Exception e){
			System.out.println(e.getMessage());
			return null;
		}
	}
	
	public List<Genestados> obtenerEstados(String ... estados){
		try{
			Session objsesion=HibernateSessionFactory.getSession();
			StringBuffer sql=new StringBuffer("from Genestados where codestado in (");
			for(int i=0;i<estados.length;i++){
				sql.append(estados[i]+",");
			}
			sql.replace(sql.length()-1, sql.length(), ")");
			sql.append(" order by codestado ");
			
			List<Genestados> lista = objsesion.createQuery(sql.toString()).list();
			sql=null;
			return lista;
			
		}catch(Exception e){
			System.out.println(e.getMessage());
			return null;
		}
	}
	
	public Genestados obtenerEstado(long codestado){
		Session objSession=HibernateSessionFactory.getSession();
		Query query=objSession.createQuery("from Genestados where codestado= :codestado");
		query.setLong("codestado", codestado);
		return (Genestados)query.uniqueResult();
	}
}
