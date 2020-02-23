package com.humtrusa.administracion;

import java.io.IOException;


import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import com.etech.servicios.general.LocalizadorRecursos;
import com.humtrusa.beans.BAdministracionGeneralLocal; 
import com.humtrusa.enumRecursos.EnumRecursosGenerales;
import java.io.PrintWriter;
//import com.humtrusa.enumRecursos.EnumRecursosGenerales;
//import com.humtrusa.beans.BAdministracionGeneralLocal;

/**
 * Servlet implementation class SAdministracionGeneral
 */

public class SAdministracionGeneral extends HttpServlet {
	private static final long serialVersionUID = 1L;
	private BAdministracionGeneralLocal beanGeneral;
	private LocalizadorRecursos localizador;
    /**
     * @see HttpServlet#HttpServlet()
     */
    public SAdministracionGeneral() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see Servlet#init(ServletConfig)
	 */
	/*public void init(ServletConfig config) throws ServletException {
		System.out.println("init");
		// TODO Auto-generated method stub
	}*/

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */

	public String listarAlumnos(HttpServletRequest request){
		System.out.println("listarAlumnos");
		String nombres = (request.getParameter("nombres")!=null && !request.getParameter("nombres").replace(" ","").equals(""))?request.getParameter("nombres"):null;
		String apellidos = (request.getParameter("apellidos")!=null && !request.getParameter("apellidos").replace(" ","").equals(""))?request.getParameter("apellidos"):null;
		long codigoEstado = (request.getParameter("codigoEstado")!=null && !request.getParameter("codigoEstado").replace(" ","").equals(""))?Long.parseLong(request.getParameter("codigoEstado")):0l;
				
		return beanGeneral.obtenerVendedores(nombres,apellidos,codigoEstado);
	}
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		//response.getWriter().append("Served at: ").append(request.getContextPath());
		procesar(request,response);
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		//doGet(request, response);
		procesar(request,response);
	}
	
	private void procesar(HttpServletRequest request,
			HttpServletResponse response)throws ServletException, IOException{
		//response.setContentType("text/xml");
		response.setCharacterEncoding("ISO-8859-1");
		PrintWriter out = response.getWriter();
		
		EnumRecursosGenerales enumOrdenes = EnumRecursosGenerales.valueOf(request.getParameter("orden"));
		
		switch(enumOrdenes){
			
			case LISTAR_ALUMNOS_FILTROS:
				//response.setContentType("text/xml");
				System.out.println("xx holaaaaaaaaaaaaaaaaaaaaa");
				out.print(listarAlumnos(request));
				break;
				
			
		}
		
		out.flush();
		out.close();
	}
	
	public void init() throws ServletException {
		System.out.println("puta holaaaaaaaaaaaaaaaaaaaaa");
		localizador = new LocalizadorRecursos();
		//beanGeneral = (BAdministracionGeneralLocal)localizador.obtenerBean(EnumRecursos.BADMINISTRACION_VENDEDORES);
		beanGeneral =(BAdministracionGeneralLocal)localizador.obtenerBean("servidor/BAdministracionGeneral");
	}
}
