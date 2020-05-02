package com.humtrusa.daoext;

import java.util.Date;
import java.util.List;

import org.hibernate.Query;
import org.hibernate.Session;

import com.humtrusa.Sessionfactory.HibernateSessionFactory;
import com.humtrusa.entidades.Genproveedores;

public class GenProveedoresDAOEXT {
	
	/**
	 * OBTIENE LA LISTA DE PROVEEDORES POR FILTROS
	 * @param nombres
	 * @param apellidos
	 * @param Codestado
	 * @return
	 */
	public List<Genproveedores> listarProveedoresxFiltros(String identificacion,String tipoidentificacion,long codempresa){
		List<Genproveedores> lista = null;
		Query query=null;

		StringBuffer hqlConsulta = new StringBuffer("");
		Session ses = HibernateSessionFactory.getSession();
		try {
			hqlConsulta.append("from Genproveedores gp ");
			hqlConsulta.append("where 1=1 ");
			
			if(codempresa > 0l )
				hqlConsulta.append("and gp.codempresa = "+codempresa+" ");
			
			if(!"".equals(identificacion) && identificacion!=null)
				hqlConsulta.append("and gp.identificacion like '%"+identificacion+"%' ");
			
			if(!"".equals(tipoidentificacion) && tipoidentificacion!=null)
				hqlConsulta.append("and gp.tipoidentificacion = '"+tipoidentificacion+"' ");
			
			hqlConsulta.append("order by gp.codproveedor ");
			
			System.out.println("hqlConsulta "+hqlConsulta);
			query = ses.createQuery(hqlConsulta.toString());
			lista = query.list();
		
		}catch (Exception e) {
			e.printStackTrace();
		}
		return lista;
	}
	
	public Genproveedores obtenerProveedor(long codproveedor,long codempresa) {
		
		Session ses = null;
		ses=HibernateSessionFactory.getSession();
		
		Query query=null;
		Genproveedores objProveedor =null;
		
		query= ses.createQuery("select gp from Genproveedores as gp where gp.codproveedor = "+codproveedor+" ");
		objProveedor = (Genproveedores) query.uniqueResult();
		
		return objProveedor;
	}
	
	/**
	 * 
	 * @param nombres
	 * @param apellidos
	 * @param tipoidentificacion
	 * @param identificacion
	 * @param estransportista
	 * @param direccion
	 * @param telefonofijo1
	 * @param telefonofijo2
	 * @param celular
	 * @param fax
	 * @param email
	 * @param fechaValidez
	 * @param modo
	 * @param ses
	 * @return
	 */
	public String mantenimientoProveedores(long codEmpresa,long codProveedor, String nombres,String apellidos,
										   String tipoidentificacion, String identificacion,
										   String estransportista,String direccion,String telefonofijo1, String telefonofijo2,
										   String celular,String fax,String email,Date fechaValidez,String modo,Session ses) {
		
		Genproveedores objprove =null;
		Query query= null;
		long secuencial = 0l;
		String retorno="";
		try {
			if("I".equals(modo)) {
				query= ses.createQuery("SELECT IFNULL(MAX(gp.codproveedor),0)+1 FROM Genproveedores gp");
				secuencial = Long.parseLong(query.uniqueResult().toString());
				
				objprove = new Genproveedores();
				objprove.setCodproveedor(secuencial);
				objprove.setNombres(nombres);
				objprove.setApellidos(apellidos);
				objprove.setTipoidentificacion(tipoidentificacion);
				objprove.setIdentificacion(identificacion);
				objprove.setEstransportista(estransportista);
				objprove.setDireccion(direccion);
				objprove.setTelefonofijo1(telefonofijo1);
				objprove.setTelefonofijo2(telefonofijo2);
				objprove.setTelefonocelular(celular);
				objprove.setFax(fax);
				objprove.setEmail(email);
				objprove.setFechavalidez(fechaValidez);
				ses.save(objprove);
				retorno = "EXITO AL GUARDAR PROVEEDOR";
			}else if ("M".equals(modo)) {
				
				objprove = this.obtenerProveedor(codProveedor, codEmpresa);
				
				if(objprove==null)
					throw new Exception("NO SE PUDO ENCONTRAR AL PROVEEDOR");
				
				objprove.setNombres(nombres);
				objprove.setApellidos(apellidos);
				objprove.setTipoidentificacion(tipoidentificacion);
				objprove.setIdentificacion(identificacion);
				objprove.setEstransportista(estransportista);
				objprove.setDireccion(direccion);
				objprove.setTelefonofijo1(telefonofijo1);
				objprove.setTelefonofijo2(telefonofijo2);
				objprove.setTelefonocelular(celular);
				objprove.setFax(fax);
				objprove.setEmail(email);
				objprove.setFechavalidez(fechaValidez);
				ses.update(objprove);
				retorno = "EXITO AL ACTUALIZAR AL PROVEEDOR";
			}
			
		}catch (Exception e) {
			e.printStackTrace();
			retorno = null;
		}
		return retorno;
	}
}
