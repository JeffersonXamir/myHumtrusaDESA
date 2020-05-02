package com.humtrusa.administracion;

import java.io.IOException;
import java.io.PrintWriter;
import java.util.Date;

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
import com.humtrusa.estandarizadores.estandarizador;

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
	
	public String guardarPedido(HttpServletRequest request) {
		
		String codEmpresa = request.getParameter("codEmpresa");
        String codagenciapedido = request.getParameter("codagenciapedido");
        String numerocompra= request.getParameter("numerocompra");
        String tipopedido= request.getParameter("tipopedido");
        String codestado= request.getParameter("codestado");
        String tipopago= request.getParameter("tipopago");
        String codproveedor= request.getParameter("codproveedor");
        String codusuariocreacion= request.getParameter("codusuariocreacion");
        Date fechacreacion= estandarizador.obtenerFecha(request.getParameter("fechacreacion"));
        String descripcion= request.getParameter("descripcion");
        Date fecha_requerida= estandarizador.obtenerFecha(request.getParameter("fecha_requerida"));
        Date fecha_promesa= estandarizador.obtenerFecha(request.getParameter("fecha_promesa"));
        double subtotal= Double.parseDouble(request.getParameter("subtotal"));
        double descuento= Double.parseDouble(request.getParameter("descuento"));
        double porcimpuesto= Double.parseDouble(request.getParameter("porcimpuesto"));
        double impuesto= Double.parseDouble(request.getParameter("impuesto"));
        double total = Double.parseDouble(request.getParameter("total"));
        //Detalle Pedido
        String detallePedido= request.getParameter("detallePedido");
        String retorno = "";
		try {
			retorno = bpedido.guardarPedido(
        						Long.parseLong(codEmpresa),
        						Long.parseLong(codagenciapedido),
        						numerocompra,
        						Long.parseLong(tipopedido),
        						Long.parseLong(codestado),
        						Long.parseLong(tipopago),
        						Long.parseLong(codproveedor),
        						codusuariocreacion,
        						fechacreacion,
        						descripcion,
        						fecha_requerida,
        						fecha_promesa,
        						subtotal,
        						descuento,
        						porcimpuesto,
        						impuesto,
        						total,
        						detallePedido
        		);
		}catch (Exception e) {
			e.printStackTrace();
			e.getMessage();
		}
		return retorno;
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
				out.print(guardarPedido(request));
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
