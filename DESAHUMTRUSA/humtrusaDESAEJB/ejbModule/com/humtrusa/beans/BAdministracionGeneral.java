package com.humtrusa.beans;

import java.util.List;

import javax.ejb.Stateless;

import org.hibernate.Session;


import com.humtrusa.Sessionfactory.HibernateSessionFactory;
import com.humtrusa.daoext.AlumnoDAOEXT;
import com.humtrusa.entidades.Alumnos;
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
}
