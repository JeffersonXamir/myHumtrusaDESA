package com.humtrusa.entidades;
// Generated 23/02/2020 2:47:59 by Hibernate Tools 3.5.0.Final

import java.util.Date;

/**
 * Genciudades generated by hbm2java
 */
public class Genciudades implements java.io.Serializable {

	private GenciudadesId id;
	private Genprovincias genprovincias;
	private Long codestado;
	private String nombreciudad;
	private String codusuario;
	private Date fecharegistro;
	private String codarea;

	public Genciudades() {
	}

	public Genciudades(GenciudadesId id, Genprovincias genprovincias) {
		this.id = id;
		this.genprovincias = genprovincias;
	}

	public Genciudades(GenciudadesId id, Genprovincias genprovincias, Long codestado, String nombreciudad,
			String codusuario, Date fecharegistro, String codarea) {
		this.id = id;
		this.genprovincias = genprovincias;
		this.codestado = codestado;
		this.nombreciudad = nombreciudad;
		this.codusuario = codusuario;
		this.fecharegistro = fecharegistro;
		this.codarea = codarea;
	}

	public GenciudadesId getId() {
		return this.id;
	}

	public void setId(GenciudadesId id) {
		this.id = id;
	}

	public Genprovincias getGenprovincias() {
		return this.genprovincias;
	}

	public void setGenprovincias(Genprovincias genprovincias) {
		this.genprovincias = genprovincias;
	}

	public Long getCodestado() {
		return this.codestado;
	}

	public void setCodestado(Long codestado) {
		this.codestado = codestado;
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

}