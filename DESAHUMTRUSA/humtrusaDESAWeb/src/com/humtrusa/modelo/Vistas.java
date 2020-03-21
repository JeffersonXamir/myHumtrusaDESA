package com.humtrusa.modelo;

import java.io.Serializable;
import java.util.List;

public class Vistas implements Serializable{
	private String opcion = "";
	private String codigoMantenimientoDinamico = "";
	private String nombreEntidad = "";
	private String tituloVista = "";
	private String tituloPanel = "";
	private String descripcionPagina = "";
	private int anchoSeccionFiltros = 0;
	private List<Recursos> listaRecursos = null;

	public String getOpcion() {
	  return this.opcion;
	}
	public void setOpcion(String opcion) {
	  this.opcion = opcion;
	}
	public String getTituloVista() {
	  return this.tituloVista;
	}
	public void setTituloVista(String tituloVista) {
	  this.tituloVista = tituloVista;
	}
	public String getTituloPanel() {
	  return this.tituloPanel;
	}
	public void setTituloPanel(String tituloPanel) {
	  this.tituloPanel = tituloPanel;
	}
	public List<Recursos> getListaRecursos() {
	  return this.listaRecursos;
	}
	public void setListaRecursos(List<Recursos> listaRecursos) {
	  this.listaRecursos = listaRecursos;
	}
	public String getDescripcionPagina() {
	  return this.descripcionPagina;
	}
	public void setDescripcionPagina(String descripcionPagina) {
	  this.descripcionPagina = descripcionPagina;
	}
	public int getAnchoSeccionFiltros() {
	  return this.anchoSeccionFiltros;
	}
	public void setAnchoSeccionFiltros(int anchoSeccionFiltros) {
	  this.anchoSeccionFiltros = anchoSeccionFiltros;
	}
	public String getCodigoMantenimientoDinamico() {
	  return this.codigoMantenimientoDinamico;
	}
	public void setCodigoMantenimientoDinamico(String codigoMantenimientoDinamico) {
	  this.codigoMantenimientoDinamico = codigoMantenimientoDinamico;
	}
	public String getNombreEntidad() {
	  return this.nombreEntidad;
	}
	public void setNombreEntidad(String nombreEntidad) {
	  this.nombreEntidad = nombreEntidad;
	}
}
