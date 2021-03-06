package com.humtrusa.servicios;

import java.io.IOException;
import java.util.Date;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletConfig;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import com.humtrusa.General.LocalizadorBean;
import com.humtrusa.beans.BAdministracionGeneralLocal;
import com.humtrusa.entidades.Genagencias;
import com.humtrusa.entidades.Genempresas;
import com.humtrusa.entidades.Genusuarios;

/**
 * Servlet implementation class SIngreso
 */
public class SIngreso extends HttpServlet {
	private static final long serialVersionUID = 1L;
    private LocalizadorBean localizador = null;
    private BAdministracionGeneralLocal beanGeneral;
    /**
     * @see HttpServlet#HttpServlet()
     */
    public SIngreso() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see Servlet#init(ServletConfig)
	 */
	

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		//response.getWriter().append("Served at: ").append(request.getContextPath());
		Procesar(request, response);
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		Procesar(request, response);
	}
	
	
	public void Procesar(HttpServletRequest request, HttpServletResponse response) {
		System.out.println("PROCESAR");
		Genusuarios usuario= null;
		String user = request.getParameter("usuario");
		String codempresa = (request.getParameter("codempresa"));
		String codagencia = (request.getParameter("codagencia"));
		
		System.out.println("llego "+user+" E "+codempresa+" A "+codagencia);
		
		//Obtengo los parametros y seteo la Session
		try {
			//usuario = beanGeneral.obtenerUsuario(user);
			//HttpSession misession= request.getSession(true);
			//misession.setAttribute("sesion",usuario);
			HttpSession ses = request.getSession();
			//request.getSession().setAttribute("session", usuario);
			//ses.setAttribute("session", usuario);
			usuario = (Genusuarios)ses.getAttribute("session");
			
			if(usuario == null)//aqui hago esa validacion 
				response.sendRedirect("/humtrusaDESAWeb/index.jsp");
				
			BeanSeguridad bseguridad = new BeanSeguridad();
			//request.getSession().setAttribute("codempresa", codempresa);
			//request.getSession().setAttribute("codagencia", codagencia);
			//request.setAttribute("recurso", "jefferson ");
			bseguridad.setUsuario(usuario.getCodusuario());
			bseguridad.setPassword(usuario.getClave());
			bseguridad.setEmpresa(codempresa);
			bseguridad.setAgencia(codagencia);
			bseguridad.setNombreUsuario(usuario.getNombres());
			bseguridad.setFechaActual(new Date());
			
			Genagencias agencia = beanGeneral.obtenerAgencia(Long.parseLong(bseguridad.getAgencia()));
			Genempresas empresa = beanGeneral.obtenerEmpresa(agencia);//agencia.getGenempresas();
			
			bseguridad.setNombreAgencia(agencia.getNombre());
			bseguridad.setNombreEmpresa(empresa.getNombre());
			
			bseguridad.setDetallePerfilUsuario(beanGeneral.obtenerDetallePerfilUsuario(usuario.getCodusuario(), Long.parseLong(bseguridad.getEmpresa())));
			
			ses.setAttribute("beanSeguridad", bseguridad);
			
			//RequestDispatcher dispather = request.getRequestDispatcher("vistas/PantallaPrincipal/pantallaLocal.jsp");
			
			//RequestDispatcher dispather = request.getRequestDispatcher("/dashboard.jsp");
			//dispather.forward(request, response);
			
			//estable
			response.sendRedirect("/humtrusaDESAWeb/vistas/Dashboard/dashboard.jsp");
		} catch (Exception e) {
			e.printStackTrace();
		}
		
	} 
	
	public void init() throws ServletException {
		localizador = new LocalizadorBean();
		beanGeneral = (BAdministracionGeneralLocal) localizador.obtenerBean("servidor/BAdministracionGeneral");
	}
}
