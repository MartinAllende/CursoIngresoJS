function mostrar()
{
	let acum=1;
	let acum2=0;
	let numero=0;
	let eleccion="s";

	while(eleccion != "No" && eleccion != "no"){
		
		numero = parseFloat(prompt("Ingrese el numero"));

		while(isNaN(numero) == true){ 
			numero = parseFloat(prompt("Esto no es un numero, Ingrese un numero"));
		}
		
		if (numero >= 0){ 
			acum2 = acum2 + numero; 
		}
		else{
			acum = acum * numero; 
		}
	

	
		eleccion = prompt("¿Quiere seguir? Responda con si o no");
		
	}

	document.getElementById("txtIdSuma").value = acum2 ;
	document.getElementById("txtIdProducto").value = acum;
} 

/*entregado*//*corregir*/