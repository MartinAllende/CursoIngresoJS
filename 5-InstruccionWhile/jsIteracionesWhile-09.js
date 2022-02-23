/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
mostrar el número máximo y el número mínimo ingresado.*/
function mostrar()
{	
	let min;
	let max;
	let numero;
	let eleccion="s";

	
	numero = parseFloat(prompt("Ingrese el numero"));
	
		
	while(isNaN(numero) == true){ 
		numero = parseFloat(prompt("Esto no es un numero, Ingrese un numero"));
	}

	min = numero;
	max = numero;
	eleccion = prompt("¿Quiere seguir? Responda con si o no");

	while(eleccion != "no" ){
		numero = parseFloat(prompt("Ingrese el numero"));
		
		while(isNaN(numero) == true){ 
			numero = parseFloat(prompt("Esto no es un numero, Ingrese un numero"));
		}
		
		if (numero < min){ 
			min = numero; 
		}
		else if(numero > max){
			max = numero; 
		}

		eleccion = prompt("¿Quiere seguir? Responda con si o no");
	}
		
	

	document.getElementById("txtIdMaximo").value = max;
	document.getElementById("txtIdMinimo").value = min;
} 

/* a entregar */