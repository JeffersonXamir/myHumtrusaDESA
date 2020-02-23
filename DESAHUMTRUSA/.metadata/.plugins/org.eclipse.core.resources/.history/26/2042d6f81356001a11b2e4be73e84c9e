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
import javax.swing.text.AbstractDocument.Content;

import com.humtrusa.beans.BAdministracionGeneralLocal;
import com.humtrusa.beans.BAdministracionProveedoresLocal;
import com.humtrusa.enumRecursos.EnumRecursosGenerales;
import com.humtrusa.enumRecursos.EnumRecursosProveedores;
import com.humtrusa.estandarizadores.estandarizador;



/**
 * Servlet implementation class SAdministracionProveedores
 */
public class SAdministracionProveedores extends HttpServlet {
	private static final long serialVersionUID = 1L;
    BAdministracionProveedoresLocal beanProveedores;
    /**
     * @see HttpServlet#HttpServlet()
     */
    public SAdministracionProveedores() {
        super();
        // TODO Auto-generated constructor stub
    }

	

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
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
	
	public String listarProveedoresxFiltros(HttpServletRequest request){
		System.out.println("listarprovededores");
		String identificacion = (request.getParameter("identificacion")!=null && !request.getParameter("identificacion").replace(" ","").equals(""))?request.getParameter("identificacion"):null;
		String tipoidentificacion = (request.getParameter("tipoidentificacion")!=null && !request.getParameter("tipoidentificacion").replace(" ","").equals(""))?request.getParameter("tipoidentificacion"):null;
		long codempresa = (request.getParameter("codempresa")!=null && !request.getParameter("codempresa").replace(" ","").equals(""))?Long.parseLong(request.getParameter("codempresa")):0l;
				
		return beanProveedores.listarProveedoresxFiltros(identificacion,tipoidentificacion,codempresa);
	}
	
	public String mantenimientoProveedores(HttpServletRequest request) {
		System.out.println("mantenimientoProveedores");
		
		long codEmpresa = Long.parseLong(request.getParameter("codEmpresa"));
		String codProveedor = request.getParameter("codProveedor");
		String nombres = request.getParameter("nombres");
		String apellidos = request.getParameter("apellidos");
		String tipoidentificacion = request.getParameter("tipoidentificacion");
		String identificacion = request.getParameter("identificacion");
		String estransportista = request.getParameter("estransportista");
		String direccion = request.getParameter("direccion");
		String telefonofijo1 = request.getParameter("telefonofijo1");
		String telefonofijo2 = request.getParameter("telefonofijo2");
		String celular = request.getParameter("celular");
		String fax = request.getParameter("fax");
		String email = request.getParameter("email");
		System.out.println("antes "+request.getParameter("fechaValidez"));
		Date fechaValidez = estandarizador.obtenerFecha(request.getParameter("fechaValidez"), "dd/MM/yyyy");
		System.out.println("fecha "+fechaValidez);
		String modo = request.getParameter("modo");
		
		return beanProveedores.mantenimientoProveedores(codEmpresa,Long.parseLong(codProveedor),nombres,apellidos,tipoidentificacion,identificacion,estransportista,direccion,telefonofijo1,telefonofijo2
														,celular,fax,email,fechaValidez,modo);
	}
	
	public String obtenerProveedor(HttpServletRequest request)throws ServletException, IOException{
		String codProveedor = request.getParameter("codproveedor");
		String codEmpresa = !request.getParameter("codempresa").equals("")?request.getParameter("codempresa"):"1";
		
		return beanProveedores.obtenerProveedor(Long.parseLong(codProveedor), Long.parseLong(codEmpresa));
		
	}
	
	public String eliminarProveedor(HttpServletRequest request)throws ServletException, IOException{
		System.out.println("empre "+request.getParameter("codempresa"));
		String codProveedor = request.getParameter("codproveedor");
		String codEmpresa = !"".equals(request.getParameter("codempresa"))?request.getParameter("codempresa"):"1";
		
		return beanProveedores.eliminarProveedor(Long.parseLong(codProveedor), Long.parseLong(codEmpresa));
		
	}
	
	private void procesar(HttpServletRequest request,
			HttpServletResponse response)throws ServletException, IOException{
		//response.setContentType("text/xml");
		response.setCharacterEncoding("ISO-8859-1");
		PrintWriter out = response.getWriter();
		System.out.println("orden "+request.getParameter("orden"));
		EnumRecursosProveedores enumOrdenes = EnumRecursosProveedores.valueOf(request.getParameter("orden"));
		
		switch(enumOrdenes){
			
			case LISTAR_PROVEEDORES_X_FILTROS:
				//response.setContentType("text/xml");
				out.print(listarProveedoresxFiltros(request));
				break;
				
			case MANTENIMIENTO_PROVEEDORES:
				out.print(mantenimientoProveedores(request));
				break;
				
			case OBTENER_PROVEEDOR:
				out.print(obtenerProveedor(request));
				break;
			case ELIMINAR_PROVEEDOR:
				out.print(eliminarProveedor(request));
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
			this.beanProveedores = (BAdministracionProveedoresLocal) context.lookup("servidor/BAdministracionProveedores");
		}catch (NamingException e) {
			e.printStackTrace();
		}
	}
}
