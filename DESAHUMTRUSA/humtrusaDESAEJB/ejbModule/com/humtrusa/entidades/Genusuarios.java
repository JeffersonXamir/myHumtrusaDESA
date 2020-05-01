package com.humtrusa.entidades;
// Generated 30/04/2020 17:56:07 by Hibernate Tools 3.5.0.Final

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
	private Set genarticulosesForUsuariomodificacion = new HashSet(0);
	private Set genbodegases = new HashSet(0);
	private Set genperfileses = new HashSet(0);
	private Set genarticulosesForCodusuario = new HashSet(0);
	private Set genmarcases = new HashSet(0);
	private Set facOrdenesComprasForUsuariocambioestado = new HashSet(0);
	private Set facOrdenesComprasForCodusuariocreacion = new HashSet(0);
	private Set facOrdenesComprasForUsuariomodificacion = new HashSet(0);
	private Set genarticulosxempresas = new HashSet(0);
	private Set gensublineasdoses = new HashSet(0);
	private Set genlineases = new HashSet(0);
	private Set gensublineases = new HashSet(0);
	private Set bodegasxagenciases = new HashSet(0);
	private Set genparametroses = new HashSet(0);
	private Set genunidadesmedidasForUsuariocambioestado = new HashSet(0);
	private Set genunidadesmedidasForUsuariocreacion = new HashSet(0);
	private Set invMovimientoses = new HashSet(0);
	private Set invstockloteses = new HashSet(0);
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
			String usuariocorreo, String clavecorreo, Set genarticulosesForUsuariomodificacion, Set genbodegases,
			Set genperfileses, Set genarticulosesForCodusuario, Set genmarcases,
			Set facOrdenesComprasForUsuariocambioestado, Set facOrdenesComprasForCodusuariocreacion,
			Set facOrdenesComprasForUsuariomodificacion, Set genarticulosxempresas, Set gensublineasdoses,
			Set genlineases, Set gensublineases, Set bodegasxagenciases, Set genparametroses,
			Set genunidadesmedidasForUsuariocambioestado, Set genunidadesmedidasForUsuariocreacion,
			Set invMovimientoses, Set invstockloteses, Set usuariosxagencias) {
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
		this.genarticulosesForUsuariomodificacion = genarticulosesForUsuariomodificacion;
		this.genbodegases = genbodegases;
		this.genperfileses = genperfileses;
		this.genarticulosesForCodusuario = genarticulosesForCodusuario;
		this.genmarcases = genmarcases;
		this.facOrdenesComprasForUsuariocambioestado = facOrdenesComprasForUsuariocambioestado;
		this.facOrdenesComprasForCodusuariocreacion = facOrdenesComprasForCodusuariocreacion;
		this.facOrdenesComprasForUsuariomodificacion = facOrdenesComprasForUsuariomodificacion;
		this.genarticulosxempresas = genarticulosxempresas;
		this.gensublineasdoses = gensublineasdoses;
		this.genlineases = genlineases;
		this.gensublineases = gensublineases;
		this.bodegasxagenciases = bodegasxagenciases;
		this.genparametroses = genparametroses;
		this.genunidadesmedidasForUsuariocambioestado = genunidadesmedidasForUsuariocambioestado;
		this.genunidadesmedidasForUsuariocreacion = genunidadesmedidasForUsuariocreacion;
		this.invMovimientoses = invMovimientoses;
		this.invstockloteses = invstockloteses;
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

	public Set getGenarticulosesForUsuariomodificacion() {
		return this.genarticulosesForUsuariomodificacion;
	}

	public void setGenarticulosesForUsuariomodificacion(Set genarticulosesForUsuariomodificacion) {
		this.genarticulosesForUsuariomodificacion = genarticulosesForUsuariomodificacion;
	}

	public Set getGenbodegases() {
		return this.genbodegases;
	}

	public void setGenbodegases(Set genbodegases) {
		this.genbodegases = genbodegases;
	}

	public Set getGenperfileses() {
		return this.genperfileses;
	}

	public void setGenperfileses(Set genperfileses) {
		this.genperfileses = genperfileses;
	}

	public Set getGenarticulosesForCodusuario() {
		return this.genarticulosesForCodusuario;
	}

	public void setGenarticulosesForCodusuario(Set genarticulosesForCodusuario) {
		this.genarticulosesForCodusuario = genarticulosesForCodusuario;
	}

	public Set getGenmarcases() {
		return this.genmarcases;
	}

	public void setGenmarcases(Set genmarcases) {
		this.genmarcases = genmarcases;
	}

	public Set getFacOrdenesComprasForUsuariocambioestado() {
		return this.facOrdenesComprasForUsuariocambioestado;
	}

	public void setFacOrdenesComprasForUsuariocambioestado(Set facOrdenesComprasForUsuariocambioestado) {
		this.facOrdenesComprasForUsuariocambioestado = facOrdenesComprasForUsuariocambioestado;
	}

	public Set getFacOrdenesComprasForCodusuariocreacion() {
		return this.facOrdenesComprasForCodusuariocreacion;
	}

	public void setFacOrdenesComprasForCodusuariocreacion(Set facOrdenesComprasForCodusuariocreacion) {
		this.facOrdenesComprasForCodusuariocreacion = facOrdenesComprasForCodusuariocreacion;
	}

	public Set getFacOrdenesComprasForUsuariomodificacion() {
		return this.facOrdenesComprasForUsuariomodificacion;
	}

	public void setFacOrdenesComprasForUsuariomodificacion(Set facOrdenesComprasForUsuariomodificacion) {
		this.facOrdenesComprasForUsuariomodificacion = facOrdenesComprasForUsuariomodificacion;
	}

	public Set getGenarticulosxempresas() {
		return this.genarticulosxempresas;
	}

	public void setGenarticulosxempresas(Set genarticulosxempresas) {
		this.genarticulosxempresas = genarticulosxempresas;
	}

	public Set getGensublineasdoses() {
		return this.gensublineasdoses;
	}

	public void setGensublineasdoses(Set gensublineasdoses) {
		this.gensublineasdoses = gensublineasdoses;
	}

	public Set getGenlineases() {
		return this.genlineases;
	}

	public void setGenlineases(Set genlineases) {
		this.genlineases = genlineases;
	}

	public Set getGensublineases() {
		return this.gensublineases;
	}

	public void setGensublineases(Set gensublineases) {
		this.gensublineases = gensublineases;
	}

	public Set getBodegasxagenciases() {
		return this.bodegasxagenciases;
	}

	public void setBodegasxagenciases(Set bodegasxagenciases) {
		this.bodegasxagenciases = bodegasxagenciases;
	}

	public Set getGenparametroses() {
		return this.genparametroses;
	}

	public void setGenparametroses(Set genparametroses) {
		this.genparametroses = genparametroses;
	}

	public Set getGenunidadesmedidasForUsuariocambioestado() {
		return this.genunidadesmedidasForUsuariocambioestado;
	}

	public void setGenunidadesmedidasForUsuariocambioestado(Set genunidadesmedidasForUsuariocambioestado) {
		this.genunidadesmedidasForUsuariocambioestado = genunidadesmedidasForUsuariocambioestado;
	}

	public Set getGenunidadesmedidasForUsuariocreacion() {
		return this.genunidadesmedidasForUsuariocreacion;
	}

	public void setGenunidadesmedidasForUsuariocreacion(Set genunidadesmedidasForUsuariocreacion) {
		this.genunidadesmedidasForUsuariocreacion = genunidadesmedidasForUsuariocreacion;
	}

	public Set getInvMovimientoses() {
		return this.invMovimientoses;
	}

	public void setInvMovimientoses(Set invMovimientoses) {
		this.invMovimientoses = invMovimientoses;
	}

	public Set getInvstockloteses() {
		return this.invstockloteses;
	}

	public void setInvstockloteses(Set invstockloteses) {
		this.invstockloteses = invstockloteses;
	}

	public Set getUsuariosxagencias() {
		return this.usuariosxagencias;
	}

	public void setUsuariosxagencias(Set usuariosxagencias) {
		this.usuariosxagencias = usuariosxagencias;
	}

}
