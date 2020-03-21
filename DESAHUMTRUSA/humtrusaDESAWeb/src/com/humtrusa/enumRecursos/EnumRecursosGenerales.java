package com.humtrusa.enumRecursos;

public enum EnumRecursosGenerales {
 LISTAR_ALUMNOS_FILTROS("LISTAR_ALUMNOS_FILTROS"),
 LOGIN("LOGIN"),
 OBTENER_EMPRESAS("OBTENER_EMPRESAS"),
 OBTENER_AGENCIASXEMPRESAS("OBTENER_AGENCIASXEMPRESAS"),

 
 /**RECURSOS TRANSPORTE **/
 MODELO_SEGURIDADES("modeloSeguridad"),
 MODELO_VISTAS("modeloVista"),
 
 /** RECURSOS SEGURIDAD **/
 BSEGURIDADES("servidor/BAdministracionGeneral"),
 BDEFAULT("default");

 EnumRecursosGenerales(String recurso){
	this.recurso = recurso;
 }
 
 private String recurso;
	
 public String getRecurso(){
	return this.recurso;
 }
 
}
