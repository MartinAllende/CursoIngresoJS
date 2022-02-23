function mostrar()
/*{
	let destino;
	
	destino = document.getElementById("txtIdDestino").value;

	switch(destino){
		case "Bariloche":
		case "Ushuaia":
			alert("Hace frio");
			break;
		case "Mar del plata":
		case "Cataratas":
			alert("Hace calor");
			break;
	}
			
	
}*/

{
	let destino;
	let mensaje;
	
	destino = document.getElementById("txtIdDestino").value;

	if( destino == "Bariloche" || destino == "Ushuaia"){
		mensaje = "Hace frio";}
	else{mensaje = "Hace calor";}

	alert(mensaje);
} //entregado
	/* Martin Allende
		Switch 8 
		entregado */