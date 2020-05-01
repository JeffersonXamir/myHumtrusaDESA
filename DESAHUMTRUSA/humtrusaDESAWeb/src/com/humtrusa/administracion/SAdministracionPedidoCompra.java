package com.humtrusa.administracion;

import java.io.IOException;
import java.io.PrintWriter;

import javax.naming.Context;
import javax.naming.InitialContext;
import javax.naming.NamingException;
import javax.servlet.ServletConfig;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.humtrusa.beans.BAdministracionArticulosLocal;
import com.humtrusa.beans.BAdministracionPedidoCompraLocal;
import com.humtrusa.enumRecursos.EnumPedidoCompra;
import com.humtrusa.enumRecursos.EnumRecursosArticulos;
import com.humtrusa.enumRecursos.EnumRecursosGenerales;

/**
 * Servlet implementation class SAdministracionPedidoCompra
 */
public class SAdministracionPedidoCompra extends HttpServlet {
	private static final long serialVersionUID = 1L;
	BAdministracionPedidoCompraLocal bpedido = null;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public SAdministracionPedidoCompra() {
        super();
        // TODO Auto-generated constructor stub
    }

	
	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		procesar(request,response);
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		procesar(request,response);
	}
	
	private void procesar(HttpServletRequest request,
			HttpServletResponse response)throws ServletException, IOException{
		//response.setContentType("text/xml");
		response.setCharacterEncoding("ISO-8859-1");
		PrintWriter out = response.getWriter();
		System.out.println("orden "+request.getParameter("orden"));
		EnumPedidoCompra enumOrdenes = EnumPedidoCompra.valueOf(request.getParameter("orden"));
		
		switch(enumOrdenes){
			
			case GUARDAR_PEDIDO: 
				//response.setContentType("text/xml");
				//out.print(listarArticulosPedido(request));
				break;
				
			default:
				break;
				
		}
		
		out.flush();
		out.close();
	}
	
	/**
	 * @see Servlet#init(ServletConfig)
	 */
	public void init() throws ServletException {
		Context context;
		try {
			context = new InitialContext();
			this.bpedido = (BAdministracionPedidoCompraLocal) context.lookup(EnumRecursosGenerales.BPEDIDOCOMPRA.getRecurso());
		}catch (NamingException e) {
			e.printStackTrace();
		}
	}

}
