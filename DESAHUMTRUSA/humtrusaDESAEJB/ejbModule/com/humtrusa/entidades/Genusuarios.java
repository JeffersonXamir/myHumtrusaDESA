package com.humtrusa.entidades;
// Generated 20/03/2020 14:36:48 by Hibernate Tools 3.5.0.Final

import java.util.Date;
import java.util.HashSet;
import java.util.Set;

/**
 * Genusuarios generated by hbm2java
 */
public class Genusuarios implements java.io.Serializable {

	private String codusuario;
	private Genestados genestados;
	private Long codempleado;
	private String nombres;
	private String clave;
	private Long nivel;
	private Date fecharegistro;
	private String usuariocambioestado;
	private Date fechacambioestado;
	private String correo;
	private String usuariocorreo;
	private String clavecorreo;
	private Set genperfileses = new HashSet(0);
	private Set usuariosxagencias = new HashSet(0);

	public Genusuarios() {
	}

	public Genusuarios(String codusuario, String nombres, String clave, Date fecharegistro) {
		this.codusuario = codusuario;
		this.nombres = nombres;
		this.clave = clave;
		this.fecharegistro = fecharegistro;
	}

	public Genusuarios(String codusuario, Genestados genestados, Long codempleado, String nombres, String clave,
			Long nivel, Date fecharegistro, String usuariocambioestado, Date fechacambioestado, String correo,
			String usuariocorreo, String clavecorreo, Set genperfileses, Set usuariosxagencias) {
		this.codusuario = codusuario;
		this.genestados = genestados;
		this.codempleado = codempleado;
		this.nombres = nombres;
		this.clave = clave;
		this.nivel = nivel;
		this.fecharegistro = fecharegistro;
		this.usuariocambioestado = usuariocambioestado;
		this.fechacambioestado = fechacambioestado;
		this.correo = correo;
		this.usuariocorreo = usuariocorreo;
		this.clavecorreo = clavecorreo;
		this.genperfileses = genperfileses;
		this.usuariosxagencias = usuariosxagencias;
	}

	public String getCodusuario() {
		return this.codusuario;
	}

	public void setCodusuario(String codusuario) {
		this.codusuario = codusuario;
	}

	public Genestados getGenestados() {
		return this.genestados;
	}

	public void setGenestados(Genestados genestados) {
		this.genestados = genestados;
	}

	public Long getCodempleado() {
		return this.codempleado;
	}

	public void setCodempleado(Long codempleado) {
		this.codempleado = codempleado;
	}

	public String getNombres() {
		return this.nombres;
	}

	public void setNombres(String nombres) {
		this.nombres = nombres;
	}

	public String getClave() {
		return this.clave;
	}

	public void setClave(String clave) {
		this.clave = clave;
	}

	public Long getNivel() {
		return this.nivel;
	}

	public void setNivel(Long nivel) {
		this.nivel = nivel;
	}

	public Date getFecharegistro() {
		return this.fecharegistro;
	}

	public void setFecharegistro(Date fecharegistro) {
		this.fecharegistro = fecharegistro;
	}

	public String getUsuariocambioestado() {
		return this.usuariocambioestado;
	}

	public void setUsuariocambioestado(String usuariocambioestado) {
		this.usuariocambioestado = usuariocambioestado;
	}

	public Date getFechacambioestado() {
		return this.fechacambioestado;
	}

	public void setFechacambioestado(Date fechacambioestado) {
		this.fechacambioestado = fechacambioestado;
	}

	public String getCorreo() {
		return this.correo;
	}

	public void setCorreo(String correo) {
		this.correo = correo;
	}

	public String getUsuariocorreo() {
		return this.usuariocorreo;
	}

	public void setUsuariocorreo(String usuariocorreo) {
		this.usuariocorreo = usuariocorreo;
	}

	public String getClavecorreo() {
		return this.clavecorreo;
	}

	public void setClavecorreo(String clavecorreo) {
		this.clavecorreo = clavecorreo;
	}

	public Set getGenperfileses() {
		return this.genperfileses;
	}

	public void setGenperfileses(Set genperfileses) {
		this.genperfileses = genperfileses;
	}

	public Set getUsuariosxagencias() {
		return this.usuariosxagencias;
	}

	public void setUsuariosxagencias(Set usuariosxagencias) {
		this.usuariosxagencias = usuariosxagencias;
	}

}
