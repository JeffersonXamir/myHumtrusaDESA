package com.humtrusa.modelo;

import java.util.ArrayList;
import java.util.List;

import javax.servlet.http.HttpServletRequest;

import org.apache.commons.lang.StringUtils;
import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

import com.humtrusa.General.LocalizadorBean;
import com.humtrusa.beans.BAdministracionGeneralLocal;
import com.humtrusa.entidades.Genagencias;
import com.humtrusa.entidades.Genempresas;
import com.humtrusa.enumRecursos.EnumRecursosGenerales;
import com.humtrusa.servicios.BeanSeguridad;
import com.humtrusa.servicios.ControladorVistas;

public class UtilidadesControladorVistas {
	 public static LocalizadorBean localizador = null;	
	
public static final List<Recursos> obtenerRecursosAdicionales(String recursos){
		System.out.println(recursos);
		System.out.println(recursos.replace("*", "\""));
		recursos = recursos.replace("*", "\"");
		List<Recursos> recursosAdicionales = new ArrayList<Recursos>();
		
		try {
			JSONArray listaRecursos = new JSONArray(recursos);
			
			for(int i=0;i<listaRecursos.length();i++){
				JSONObject recurso = listaRecursos.getJSONObject(i);
				int tipo = Recursos.TIPO_RECURSO;
				
				if(!StringUtils.isBlank(recurso.getString("tipo"))){
					tipo = (recurso.getString("tipo").equalsIgnoreCase("S"))?Recursos.TIPO_SCRIPT:Recursos.TIPO_RECURSO;
				}
				
				recursosAdicionales.add(new Recursos(tipo,recurso.getString("url")));
			}
			
		} catch (JSONException e) {
			e.printStackTrace();
			System.out.println("No se declararon recursos adicionales, se envia el miembro vacio");
		}
		
		return recursosAdicionales;
		
	}
	
	/**
	 * Obtiene el bean de seguridades asociado
	 * @param request
	 * @return
	 */
	public static final Seguridades obtenerModeloSeguridad(HttpServletRequest request){
		BeanSeguridad beanSeguridad = (BeanSeguridad) request.getSession().getAttribute("beanSeguridad");
		
		Seguridades modeloSeguridad = new Seguridades();//(Seguridades)request.getSession().getAttribute(EnumRecursosGenerales.MODELO_SEGURIDADES.getRecurso());
		modeloSeguridad.setNombresUsuario(beanSeguridad.getNombreUsuario());
		modeloSeguridad.setApellidosUsuario("");
		modeloSeguridad.setLoginUsuario(beanSeguridad.getUsuario());
		
		BAdministracionGeneralLocal bgeneral;
		localizador= new LocalizadorBean(); 
		bgeneral = (BAdministracionGeneralLocal)localizador.obtenerBean("servidor/BAdministracionGeneral");
		
		modeloSeguridad.setNivelUsuario(0l);
		modeloSeguridad.setCodigoPerfil(Long.parseLong(bgeneral.obtenerPerfilUsuarioPorEmpresa(Long.parseLong(beanSeguridad.getEmpresa()), beanSeguridad.getUsuario())));
		modeloSeguridad.setDescripcionPerfil(bgeneral.obtenerDetallePerfilUsuario(beanSeguridad.getUsuario(), Long.parseLong(beanSeguridad.getEmpresa())));
		
		Genagencias agencia = bgeneral.obtenerAgencia(Long.parseLong(beanSeguridad.getAgencia()));
		Genempresas empresa = bgeneral.obtenerEmpresa(agencia);//agencia.getGenempresas();
	
		modeloSeguridad.setNombreAgencia(agencia.getNombre());
		modeloSeguridad.setNombreEmpresa(empresa.getNombre());
		modeloSeguridad.setCodigoEmpresa(empresa.getCodempresa());
		modeloSeguridad.setCodigoAgencia(agencia.getCodagencia());
		
		modeloSeguridad.setRegistrosPorPagina(20); 
		return modeloSeguridad;
	}
	
	/**
	 * Obtiene el bean de la vista asociado
	 * @param request
	 * @return
	 */
	public static final Vistas obtenerModeloVista(HttpServletRequest request){
		Vistas beanVista = new Vistas();
		
		String codigoOpcion = (!StringUtils.isEmpty(request.getParameter(ControladorVistas.OPCION))?request.getParameter(ControladorVistas.OPCION):"");
		String codigoMantenimientoDinamico = (!StringUtils.isEmpty(request.getParameter(ControladorVistas.CODIGO_MANTENIMIENTO_DINAMICO))?request.getParameter(ControladorVistas.CODIGO_MANTENIMIENTO_DINAMICO):"0");
		String nombreEntidad = (!StringUtils.isEmpty(request.getParameter(ControladorVistas.NOMBRE_ENTIDAD))?request.getParameter(ControladorVistas.NOMBRE_ENTIDAD):"");
		String tituloPagina = (!StringUtils.isEmpty(request.getParameter(ControladorVistas.TITULO_PAGINA)))?request.getParameter(ControladorVistas.TITULO_PAGINA):"";
		String tituloPanel = (!StringUtils.isEmpty(request.getParameter(ControladorVistas.TITULO_PANEL)))?request.getParameter(ControladorVistas.TITULO_PANEL):"";
		String descripcionPagina = (!StringUtils.isEmpty(request.getParameter(ControladorVistas.DESCRIPCION_PAGINA)))?request.getParameter(ControladorVistas.DESCRIPCION_PAGINA):"";
		System.out.println("lsrecurso "+request.getParameter(ControladorVistas.RECURSOS_ADICIONALES));
		List<Recursos>lsRecursos = obtenerRecursosAdicionales(request.getParameter(ControladorVistas.RECURSOS_ADICIONALES));
		int anchoPanelFiltro = (!StringUtils.isEmpty(request.getParameter(ControladorVistas.ANCHO_PANEL_FILTRO)))?Integer.valueOf(request.getParameter(ControladorVistas.ANCHO_PANEL_FILTRO)):300;
		 
		beanVista.setOpcion(codigoOpcion);
		beanVista.setCodigoMantenimientoDinamico(codigoMantenimientoDinamico);
		beanVista.setNombreEntidad(nombreEntidad);
		beanVista.setAnchoSeccionFiltros(anchoPanelFiltro);
		beanVista.setListaRecursos(lsRecursos);
		beanVista.setDescripcionPagina(descripcionPagina);
		beanVista.setTituloPanel(tituloPanel);
		beanVista.setTituloVista(tituloPagina);
		
		return beanVista;
	}
}
