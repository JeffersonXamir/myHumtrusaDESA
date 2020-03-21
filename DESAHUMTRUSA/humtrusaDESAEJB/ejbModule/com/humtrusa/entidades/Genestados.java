package com.humtrusa.entidades;
// Generated 20/03/2020 14:36:48 by Hibernate Tools 3.5.0.Final

import java.util.Date;
import java.util.HashSet;
import java.util.Set;

/**
 * Genestados generated by hbm2java
 */
public class Genestados implements java.io.Serializable {

	private Long codestado;
	private String descripcion;
	private String codusuario;
	private Date fecha;
	private Set genperfileses = new HashSet(0);
	private Set genusuarioses = new HashSet(0);
	private Set genopcioneses = new HashSet(0);
	private Set usuariosxagencias = new HashSet(0);
	private Set genregioneses = new HashSet(0);
	private Set genciudadeses = new HashSet(0);
	private Set genprovinciases = new HashSet(0);
	private Set genagenciases = new HashSet(0);

	public Genestados() {
	}

	public Genestados(String descripcion, String codusuario, Date fecha) {
		this.descripcion = descripcion;
		this.codusuario = codusuario;
		this.fecha = fecha;
	}

	public Genestados(String descripcion, String codusuario, Date fecha, Set genperfileses, Set genusuarioses,
			Set genopcioneses, Set usuariosxagencias, Set genregioneses, Set genciudadeses, Set genprovinciases,
			Set genagenciases) {
		this.descripcion = descripcion;
		this.codusuario = codusuario;
		this.fecha = fecha;
		this.genperfileses = genperfileses;
		this.genusuarioses = genusuarioses;
		this.genopcioneses = genopcioneses;
		this.usuariosxagencias = usuariosxagencias;
		this.genregioneses = genregioneses;
		this.genciudadeses = genciudadeses;
		this.genprovinciases = genprovinciases;
		this.genagenciases = genagenciases;
	}

	public Long getCodestado() {
		return this.codestado;
	}

	public void setCodestado(Long codestado) {
		this.codestado = codestado;
	}

	public String getDescripcion() {
		return this.descripcion;
	}

	public void setDescripcion(String descripcion) {
		this.descripcion = descripcion;
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

	public Set getGenperfileses() {
		return this.genperfileses;
	}

	public void setGenperfileses(Set genperfileses) {
		this.genperfileses = genperfileses;
	}

	public Set getGenusuarioses() {
		return this.genusuarioses;
	}

	public void setGenusuarioses(Set genusuarioses) {
		this.genusuarioses = genusuarioses;
	}

	public Set getGenopcioneses() {
		return this.genopcioneses;
	}

	public void setGenopcioneses(Set genopcioneses) {
		this.genopcioneses = genopcioneses;
	}

	public Set getUsuariosxagencias() {
		return this.usuariosxagencias;
	}

	public void setUsuariosxagencias(Set usuariosxagencias) {
		this.usuariosxagencias = usuariosxagencias;
	}

	public Set getGenregioneses() {
		return this.genregioneses;
	}

	public void setGenregioneses(Set genregioneses) {
		this.genregioneses = genregioneses;
	}

	public Set getGenciudadeses() {
		return this.genciudadeses;
	}

	public void setGenciudadeses(Set genciudadeses) {
		this.genciudadeses = genciudadeses;
	}

	public Set getGenprovinciases() {
		return this.genprovinciases;
	}

	public void setGenprovinciases(Set genprovinciases) {
		this.genprovinciases = genprovinciases;
	}

	public Set getGenagenciases() {
		return this.genagenciases;
	}

	public void setGenagenciases(Set genagenciases) {
		this.genagenciases = genagenciases;
	}

}
