<%@ page language="java" pageEncoding="ISO-8859-1"%>
<%@ page language="java" import="com.humtrusa.servicios.*" %>

<%

	BeanSeguridad beanSeguridad = null;
	beanSeguridad = (BeanSeguridad) request.getSession().getAttribute("beanSeguridad");
	int tamanoEmpresa = 0;
	int tamanoagencia = 0;
	int tamanousuario = 0; 
	int tamano = 0; 
	
	tamanoEmpresa = beanSeguridad.getNombreEmpresa().length();
	tamanoagencia = beanSeguridad.getNombreAgencia().length();
	tamanousuario = beanSeguridad.getNombreUsuario().length();
	

%>
<style>
	.etiquetaCabecera{font-family:Arial, Helvetica, sans-serif;font-size:11px;font-weight:bold;}
	.textoCabecera{font-family:Arial, Helvetica, sans-serif;font-size:11px;font-style:oblique;}
</style> 
<table width="100%" background="../../imagenes/fondo_titulo.png">
	<tr> 
		<td width="50%">
			<table width="500">
				<tr>
					<td width="11" valign="middle"></td>
					<td width="<%=tamanoEmpresa*14%>" valign="middle">
						<img src="../../imagenes/dashboard/empresa.png"> 
						<label class="etiquetaCabecera">Empresa:</label> <br>
						<label class="textoCabecera"> ${beanSeguridad.nombreEmpresa}</label>
					</td>
					<td width="<%=tamanoagencia*14%>" valign="middle">
						<img src="../../imagenes/dashboard/agencia.png"> 
						<label class="etiquetaCabecera">Agencia:</label> <br>
						<label class="textoCabecera"><%=beanSeguridad.getNombreAgencia()%></label>
					</td>
					<td width="<%=tamanousuario*14%>" valign="middle"><img
						src="../../imagenes/dashboard/cuenta.png"> 
						<label class="etiquetaCabecera">Usuario:</label> <br>
						<label class="textoCabecera"><%=beanSeguridad.getUsuario() %></label>
					</td>
				</tr>
				<!--    
			                <tr>
			                    <td valign="middle"></td>
			                    <td valign="middle">
			                    	<img src="imagenes/house_link.png">
			                        <label class="etiquetaCabecera">Agencia:</label> <label class="textoCabecera">humtrusa sa</label>
			                    </td>
			                </tr>   -->
			</table>
		</td>
		<td align="right" width="60%"><img
			src="../../imagenes/dashboard/logo_humtrusa.png"></td>
	</tr>
</table>