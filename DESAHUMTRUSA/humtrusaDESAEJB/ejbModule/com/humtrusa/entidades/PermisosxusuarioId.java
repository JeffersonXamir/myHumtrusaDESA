package com.humtrusa.entidades;
// Generated 30/04/2020 17:56:07 by Hibernate Tools 3.5.0.Final

/**
 * PermisosxusuarioId generated by hbm2java
 */
public class PermisosxusuarioId implements java.io.Serializable {

	private Long codpermisousuario;
	private Long codopcion;
	private Long usuariosxagencia;
	private String puedeabrir;
	private String puedeagregar;
	private String puedemodificar;
	private String puedeeliminar;

	public PermisosxusuarioId() {
	}

	public PermisosxusuarioId(Long codpermisousuario, Long codopcion, Long usuariosxagencia, String puedeabrir,
			String puedeagregar, String puedemodificar, String puedeeliminar) {
		this.codpermisousuario = codpermisousuario;
		this.codopcion = codopcion;
		this.usuariosxagencia = usuariosxagencia;
		this.puedeabrir = puedeabrir;
		this.puedeagregar = puedeagregar;
		this.puedemodificar = puedemodificar;
		this.puedeeliminar = puedeeliminar;
	}

	public Long getCodpermisousuario() {
		return this.codpermisousuario;
	}

	public void setCodpermisousuario(Long codpermisousuario) {
		this.codpermisousuario = codpermisousuario;
	}

	public Long getCodopcion() {
		return this.codopcion;
	}

	public void setCodopcion(Long codopcion) {
		this.codopcion = codopcion;
	}

	public Long getUsuariosxagencia() {
		return this.usuariosxagencia;
	}

	public void setUsuariosxagencia(Long usuariosxagencia) {
		this.usuariosxagencia = usuariosxagencia;
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

	public boolean equals(Object other) {
		if ((this == other))
			return true;
		if ((other == null))
			return false;
		if (!(other instanceof PermisosxusuarioId))
			return false;
		PermisosxusuarioId castOther = (PermisosxusuarioId) other;

		return ((this.getCodpermisousuario() == castOther.getCodpermisousuario())
				|| (this.getCodpermisousuario() != null && castOther.getCodpermisousuario() != null
						&& this.getCodpermisousuario().equals(castOther.getCodpermisousuario())))
				&& ((this.getCodopcion() == castOther.getCodopcion()) || (this.getCodopcion() != null
						&& castOther.getCodopcion() != null && this.getCodopcion().equals(castOther.getCodopcion())))
				&& ((this.getUsuariosxagencia() == castOther.getUsuariosxagencia())
						|| (this.getUsuariosxagencia() != null && castOther.getUsuariosxagencia() != null
								&& this.getUsuariosxagencia().equals(castOther.getUsuariosxagencia())))
				&& ((this.getPuedeabrir() == castOther.getPuedeabrir()) || (this.getPuedeabrir() != null
						&& castOther.getPuedeabrir() != null && this.getPuedeabrir().equals(castOther.getPuedeabrir())))
				&& ((this.getPuedeagregar() == castOther.getPuedeagregar())
						|| (this.getPuedeagregar() != null && castOther.getPuedeagregar() != null
								&& this.getPuedeagregar().equals(castOther.getPuedeagregar())))
				&& ((this.getPuedemodificar() == castOther.getPuedemodificar())
						|| (this.getPuedemodificar() != null && castOther.getPuedemodificar() != null
								&& this.getPuedemodificar().equals(castOther.getPuedemodificar())))
				&& ((this.getPuedeeliminar() == castOther.getPuedeeliminar())
						|| (this.getPuedeeliminar() != null && castOther.getPuedeeliminar() != null
								&& this.getPuedeeliminar().equals(castOther.getPuedeeliminar())));
	}

	public int hashCode() {
		int result = 17;

		result = 37 * result + (getCodpermisousuario() == null ? 0 : this.getCodpermisousuario().hashCode());
		result = 37 * result + (getCodopcion() == null ? 0 : this.getCodopcion().hashCode());
		result = 37 * result + (getUsuariosxagencia() == null ? 0 : this.getUsuariosxagencia().hashCode());
		result = 37 * result + (getPuedeabrir() == null ? 0 : this.getPuedeabrir().hashCode());
		result = 37 * result + (getPuedeagregar() == null ? 0 : this.getPuedeagregar().hashCode());
		result = 37 * result + (getPuedemodificar() == null ? 0 : this.getPuedemodificar().hashCode());
		result = 37 * result + (getPuedeeliminar() == null ? 0 : this.getPuedeeliminar().hashCode());
		return result;
	}

}
