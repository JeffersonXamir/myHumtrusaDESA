package com.humtrusa.servicios;

import java.io.IOException;
import java.io.PrintWriter;
import java.util.ArrayList;
import java.util.List;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletConfig;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.json.JSONException;
import org.json.JSONObject;

import com.humtrusa.General.LocalizadorBean;
import com.humtrusa.beans.BAdministracionGeneral;
import com.humtrusa.beans.BAdministracionGeneralLocal;
import com.humtrusa.enumRecursos.EnumRecursosGenerales;
import com.humtrusa.modelo.Seguridades;
import com.humtrusa.modelo.UtilidadesControladorVistas;
import com.humtrusa.modelo.Vistas;

/**
 * Servlet implementation class ControladorVistas
 */
public class ControladorVistas extends HttpServlet {
	private static final long serialVersionUID = 1L;
	private LocalizadorBean localizador = null;
	private BAdministracionGeneralLocal beanModeloSeguridad;
	public static final String OPCION = "opcion";
	public static final String CODIGO_MANTENIMIENTO_DINAMICO = "codigo_mantenimiento_dinamico";
	public static final String NOMBRE_ENTIDAD = "nombre_entidad";
	public static final String TITULO_PAGINA = "titulo_pagina";
	public static final String TITULO_PANEL = "titulo_panel";
	public static final String DESCRIPCION_PAGINA = "descripcion_pagina";
	public static final String ANCHO_PANEL_FILTRO = "ancho_panel_filtro";
	public static final String RECURSOS_ADICIONALES = "recursos_adicionales";
	//public static final String URL_VISTA = "../vistas/PantallaPrincipal/PantallaPrincipal.jsp";
	public static final String URL_VISTA = "/humtrusaDESAWeb/vistas/PantallaPrincipal/pantallaLocal.jsp"; 
	
	public ControladorVistas() {
		super();
	}
	
	//public void destroy() {
	//	super.destroy();
	//}
	
	public void procesar(HttpServletRequest request, HttpServletResponse response)
		throws ServletException, IOException {
		
		
		System.out.println("llegamos a controldor vista "+ request.getParameter("opcion"));
		response.setContentType("text/html");
		PrintWriter out = response.getWriter();
		HttpSession sesion = request.getSession();
		
		Vistas beanVista = UtilidadesControladorVistas.obtenerModeloVista(request);
		
		request.getSession().setAttribute(EnumRecursosGenerales.MODELO_VISTAS.getRecurso(),beanVista); //sesion modelovista
		
		Seguridades modeloSeguridad = UtilidadesControladorVistas.obtenerModeloSeguridad(request);
		BeanSeguridad beanSeguridad = (BeanSeguridad)sesion.getAttribute("beanSeguridad");
		 
		String permisosJSON = beanModeloSeguridad.obtenerPermisos(Long.parseLong(beanVista.getOpcion()),modeloSeguridad.getCodigoPerfil(),Long.parseLong(beanSeguridad.getEmpresa()));
		
		System.out.println("Permisos "+permisosJSON);
	
		modeloSeguridad.setPuedeAbrir(false);
		modeloSeguridad.setPuedeEliminar(false);
		modeloSeguridad.setPuedeGuardar(false);
		modeloSeguridad.setPuedeModificar(false);
		modeloSeguridad.setMinutosBloqueo(30l);
		
		try {
			JSONObject permisosUsuario = new JSONObject(permisosJSON);
			modeloSeguridad.setPuedeAbrir(permisosUsuario.getBoolean("puedeAbrir"));
			modeloSeguridad.setPuedeEliminar(permisosUsuario.getBoolean("puedeEliminar"));
			modeloSeguridad.setPuedeGuardar(permisosUsuario.getBoolean("puedeAgregar"));
			modeloSeguridad.setPuedeModificar(permisosUsuario.getBoolean("puedeModificar"));
		} catch (JSONException e) {
			e.printStackTrace();
		}
		
		//modeloSeguridad.setMinutosBloqueo(beanModeloSeguridad.obtenerMinutosBloqueo(Long.parseLong(beanVista.getOpcion())));
		//modeloSeguridad.setRegistrosPorPagina(beanModeloSeguridad.obtenerCantidadRegistrosPorPagina(modeloSeguridad.getCodigoEmpresa()));
		
		//List<String>permisosOpcion = beanModeloSeguridad.obtenerPermisosEspecialesPorOpcion(modeloSeguridad.getCodigoEmpresa(),modeloSeguridad.getCodigoAgencia(),Long.parseLong(beanVista.getOpcion()),modeloSeguridad.getLoginUsuario());
		//modeloSeguridad.setPermisosOpcion((permisosOpcion!=null)?permisosOpcion:new ArrayList<String>());
		
		request.getSession().setAttribute(EnumRecursosGenerales.MODELO_SEGURIDADES.getRecurso(),modeloSeguridad);
		
		response.sendRedirect("/humtrusaDESAWeb/vistas/PantallaPrincipal/pantallaLocal.jsp");
		/*String destination = "/vistas/PantallaPrincipal/pantallaLocal.jsp"; 
		
		RequestDispatcher rd = getServletContext().getRequestDispatcher(destination);
		rd.forward(request, response);*/
		//RequestDispatcher dispather = request.getRequestDispatcher(URL_VISTA);
		//dispather.forward(request, response);  
		
		out.flush();
		out.close();
	
	}

	
	public void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		procesar(request,response);
	}

	public void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		procesar(request,response);
	}
	
	public void init() throws ServletException {
		try {
		System.out.println("llegamos a controldor vista ");   
		localizador = new LocalizadorBean();
		beanModeloSeguridad = (BAdministracionGeneralLocal)localizador.obtenerBean(EnumRecursosGenerales.BSEGURIDADES.getRecurso());
		}catch(Exception e) {e.printStackTrace();}
	}
}
