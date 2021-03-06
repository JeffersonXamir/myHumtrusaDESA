package com.humtrusa.beans;

import java.util.List;

import javax.ejb.Remote;

import com.humtrusa.entidades.Genagencias;
import com.humtrusa.entidades.Genempresas;
import com.humtrusa.entidades.Genusuarios;

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
	
	public Genusuarios obtenerUsuario(String codusuario);
	
	public String obtenerPermisos(long codigoOpcion,long codigoPerfil,long codigoEmpresa);
	
	public long obtenerMinutosBloqueo(long codigoOpcion);
	
	public int obtenerCantidadRegistrosPorPagina(long codigoEmpresa);
	
	public List<String> obtenerPermisosEspecialesPorOpcion(long codigoEmpresa,
			long codigoAgencia, long codigoOpcion, String codigoUsuario);
	
	public String obtenerDetallePerfilUsuario(String codUsuario, long codEmpresa);
	
	public String obtenerPerfilUsuarioPorEmpresa(long codigoEmpresa,
			String codigoUsuario);
	
	public Genagencias obtenerAgencia(Long codigoAgencia);
	
	public Genempresas obtenerEmpresa(Genagencias agencia);
	
	public List<Genempresas> obtenerEmpresas(Genusuarios usuario);
	
	public List<Genagencias> obtenerAgenciasPorEmpresa(Genusuarios usuario,Genempresas empresa);
	
	
	
}
