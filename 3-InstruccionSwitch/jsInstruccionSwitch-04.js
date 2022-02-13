function mostrar()
{
	let mes;

	mes = document.getElementById("txtIdMes").value;

	switch(mes){
		case "Febrero":
			alert("Tiene 28 días o 29 en año bisiesto");
			break;
		case "Enero":
		case "Marzo":
		case "Mayo":
		case "Julio":								/* O se puede poner en defaul */
		case "Agosto":
		case "Octubre":
		case "Diciembre":
			alert("Este mes tiene 31 dias");
			break;
		case "Abril":
		case "Junio":
		case "Septiembre":
		case "Noviembre":
			alert("Este mes tiene 30 dias");

	}
	
}
	/* Martin Allende
		Switch 4 entregado*/