/*
Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 	*/
function mostrar()
{	
	
	let palabra ;
	let numero ;
	
	palabra= document.getElementById("txtIdNombre").value ;

	numero= document.getElementById("txtIdEdad").value ;

	alert("usted se llama " + palabra + " y tiene " + numero + " años ");

}

/* "txtIdNombre" cuadro de nombre
   "txtIdEdad" cuadro de edad */

   /* Martin Allende 
      Ejercicio 5 */