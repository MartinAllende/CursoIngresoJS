/*
Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 	*/
function mostrar()
/*{	
	
	let palabra ;
	let numero ;
	
	palabra= document.getElementById("txtIdNombre").value ;

	numero= document.getElementById("txtIdEdad").value ;

	alert("usted se llama " + palabra + " y tiene " + numero + " años ");



/* otra manera de hacerlo es
   
   let mesajeamostrar;
   mensajeamostrar= "usted se llama" + palabra + "y tenes" + numero + "años";
   alert(mensajeamostrar); */

//}

/* "txtIdNombre" cuadro de nombre
   "txtIdEdad" cuadro de edad */

   /* Martin Allende 
      Ejercicio 5 */
	  /* entregado*/ 

{  let palabra ;
	let numero ;
	let apellido ;

   apellido= prompt("ingrese su apellido");

	palabra= document.getElementById("txtIdNombre").value ;

	numero= document.getElementById("txtIdEdad").value ;

	alert(apellido + ", usted se llama " + palabra + " y tiene " + numero + " años ");
}
  /* Martin Allende 
     E/S 5bis  
     entregado     */