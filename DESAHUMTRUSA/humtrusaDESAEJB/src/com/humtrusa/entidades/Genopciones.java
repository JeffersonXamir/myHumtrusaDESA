package com.humtrusa.entidades;
// Generated 02/05/2020 8:22:47 by Hibernate Tools 3.5.0.Final

import java.util.Date;
import java.util.HashSet;
import java.util.Set;

/**
 * Genopciones generated by hbm2java
 */
public class Genopciones implements java.io.Serializable {

	private Long codopcion;
	private Genestados genestados;
	private Genopciones genopciones;
	private String titulo;
	private String descripcion;
	private String codsistema;
	private Character tipoprograma;
	private Character confirmaclave;
	private Long ordenpresentacion;
	private String icono;
	private String href;
	private String usuariocambioestado;
	private Date fechacambioestado;
	private String codusuario;
	private Date fecha;
	private Long minutosbloqueo;
	private String especial;
	private String titulopagina;
	private String titulopanel;
	private String descripcionpagina;
	private Long anchopanelfiltros;
	private Long opciondinamica;
	private Set permisosxperfils = new HashSet(0);
	private Set genrecursoses = new HashSet(0);
	private Set genopcioneses = new HashSet(0);

	public Genopciones() {
	}

	public Genopciones(Genestados genestados, String descripcion, String codusuario, Date fecha) {
		this.genestados = genestados;
		this.descripcion = descripcion;
		this.codusuario = codusuario;
		this.fecha = fecha;
	}

	public Genopciones(Genestados genestados, Genopciones genopciones, String titulo, String descripcion,
			String codsistema, Character tipoprograma, Character confirmaclave, Long ordenpresentacion, String icono,
			String href, String usuariocambioestado, Date fechacambioestado, String codusuario, Date fecha,
			Long minutosbloqueo, String especial, String titulopagina, String titulopanel, String descripcionpagina,
			Long anchopanelfiltros, Long opciondinamica, Set permisosxperfils, Set genrecursoses, Set genopcioneses) {
		this.genestados = genestados;
		this.genopciones = genopciones;
		this.titulo = titulo;
		this.descripcion = descripcion;
		this.codsistema = codsistema;
		this.tipoprograma = tipoprograma;
		this.confirmaclave = confirmaclave;
		this.ordenpresentacion = ordenpresentacion;
		this.icono = icono;
		this.href = href;
		this.usuariocambioestado = usuariocambioestado;
		this.fechacambioestado = fechacambioestado;
		this.codusuario = codusuario;
		this.fecha = fecha;
		this.minutosbloqueo = minutosbloqueo;
		this.especial = especial;
		this.titulopagina = titulopagina;
		this.titulopanel = titulopanel;
		this.descripcionpagina = descripcionpagina;
		this.anchopanelfiltros = anchopanelfiltros;
		this.opciondinamica = opciondinamica;
		this.permisosxperfils = permisosxperfils;
		this.genrecursoses = genrecursoses;
		this.genopcioneses = genopcioneses;
	}

	public Long getCodopcion() {
		return this.codopcion;
	}

	public void setCodopcion(Long codopcion) {
		this.codopcion = codopcion;
	}

	public Genestados getGenestados() {
		return this.genestados;
	}

	public void setGenestados(Genestados genestados) {
		this.genestados = genestados;
	}

	public Genopciones getGenopciones() {
		return this.genopciones;
	}

	public void setGenopciones(Genopciones genopciones) {
		this.genopciones = genopciones;
	}

	public String getTitulo() {
		return this.titulo;
	}

	public void setTitulo(String titulo) {
		this.titulo = titulo;
	}

	public String getDescripcion() {
		return this.descripcion;
	}

	public void setDescripcion(String descripcion) {
		this.descripcion = descripcion;
	}

	public String getCodsistema() {
		return this.codsistema;
	}

	public void setCodsistema(String codsistema) {
		this.codsistema = codsistema;
	}

	public Character getTipoprograma() {
		return this.tipoprograma;
	}

	public void setTipoprograma(Character tipoprograma) {
		this.tipoprograma = tipoprograma;
	}

	public Character getConfirmaclave() {
		return this.confirmaclave;
	}

	public void setConfirmaclave(Character confirmaclave) {
		this.confirmaclave = confirmaclave;
	}

	public Long getOrdenpresentacion() {
		return this.ordenpresentacion;
	}

	public void setOrdenpresentacion(Long ordenpresentacion) {
		this.ordenpresentacion = ordenpresentacion;
	}

	public String getIcono() {
		return this.icono;
	}

	public void setIcono(String icono) {
		this.icono = icono;
	}

	public String getHref() {
		return this.href;
	}

	public void setHref(String href) {
		this.href = href;
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

	public Long getMinutosbloqueo() {
		return this.minutosbloqueo;
	}

	public void setMinutosbloqueo(Long minutosbloqueo) {
		this.minutosbloqueo = minutosbloqueo;
	}

	public String getEspecial() {
		return this.especial;
	}

	public void setEspecial(String especial) {
		this.especial = especial;
	}

	public String getTitulopagina() {
		return this.titulopagina;
	}

	public void setTitulopagina(String titulopagina) {
		this.titulopagina = titulopagina;
	}

	public String getTitulopanel() {
		return this.titulopanel;
	}

	public void setTitulopanel(String titulopanel) {
		this.titulopanel = titulopanel;
	}

	public String getDescripcionpagina() {
		return this.descripcionpagina;
	}

	public void setDescripcionpagina(String descripcionpagina) {
		this.descripcionpagina = descripcionpagina;
	}

	public Long getAnchopanelfiltros() {
		return this.anchopanelfiltros;
	}

	public void setAnchopanelfiltros(Long anchopanelfiltros) {
		this.anchopanelfiltros = anchopanelfiltros;
	}

	public Long getOpciondinamica() {
		return this.opciondinamica;
	}

	public void setOpciondinamica(Long opciondinamica) {
		this.opciondinamica = opciondinamica;
	}

	public Set getPermisosxperfils() {
		return this.permisosxperfils;
	}

	public void setPermisosxperfils(Set permisosxperfils) {
		this.permisosxperfils = permisosxperfils;
	}

	public Set getGenrecursoses() {
		return this.genrecursoses;
	}

	public void setGenrecursoses(Set genrecursoses) {
		this.genrecursoses = genrecursoses;
	}

	public Set getGenopcioneses() {
		return this.genopcioneses;
	}

	public void setGenopcioneses(Set genopcioneses) {
		this.genopcioneses = genopcioneses;
	}

}
