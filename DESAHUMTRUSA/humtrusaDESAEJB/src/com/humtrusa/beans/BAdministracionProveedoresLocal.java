package com.humtrusa.beans;


import java.util.Date;

import javax.ejb.Remote;

@Remote
public interface BAdministracionProveedoresLocal {
	public String listarProveedoresxFiltros(String identificacion,String tipoidentificacion,long codempresa);
	
	public String mantenimientoProveedores(long codEmpresa,long codProveedor, String nombres,String apellidos,
										   String tipoidentificacion, String identificacion,
										   String estransportista,String direccion,String telefonofijo1, String telefonofijo2,
										   String celular,String fax,String email,Date fechaValidez,String modo);
	
	public String obtenerProveedor(long codProveedor,long codempresa);
	public String eliminarProveedor(long codProveedor,long codempresa);
	
}
