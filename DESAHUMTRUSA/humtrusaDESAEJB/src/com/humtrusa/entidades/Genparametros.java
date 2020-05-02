package com.humtrusa.entidades;
// Generated 02/05/2020 8:22:47 by Hibernate Tools 3.5.0.Final

import java.util.Date;

/**
 * Genparametros generated by hbm2java
 */
public class Genparametros implements java.io.Serializable {

	private GenparametrosId id;
	private Genusuarios genusuarios;
	private Genempresas genempresas;
	private String descripcion;
	private String valor;
	private Date fecha;

	public Genparametros() {
	}

	public Genparametros(GenparametrosId id, Genempresas genempresas) {
		this.id = id;
		this.genempresas = genempresas;
	}

	public Genparametros(GenparametrosId id, Genusuarios genusuarios, Genempresas genempresas, String descripcion,
			String valor, Date fecha) {
		this.id = id;
		this.genusuarios = genusuarios;
		this.genempresas = genempresas;
		this.descripcion = descripcion;
		this.valor = valor;
		this.fecha = fecha;
	}

	public GenparametrosId getId() {
		return this.id;
	}

	public void setId(GenparametrosId id) {
		this.id = id;
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

	public String getValor() {
		return this.valor;
	}

	public void setValor(String valor) {
		this.valor = valor;
	}

	public Date getFecha() {
		return this.fecha;
	}

	public void setFecha(Date fecha) {
		this.fecha = fecha;
	}

}