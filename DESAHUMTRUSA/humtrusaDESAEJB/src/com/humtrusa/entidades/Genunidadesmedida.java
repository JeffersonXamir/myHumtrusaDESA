package com.humtrusa.entidades;
// Generated 02/05/2020 8:22:47 by Hibernate Tools 3.5.0.Final

import java.util.Date;
import java.util.HashSet;
import java.util.Set;

/**
 * Genunidadesmedida generated by hbm2java
 */
public class Genunidadesmedida implements java.io.Serializable {

	private String codunidadmedida;
	private Genestados genestados;
	private Genusuarios genusuariosByUsuariocreacion;
	private Genusuarios genusuariosByUsuariocambioestado;
	private String descripcion;
	private Double valorminimo;
	private String esunidadminima;
	private Date fechacreacion;
	private Date fechacambioestado;
	private Set genarticulosesForCodunidadesmedida = new HashSet(0);
	private Set genarticulosesForCodunidadproveedor = new HashSet(0);
	private Set facDetalleComprasesForCodunidadmedidabase = new HashSet(0);
	private Set facDetalleComprasesForCodunidadmedida = new HashSet(0);
	private Set genarticulosesForCodunidadpresentacion = new HashSet(0);

	public Genunidadesmedida() {
	}

	public Genunidadesmedida(String codunidadmedida) {
		this.codunidadmedida = codunidadmedida;
	}

	public Genunidadesmedida(String codunidadmedida, Genestados genestados, Genusuarios genusuariosByUsuariocreacion,
			Genusuarios genusuariosByUsuariocambioestado, String descripcion, Double valorminimo, String esunidadminima,
			Date fechacreacion, Date fechacambioestado, Set genarticulosesForCodunidadesmedida,
			Set genarticulosesForCodunidadproveedor, Set facDetalleComprasesForCodunidadmedidabase,
			Set facDetalleComprasesForCodunidadmedida, Set genarticulosesForCodunidadpresentacion) {
		this.codunidadmedida = codunidadmedida;
		this.genestados = genestados;
		this.genusuariosByUsuariocreacion = genusuariosByUsuariocreacion;
		this.genusuariosByUsuariocambioestado = genusuariosByUsuariocambioestado;
		this.descripcion = descripcion;
		this.valorminimo = valorminimo;
		this.esunidadminima = esunidadminima;
		this.fechacreacion = fechacreacion;
		this.fechacambioestado = fechacambioestado;
		this.genarticulosesForCodunidadesmedida = genarticulosesForCodunidadesmedida;
		this.genarticulosesForCodunidadproveedor = genarticulosesForCodunidadproveedor;
		this.facDetalleComprasesForCodunidadmedidabase = facDetalleComprasesForCodunidadmedidabase;
		this.facDetalleComprasesForCodunidadmedida = facDetalleComprasesForCodunidadmedida;
		this.genarticulosesForCodunidadpresentacion = genarticulosesForCodunidadpresentacion;
	}

	public String getCodunidadmedida() {
		return this.codunidadmedida;
	}

	public void setCodunidadmedida(String codunidadmedida) {
		this.codunidadmedida = codunidadmedida;
	}

	public Genestados getGenestados() {
		return this.genestados;
	}

	public void setGenestados(Genestados genestados) {
		this.genestados = genestados;
	}

	public Genusuarios getGenusuariosByUsuariocreacion() {
		return this.genusuariosByUsuariocreacion;
	}

	public void setGenusuariosByUsuariocreacion(Genusuarios genusuariosByUsuariocreacion) {
		this.genusuariosByUsuariocreacion = genusuariosByUsuariocreacion;
	}

	public Genusuarios getGenusuariosByUsuariocambioestado() {
		return this.genusuariosByUsuariocambioestado;
	}

	public void setGenusuariosByUsuariocambioestado(Genusuarios genusuariosByUsuariocambioestado) {
		this.genusuariosByUsuariocambioestado = genusuariosByUsuariocambioestado;
	}

	public String getDescripcion() {
		return this.descripcion;
	}

	public void setDescripcion(String descripcion) {
		this.descripcion = descripcion;
	}

	public Double getValorminimo() {
		return this.valorminimo;
	}

	public void setValorminimo(Double valorminimo) {
		this.valorminimo = valorminimo;
	}

	public String getEsunidadminima() {
		return this.esunidadminima;
	}

	public void setEsunidadminima(String esunidadminima) {
		this.esunidadminima = esunidadminima;
	}

	public Date getFechacreacion() {
		return this.fechacreacion;
	}

	public void setFechacreacion(Date fechacreacion) {
		this.fechacreacion = fechacreacion;
	}

	public Date getFechacambioestado() {
		return this.fechacambioestado;
	}

	public void setFechacambioestado(Date fechacambioestado) {
		this.fechacambioestado = fechacambioestado;
	}

	public Set getGenarticulosesForCodunidadesmedida() {
		return this.genarticulosesForCodunidadesmedida;
	}

	public void setGenarticulosesForCodunidadesmedida(Set genarticulosesForCodunidadesmedida) {
		this.genarticulosesForCodunidadesmedida = genarticulosesForCodunidadesmedida;
	}

	public Set getGenarticulosesForCodunidadproveedor() {
		return this.genarticulosesForCodunidadproveedor;
	}

	public void setGenarticulosesForCodunidadproveedor(Set genarticulosesForCodunidadproveedor) {
		this.genarticulosesForCodunidadproveedor = genarticulosesForCodunidadproveedor;
	}

	public Set getFacDetalleComprasesForCodunidadmedidabase() {
		return this.facDetalleComprasesForCodunidadmedidabase;
	}

	public void setFacDetalleComprasesForCodunidadmedidabase(Set facDetalleComprasesForCodunidadmedidabase) {
		this.facDetalleComprasesForCodunidadmedidabase = facDetalleComprasesForCodunidadmedidabase;
	}

	public Set getFacDetalleComprasesForCodunidadmedida() {
		return this.facDetalleComprasesForCodunidadmedida;
	}

	public void setFacDetalleComprasesForCodunidadmedida(Set facDetalleComprasesForCodunidadmedida) {
		this.facDetalleComprasesForCodunidadmedida = facDetalleComprasesForCodunidadmedida;
	}

	public Set getGenarticulosesForCodunidadpresentacion() {
		return this.genarticulosesForCodunidadpresentacion;
	}

	public void setGenarticulosesForCodunidadpresentacion(Set genarticulosesForCodunidadpresentacion) {
		this.genarticulosesForCodunidadpresentacion = genarticulosesForCodunidadpresentacion;
	}

}