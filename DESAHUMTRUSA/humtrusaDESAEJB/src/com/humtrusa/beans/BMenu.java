package com.humtrusa.beans;

import java.util.List;

import javax.ejb.Stateless;

import org.hibernate.Criteria;
import org.hibernate.Query;
import org.hibernate.Session;
import org.hibernate.criterion.Order;
import org.hibernate.criterion.Restrictions;

import com.humtrusa.daoext.GenestadosDAOEXT;
import com.humtrusa.Sessionfactory.HibernateSessionFactory;
import com.humtrusa.daoext.PermisosxperfilDAOEXT;
import com.humtrusa.entidades.Genopciones;
import com.humtrusa.entidades.Genperfiles;
import com.humtrusa.entidades.Genrecursos;

/**
 * Session Bean implementation class SMenu
 */
@Stateless
public class BMenu implements BMenuLocal {

    /**
     * Default constructor. 
     */
    public BMenu() {
        // TODO Auto-generated constructor stub
    }
    
    /**
	 * Obtengo el Menu x Perfiles de usuario
	 * @param codempresa
	 * @param codusuario
	 * @return
	 */
    public String obtenerMenuxPerfiles(long codempresa, String codusuario) {
    	Session ses = HibernateSessionFactory.getSession();
    	Query query= null;
    	Genperfiles perfil =null;
    	List<Genperfiles> lsperfiles;
    	List<Genopciones> lsopciones;
    	StringBuffer cadenaMenu = new StringBuffer("");
    	
    	try { 
			query = ses.createQuery("from Genperfiles g where g.genusuarios.codusuario =:usuario and g.genestados.codestado = 1 and g.genempresas.codempresa =:codempresa");
    		query.setString("usuario", codusuario);
    		query.setLong("codempresa", codempresa);
    		
    		perfil =(Genperfiles)query.list().get(0);
    		
    		query = null;
    		
    		query = ses.createQuery("select x.genopciones from Permisosxperfil as x " +
				    "  where x.genperfiles = :perfil "+
				    "    and x.genopciones.genestados.codestado = 1 " +
					"    and x.genopciones.genopciones is null " +
					"  order by x.genopciones.ordenpresentacion");
    		query.setParameter("perfil", perfil);
    		
    		lsopciones = query.list();
    		
    		try {
    			int count = 0;
				cadenaMenu.append("\"opciones\":[");
    			for (Genopciones gop : lsopciones) {
					cadenaMenu.append((count>0?",":""));
    				cadenaMenu.append(this.evaluarRaiz(gop, perfil, codusuario, codempresa));
    				count++;
				}
    			cadenaMenu.append("]");
    			
			} catch (Exception e) {
				// TODO: handle exception
			}
    		
		} catch (Exception e) {
			// TODO: handle exception
			e.printStackTrace(); 
		}
    	 
    	
    	return cadenaMenu.toString();
    }
   
    public String evaluarRaiz(Genopciones opcionRaiz, Genperfiles perfil, String codUsuario,long codEmpresa){
		
		Session ses = HibernateSessionFactory.getSession();
		StringBuffer respuesta = new StringBuffer("");
		
		try{
			respuesta.append("{");
			respuesta.append("\"nombreopcion\":\""+opcionRaiz.getTitulo()+"\",");
			respuesta.append("\"padre\":[");
			 
			//****************** EVALUO NODOS HIJOS **************************
			//****************************************************************
			int count = 0;
			List<Genopciones> listaModulos = new PermisosxperfilDAOEXT().obtenerOpcionesPermisosxPerfil(opcionRaiz, perfil, ses);
			for(Genopciones hijo:listaModulos){
				// evaluamos el menu respectivo
				System.out.println("hijo "+hijo.getCodopcion());
				respuesta.append((count>0?",":""));
				if(hijo.getGenestados().getCodestado() == 1)
					respuesta.append(evaluaMenuJSON(hijo, perfil, codUsuario,codEmpresa));
				
				count++;
			}
			//****************************************************************
			//****************************************************************
			 
			respuesta.append("]"); 
			respuesta.append("}");
		}catch (Exception e) {
			// TODO: handle exception
			e.printStackTrace();
		}
		return respuesta.toString(); 
	}
    
    public String evaluaMenuJSON(Genopciones padre, Genperfiles perfil, String codUsuario,long codEmpresa){
		
		Session ses = HibernateSessionFactory.getSession();
		StringBuffer strRespuesta = new StringBuffer();
		
		strRespuesta.append("{");
		strRespuesta.append("\"nombrepadre\":\""+padre.getTitulo()+"\",");
		strRespuesta.append("\"hijos\":[");
		//si tiene hijos entonces llamamos a la recursion iterando entre sus hijos
		if(!padre.getGenopcioneses().isEmpty()){
			strRespuesta.append("");
			
			List<Genopciones> listaModulos = new PermisosxperfilDAOEXT().obtenerOpcionesPermisosxPerfil(padre, perfil, ses);
			int count = 0;
			for(Genopciones hijo : listaModulos){
				strRespuesta.append((count>0?",":""));
				if(hijo.getGenestados().getCodestado() == 1)
					strRespuesta.append(evaluaMenuJSONNivel3(hijo, perfil, codUsuario,codEmpresa));
				
				count++;
			}
			
			strRespuesta.append("");
		}
		
		strRespuesta.append("]");
		strRespuesta.append("}");
		return strRespuesta.toString();
	}
    
 public String evaluaMenuJSONNivel3(Genopciones padre, Genperfiles perfil, String codUsuario,long codEmpresa){
		
		Session ses = HibernateSessionFactory.getSession();
		StringBuffer strRespuesta = new StringBuffer();
		
		strRespuesta.append("{");
		strRespuesta.append("\"nombrehijo\":\""+padre.getTitulo()+"\",");
		strRespuesta.append("\"subhijos\":[");
		//si tiene hijos entonces llamamos a la recursion iterando entre sus hijos
		if(!padre.getGenopcioneses().isEmpty()){
			strRespuesta.append("");
			
			List<Genopciones> listaModulos = new PermisosxperfilDAOEXT().obtenerOpcionesPermisosxPerfil(padre, perfil, ses);
			int count = 0;
			for(Genopciones hijo : listaModulos){
				strRespuesta.append((count>0?",":""));
				if(hijo.getGenestados().getCodestado() == 1)
					strRespuesta.append(evaluaMenuJSONNivel4(hijo, perfil, codUsuario,codEmpresa));
				
				count++;
			}
			
			strRespuesta.append("");
		}
		
		strRespuesta.append("]");
		strRespuesta.append("}");
		return strRespuesta.toString();
	}
 	
 public String evaluaMenuJSONNivel4(Genopciones padre, Genperfiles perfil, String codUsuario,long codEmpresa){
		
		Session ses = HibernateSessionFactory.getSession();
		StringBuffer strRespuesta = new StringBuffer();
		
		strRespuesta.append("{");
		strRespuesta.append("\"nombresubhijo\":\""+padre.getTitulo()+"\",");
		/*
		strRespuesta.append((padre.getHref()!=null || !"".equals(padre.getHref())?"\"href\":\""+padre.getHref()+"?opcion="+padre.getCodopcion()+"\",":""));
		strRespuesta.append((padre.getCodopcion()!=null || !"".equals(padre.getCodopcion())?"\"opcion\":\""+padre.getCodopcion()+"\",":""));
		strRespuesta.append((padre.getOpciondinamica()!=null || !"".equals(padre.getOpciondinamica())?"\"codigo_mantenimiento_dinamico\":\""+padre.getOpciondinamica()+"\",":""));
		strRespuesta.append((padre.getTitulo()!=null || !"".equals(padre.getTitulo())?"\"nombre_entidad\":\""+padre.getTitulo()+"\",":""));
		strRespuesta.append((padre.getTitulopagina()!=null || !"".equals(padre.getTitulopagina())?"\"titulo_pagina\":\""+padre.getTitulopagina()+"\",":""));
		strRespuesta.append((padre.getTitulopanel()!=null || !"".equals(padre.getTitulopanel())?"\"titulo_panel\":\""+padre.getTitulopanel()+"\",":""));
		strRespuesta.append((padre.getDescripcion()!=null || !"".equals(padre.getDescripcion())?"\"descripcion_pagina\":\""+padre.getDescripcion()+"\",":""));
		strRespuesta.append((padre.getAnchopanelfiltros()!=null || !"".equals(padre.getAnchopanelfiltros())?"\"ancho_panel_filtro\":\""+padre.getAnchopanelfiltros()+"\",":""));
		strRespuesta.append((padre.getGenrecursoses()!=null?"\"recursos_adicionales\":["+this.obtenerRecursosxOpcion(padre)+"],":""));
		*/
		strRespuesta.append((padre.getHref()!=null || !"".equals(padre.getHref())?"\"href\":\""+padre.getHref():""));
		strRespuesta.append((padre.getCodopcion()!=null || !"".equals(padre.getCodopcion())?"?opcion="+padre.getCodopcion():""));
		strRespuesta.append((padre.getOpciondinamica()!=null || !"".equals(padre.getOpciondinamica())?"&codigo_mantenimiento_dinamico="+padre.getOpciondinamica():""));
		strRespuesta.append((padre.getTitulo()!=null || !"".equals(padre.getTitulo())?"&nombre_entidad="+padre.getTitulo():"")); 
		strRespuesta.append((padre.getTitulopagina()!=null || !"".equals(padre.getTitulopagina())?"&titulo_pagina="+padre.getTitulopagina():"")); 
		strRespuesta.append((padre.getTitulopanel()!=null || !"".equals(padre.getTitulopanel())?"&titulo_panel="+padre.getTitulopanel():""));
		strRespuesta.append((padre.getDescripcion()!=null || !"".equals(padre.getDescripcion())?"&descripcion_pagina="+padre.getDescripcion():""));
		strRespuesta.append((padre.getAnchopanelfiltros()!=null || !"".equals(padre.getAnchopanelfiltros())?"&ancho_panel_filtro="+padre.getAnchopanelfiltros():""));
		strRespuesta.append((padre.getGenrecursoses()!=null?"&recursos_adicionales=["+this.obtenerRecursosxOpcion(padre)+"]\",":""));  
		
		strRespuesta.append("\"subhijos\":[");
		//si tiene hijos entonces llamamos a la recursion iterando entre sus hijos
		if(!padre.getGenopcioneses().isEmpty()){
			strRespuesta.append("");
			
			List<Genopciones> listaModulos = new PermisosxperfilDAOEXT().obtenerOpcionesPermisosxPerfil(padre, perfil, ses);
			int count = 0;
			for(Genopciones hijo : listaModulos){
				strRespuesta.append((count>0?",":""));
				if(hijo.getGenestados().getCodestado() == 1)
					strRespuesta.append(evaluaMenuJSONNivel4(hijo, perfil, codUsuario,codEmpresa));
				
				count++;
			}
			
			strRespuesta.append("");
		}
		
		strRespuesta.append("]");
		strRespuesta.append("}");
		return strRespuesta.toString();
	}
 
 	public String obtenerRecursosxOpcion(Genopciones nodo) {
 		
 		Session ses = HibernateSessionFactory.getSession();
 		StringBuffer strRecursos = new StringBuffer(""); 
		//Criteria crit = ses.createCriteria(Genrecursos.class);
		//crit.add(Restrictions.eq("id.genopciones",nodo));
		//crit.addOrder(Order.asc("id.codrecurso"));
		Query query = null;
 		try {
			query = ses.createQuery("from Genrecursos gr where gr.genopciones =:opcion  order by gr.id.codrecurso asc");
			query.setParameter("opcion", nodo);
			List<Genrecursos>lsRecursos = query.list();
			
			int count =0; 
			for(Genrecursos recurso:lsRecursos){
				//strRecursos.append(""+(count>0?",":"")+"{\"tipo\":\"{0}\",\"url\":\"{1}\"}".replace("{0}",recurso.getTipo()).replace("{1}",recurso.getUrl()));
				strRecursos.append(""+(count>0?",":"")+"{*tipo*:*{0}*,*url*:*{1}*}".replace("{0}",recurso.getTipo()).replace("{1}",recurso.getUrl()));
				count++; 
			}   
 		}catch (Exception e) {
			// TODO: handle exception
 			e.printStackTrace();
 			return "";
		}
		return strRecursos.toString();
 	}
}
