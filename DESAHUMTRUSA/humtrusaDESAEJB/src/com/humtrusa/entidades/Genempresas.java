package com.humtrusa.entidades;
// Generated 02/05/2020 8:22:47 by Hibernate Tools 3.5.0.Final

import java.util.Date;
import java.util.HashSet;
import java.util.Set;

/**
 * Genempresas generated by hbm2java
 */
public class Genempresas implements java.io.Serializable {

	private Long codempresa;
	private Genpaises genpaises;
	private String nombre;
	private String gerente;
	private String ruccontador;
	private String tipoidreplegal;
	private String idreplegal;
	private String codusuario;
	private Date fecha;
	private String hostcorreo;
	private String rucempresa;
	private Long tipoidempresa;
	private String escontribuyenteespecial;
	private String numresolucion;
	private Long lineagrupoempresarial;
	private Set genparametroses = new HashSet(0);
	private Set genarticulosxempresas = new HashSet(0);
	private Set genperfileses = new HashSet(0);
	private Set genmarcases = new HashSet(0);
	private Set gensublineasdoses = new HashSet(0);
	private Set genagenciases = new HashSet(0);
	private Set invstockloteses = new HashSet(0);
	private Set gensublineases = new HashSet(0);
	private Set genlineases = new HashSet(0);

	public Genempresas() {
	}

	public Genempresas(Genpaises genpaises, String nombre, String gerente, String ruccontador, String tipoidreplegal,
			String idreplegal, String codusuario, Date fecha, String hostcorreo, String rucempresa, Long tipoidempresa,
			String escontribuyenteespecial, String numresolucion, Long lineagrupoempresarial, Set genparametroses,
			Set genarticulosxempresas, Set genperfileses, Set genmarcases, Set gensublineasdoses, Set genagenciases,
			Set invstockloteses, Set gensublineases, Set genlineases) {
		this.genpaises = genpaises;
		this.nombre = nombre;
		this.gerente = gerente;
		this.ruccontador = ruccontador;
		this.tipoidreplegal = tipoidreplegal;
		this.idreplegal = idreplegal;
		this.codusuario = codusuario;
		this.fecha = fecha;
		this.hostcorreo = hostcorreo;
		this.rucempresa = rucempresa;
		this.tipoidempresa = tipoidempresa;
		this.escontribuyenteespecial = escontribuyenteespecial;
		this.numresolucion = numresolucion;
		this.lineagrupoempresarial = lineagrupoempresarial;
		this.genparametroses = genparametroses;
		this.genarticulosxempresas = genarticulosxempresas;
		this.genperfileses = genperfileses;
		this.genmarcases = genmarcases;
		this.gensublineasdoses = gensublineasdoses;
		this.genagenciases = genagenciases;
		this.invstockloteses = invstockloteses;
		this.gensublineases = gensublineases;
		this.genlineases = genlineases;
	}

	public Long getCodempresa() {
		return this.codempresa;
	}

	public void setCodempresa(Long codempresa) {
		this.codempresa = codempresa;
	}

	public Genpaises getGenpaises() {
		return this.genpaises;
	}

	public void setGenpaises(Genpaises genpaises) {
		this.genpaises = genpaises;
	}

	public String getNombre() {
		return this.nombre;
	}

	public void setNombre(String nombre) {
		this.nombre = nombre;
	}

	public String getGerente() {
		return this.gerente;
	}

	public void setGerente(String gerente) {
		this.gerente = gerente;
	}

	public String getRuccontador() {
		return this.ruccontador;
	}

	public void setRuccontador(String ruccontador) {
		this.ruccontador = ruccontador;
	}

	public String getTipoidreplegal() {
		return this.tipoidreplegal;
	}

	public void setTipoidreplegal(String tipoidreplegal) {
		this.tipoidreplegal = tipoidreplegal;
	}

	public String getIdreplegal() {
		return this.idreplegal;
	}

	public void setIdreplegal(String idreplegal) {
		this.idreplegal = idreplegal;
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

	public String getHostcorreo() {
		return this.hostcorreo;
	}

	public void setHostcorreo(String hostcorreo) {
		this.hostcorreo = hostcorreo;
	}

	public String getRucempresa() {
		return this.rucempresa;
	}

	public void setRucempresa(String rucempresa) {
		this.rucempresa = rucempresa;
	}

	public Long getTipoidempresa() {
		return this.tipoidempresa;
	}

	public void setTipoidempresa(Long tipoidempresa) {
		this.tipoidempresa = tipoidempresa;
	}

	public String getEscontribuyenteespecial() {
		return this.escontribuyenteespecial;
	}

	public void setEscontribuyenteespecial(String escontribuyenteespecial) {
		this.escontribuyenteespecial = escontribuyenteespecial;
	}

	public String getNumresolucion() {
		return this.numresolucion;
	}

	public void setNumresolucion(String numresolucion) {
		this.numresolucion = numresolucion;
	}

	public Long getLineagrupoempresarial() {
		return this.lineagrupoempresarial;
	}

	public void setLineagrupoempresarial(Long lineagrupoempresarial) {
		this.lineagrupoempresarial = lineagrupoempresarial;
	}

	public Set getGenparametroses() {
		return this.genparametroses;
	}

	public void setGenparametroses(Set genparametroses) {
		this.genparametroses = genparametroses;
	}

	public Set getGenarticulosxempresas() {
		return this.genarticulosxempresas;
	}

	public void setGenarticulosxempresas(Set genarticulosxempresas) {
		this.genarticulosxempresas = genarticulosxempresas;
	}

	public Set getGenperfileses() {
		return this.genperfileses;
	}

	public void setGenperfileses(Set genperfileses) {
		this.genperfileses = genperfileses;
	}

	public Set getGenmarcases() {
		return this.genmarcases;
	}

	public void setGenmarcases(Set genmarcases) {
		this.genmarcases = genmarcases;
	}

	public Set getGensublineasdoses() {
		return this.gensublineasdoses;
	}

	public void setGensublineasdoses(Set gensublineasdoses) {
		this.gensublineasdoses = gensublineasdoses;
	}

	public Set getGenagenciases() {
		return this.genagenciases;
	}

	public void setGenagenciases(Set genagenciases) {
		this.genagenciases = genagenciases;
	}

	public Set getInvstockloteses() {
		return this.invstockloteses;
	}

	public void setInvstockloteses(Set invstockloteses) {
		this.invstockloteses = invstockloteses;
	}

	public Set getGensublineases() {
		return this.gensublineases;
	}

	public void setGensublineases(Set gensublineases) {
		this.gensublineases = gensublineases;
	}

	public Set getGenlineases() {
		return this.genlineases;
	}

	public void setGenlineases(Set genlineases) {
		this.genlineases = genlineases;
	}

}
