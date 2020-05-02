package com.humtrusa.entidades;
// Generated 02/05/2020 8:22:47 by Hibernate Tools 3.5.0.Final

/**
 * Permisosxperfil generated by hbm2java
 */
public class Permisosxperfil implements java.io.Serializable {

	private Long codpermisoperfil;
	private Genperfiles genperfiles;
	private Genopciones genopciones;
	private String puedeabrir;
	private String puedeagregar;
	private String puedemodificar;
	private String puedeeliminar;

	public Permisosxperfil() {
	}

	public Permisosxperfil(Genperfiles genperfiles, Genopciones genopciones, String puedeabrir, String puedeagregar,
			String puedemodificar, String puedeeliminar) {
		this.genperfiles = genperfiles;
		this.genopciones = genopciones;
		this.puedeabrir = puedeabrir;
		this.puedeagregar = puedeagregar;
		this.puedemodificar = puedemodificar;
		this.puedeeliminar = puedeeliminar;
	}

	public Long getCodpermisoperfil() {
		return this.codpermisoperfil;
	}

	public void setCodpermisoperfil(Long codpermisoperfil) {
		this.codpermisoperfil = codpermisoperfil;
	}

	public Genperfiles getGenperfiles() {
		return this.genperfiles;
	}

	public void setGenperfiles(Genperfiles genperfiles) {
		this.genperfiles = genperfiles;
	}

	public Genopciones getGenopciones() {
		return this.genopciones;
	}

	public void setGenopciones(Genopciones genopciones) {
		this.genopciones = genopciones;
	}

	public String getPuedeabrir() {
		return this.puedeabrir;
	}

	public void setPuedeabrir(String puedeabrir) {
		this.puedeabrir = puedeabrir;
	}

	public String getPuedeagregar() {
		return this.puedeagregar;
	}

	public void setPuedeagregar(String puedeagregar) {
		this.puedeagregar = puedeagregar;
	}

	public String getPuedemodificar() {
		return this.puedemodificar;
	}

	public void setPuedemodificar(String puedemodificar) {
		this.puedemodificar = puedemodificar;
	}

	public String getPuedeeliminar() {
		return this.puedeeliminar;
	}

	public void setPuedeeliminar(String puedeeliminar) {
		this.puedeeliminar = puedeeliminar;
	}

}