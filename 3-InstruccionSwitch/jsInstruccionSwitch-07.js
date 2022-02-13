function mostrar()
{
	let destino;
	
	destino = document.getElementById("txtIdDestino").value;

	switch(destino){
		case "Bariloche":
			alert("Se encuentra en el Sur");
			break;
		case "Mar del plata":
			alert("Se encuentra en el Este");
			break;
		case "Cataratas":
			alert("Se encuentra en el Oeste");
			break;
		case "Ushuaia":
			alert("Se encuentra en el Norte");
			break;

	}
		


}
	/* Martin Allende
		Switch 7 */