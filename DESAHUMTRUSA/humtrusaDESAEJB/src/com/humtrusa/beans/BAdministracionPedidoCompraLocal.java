package com.humtrusa.beans;

import java.util.Date;

import javax.ejb.Remote;

@Remote
public interface BAdministracionPedidoCompraLocal {
	
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
	    		);
}
