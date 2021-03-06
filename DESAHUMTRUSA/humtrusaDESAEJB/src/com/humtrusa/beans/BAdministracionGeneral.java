package com.humtrusa.beans;

import java.util.ArrayList;
import java.util.List;
import java.util.Vector;

import javax.ejb.Stateless;

import org.hibernate.Criteria;
import org.hibernate.Query;
import org.hibernate.Session;
import org.hibernate.Transaction;
import org.hibernate.criterion.Order;
import org.hibernate.criterion.Restrictions;
import org.apache.commons.lang.StringUtils;


import com.humtrusa.General.AES;
import com.humtrusa.Sessionfactory.HibernateSessionFactory;
import com.humtrusa.daoext.AlumnoDAOEXT;
import com.humtrusa.daoext.GenempresasDAOEXT;
import com.humtrusa.entidades.Alumnos;
import com.humtrusa.entidades.Genagencias;
import com.humtrusa.entidades.Genempresas;
import com.humtrusa.entidades.Genopciones;
import com.humtrusa.entidades.Genperfiles;
import com.humtrusa.entidades.Genrecursos;
import com.humtrusa.entidades.Genusuarios;
import com.humtrusa.entidades.Permisosxperfil;
import com.humtrusa.estandarizadores.estandarizador;


/**
 * Session Bean implementation class BAdministracionGeneral
 */
@Stateless
public class BAdministracionGeneral implements BAdministracionGeneralLocal {

    /**
     * Default constructor. 
     */
   
 /*   public String obtenerVendedores(String nombres,String apellidos,long codigoEstado) {
    	String retorno="";
    		
    	return retorno;
    }*/
    
    public String obtenerVendedores(String nombres,String apellidos,long codigoEstado) {
		System.out.println("obtenerVendedores stalless");
    	List<Alumnos> lsAlumnos = null;
		Session ses = null;
		StringBuffer strBuff = new StringBuffer(estandarizador.CABECERA_XML);
		
		//System.out.println("%%OK ");
		
		try{
			
			HibernateSessionFactory.getSession().clear();
			ses = HibernateSessionFactory.getSession();
			AlumnoDAOEXT dao = new AlumnoDAOEXT();
			
			
			
			lsAlumnos = dao.obtenerAlumnos(nombres,apellidos,codigoEstado); 
			strBuff.append("<response success='true' total_registros='"+lsAlumnos.size()+"'>");
			if(lsAlumnos!=null && lsAlumnos.size()>0){
			
				for(Alumnos cxe:lsAlumnos){
									
					strBuff.append("<estudiante>");
					strBuff.append("<codigo>"+cxe.getIdAlumno()+"</codigo>");
					strBuff.append("<nombres>"+(cxe.getNombres()!=null?estandarizador.estandarizarCadena(cxe.getNombres()):"")+"</nombres>");
					strBuff.append("<apellidos>"+(cxe.getApellidos()!=null?estandarizador.estandarizarCadena(cxe.getApellidos()):"")+"</apellidos>");
					strBuff.append("<telefono>"+(cxe.getCedula()!=null?estandarizador.estandarizarCadena(cxe.getCedula()):"")+"</telefono>");
					strBuff.append("<fnac>"+(cxe.getFechaNacimiento()!=null?cxe.getFechaNacimiento():"")+"</fnac>");
					strBuff.append("<estado>"+(cxe.getEstado()!=null?estandarizador.estandarizarCadena(cxe.getEstado()):"")+"</estado>");
					strBuff.append("</estudiante>");
				}
			}else{
				strBuff.append("<cliente><codigo></codigo><descripcion>TODOS</descripcion></cliente>");
			}
			
			strBuff.append("</response>");
		}catch(Exception e){
			strBuff.delete(0,strBuff.length());
			strBuff.append("");
			strBuff.append("<response success='false'></response>");
			e.printStackTrace();
		}
		
		return strBuff.toString();
	}
    
    /**
	 * ACCESO A HUMTRUSA VALIDACION DE USUARIO
	 * @param nombres
	 * @param apellidos
	 * @param codigoEstado
	 * @return
	 */
	public String ACCESOLOGIN(String user,String pass) {
		String salida="";
		Genusuarios usuario = new Genusuarios();
		String aesPASS ="";
		Session ses = null;
		Query query = null;
		try {
			aesPASS = new AES().encrypt(pass);
			ses = HibernateSessionFactory.getSession();
			query = ses.createQuery("from Genusuarios g where g.codusuario = '"+user+"' and g.clave = '"+aesPASS+"' and g.genestados.codestado = 1 ");
			usuario = (Genusuarios) query.uniqueResult();
			
			if(usuario == null)
				throw new Exception("Usuario o Contraseņa Incorrectas");
			
			salida = "{\"success\":\"true\",\"exito\":true,\"mensaje\":\"exito\"}";
			
		} catch (Exception e) {
			e.printStackTrace();
			return "{\"success\":\"true\",\"exito\":false,\"mensaje\":\""+e.getMessage()+"\"}";
		}
		
		return salida;
	}
	
	public String obtenerEmpresas() {
		List<Genempresas> lsEmpresas = null;
		Session ses = null;
		StringBuffer strBuff = new StringBuffer(estandarizador.CABECERA_XML);
		try{
			
			HibernateSessionFactory.getSession().clear();
			ses = HibernateSessionFactory.getSession();
			GenempresasDAOEXT dao = new GenempresasDAOEXT();

			lsEmpresas = dao.obtenerEmpresas(); 
			strBuff.append("<response success='true' >");
			if(lsEmpresas!=null && lsEmpresas.size()>0){
				//strBuff.append("<empresas><codigo>0</codigo><descripcion>TODOS</descripcion></empresas>");
				for(Genempresas ep:lsEmpresas){
									
					strBuff.append("<empresas>");
					strBuff.append("<codigo>"+ep.getCodempresa()+"</codigo>");
					strBuff.append("<descripcion>"+(ep.getNombre()!=null?estandarizador.estandarizarCadena(ep.getNombre()):"")+"</descripcion>");
					strBuff.append("</empresas>");
				}
			}else{
				strBuff.append("<empresas><codigo>0</codigo><descripcion>TODOS</descripcion></empresas>");
			}
			
			strBuff.append("</response>");
		}catch(Exception e){
			strBuff.delete(0,strBuff.length());
			strBuff.append("");
			strBuff.append("<response success='false'></response>");
			e.printStackTrace();
		}
		
		return strBuff.toString();
		
		
	}
	
	public String obtenerAgenciasxEmpresa(long codempresa,long codestado) {
		List<Genagencias> lsAgencias = null;
		Session ses = null;
		StringBuffer strBuff = new StringBuffer(estandarizador.CABECERA_XML);
		try{
			
			HibernateSessionFactory.getSession().clear();
			ses = HibernateSessionFactory.getSession();
			GenempresasDAOEXT dao = new GenempresasDAOEXT();

			lsAgencias = dao.obtenerAgenciasxEmpresa(codempresa, codestado); 
			strBuff.append("<response success='true' >");
			if(lsAgencias!=null && lsAgencias.size()>0){
				//strBuff.append("<empresas><codigo>0</codigo><descripcion>TODOS</descripcion></empresas>");
				for(Genagencias ep:lsAgencias){
									
					strBuff.append("<agencias>");
					strBuff.append("<codigo>"+ep.getCodagencia()+"</codigo>");
					strBuff.append("<descripcion>"+(ep.getNombre()!=null?estandarizador.estandarizarCadena(ep.getNombre()):"")+"</descripcion>");
					strBuff.append("</agencias>");
				}
			}else{
				strBuff.append("<agencias><codigo>0</codigo><descripcion>TODOS</descripcion></agencias>");
			}
			
			strBuff.append("</response>");
		}catch(Exception e){
			strBuff.delete(0,strBuff.length());
			strBuff.append("");
			strBuff.append("<response success='false'></response>");
			e.printStackTrace();
		}
		
		return strBuff.toString();
		
	}
	
	public Genusuarios obtenerUsuario(String codusuario) {
		Genusuarios usuario = null;
		GenempresasDAOEXT dao = new GenempresasDAOEXT();
		try {
			usuario = dao.obtenerUsuario(codusuario);
			
		}catch(Exception e) {
			usuario = null;
			e.printStackTrace();
		}
		return usuario;
		
	}
	
	public String obtenerPermisos(long codigoOpcion,long codigoPerfil,long codigoEmpresa){
		Permisosxperfil permisos = new Permisosxperfil();
		
		HibernateSessionFactory.getSession().clear();
		Session ses = HibernateSessionFactory.getSession();
		
		System.out.println("co "+codigoOpcion+" cp "+codigoPerfil+" ce "+codigoEmpresa); 
		try{
			String hqlQuery = " from Permisosxperfil pp ";
			hqlQuery += " where pp.genperfiles.codperfil=:codigoPerfil ";
			hqlQuery += " and pp.genperfiles.genempresas.codempresa=:codigoEmpresa ";
			hqlQuery += " and pp.genopciones.codopcion=:codigoOpcion ";
			
			Query quer = ses.createQuery(hqlQuery);
			
			quer.setLong("codigoPerfil",codigoPerfil);
			quer.setLong("codigoEmpresa",codigoEmpresa);
			quer.setLong("codigoOpcion",codigoOpcion);
			
			permisos = (Permisosxperfil)quer.uniqueResult();
			
		}catch(Exception e){
			e.printStackTrace();
		}
		StringBuffer sb = new StringBuffer();
		if(permisos!=null){			
			sb.append("{");
			sb.append("\"success\":true,\"valid\":true");
			sb.append(",\"puedeAbrir\":"+(permisos.getPuedeabrir().equals("S")?true:false));
			sb.append(",\"puedeAgregar\":"+(permisos.getPuedeagregar().equals("S")?true:false));
			sb.append(",\"puedeModificar\":"+(permisos.getPuedemodificar().equals("S")?true:false));
			sb.append(",\"puedeEliminar\":"+(permisos.getPuedeeliminar().equals("S")?true:false));
			sb.append("}");
		}else{
			sb.append("{\"success\":false,\"valid\":false}");				
		}
		
		return sb.toString();
	
	}
	
	public long obtenerMinutosBloqueo(long codigoOpcion) {
		
		long numeroMinutos = 0;
		
		String hqlQuery = "select g.minutosbloqueo from Genopciones g where g.codopcion = :opcion";
		
		try{
			HibernateSessionFactory.getSession().clear();
			Session ses = HibernateSessionFactory.getSession();
			
			Query quer = ses.createQuery(hqlQuery);
			quer.setLong("opcion",codigoOpcion);
			Long valor = (Long) quer.uniqueResult(); 
			
			if(valor != null)
				numeroMinutos = valor;
			
		}catch(Exception e){
			e.printStackTrace();
		}
		
		return numeroMinutos;
	}
	
	public int obtenerCantidadRegistrosPorPagina(long codigoEmpresa) {
		
		Session ses = null;
		int cantidadRegistrosPorPagina = 20;
		
		try{
			HibernateSessionFactory.getSession().clear();
			ses = HibernateSessionFactory.getSession();
			
			//GenparametrosDAOEXT daoParametros = new GenparametrosDAOEXT();
			//cantidadRegistrosPorPagina = Integer.parseInt(daoParametros.obtenerParametroPorEmpresa(codigoEmpresa,"NUMLINEASPAGINAINICIO").getValor());
			//daoParametros = null;
			cantidadRegistrosPorPagina = 20;
		}catch(Exception e){
			e.printStackTrace();
			cantidadRegistrosPorPagina = 20;
		}
		
		return cantidadRegistrosPorPagina;
	}
	
	public List<String> obtenerPermisosEspecialesPorOpcion(long codigoEmpresa,
			long codigoAgencia, long codigoOpcion, String codigoUsuario) {
		
		Session ses = null;
		List<String>lsPermisos = null;
		
		try{
			HibernateSessionFactory.getSession().clear();
			ses = HibernateSessionFactory.getSession();
			
			StringBuffer hqlQuery = new StringBuffer("select oxp.codigoalterno from Genopcionesxprograma oxp ");
			hqlQuery.append("join oxp.permisosopcionesxusuarios as pxu ");
			hqlQuery.append("where oxp.genestados.codestado=1 ");
			hqlQuery.append("and oxp.genopciones.codopcion=:codigoOpcion ");
			hqlQuery.append("and pxu.usuariosxagencia.genagencias.codagencia=:codigoAgencia ");
			hqlQuery.append("and pxu.usuariosxagencia.genusuarios.codusuario=:codigoUsuario ");
			hqlQuery.append("and pxu.puedeejecutar='S' ");
			
			Query query = ses.createQuery(hqlQuery.toString());
			query.setLong("codigoOpcion",codigoOpcion);
			query.setLong("codigoAgencia",codigoAgencia);
			query.setString("codigoUsuario",codigoUsuario);
			
			lsPermisos = query.list();
			
			hqlQuery = null;
			
		}catch(Exception e){
			e.printStackTrace();
			lsPermisos = null;
			lsPermisos = new ArrayList<String>();
		}
		
		return lsPermisos;
	}
	


	
	public String obtenerDetallePerfilUsuario(String codUsuario, long codEmpresa) {
		
		String salida = null;
		
		try{
			HibernateSessionFactory.getSession().clear();
			Session ses = HibernateSessionFactory.getSession();
			
			String hqlQueryPerfil = "select g from Genperfiles as g join g.genusuarios as usuario where g.id.genempresas=:codigoEmpresa ";
			hqlQueryPerfil += "and g.genestados.codestado=1 and usuario.codusuario=:codigoUsuario";
			
			Query querPerf = ses.createQuery(hqlQueryPerfil);
			querPerf.setString("codigoUsuario",codUsuario);
			querPerf.setLong("codigoEmpresa",codEmpresa);
			
			// Yuri me indica que apesar que pueden guardarse varios perfiles para un mismo usuario en una
			// misma empresa, yo debo controlar esto a nivel de programacion
			
			Genperfiles perfil = (Genperfiles)querPerf.list().get(0);
			salida = (perfil!=null)?perfil.getDescripcion():"";
			
		}catch(Exception e){
			salida = "";
			e.printStackTrace();
		}
		
		return salida;
	}
	
	/**  
	 * Obtiene el codigo del perfil del usuario en la empresa
	 * @param codigoUsuario El codigo del usuario
	 * @param codigoEmpresa El codigo de la empresa
	 * @return El codigo del perfil asociado al usuario en la empresa
	 */
	public String obtenerPerfilUsuarioPorEmpresa(long codigoEmpresa,
			String codigoUsuario) {
		
		String codigoPerfil = "0";
	
	String hqlQuery = "select p.id.codperfil from Genusuarios as u join u.genperfileses p ";
	hqlQuery += "where u.codusuario=:codigoUsuario and p.id.genempresas.codempresa=:codigoEmpresa";
	
	try{
		HibernateSessionFactory.getSession().clear();
		Session ses = HibernateSessionFactory.getSession();
		
		Query quer = ses.createQuery(hqlQuery);
		quer.setLong("codigoEmpresa",codigoEmpresa);
		quer.setString("codigoUsuario",codigoUsuario);
			
			codigoPerfil = String.valueOf(quer.list().get(0)); 
		}catch(Exception e){
			e.printStackTrace();
		}
		
		return codigoPerfil;
	}
	
	public Genagencias obtenerAgencia(Long codigoAgencia) {
		Genagencias agencia = null;
		try {
		Session ses = HibernateSessionFactory.getSession();
		agencia = (Genagencias)ses.get(Genagencias.class,codigoAgencia);
		}catch (Exception e) {
			// TODO: handle exception
			e.printStackTrace();
		} 
		return agencia;
	}
	 
	public Genempresas obtenerEmpresa(Genagencias agencia) {
		Genempresas empresa = null;
		Query query = null;
		try {
		Session ses = HibernateSessionFactory.getSession();
		query = ses.createQuery("select ge from Genagencias ga inner join ga.genempresas ge where ga =:agencia");
		query.setParameter("agencia", agencia);
		empresa =(Genempresas)query.uniqueResult();//(Genagencias)ses.load(Genagencias.class,agencia.getCodagencia());
		}catch (Exception e) {
			// TODO: handle exception
			e.printStackTrace();
		}
		return empresa;
	}
	
	/* (non-Javadoc)
	 * @see com.etech.seguridades.beans.BSeguridadesRemote#obtenerEmpresas(com.etech.entidades.Genusuarios)
	 */
	public List<Genempresas> obtenerEmpresas(Genusuarios usuario) {
		List<Genempresas>lsEmpresas = new Vector<Genempresas>();
		
		HibernateSessionFactory.getSession().clear();
		Session ses = HibernateSessionFactory.getSession();

		String hqlQuery = "select distinct e from Genempresas as e,Genagencias as a,Genusuarios as u,Usuariosxagencia as ua where ";
		hqlQuery += "ua.genusuarios = u.codusuario and ua.genagencias = a.codagencia and a.genempresas = e.codempresa and ua.genagencias.genempresas = e ";
		hqlQuery += "and u.codusuario=:usuario ";
		hqlQuery += "order by e.codempresa ";
		
		Query quer = ses.createQuery(hqlQuery);
		quer.setString("usuario",usuario.getCodusuario());
		
		lsEmpresas = quer.list();
		
		return lsEmpresas;
	}
	
	/* (non-Javadoc)
	 * @see com.etech.seguridades.beans.BSeguridadesLocal#obtenerAgenciasPorEmpresa(com.etech.entidades.Genusuarios, com.etech.entidades.Genempresas)
	 */
	public List<Genagencias> obtenerAgenciasPorEmpresa(Genusuarios usuario,Genempresas empresa) {
		List<Genagencias>lsAgencias = null;
		
		HibernateSessionFactory.getSession().clear();
		Session ses = HibernateSessionFactory.getSession();
		Transaction tx = ses.beginTransaction();
		
		String hqlQuery = "select ua.genagencias from Genusuarios as u join u.usuariosxagencias ua ";
		hqlQuery += "where ua.genagencias.genempresas.codempresa=:codigoEmpresa and ua.genestados.codestado=1 ";
		hqlQuery += "and u.codusuario=:codigoUsuario order by ua.genagencias.codagencia ";
		
		Query quer = ses.createQuery(hqlQuery);
		quer.setString("codigoUsuario",usuario.getCodusuario());
		quer.setLong("codigoEmpresa",empresa.getCodempresa());
		
		lsAgencias = quer.list();
		
		tx.commit();
		
		return lsAgencias;
	}
}
