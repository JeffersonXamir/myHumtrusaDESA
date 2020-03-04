package com.humtrusa.entidades;
// Generated 04/03/2020 18:22:17 by Hibernate Tools 3.5.0.Final

import java.util.Date;
import java.util.HashSet;
import java.util.Set;

/**
 * Genciudades generated by hbm2java
 */
public class Genciudades implements java.io.Serializable {

	private Long codciudad;
	private Genestados genestados;
	private Genprovincias genprovincias;
	private Genpaises genpaises;
	private String nombreciudad;
	private String codusuario;
	private Date fecharegistro;
	private String codarea;
	private Set genclienteses = new HashSet(0);

	public Genciudades() {
	}

	public Genciudades(Genprovincias genprovincias, Genpaises genpaises) {
		this.genprovincias = genprovincias;
		this.genpaises = genpaises;
	}

	public Genciudades(Genestados genestados, Genprovincias genprovincias, Genpaises genpaises, String nombreciudad,
			String codusuario, Date fecharegistro, String codarea, Set genclienteses) {
		this.genestados = genestados;
		this.genprovincias = genprovincias;
		this.genpaises = genpaises;
		this.nombreciudad = nombreciudad;
		this.codusuario = codusuario;
		this.fecharegistro = fecharegistro;
		this.codarea = codarea;
		this.genclienteses = genclienteses;
	}

	public Long getCodciudad() {
		return this.codciudad;
	}

	public void setCodciudad(Long codciudad) {
		this.codciudad = codciudad;
	}

	public Genestados getGenestados() {
		return this.genestados;
	}

	public void setGenestados(Genestados genestados) {
		this.genestados = genestados;
	}

	public Genprovincias getGenprovincias() {
		return this.genprovincias;
	}

	public void setGenprovincias(Genprovincias genprovincias) {
		this.genprovincias = genprovincias;
	}

	public Genpaises getGenpaises() {
		return this.genpaises;
	}

	public void setGenpaises(Genpaises genpaises) {
		this.genpaises = genpaises;
	}

	public String getNombreciudad() {
		return this.nombreciudad;
	}

	public void setNombreciudad(String nombreciudad) {
		this.nombreciudad = nombreciudad;
	}

	public String getCodusuario() {
		return this.codusuario;
	}

	public void setCodusuario(String codusuario) {
		this.codusuario = codusuario;
	}

	public Date getFecharegistro() {
		return this.fecharegistro;
	}

	public void setFecharegistro(Date fecharegistro) {
		this.fecharegistro = fecharegistro;
	}

	public String getCodarea() {
		return this.codarea;
	}

	public void setCodarea(String codarea) {
		this.codarea = codarea;
	}

	public Set getGenclienteses() {
		return this.genclienteses;
	}

	public void setGenclienteses(Set genclienteses) {
		this.genclienteses = genclienteses;
	}

}
