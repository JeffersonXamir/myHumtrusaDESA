package com.humtrusa.servicios;

import java.io.IOException;
import javax.servlet.ServletConfig;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import com.humtrusa.enumRecursos.EnumRecursosGenerales;

/**
 * Servlet implementation class SSalida
 */
public class SSalida extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public SSalida() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see Servlet#init(ServletConfig)
	 */
	public void init() throws ServletException {
		// TODO Auto-generated method stub
	}

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	public void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		//Aqui se deben remover todos los objetos guardados en la sesion
		HttpSession sesion = request.getSession();
		sesion.removeAttribute("session");
		sesion.removeAttribute("beanSeguridad");
		
		// AQUI MATO LAS SESSIONES
		sesion.removeAttribute(EnumRecursosGenerales.MODELO_SEGURIDADES.getRecurso());
		sesion.removeAttribute(EnumRecursosGenerales.MODELO_VISTAS.getRecurso());
		
		sesion.invalidate();
			
		response.sendRedirect("/humtrusaDESAWeb/index.jsp");
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	public void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		doGet(request, response);
	}

}
