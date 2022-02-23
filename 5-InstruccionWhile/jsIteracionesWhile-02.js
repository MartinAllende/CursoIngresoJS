/*
al presionar el botón mostrar 10 repeticiones 
con números DESCENDENTES, desde el 10 al 1.*/
function mostrar()
/*{
	let i = 11

	while(i <= 11 && i > 1){
		i = i-1
		alert (i)}


}*/ /*entregado*/

/*{
	let cont=0;
	let contDeNumeros=0;
	let numero;

	while(cont < 5){                                          
	                                                             	
		cont = cont + 1;

		numero = prompt("Ingrese numero " + cont);

		while(isNaN(numero) == true){
			numero = prompt("esto no es un numero ingrese uno por favor");
		}

		if(numero <= 20 && numero >= 10){

			contDeNumeros = contDeNumeros + 1;}
		
		}
		
	console.log("La cantidad de numero mayore a 10 y menos de 20 es: " + contDeNumeros);

	}*/

/*{

	let contDePositivos = 0;
	let contDeNegativos = 0;
	let contDeImpares = 0;
	let acum = 0;
	let respuesta;
	let numero;

	while( decicion != "no"){
		numero = parseFloat(prompt("ingrese su numero"));
		while(isNaN(numero) == true){
			numero = prompt("esto no es un numero ingrese uno por favor")
		}
		decicion = prompt("¿quiere seguir?, responda si o no");
		if(numero < -15){
			contDeNegativos = contDeNegativos + 1
		}
		else if(numero > 100){
			contDePositivos = contDePositivos + 1
		}

	}


}*/

{
	let temp = 0;
	let nombre = 0;
	let validacionDeTemp = "no";
	let validacionDeNombre = "no";
	let respuesta;
	let respuestaFinal;

			
		while(respuestaFinal != "no"){

			nombre = prompt("Ingrese su nombre");

			validacionDeNombre = prompt("El nombre ingresado, " + nombre + ", ¿Es correcto?, responda con si o no");

	 		while(validacionDeNombre != "si" ){

				nombre =  prompt("Ingrese su nombre correctamente por favor");

				validacionDeNombre = prompt("El nombre ingresado, " + nombre + ", ¿Es correcto?, responda con si o no");
			 }
			
			temp = prompt("Ingrese su temperatura en grados celcius por favor");

			while(isNaN(temp) == true){
				temp = prompt("Ingrese una temperatura valida");
			}

			while(temp < 35 || temp > 45){

				temp = prompt("Esta temperatura no es posible, por favor ingrese una correcta");
				while(isNaN(temp) == true){
					temp = prompt("Ingrese una temperatura valida");
			}
			}
			
			validacionDeTemp = prompt("La temperatura ingresado, " + temp + ", ¿Es correcta?, responda con si o no");

			while(validacionDeTemp != "si" ){

				temp = prompt("Ingrese su temperatura correctamente por favor");
				while(isNaN(temp) == true){
					temp = prompt("Ingrese una temperatura valida");
				}
			
				while(temp < 35 || temp > 45){

					temp = prompt("Esta temperatura no es posible, por favor ingrese una correcta");
					while(isNaN(temp) == true){
						temp = prompt("Ingrese una temperatura valida");
				} }
				
				validacionDeTemp = prompt("La temperatura ingresado, " + temp + ", ¿Es correcta?, responda con si o no");
			 }

			if(temp >= 35 && temp <= 36.5){

				respuesta = "Su temperatura esta baja";
			}

			else if(temp > 36.5 && temp <= 38){

				respuesta = "Su temperatura esta normal";
			}

			else{

				respuesta = "Su temperatura esta muy alta debe aislarse";
			}

			alert("usted se llama: " + nombre + " y " + respuesta); 

			respuestaFinal = prompt("¿quiere ingrasar otra persona?");

		}
	}




			
