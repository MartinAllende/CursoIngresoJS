function mostrar()
/*{
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
			
	}*/ /* Switch 9
		Martin Allende */

	{ 
		let destino;
		let estacion;
		const PRECIO = 15000;
		let aumento = 0 ;//inicializo la varible
		let descuento = 0 ;
		let precioFinal;

		estacion = document.getElementById("txtIdEstacion").value;
		destino = document.getElementById("txtIdDestino").value;

		switch(estacion){
			case "Invierno":
				if(destino == "Bariloche"){
					aumento = 20 }
				else if(destino == "Mar del plata"){
					descuento = 20 }
				else {	descuento = 10 };
			break;
			case "Verano":
				if(destino == "Bariloche"){
					descuento = 20 }
				else if(destino == "Mar del plata"){
					aumento = 20 }
				else {	aumento = 10 };
			break;
			case "Primavera":
			case "Otoño":
				if(destino == "Cordoba"){
					aumento = 0
					descuento = 0 }
				else {	descuento = 0
						aumento = 10 };
			break;
		}

		if(aumento != 0){ precioFinal = PRECIO + PRECIO * aumento/100}
		else if (descuento != 0){ precioFinal = PRECIO - PRECIO * descuento/100}
		else{ precioFinal = PRECIO}

		alert("Le va a salir " + precioFinal)
		
		
	}

