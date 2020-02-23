package com.humtrusa.entidades;
// Generated 23/02/2020 2:47:59 by Hibernate Tools 3.5.0.Final

/**
 * GenciudadesId generated by hbm2java
 */
public class GenciudadesId implements java.io.Serializable {

	private long codciudad;
	private long codpais;
	private long codprovincia;

	public GenciudadesId() {
	}

	public GenciudadesId(long codciudad, long codpais, long codprovincia) {
		this.codciudad = codciudad;
		this.codpais = codpais;
		this.codprovincia = codprovincia;
	}

	public long getCodciudad() {
		return this.codciudad;
	}

	public void setCodciudad(long codciudad) {
		this.codciudad = codciudad;
	}

	public long getCodpais() {
		return this.codpais;
	}

	public void setCodpais(long codpais) {
		this.codpais = codpais;
	}

	public long getCodprovincia() {
		return this.codprovincia;
	}

	public void setCodprovincia(long codprovincia) {
		this.codprovincia = codprovincia;
	}

	public boolean equals(Object other) {
		if ((this == other))
			return true;
		if ((other == null))
			return false;
		if (!(other instanceof GenciudadesId))
			return false;
		GenciudadesId castOther = (GenciudadesId) other;

		return (this.getCodciudad() == castOther.getCodciudad()) && (this.getCodpais() == castOther.getCodpais())
				&& (this.getCodprovincia() == castOther.getCodprovincia());
	}

	public int hashCode() {
		int result = 17;

		result = 37 * result + (int) this.getCodciudad();
		result = 37 * result + (int) this.getCodpais();
		result = 37 * result + (int) this.getCodprovincia();
		return result;
	}

}