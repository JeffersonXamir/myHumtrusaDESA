package com.humtrusa.beans;

import javax.ejb.Remote;

import org.hibernate.Session;

import com.humtrusa.entidades.Genopciones;
import com.humtrusa.entidades.Genperfiles;

@Remote
public interface BMenuLocal {
	
	/**
	 * Obtengo el Menu x Perfiles de usuario
	 * @param codempresa
	 * @param codusuario
	 * @return
	 */
	public String obtenerMenuxPerfiles(long codempresa, String codusuario);
	
	public String evaluarRaiz(Genopciones opcionRaiz, Genperfiles perfil, String codUsuario,long codEmpresa);
	
	public String evaluaMenuJSON(Genopciones padre, Genperfiles perfil, String codUsuario,long codEmpresa);
	
	public String evaluaMenuJSONNivel3(Genopciones padre, Genperfiles perfil, String codUsuario,long codEmpresa);
	
	public String evaluaMenuJSONNivel4(Genopciones padre, Genperfiles perfil, String codUsuario,long codEmpresa);
	
	public String obtenerRecursosxOpcion(Genopciones nodo);
}
