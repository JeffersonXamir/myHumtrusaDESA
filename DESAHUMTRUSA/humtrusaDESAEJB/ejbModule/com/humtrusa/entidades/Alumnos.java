package com.humtrusa.entidades;
// Generated 04/03/2020 18:22:17 by Hibernate Tools 3.5.0.Final

import java.util.Date;
import java.util.HashSet;
import java.util.Set;

/**
 * Alumnos generated by hbm2java
 */
public class Alumnos implements java.io.Serializable {

	private Long idAlumno;
	private String nombres;
	private String apellidos;
	private String cedula;
	private Date fechaNacimiento;
	private String estado;
	private Set calificacioneses = new HashSet(0);
	private Set calificacioneses_1 = new HashSet(0);

	public Alumnos() {
	}

	public Alumnos(String cedula) {
		this.cedula = cedula;
	}

	public Alumnos(String nombres, String apellidos, String cedula, Date fechaNacimiento, String estado,
			Set calificacioneses, Set calificacioneses_1) {
		this.nombres = nombres;
		this.apellidos = apellidos;
		this.cedula = cedula;
		this.fechaNacimiento = fechaNacimiento;
		this.estado = estado;
		this.calificacioneses = calificacioneses;
		this.calificacioneses_1 = calificacioneses_1;
	}

	public Long getIdAlumno() {
		return this.idAlumno;
	}

	public void setIdAlumno(Long idAlumno) {
		this.idAlumno = idAlumno;
	}

	public String getNombres() {
		return this.nombres;
	}

	public void setNombres(String nombres) {
		this.nombres = nombres;
	}

	public String getApellidos() {
		return this.apellidos;
	}

	public void setApellidos(String apellidos) {
		this.apellidos = apellidos;
	}

	public String getCedula() {
		return this.cedula;
	}

	public void setCedula(String cedula) {
		this.cedula = cedula;
	}

	public Date getFechaNacimiento() {
		return this.fechaNacimiento;
	}

	public void setFechaNacimiento(Date fechaNacimiento) {
		this.fechaNacimiento = fechaNacimiento;
	}

	public String getEstado() {
		return this.estado;
	}

	public void setEstado(String estado) {
		this.estado = estado;
	}

	public Set getCalificacioneses() {
		return this.calificacioneses;
	}

	public void setCalificacioneses(Set calificacioneses) {
		this.calificacioneses = calificacioneses;
	}

	public Set getCalificacioneses_1() {
		return this.calificacioneses_1;
	}

	public void setCalificacioneses_1(Set calificacioneses_1) {
		this.calificacioneses_1 = calificacioneses_1;
	}

}
