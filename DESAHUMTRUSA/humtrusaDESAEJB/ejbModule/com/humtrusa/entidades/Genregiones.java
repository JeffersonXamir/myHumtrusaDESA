package com.humtrusa.entidades;
// Generated 25/02/2020 21:11:45 by Hibernate Tools 3.5.0.Final

import java.util.Date;
import java.util.HashSet;
import java.util.Set;

/**
 * Genregiones generated by hbm2java
 */
public class Genregiones implements java.io.Serializable {

	private Long codregion;
	private Genestados genestados;
	private Genpaises genpaises;
	private String nombre;
	private String codusuario;
	private Date fecha;
	private String codarea;
	private Set genprovinciases = new HashSet(0);

	public Genregiones() {
	}

	public Genregiones(Genestados genestados, Genpaises genpaises, String nombre) {
		this.genestados = genestados;
		this.genpaises = genpaises;
		this.nombre = nombre;
	}

	public Genregiones(Genestados genestados, Genpaises genpaises, String nombre, String codusuario, Date fecha,
			String codarea, Set genprovinciases) {
		this.genestados = genestados;
		this.genpaises = genpaises;
		this.nombre = nombre;
		this.codusuario = codusuario;
		this.fecha = fecha;
		this.codarea = codarea;
		this.genprovinciases = genprovinciases;
	}

	public Long getCodregion() {
		return this.codregion;
	}

	public void setCodregion(Long codregion) {
		this.codregion = codregion;
	}

	public Genestados getGenestados() {
		return this.genestados;
	}

	public void setGenestados(Genestados genestados) {
		this.genestados = genestados;
	}

	public Genpaises getGenpaises() {
		return this.genpaises;
	}

	public void setGenpaises(Genpaises genpaises) {
		this.genpaises = genpaises;
	}

	public String getNombre() {
		return this.nombre;
	}

	public void setNombre(String nombre) {
		this.nombre = nombre;
	}

	public String getCodusuario() {
		return this.codusuario;
	}

	public void setCodusuario(String codusuario) {
		this.codusuario = codusuario;
	}

	public Date getFecha() {
		return this.fecha;
	}

	public void setFecha(Date fecha) {
		this.fecha = fecha;
	}

	public String getCodarea() {
		return this.codarea;
	}

	public void setCodarea(String codarea) {
		this.codarea = codarea;
	}

	public Set getGenprovinciases() {
		return this.genprovinciases;
	}

	public void setGenprovinciases(Set genprovinciases) {
		this.genprovinciases = genprovinciases;
	}

}
