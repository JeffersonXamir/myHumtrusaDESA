package com.humtrusa.daoext;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.Iterator;
import java.util.List;
import java.util.Map;
import java.util.Set;

import org.hibernate.Query;
import org.hibernate.Session;
import org.json.JSONArray;
import org.json.JSONObject;


import com.humtrusa.Sessionfactory.HibernateSessionFactory;
import com.humtrusa.entidades.Genempresas;
import com.humtrusa.entidades.Genopciones;
import com.humtrusa.entidades.Genperfiles;
import com.humtrusa.entidades.PermisosxperfilHome;

public class PermisosxperfilDAOEXT {
	
	/**
	 * obtiene las opciones 
	 * @param codEmpresa
	 * @param codPerfil
	 * @return
	 * @throws Exception
	 *//*
	public List<Object> obtenerPermisosxPerfilTodos(long codEmpresa, long codPerfil, String codSistema)throws Exception{
		List<Object> lsObj = new ArrayList<Object>(); 
		Session objSession=HibernateSessionFactory.getSession();//Permisosxperfil p;p.getGenopciones().getCodopcion()
		
		if(codPerfil <= 0)
			return lsObj;
		
		StringBuffer sql=new StringBuffer("select  o.codopcion, o.titulo, o.codsistema, p.puedeabrir, p.puedeagregar, p.puedemodificar, p.puedeeliminar, p.codpermisoperfil, o.opcioncontenedora, o.tipoprograma");
		sql.append(" from permisosxperfil p  right outer join genopciones o ");
		sql.append(" on (o.codopcion = p.codopcion ");
		sql.append(" and p.codempresa = :empresa  ");
		sql.append(" and p.codperfil = :codPerfil)  ");    		
		sql.append(" where o.tipoprograma != 'T'  ");    
		
		if(codSistema != null && !"".equals(codSistema) && !"T".equals(codSistema))
			sql.append(" and o.codsistema = '"+codSistema+"'  ");    
			
	    sql.append("   order by o.codsistema, o.ordenpresentacion");
		
		Query query=objSession.createSQLQuery(sql.toString());
		query.setLong("empresa", codEmpresa);
		query.setLong("codPerfil", codPerfil);
		sql=null;
		lsObj = query.list();
		
		return lsObj;
	}
	
	public boolean guardarPermisosxPerfil(long codEmpresa, long codPerfil , String detalle, Session ses)throws Exception{
		boolean retorno = false;
		JSONObject objJSON=null;
		JSONArray arreglo=null;
		
		System.out.println(detalle);
		
		try{
			if(!"{data:]}".equals(detalle)){			
				objJSON=com.etech.utilidades.metadatos.UtilidadesJSON.obtenerObjetoJSON(detalle);
				arreglo=objJSON.getJSONArray("data");
				objJSON.remove("data");
				objJSON=null;
			}		
			
			//////////////////////////////////////////////
			Genempresas empresa = (Genempresas)ses.get(Genempresas.class, codEmpresa);
			
			GenperfilesId idPerfiles = new GenperfilesId();
			idPerfiles.setCodperfil(codPerfil);
			idPerfiles.setGenempresas(empresa);
			
			Genperfiles perfil = (Genperfiles)ses.get(Genperfiles.class, idPerfiles);
			//////////////////////////////////////////////
			
			
			/** Separo los Permisos por Perfil a guardar **//*
			HashMap<Integer, Object[]> listaPermisos = new HashMap<Integer, Object[]>();
			long codPxP = 0l;
			long codOpcion = 0l;
			boolean puedeAbrir = false;
			boolean puedeAgregar = false;
			boolean puedeModificar = false;
			boolean puedeEliminar = false;
			String strCodPxP ="";
			for(int i=0;i<arreglo.length();i++){
				objJSON=arreglo.getJSONObject(i);
				strCodPxP = objJSON.getString("codPermisoxPerfil");	
				codOpcion = (objJSON.getString("codOpcion") != null && !objJSON.getString("codOpcion").isEmpty())?Long.parseLong(objJSON.getString("codOpcion")):(0l);		
				// Si ya existe como permiso
				if(strCodPxP!=null && !strCodPxP.isEmpty()){				
					codPxP = Long.parseLong(strCodPxP);				
					puedeAbrir =objJSON.getBoolean("abrir");
					puedeAgregar =objJSON.getBoolean("agregar");
					puedeModificar =objJSON.getBoolean("modificar");
					puedeEliminar =objJSON.getBoolean("eliminar");				
					Object[] objPermisos = {codPxP,codOpcion,puedeAbrir,puedeAgregar,puedeModificar,puedeEliminar};
					listaPermisos.put(i+1, objPermisos);				
				}
				// Si es un nuevo Permiso
				else{			
					puedeAbrir =objJSON.getBoolean("abrir");
					puedeAgregar =objJSON.getBoolean("agregar");
					puedeModificar =objJSON.getBoolean("modificar");
					puedeEliminar =objJSON.getBoolean("eliminar");				
					if(puedeAbrir||puedeAgregar||puedeModificar||puedeEliminar){
						Object[] objPermisos = {0l,codOpcion,puedeAbrir,puedeAgregar,puedeModificar,puedeEliminar};
						listaPermisos.put(i+1, objPermisos);
					}
				}
			}
			/***********************************************/
			
			/** Elimino o Actualizo o Guardo las Opciones Actuales para el Perfil **//*
			Object[] objPermisos = null;
			Permisosxperfil detalleobj=null;
			Genopciones opcion = null;
			Iterator it = listaPermisos.entrySet().iterator();
			while (it.hasNext()) {
				Map.Entry e = (Map.Entry)it.next();
				objPermisos = (Object[])e.getValue();
				
				codPxP = (Long)objPermisos[0];	
				codOpcion = (Long)objPermisos[1];	
				puedeAbrir = (Boolean) objPermisos[2];
				puedeAgregar = (Boolean) objPermisos[3];
				puedeModificar = (Boolean) objPermisos[4];
				puedeEliminar = (Boolean) objPermisos[5];
				
				if (codPxP > 0){
					if(codOpcion>0 && (puedeAbrir||puedeAgregar||puedeModificar||puedeEliminar)){
						opcion = (Genopciones)ses.get(Genopciones.class, codOpcion);
						
						detalleobj = (Permisosxperfil)ses.get(Permisosxperfil.class, codPxP);
						detalleobj.setGenopciones(opcion);
						detalleobj.setGenperfiles(perfil);
						detalleobj.setPuedeabrir(puedeAbrir?"S":"N");
						detalleobj.setPuedeagregar(puedeAgregar?"S":"N");
						detalleobj.setPuedemodificar(puedeModificar?"S":"N");
						detalleobj.setPuedeeliminar(puedeEliminar?"S":"N");
						ses.update(detalleobj);					
						guardar_eliminarPermisosPadres(detalleobj, true, ses);
					}else{
						detalleobj = (Permisosxperfil)ses.get(Permisosxperfil.class, codPxP);
						ses.delete(detalleobj);
						guardar_eliminarPermisosPadres(detalleobj, false, ses);
					}				
				}else{
					if(codOpcion>0 && (puedeAbrir||puedeAgregar||puedeModificar||puedeEliminar)){
						detalleobj = generarPermisosxPerfil(codEmpresa, 
															codOpcion,  
															codPerfil, 
															puedeAbrir, 
															puedeAgregar,
															puedeModificar,
															puedeEliminar, ses);
						ses.save(detalleobj);	
						guardar_eliminarPermisosPadres(detalleobj, true, ses);
					}
					
				}
				
			}
			/*********************************************/
		/*
			retorno = true;
		
		
		}catch (Exception e) {
			// TODO: handle exception
			e.printStackTrace();
			throw e;
		}
		
		return retorno;
	}
	
	public Permisosxperfil generarPermisosxPerfil(long codEmpresa, long codOpcion, long codPerfil, 
					boolean puedeAbrir,  boolean puedeAgregar, boolean puedeModificar, boolean puedeEliminar, Session ses){
		Permisosxperfil objPxP = new Permisosxperfil();
		
		objPxP.setCodpermisoperfil(secuenciaPermisosxPerfil(ses));
		GenperfilesId idPerfiles = new GenperfilesId();
		idPerfiles.setCodperfil(codPerfil);
		idPerfiles.setGenempresas((Genempresas)ses.get(Genempresas.class, codEmpresa));
		objPxP.setGenopciones((Genopciones)ses.get(Genopciones.class, codOpcion));
		objPxP.setGenperfiles((Genperfiles)ses.get(Genperfiles.class, idPerfiles));
		objPxP.setPuedeabrir(puedeAbrir==true?"S":"N");
		objPxP.setPuedeagregar(puedeAgregar==true?"S":"N");
		objPxP.setPuedemodificar(puedeModificar==true?"S":"N");
		objPxP.setPuedeeliminar(puedeEliminar==true?"S":"N");
		
		
		return objPxP;
	}
	
	public long secuenciaPermisosxPerfil(Session objSesion){
		long retorno =1;
		try{
			StringBuffer strQuery= new StringBuffer();
			strQuery.append("select max(g.codpermisoperfil) from Permisosxperfil g ");
			Query query=objSesion.createQuery(strQuery.toString());						
			retorno = (Long)query.uniqueResult()+1;			
		}catch (Exception e) {			
			System.out.println(e.getMessage());
		}
		return retorno;
	}
	
	public Permisosxperfil obtenerPermisosxPerfil(Genopciones objOpcion, Genperfiles objPerfil, Session objSesion){
		Permisosxperfil retorno =null;
		try{
			StringBuffer strQuery= new StringBuffer();
			strQuery.append("from Permisosxperfil g where g.genopciones=:genopcion and g.genperfiles=:genperfil");
			Query query=objSesion.createQuery(strQuery.toString());		
			query.setEntity("genopcion", objOpcion);
			query.setEntity("genperfil", objPerfil);			
			retorno = (Permisosxperfil)query.uniqueResult();			
		}catch (Exception e) {			
			System.out.println(e.getMessage());
		}
		return retorno;
	}
	
	public boolean tieneHijosOpcion(long codOpcionPadre, long codOpcionHijo, Genperfiles objPerfil, Session objSesion){
		boolean retorno =false;
		try{
			StringBuffer strQuery= new StringBuffer();
			strQuery.append("from Permisosxperfil p where p.genopciones.genopciones.codopcion=:codopcionPadre and p.genopciones.codopcion!=:codOpcionHijo and p.genperfiles=:objPerfil");
			Query query=objSesion.createQuery(strQuery.toString());		
			query.setLong("codopcionPadre", codOpcionPadre);
			query.setLong("codOpcionHijo", codOpcionHijo);		
			query.setEntity("objPerfil", objPerfil);
			List<Permisosxperfil> lsOpciones= query.list();	
			retorno = !lsOpciones.isEmpty();
			
		}catch (Exception e) {			
			System.out.println(e.getMessage());
		}
		return retorno;
	}
	
	public boolean guardar_eliminarPermisosPadres(Permisosxperfil objPxP, boolean guardar, Session ses)throws Exception{
		boolean retorno = false;				
		Permisosxperfil pxpPadre = new Permisosxperfil();
		Genperfiles objPerfil = new Genperfiles();
		Genopciones objOpcion = new Genopciones();
		
		if (objPxP.getGenopciones().getGenopciones()!=null){
			//codOpcionContenedora = objPxP.getGenopciones().getGenopciones().getCodopcion();
			objOpcion= objPxP.getGenopciones().getGenopciones();
			objPerfil = objPxP.getGenperfiles();
			pxpPadre = obtenerPermisosxPerfil(objOpcion, objPerfil, ses);
			if(pxpPadre!=null){
				/// verificando si viene por eliminar padres solo podra hacerlo si no tiene otros hijos
				if(!guardar){					
					if(tieneHijosOpcion(objOpcion.getCodopcion(), objPxP.getGenopciones().getCodopcion(), objPerfil, ses)){
						return true;	
					}					
				}
				/////////////////////////
				pxpPadre.setPuedeabrir((guardar?"S":"N"));
				pxpPadre.setPuedeagregar((guardar?"S":"N"));
				pxpPadre.setPuedeeliminar((guardar?"S":"N"));
				pxpPadre.setPuedemodificar((guardar?"S":"N"));
				if(guardar)
					ses.update(pxpPadre);
				else
					ses.delete(pxpPadre);
			}else{
				pxpPadre= generarPermisosxPerfil(objPerfil.getId().getGenempresas().getCodempresa(), objOpcion.getCodopcion(), 
						objPerfil.getId().getCodperfil(), (guardar), 
						(guardar), (guardar), 
						(guardar), ses);
				ses.save(pxpPadre);
			}
			guardar_eliminarPermisosPadres(pxpPadre, guardar, ses);
		}
		retorno= true;
		return retorno;
	}
	
	/**
	 * Iflores - Devuelves las opciones Hijas por Permisos por Perfil
	 * @param objOpcionPadre
	 * @param objPerfilUsuario
	 * @param objSesion
	 * @return
	 */
	public List<Genopciones> obtenerOpcionesPermisosxPerfil(Genopciones objOpcionPadre, Genperfiles objPerfilUsuario, Session objSesion){
		List<Genopciones> retorno =null;
		try{
			StringBuffer strQuery= new StringBuffer();
			String hqlQueryPerfil =  " select distinct op from Genopciones p inner join p.genopcioneses op " +
									 "  where p = :genopcion " +
									 "	 and exists(select 'X' " +
									 "				  from Genperfiles g inner join g.permisosxperfils pp" +
									 "				 where g = :genperfil " +
									 "				   and g.genestados.codestado = 1 " +
									 "				   and pp.genopciones = op) "+
									 " order by op.ordenpresentacion asc ";
			
			
			strQuery.append(hqlQueryPerfil);
			Query query=objSesion.createQuery(strQuery.toString());		
			query.setEntity("genopcion", objOpcionPadre);
			query.setEntity("genperfil", objPerfilUsuario);	
			System.out.println("obtenerOpcionesPermisosxPerfil "+query.toString());
			retorno = query.list();	
			
		}catch (Exception e) {			
			System.out.println(e.getMessage());
		}
		return retorno;
	}
	
	/*
	public static void main(String[] args) {
		PermisosxperfilDAOEXT dao = new PermisosxperfilDAOEXT();
		Session ses = MbwHibernateSessionFactory.getSession();
		try {
			List<Object> ls = dao.obtenerPermisosxPerfilTodos(1, 20, "T");
			
			/*for(Iterator i = ls.iterator(); i.hasNext();){
				Object[] row = (Object[])i.next();
			}*/
	/*		System.out.println(dao.secuenciaPermisosxPerfil(ses));
			
		} catch (Exception e) {
			System.out.println(e.getMessage());
			// TODO: handle exception
		}
		 
		
	}*/
}
