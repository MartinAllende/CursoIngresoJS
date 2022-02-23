function mostrar()
{
	
	let cont = 0;
	let acum = 0;
	let numero = 0;
	let respuesta ;

	
	while(respuesta != "No"){
		cont = cont + 1;
		acum = acum + numero;
		numero = parseInt(prompt("ingrese numero " + cont ));
		respuesta = prompt("¿Quiere seguir?, responda con Si o No")
	}
		document.getElementById("txtIdSuma").value = acum;
		document.getElementById("txtIdPromedio").value = acum/cont;

}	/*entregado*/