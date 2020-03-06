package com.humtrusa.beans;

import java.util.List;

import javax.ejb.Stateless;

import org.hibernate.Query;
import org.hibernate.Session;

import com.humtrusa.General.AES;
import com.humtrusa.Sessionfactory.HibernateSessionFactory;
import com.humtrusa.daoext.AlumnoDAOEXT;
import com.humtrusa.daoext.GenempresasDAOEXT;
import com.humtrusa.entidades.Alumnos;
import com.humtrusa.entidades.Genagencias;
import com.humtrusa.entidades.Genempresas;
import com.humtrusa.entidades.Genusuarios;
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
}
