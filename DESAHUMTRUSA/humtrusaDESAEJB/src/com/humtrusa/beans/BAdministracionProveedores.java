package com.humtrusa.beans;

import java.util.Date;
import java.util.List;

import javax.ejb.Stateless;

import org.hibernate.Session;
import org.hibernate.Transaction;

import com.humtrusa.Sessionfactory.HibernateSessionFactory;
import com.humtrusa.daoext.AlumnoDAOEXT;
import com.humtrusa.daoext.GenProveedoresDAOEXT;
import com.humtrusa.entidades.Alumnos;
import com.humtrusa.entidades.Genproveedores;
import com.humtrusa.estandarizadores.estandarizador;

/**
 * Session Bean implementation class BAdministracionProveedores
 */
@Stateless
public class BAdministracionProveedores implements BAdministracionProveedoresLocal {

    /**
     * Default constructor. 
     */
	public String listarProveedoresxFiltros(String identificacion,String tipoidentificacion,long codempresa) {
			System.out.println("listarProveedoresxFiltros stalless");
	    	List<Genproveedores> lsProveedores = null;
			Session ses = null;
			StringBuffer strBuff = new StringBuffer(estandarizador.CABECERA_XML);
						
			try{
				
				HibernateSessionFactory.getSession().clear();
				ses = HibernateSessionFactory.getSession();
				GenProveedoresDAOEXT dao = new GenProveedoresDAOEXT();
		
				lsProveedores = dao.listarProveedoresxFiltros(identificacion,tipoidentificacion,codempresa); 
				strBuff.append("<response success='true' total_registros='"+lsProveedores.size()+"'>");
				if(lsProveedores!=null && lsProveedores.size()>0){
				
					for(Genproveedores cxe :lsProveedores){
										
						strBuff.append("<proveedores>");
						strBuff.append("<codempresa>"+cxe.getCodempresa()+"</codempresa>");
						strBuff.append("<desempresa>"+"humtrusa"+"</desempresa>");
						strBuff.append("<codagencia>"+1l+"</codagencia>");
						strBuff.append("<desagencia>"+"humtrusa SA"+"</desagencia>");
						strBuff.append("<codproveedor>"+cxe.getCodproveedor()+"</codproveedor>");
						strBuff.append("<desproveedor>"+(cxe.getNombres()!=null?estandarizador.estandarizarCadena(cxe.getNombres()):"")+"</desproveedor>");
						strBuff.append("<apellidos>"+(cxe.getApellidos()!=null?estandarizador.estandarizarCadena(cxe.getApellidos()):"")+"</apellidos>");
						strBuff.append("<identificacion>"+(cxe.getIdentificacion()!=null?estandarizador.estandarizarCadena(cxe.getIdentificacion()):"")+"</identificacion>");
						strBuff.append("<telfijo>"+(cxe.getTelefonocelular()!=null?cxe.getTelefonocelular():"")+"</telfijo>");
						strBuff.append("<email>"+(cxe.getEmail()!=null?estandarizador.estandarizarCadena(cxe.getEmail()):"")+"</email>");
						strBuff.append("<fechavali>"+(cxe.getFechavalidez()!=null?estandarizador.estandarizarCadena(cxe.getFechavalidez().toString()):"")+"</fechavali>");
						strBuff.append("</proveedores>");
					}
				}else{
					strBuff.append("<proveedores></proveedores>");
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
		
	public String mantenimientoProveedores(long codEmpresa,long codProveedor,String nombres,String apellidos,
										   String tipoidentificacion, String identificacion,
										   String estransportista,String direccion,String telefonofijo1, String telefonofijo2,
										   String celular,String fax,String email,Date fechaValidez,String modo) {
		
		Genproveedores proveedores = null;
		Session ses = HibernateSessionFactory.getSession();
		String retorno = "";
		boolean exito = false;
		Transaction tx = null;
		tx=ses.beginTransaction();
		try {
			if ("I".equals(modo) || "M".equals(modo)) {
				tx.begin();
				retorno = new GenProveedoresDAOEXT().mantenimientoProveedores(codEmpresa,codProveedor,nombres,apellidos,tipoidentificacion,identificacion,estransportista,direccion,telefonofijo1,telefonofijo2
																			,celular,fax,email,fechaValidez,modo,ses);
				if(retorno == null || "".equals(retorno)) {
					throw new Exception(retorno);
				}
				tx.commit();
			}else if("E".equals(modo)){
				
				retorno = "EXITO SE INABILITO EL PROVEEDOR";
			}
			
		}catch (Exception e) {
			e.printStackTrace();
			return "{\"success\":\"true\",\"exito\":true,\"mensaje\":\""+e.getMessage()+"\"}";
		}
		
		return  "{\"success\":\"true\",\"exito\":true,\"mensaje\":\""+retorno+"\"}";
	}
		
	
	public String obtenerProveedor(long codProveedor,long codempresa) {
		String retorno = "";
		Genproveedores prov = null;
		GenProveedoresDAOEXT dao = new GenProveedoresDAOEXT();
		StringBuffer strBuff = new StringBuffer("");
		try {
			prov = dao.obtenerProveedor(codProveedor, codempresa);
			//strBuff.append("{");
			strBuff.append("\"codproveedor\":\""+prov.getCodproveedor()+"\",");
			strBuff.append("\"nombre\":\""+prov.getNombres()+"\",");
			strBuff.append("\"apellido\":\""+prov.getApellidos()+"\",");
			strBuff.append("\"identificacion\":\""+prov.getIdentificacion()+"\",");
			strBuff.append("\"direccion\":\""+prov.getDireccion()+"\",");
			strBuff.append("\"celular\":\""+prov.getTelefonocelular()+"\",");
			strBuff.append("\"tfijo1\":\""+prov.getTelefonofijo1()+"\",");
			strBuff.append("\"tfijo2\":\""+prov.getTelefonofijo2()+"\",");
			strBuff.append("\"tidentificacion\":\""+prov.getTipoidentificacion()+"\",");
			strBuff.append("\"estransportista\":\""+prov.getEstransportista()+"\",");
			strBuff.append("\"email\":\""+prov.getEmail()+"\",");
			strBuff.append("\"fax\":\""+prov.getFax()+"\",");
			strBuff.append("\"fechavalidez\":\""+prov.getFechavalidez()+"\"");
			//strBuff.append("}");
			
			retorno = "{\"success\":\"true\",\"exito\":true,"+strBuff.toString()+"}"; 
					
			System.out.println("Json "+retorno);
		} catch (Exception e) {
			// TODO: handle exception
			e.printStackTrace();
			return "{\"success\":\"true\",\"exito\":false,\"mensaje\":\""+e.getMessage()+"\"}";
		}
		
		return retorno;
	}
	
	public String eliminarProveedor(long codProveedor,long codempresa) {
		String retorno ="";
		GenProveedoresDAOEXT dao = new GenProveedoresDAOEXT();
		Genproveedores obj = null;
		Session ses =null;
		Transaction tx = null;
		try {
			ses = HibernateSessionFactory.getSession();
			tx= ses.beginTransaction();
			tx.begin();
			obj= dao.obtenerProveedor(codProveedor, codempresa);
			
			if(obj==null)
				throw new Exception("NO SE ENCONTRO PROVEEDOR");
			
			
			ses.delete(obj);
			tx.commit();
			retorno = "{\"success\":\"true\",\"exito\":true,\"mensaje\":\""+"SE ELIMINO EL PROVEEDOR"+"\"}";
		}catch (Exception e) {
			// TODO: handle exception
			e.printStackTrace();
			if(tx.isActive())
				tx.rollback();
			
			return "{\"success\":\"true\",\"exito\":false,\"mensaje\":\""+e.getMessage()+"\"}";
		}
		
		
		return retorno;
	}
}
