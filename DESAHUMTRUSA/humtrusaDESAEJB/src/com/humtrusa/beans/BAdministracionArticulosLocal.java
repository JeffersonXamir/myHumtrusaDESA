package com.humtrusa.beans;

import javax.ejb.Remote;

@Remote
public interface BAdministracionArticulosLocal {
	
	/**
	 * Obtener Articulo en pedido
	 * @param codempresa
	 * @param codarticulo
	 * @param descripcion
	 * @return
	 */
	public String listarArticuloPedido(long codempresa, long codarticulo,String descripcion);
	
}
