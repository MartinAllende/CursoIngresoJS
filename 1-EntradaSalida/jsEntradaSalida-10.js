/*
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
/*{
	let importe;
	let resultado;
	 
	importe = document.getElementById("txtIdImporte").value;
	resultado = importe * 0.75;

    document.getElementById("txtIdResultado").value = resultado;
	
}
   /* Martin Allende
      Ejercicio 10
	  Entregado */
	  

	/* {	
		
		let importe;

		let resultado;

		let descuentoParcial;

		let descuentoParcial2;

		let descuentoFinal;

		descuentoParcial = prompt("ingrese el descuento");

		descuentoParcial2 = parseInt(descuentoParcial) / 100;

		importe = document.getElementById("txtIdImporte").value;

		descuentoFinal = importe * parseFloat(descuentoParcial2);

		resultado = importe - descuentoFinal;
	
		document.getElementById("txtIdResultado").value = resultado;
	
	}

	/* Martin Allende
	   Ejercicio E/S 10Bis1 
	   entregado */

	{
		let importe;

		let resultado;

		let descuentoParcial;

		let descuentoParcial2;

		let descuentoFinal;

		let nombreProducto;

		let textoFinal;

		descuentoParcial = prompt("ingrese el descuento");

		descuentoParcial2 = parseInt(descuentoParcial) / 100;

		importe = document.getElementById("txtIdImporte").value;

		descuentoFinal = importe * parseFloat(descuentoParcial2);

		nombreProducto = prompt("ingrese nombre de producto")

		resultado = importe - descuentoFinal;

		textoFinal = "usted compro " + nombreProducto + " con " + descuentoParcial + "% de descuento, el precio final es " + resultado
	
		document.getElementById("txtIdResultado").value = textoFinal;


	}

	/* Martin Allende
	   Ejercicio E/S 10Bis2 
	   entregado*/
	