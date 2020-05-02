package com.humtrusa.daoext;

import java.util.List;

import org.hibernate.Session;
import org.json.JSONException;
import org.json.JSONObject;

import com.humtrusa.Sessionfactory.HibernateSessionFactory;
import com.humtrusa.entidades.Alumnos;

public class AlumnoDAOEXT {
	
	public static void main(String[] args) {
		String cadena = "{\"nombre\":\"jeffer\"}";
		try {
			JSONObject g = new JSONObject(cadena);
			System.out.println(g.get("nombre"));
		} catch (JSONException e) {
			e.printStackTrace();
		}
	}
	
	public List<Alumnos> obtenerAlumnos(String nombres, String apellidos, long Codestado){
		List<Alumnos> lisalumno = null;
		try {
		Session ses = HibernateSessionFactory.getSession();
		lisalumno = ses.createQuery(" from Alumnos ").list();
		
		}catch (Exception e) {
			e.printStackTrace();
		}
		return lisalumno;
	}
	
	public static void teamo() {
		String valor ="";
		for (int i = 0; i < 1000; i++) {
			valor += "te amo ";
		}
		System.out.println("EVELYNG <3 "+valor);
	}
}
