package com.humtrusa.entidades;
// Generated 30/04/2020 17:56:07 by Hibernate Tools 3.5.0.Final

import java.util.Date;
import java.util.HashSet;
import java.util.Set;

/**
 * Gensublineas generated by hbm2java
 */
public class Gensublineas implements java.io.Serializable {

	private Long codsublinea;
	private Genusuarios genusuarios;
	private Genempresas genempresas;
	private String descripcion;
	private Date fechacreacion;
	private Set genarticulosxempresas = new HashSet(0);

	public Gensublineas() {
	}

	public Gensublineas(Genempresas genempresas) {
		this.genempresas = genempresas;
	}

	public Gensublineas(Genusuarios genusuarios, Genempresas genempresas, String descripcion, Date fechacreacion,
			Set genarticulosxempresas) {
		this.genusuarios = genusuarios;
		this.genempresas = genempresas;
		this.descripcion = descripcion;
		this.fechacreacion = fechacreacion;
		this.genarticulosxempresas = genarticulosxempresas;
	}

	public Long getCodsublinea() {
		return this.codsublinea;
	}

	public void setCodsublinea(Long codsublinea) {
		this.codsublinea = codsublinea;
	}

	public Genusuarios getGenusuarios() {
		return this.genusuarios;
	}

	public void setGenusuarios(Genusuarios genusuarios) {
		this.genusuarios = genusuarios;
	}

	public Genempresas getGenempresas() {
		return this.genempresas;
	}

	public void setGenempresas(Genempresas genempresas) {
		this.genempresas = genempresas;
	}

	public String getDescripcion() {
		return this.descripcion;
	}

	public void setDescripcion(String descripcion) {
		this.descripcion = descripcion;
	}

	public Date getFechacreacion() {
		return this.fechacreacion;
	}

	public void setFechacreacion(Date fechacreacion) {
		this.fechacreacion = fechacreacion;
	}

	public Set getGenarticulosxempresas() {
		return this.genarticulosxempresas;
	}

	public void setGenarticulosxempresas(Set genarticulosxempresas) {
		this.genarticulosxempresas = genarticulosxempresas;
	}

}
