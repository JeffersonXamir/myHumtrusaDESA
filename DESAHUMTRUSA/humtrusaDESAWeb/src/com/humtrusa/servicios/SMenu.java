package com.humtrusa.servicios;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.humtrusa.General.LocalizadorBean;
import com.humtrusa.beans.BAdministracionGeneralLocal;
import com.humtrusa.beans.BMenu;
import com.humtrusa.beans.BMenuLocal;

/**
 * Servlet implementation class SMenu
 */
public class SMenu extends HttpServlet {
	private static final long serialVersionUID = 1L;
	private LocalizadorBean localizador = null;
    private BMenuLocal beanMenu;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public SMenu() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	public void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		procesar(request,response);
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	public void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		procesar(request,response);
	}
	
	private void procesar(HttpServletRequest request,
			HttpServletResponse response) throws ServletException,IOException{
		System.out.println("LLEGAMOS A MENUUU");
		PrintWriter out = response.getWriter();
		response.setContentType("text/json");
		response.setCharacterEncoding("ISO-8859-1");
		try {
			try { 
			System.out.println("si llego variables menu "+request.getParameter("codempresa")+" "+request.getParameter("codusuario"));
			String cadena = beanMenu.obtenerMenuxPerfiles(Long.parseLong(request.getParameter("codempresa")),request.getParameter("codusuario"));
			System.out.println("devuelve "+cadena);
			out.print("{\"success\":true,\"exito\":true,"+cadena+"}");
			}catch (Exception e) {
				e.printStackTrace();
			}
			
			String cadenaJSON = "{\"success\":true,\"exito\":true ,\"opciones\": [{\"nombreopcion\": \"Inventario\",\"padre\": [{	\"nombrepadre\": \"Articulo\",\"hijos\": [{\"nombrehijo\": \"configuraciones\",\"subhijos\": [{\"nombresubhijo\": \"Precios\"}]}, {\"nombrehijo\": \"Mantenimientos\",\"subhijos\": [{\"nombresubhijo\": \"Mantenimiento de articulos\" }, {\"nombresubhijo\": \"Mantenimiento de Marcas\"}, {\"nombresubhijo\": \"Mantenimiento de Medidas\"}]}]},{\"nombrepadre\": \"Stock\",\"hijos\": [] }]}]}";
			//prueba
			//out.print(cadenaJSON);
			
		} catch (Exception e) {
			e.printStackTrace();
			out.print("{\"success\":true,\"exito\":false ,\"opciones\":[]");
		}
		
		out.flush();
		out.close();
	}
	
	public void init() throws ServletException {
		localizador = new LocalizadorBean();
		beanMenu = (BMenuLocal) localizador.obtenerBean("servidor/BMenu");
	}
}
