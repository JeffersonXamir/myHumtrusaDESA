package com.humtrusa.beans;

import java.util.Date;

import javax.ejb.Stateless;

import org.json.JSONException;

import com.humtrusa.daoext.FacDetalleComprasDAOEXT;
import com.humtrusa.estandarizadores.estandarizador;

/**
 * Session Bean implementation class BAdministracionPedidoCompra
 */
@Stateless
public class BAdministracionPedidoCompra implements BAdministracionPedidoCompraLocal {

    /**
     * Default constructor. 
     */
    public BAdministracionPedidoCompra() {
        // TODO Auto-generated constructor stub
    }
    
    public String guardarPedido(
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
            //detalle pedido
            String detallePedido 
    		) {
    	System.out.println("llegamos al bean");
    	String retorno =""; 
    	FacDetalleComprasDAOEXT daoPed = new FacDetalleComprasDAOEXT();
    	
    	try {
    		retorno = daoPed.guardarPedidoCompra(codEmpresa, codagenciapedido, numerocompra, tipopedido, codestado, tipopago, codproveedor, codusuariocreacion, fechacreacion, descripcion, fecha_requerida, fecha_promesa, subtotal, descuento, porcimpuesto, impuesto, total, detallePedido);
    		System.out.println("llegamoscddd");
    	}catch (Exception e) {
			e.printStackTrace();
		}
    	return retorno;
    }
}
