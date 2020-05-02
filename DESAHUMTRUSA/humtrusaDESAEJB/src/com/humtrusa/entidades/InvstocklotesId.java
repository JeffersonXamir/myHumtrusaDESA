package com.humtrusa.entidades;
// Generated 02/05/2020 8:22:47 by Hibernate Tools 3.5.0.Final

/**
 * InvstocklotesId generated by hbm2java
 */
public class InvstocklotesId implements java.io.Serializable {

	private long codempresa;
	private long codinvlote;
	private long codbodegasxagencia;
	private long codarticulo;

	public InvstocklotesId() {
	}

	public InvstocklotesId(long codempresa, long codinvlote, long codbodegasxagencia, long codarticulo) {
		this.codempresa = codempresa;
		this.codinvlote = codinvlote;
		this.codbodegasxagencia = codbodegasxagencia;
		this.codarticulo = codarticulo;
	}

	public long getCodempresa() {
		return this.codempresa;
	}

	public void setCodempresa(long codempresa) {
		this.codempresa = codempresa;
	}

	public long getCodinvlote() {
		return this.codinvlote;
	}

	public void setCodinvlote(long codinvlote) {
		this.codinvlote = codinvlote;
	}

	public long getCodbodegasxagencia() {
		return this.codbodegasxagencia;
	}

	public void setCodbodegasxagencia(long codbodegasxagencia) {
		this.codbodegasxagencia = codbodegasxagencia;
	}

	public long getCodarticulo() {
		return this.codarticulo;
	}

	public void setCodarticulo(long codarticulo) {
		this.codarticulo = codarticulo;
	}

	public boolean equals(Object other) {
		if ((this == other))
			return true;
		if ((other == null))
			return false;
		if (!(other instanceof InvstocklotesId))
			return false;
		InvstocklotesId castOther = (InvstocklotesId) other;

		return (this.getCodempresa() == castOther.getCodempresa())
				&& (this.getCodinvlote() == castOther.getCodinvlote())
				&& (this.getCodbodegasxagencia() == castOther.getCodbodegasxagencia())
				&& (this.getCodarticulo() == castOther.getCodarticulo());
	}

	public int hashCode() {
		int result = 17;

		result = 37 * result + (int) this.getCodempresa();
		result = 37 * result + (int) this.getCodinvlote();
		result = 37 * result + (int) this.getCodbodegasxagencia();
		result = 37 * result + (int) this.getCodarticulo();
		return result;
	}

}