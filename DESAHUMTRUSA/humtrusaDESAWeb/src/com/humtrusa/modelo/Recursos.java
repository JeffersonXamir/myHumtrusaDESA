package com.humtrusa.modelo;

import java.io.Serializable;

public class Recursos implements Serializable {
	public static final int TIPO_SCRIPT = 1;
	public static final int TIPO_RECURSO = 2;
	private int tipoRecurso = 1;
	private String url = "";

	public Recursos(int tipoRecurso, String url) {
	  setTipoRecurso(tipoRecurso);
	  setUrl(url);
	}

	public int getTipoRecurso() {
	  return this.tipoRecurso;
	}
	public void setTipoRecurso(int tipoRecurso) {
	  this.tipoRecurso = tipoRecurso;
	}
	public String getUrl() {
	  return this.url;
	}
	public void setUrl(String url) {
	  this.url = url;
	}
}
