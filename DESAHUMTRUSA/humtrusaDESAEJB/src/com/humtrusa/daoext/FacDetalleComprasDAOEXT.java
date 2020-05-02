package com.humtrusa.daoext;

import java.util.Date;

import org.hibernate.Query;
import org.hibernate.Session;
import org.hibernate.Transaction;
import org.json.*;

import com.humtrusa.Sessionfactory.HibernateSessionFactory;
import com.humtrusa.beans.BAdministracionGeneral;
import com.humtrusa.entidades.FacDetalleCompras;
import com.humtrusa.entidades.FacDetalleComprasId;
import com.humtrusa.entidades.FacOrdenesCompra;
import com.humtrusa.entidades.FacOrdenesCompraHome;
import com.humtrusa.entidades.FacOrdenesCompraId;
import com.humtrusa.entidades.Genarticulos;
import com.humtrusa.entidades.Genestados;
import com.humtrusa.entidades.Genproveedores;
import com.humtrusa.entidades.Gentipopagos;
import com.humtrusa.entidades.Genunidadesmedida;
import com.humtrusa.entidades.Genusuarios;

public class FacDetalleComprasDAOEXT {
	
	public String guardarPedidoCompra(
			long codEmpresa,
            long codagenciapedido,
            String numerocompra,
            long tipopedido,
            long codestado,
            long tipopago,
            long codproveedor,
            String codusuariocreacion,
            Date fechacreacion,
            String descripcion,
            Date fecha_requerida,
            Date fecha_promesa,
            double subtotal,
            double descuento,
            double porcimpuesto,
            double impuesto,
            double total,
            String detallePedido) {
		
		Session ses = HibernateSessionFactory.getSession(); 
		Query query = null;
		Transaction tx = null;
		String retorno ="";
		System.out.println("llegamos a dao"); 
		try {
			
				/**
				 * Guardo Cabecera
				 */
				tx = ses.beginTransaction();
				tx.begin();
				long idCompra = this.obtenerUlltimoPedido(codEmpresa);
				Genestados estado = new GenestadosDAOEXT().obtenerEstado(codestado);
				Genproveedores proveedor = new GenProveedoresDAOEXT().obtenerProveedor(codproveedor, codEmpresa);
				Genusuarios usuario = new BAdministracionGeneral().obtenerUsuario(codusuariocreacion); 
				Gentipopagos gtipopago = new GentipopagosDAOEXT().obtenerTipoPago(tipopago);
				
				FacOrdenesCompraId idpedido = new FacOrdenesCompraId();
				FacOrdenesCompra pedido = new FacOrdenesCompra();
				idpedido.setCodagenciapedido(codagenciapedido);
				idpedido.setIdOrdencompra(idCompra);
				
				pedido.setId(idpedido);
				pedido.setNumerocompra("000001");
				pedido.setTipopedido(tipopedido);
				pedido.setGenestados(estado);
				pedido.setGentipopagos(gtipopago);
				pedido.setGenproveedores(proveedor);
				pedido.setGenusuariosByCodusuariocreacion(usuario);
				pedido.setFechacreacion(fechacreacion);
				pedido.setDescripcion(descripcion);
				pedido.setFechaRequerida(fecha_requerida);
				pedido.setFechaPromesa(fecha_promesa);
				pedido.setSubtotal(subtotal);
				pedido.setDescuento(descuento);
				pedido.setPorcimpuesto(porcimpuesto);
				pedido.setImpuesto(impuesto);
				pedido.setTotal(total);
				ses.save(pedido);
				/**
				 * Guardo Detalles
				 */
				FacDetalleComprasId iddetpedido = new FacDetalleComprasId();
				FacDetalleCompras detpedido = new FacDetalleCompras();
				
				/**
				 * RECORRO DETALLES JSON
				 */
				try {
					JSONObject jsondet = new JSONObject(detallePedido);
					JSONArray array = jsondet.getJSONArray("data");
					JSONObject obj = null;
					long secuencial = 0;
					Genarticulos genart = null;
					Genunidadesmedida gmed =null;
					GenArticulosDAOEXT daoart = new GenArticulosDAOEXT();
					GenunidadesmedidaDAOEXT daomed = new GenunidadesmedidaDAOEXT();
					secuencial = 1l;
					
					for (int i = 0; i < array.length(); i++) {
						obj = (JSONObject) array.get(i);
						
						iddetpedido.setCodagenciapedido(idpedido.getCodagenciapedido());
						iddetpedido.setIdOrdencompra(idpedido.getIdOrdencompra());
						iddetpedido.setSecuencial(secuencial);
						detpedido.setId(iddetpedido);
						
						/**
						 *   codarticulo;
				             codunidadmedidabase;
				             codunidadmedida;
				             codprecio;
				             cantidad;
				             cantidadrecibida;
				             cantidaddevuelta;
				             precio;
				             subtotal;
				             descuento;
				             porcdescuento;
				             impuesto;
				             porcimpuesto;
				             total;
				             esbono;
				             verificado
				             {data:[{"codalterno":"ALCH_ATS","descripcion":"ALCOHOL ANTISEPTICO","unidad":"LITRO(S)","cantsolicitada":"8",
				             "cantrecibida":"0.00","precio":"0.8500","subtotal":"6.80","porciva":"0.12","iva":"0.8160","porcdescuento":"0.0000",
				             "codarticulo":"2","descuento":"0.0000","total":"7.6160"}]}
					 
						 */
						genart = null;
						genart = daoart.obtenerArticulo(codEmpresa, obj.getLong("codarticulo"));
						detpedido.setGenarticulos(genart);
						
						gmed = null;
						gmed = daomed.obtenerUnidadMedida(( obj.getString("unidad")));
						detpedido.setGenunidadesmedidaByCodunidadmedida(gmed);
						
						gmed = null;
						gmed = daomed.obtenerUnidadMedida(( obj.getString("unidad")));
						detpedido.setGenunidadesmedidaByCodunidadmedidabase(gmed);
						
						detpedido.setCantidad(obj.getDouble("cantsolicitada"));
						detpedido.setCantidadrecibida(obj.getDouble("cantrecibida"));
						detpedido.setCantidaddevuelta(0d);
						detpedido.setPrecio(obj.getDouble("precio"));
						detpedido.setSubtotal(obj.getDouble("subtotal"));
						detpedido.setDescuento(obj.getDouble("descuento"));
						detpedido.setPorcdescuento(obj.getDouble("porcdescuento"));
						detpedido.setImpuesto(obj.getDouble("iva"));
						detpedido.setPorcimpuesto(obj.getDouble("porciva"));
						detpedido.setTotal(obj.getDouble("total"));
						ses.save(detpedido);
						secuencial++;
					}

				} catch (Exception e) {
					e.printStackTrace();
					tx.rollback();
					throw new Exception("Error al Detallar el Pedido");
				}
	
		
		tx.commit();
		retorno = "EXITO AL GUARDAR REGISTRO";
		} catch (Exception e) {
			e.printStackTrace();
			if(tx.isActive()) {
				tx.rollback();
			}
			return "{\"success\":\"true\",\"exito\":true,\"mensaje\":\""+e.getMessage()+"\"}";
		}
		
		return  "{\"success\":\"true\",\"exito\":true,\"mensaje\":\""+retorno+"\"}";
	}
	
	public long obtenerUlltimoPedido(long codempresa) {
		Session ses = HibernateSessionFactory.getSession();
		Query query = null;
		long id = 0;
		try {
			query = ses.createQuery("select IFNULL(max(oc.id.idOrdencompra),0)+1 from FacOrdenesCompra oc where oc.genagencias.genempresas = "+codempresa+" ");
			id = Long.parseLong( query.uniqueResult().toString());
		} catch (Exception e) {
			e.printStackTrace();
		}
	
		return id;
	}
	
	public Genestados obtenerEstado(long codestado) {
		Session ses = HibernateSessionFactory.getSession();
		Query query = null;
		Genestados obj = null;
		try {
			query = ses.createQuery("from Genestados g where g.codestado = "+codestado+" ");
			obj = (Genestados) query.uniqueResult();
		} catch (Exception e) {
			e.printStackTrace();
		}
	
		return obj;
	}
}
