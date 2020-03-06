package com.humtrusa.beans;

import javax.ejb.Remote;

@Remote
public interface BAdministracionGeneralLocal {
	/**
	 * PRUEBAS
	 * @param nombres
	 * @param apellidos
	 * @param codigoEstado
	 * @return
	 */
	public String obtenerVendedores(String nombres,String apellidos,long codigoEstado);
	
	/**
	 * ACCESO A HUMTRUSA VALIDACION DE USUARIO
	 * @param nombres
	 * @param apellidos
	 * @param codigoEstado
	 * @return
	 */
	public String ACCESOLOGIN(String user,String pass);
	
	public String obtenerEmpresas();
	
	public String obtenerAgenciasxEmpresa(long codempresa,long codestado);
}
