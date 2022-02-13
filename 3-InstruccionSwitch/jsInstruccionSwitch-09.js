function mostrar()
{
	let estacion;
	let destino;
	let precio;

	estacion = document.getElementById("txtIdEstacion").value;
	destino = document.getElementById("txtIdDestino").value;
	precio = 15000;


	switch(estacion){
		case "Invierno":
			if(destino == "Bariloche"){
				alert("le va a salir " + precio * 1.2)}
			else if(destino == "Cataratas" || destino == "Cordoba"){
				alert("le va a salir " + precio * 0.9)}
			else{
				alert("le va a salir " + precio * 0.8)};
			break;
		case "Verano":
			if(destino == "Bariloche"){
				alert("le va a salir " + precio * 0.8)}
			else if(destino == "Cataratas" || destino == "Cordoba"){
				alert("le va a salir " + precio * 1.1)}
			else{
				alert("le va a salir " + precio * 1.2)};
			break;
		case "Otoño":
		case "Primavera":
			if(destino == "Bariloche" || destino == "Mar del plata" || destino == "Cataratas"){
				alert("le va a salir " + precio * 1.1)}
			else{
				alert("le va a salir " + precio)};
			break;
		}
			
	} /* Switch 9
		Martin Allende */

