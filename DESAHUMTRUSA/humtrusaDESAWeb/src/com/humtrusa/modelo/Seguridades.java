package com.humtrusa.modelo;

import java.io.Serializable;
import java.util.List;

public class Seguridades implements Serializable{
	private String nombresUsuario = "";
	private String apellidosUsuario = "";
	private String loginUsuario = "";

	private long nivelUsuario = 0L;
	private long codigoPerfil = 0L;
	private String descripcionPerfil = "";

	private String nombreEmpresa = "";
	private String nombreAgencia = "";
	private String urlLogotipoEmpresa = "";
	private long codigoEmpresa = 0L;
	private long codigoAgencia = 0L;

	private boolean puedeAbrir = false;
	private boolean puedeModificar = false;
	private boolean puedeEliminar = false;
	private boolean puedeGuardar = false;
	List<String> permisosOpcion = null;

	private long minutosBloqueo = 10L;
	private int registrosPorPagina = 20;

	public List<String> getPermisosOpcion() {
	  return this.permisosOpcion;
	}
	public void setPermisosOpcion(List<String> permisosOpcion) {
	  this.permisosOpcion = permisosOpcion;
	}
	public String getUrlLogotipoEmpresa() {
	  return this.urlLogotipoEmpresa;
	}
	public void setUrlLogotipoEmpresa(String urlLogotipoEmpresa) {
	  this.urlLogotipoEmpresa = urlLogotipoEmpresa;
	}

	public String getNombresUsuario() {
	  return this.nombresUsuario;
	}
	public void setNombresUsuario(String nombresUsuario) {
	  this.nombresUsuario = nombresUsuario;
	}
	public String getApellidosUsuario() {
	  return this.apellidosUsuario;
	}
	public void setApellidosUsuario(String apellidosUsuario) {
	  this.apellidosUsuario = apellidosUsuario;
	}
	public String getLoginUsuario() {
	  return this.loginUsuario;
	}
	public void setLoginUsuario(String loginUsuario) {
	  this.loginUsuario = loginUsuario;
	}
	public long getCodigoPerfil() {
	  return this.codigoPerfil;
	}
	public void setCodigoPerfil(long codigoPerfil) {
	  this.codigoPerfil = codigoPerfil;
	}
	public String getDescripcionPerfil() {
	  return this.descripcionPerfil;
	}
	public void setDescripcionPerfil(String descripcionPerfil) {
	  this.descripcionPerfil = descripcionPerfil;
	}
	public String getNombreEmpresa() {
	  return this.nombreEmpresa;
	}
	public void setNombreEmpresa(String nombreEmpresa) {
	  this.nombreEmpresa = nombreEmpresa;
	}
	public String getNombreAgencia() {
	  return this.nombreAgencia;
	}
	public void setNombreAgencia(String nombreAgencia) {
	  this.nombreAgencia = nombreAgencia;
	}
	public long getCodigoEmpresa() {
	  return this.codigoEmpresa;
	}
	public void setCodigoEmpresa(long codigoEmpresa) {
	  this.codigoEmpresa = codigoEmpresa;
	}
	public long getCodigoAgencia() {
	  return this.codigoAgencia;
	}
	public void setCodigoAgencia(long codigoAgencia) {
	  this.codigoAgencia = codigoAgencia;
	}
	public boolean isPuedeAbrir() {
	  return this.puedeAbrir;
	}
	public void setPuedeAbrir(boolean puedeAbrir) {
	  this.puedeAbrir = puedeAbrir;
	}
	public boolean isPuedeModificar() {
	  return this.puedeModificar;
	}
	public void setPuedeModificar(boolean puedeModificar) {
	  this.puedeModificar = puedeModificar;
	}
	public boolean isPuedeEliminar() {
	  return this.puedeEliminar;
	}
	public void setPuedeEliminar(boolean puedeEliminar) {
	  this.puedeEliminar = puedeEliminar;
	}
	public boolean isPuedeGuardar() {
	  return this.puedeGuardar;
	}
	public void setPuedeGuardar(boolean puedeGuardar) {
	  this.puedeGuardar = puedeGuardar;
	}
	public long getMinutosBloqueo() {
	  return this.minutosBloqueo;
	}
	public void setMinutosBloqueo(long minutosBloqueo) {
	  this.minutosBloqueo = minutosBloqueo;
	}
	public int getRegistrosPorPagina() {
	  return this.registrosPorPagina;
	}
	public void setRegistrosPorPagina(int registrosPorPagina) {
	  this.registrosPorPagina = registrosPorPagina;
	}
	public long getNivelUsuario() {
		return nivelUsuario;
	}
	public void setNivelUsuario(long nivelUsuario) {
		this.nivelUsuario = nivelUsuario;
	}

}
