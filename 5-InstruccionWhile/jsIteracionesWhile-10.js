/*
Al presionar el botón pedir  números  
hasta que el usuario quiera, mostrar:
1-Suma de los negativos.
2-Suma de los positivos.
3-Cantidad de positivos.
4-Cantidad de negativos.
5-Cantidad de ceros.
6-Cantidad de números pares.
7-Promedio de positivos.
8-Promedios de negativos.
9-Diferencia entre positivos y negativos, (positvos-negativos). */
function mostrar()
/*{
	let numero=0;
	let acumDePositivos=0;
	let acumDeNegativos=0;
	let contDePositivos=0;
	let contDeNegativos=0;
	let contDeCeros=0;
	let contDePares=0;
	let respuesta="s";

	while(respuesta != "no"){

		numero = parseFloat(prompt("Ingrese un numero"));

		while(isNaN(numero) == true){

			numero = parseFloat(prompt("Esto no es un numero, Por favor ingrese uno"));
		}

		if(numero > 0){
			acumDePositivos = acumDePositivos + numero;
			contDePositivos = contDePositivos + 1;
		}
		else if(numero < 0){
			acumDeNegativos = acumDeNegativos + numero;
			contDeNegativos = contDeNegativos + 1;
		}
		else  {
			contDeCeros = contDeCeros + 1;
		}
		
		if(numero%2 == 0){
			contDePares = contDePares + 1;
		}
		

		respuesta = prompt("¿Quiere continuar? Responda con si o no");

	}

	document.write("Suma de los negativos : " + acumDeNegativos + "<br>" );
	document.write("Suma de los postivos : " + acumDePositivos + "<br>" );
	document.write("Cantidad de positivo: " + contDePositivos + "<br>" );
	document.write("Cantidad de negativos: " + contDeNegativos + "<br>");
	document.write("Cantidad de ceros: " + contDeCeros + "<br>" );
	document.write("Cantidad de pares: " + contDePares + "<br>" );
	document.write("Promedio de positivos: " + acumDePositivos/contDePositivos + "<br>" );
	document.write("Promedio de negativos: " + acumDeNegativos/contDeNegativos + "<br>" );
	document.write("Diferencia entre postivos y negativos: " + (contDePositivos - contDeNegativos) + "<br>");
			


}*/

/*{	

	let edad; 
	let nombre; 
	let edadMasViejo; 
	let edadMasJoven;
	let nombreMasViejo;
	let nombreMasJoven;
	let respuestaFinal ="si";
	let flag = 1;


	
	while (respuestaFinal == "si"){
	
		edad = parseFloat(prompt("Ingrese su edad"));

		while(isNaN(edad) == true || edad < 18 || edad > 90){ 

			edad = parseFloat(prompt("Esto no es un numero, Ingrese un numero"));

		}
		
			nombre = prompt("Ingrese su nombre");
	
		if (edad >= edadMasViejo || flag == 1){
			edadMasViejo = edad;
			nombreMasViejo = nombre;
		}

		if (edad <= edadMasJoven || flag == 1){
			edadMasJoven = edad;
			nombreMasJoven = nombre;
			flag = 0;
		}

		respuestaFinal = prompt("¿Quiere ingresar otro alumno?, responda con si o no");

	}

	console.log("el mas viejo es " + nombreMasViejo + " y tiene " + edadMasViejo + " años de edad" );
	console.log("el mas joven es " + nombreMasJoven + " y tiene " + edadMasJoven + " años de edad" );




}*/

{









}

