package com.humtrusa.estandarizadores;

import java.sql.Timestamp;
import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.Date;
import java.util.GregorianCalendar;

public class estandarizador {
	public static final String CABECERA_XML = "<?xml version='1.0' encoding='ISO-8859-1'?>";
	
	public static final String estandarizarCadena(String cadena)
	  {
	   cadena = cadena != null ? cadena : "";
	    return "<![CDATA[" + cadena + "]]>";
	   }
	
	public static final Date obtenerFecha(String fecha, String formato)
	   {
				DateFormat dt = new SimpleDateFormat(formato);
	/*     */     try
	/*     */     {
	/*  28 */       return dt.parse(fecha); } catch (Exception e) {
	/*     */     }
	/*  30 */     return dt.getCalendar().getTime();
	/*     */   }
	/*     */ 
	/*     */   public static final Date obtenerFecha(String fecha)
	/*     */   {
	/*  40 */     DateFormat dt = new SimpleDateFormat("MM/dd/yy");
	/*     */     try
	/*     */     {
	/*  43 */       return dt.parse(fecha); } catch (Exception e) {
	/*     */     }
	/*  45 */     return dt.getCalendar().getTime();
	/*     */   }
	/*     */ 
	/*     */   public static final String obtenerFechaComoCadena(Date fecha)
	/*     */   {
	/*  55 */     DateFormat dt = new SimpleDateFormat("MM/dd/yy");
	/*     */ 
	/*  57 */     return dt.format(fecha);
	/*     */   }
	/*     */ 
	/*     */   public static final String obtenerFechaComoCadena(Date fecha, String modo)
	/*     */   {
	/*  68 */     DateFormat dt = new SimpleDateFormat(modo);
	/*  69 */     return dt.format(fecha);
	/*     */   }
	/*     */ 
	/*     */   public static final Date obtenerFechaHoy()
	/*     */   {
	/*  77 */     Calendar cal = GregorianCalendar.getInstance();
	/*  78 */     return cal.getTime();
	/*     */   }
	/*     */ 
	/*     */   public static final Date obtenerDateTime(Date fechaAntigua, int hora, int minuto, int segundo, int milisegundo)
	/*     */   {
	/*  98 */     Calendar cal = GregorianCalendar.getInstance();
	/*  99 */     Calendar calAnt = GregorianCalendar.getInstance();
	/* 100 */     calAnt.setTime(fechaAntigua);
	/*     */ 
	/* 102 */     cal.set(6, calAnt.get(6));
	/* 103 */     cal.set(2, calAnt.get(2));
	/* 104 */     cal.set(1, calAnt.get(1));
	/* 105 */     cal.set(10, hora);
	/* 106 */     cal.set(12, minuto);
				cal.set(13, segundo);
				cal.set(14, milisegundo);
	 
	Timestamp fechaFinal = new Timestamp(cal.getTimeInMillis());
	return fechaFinal;
	  }
}
