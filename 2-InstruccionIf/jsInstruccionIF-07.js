function mostrar()
{
	let edad ;
	let estadoCivil;

	edad = document.getElementById("txtIdEdad").value;
	estadoCivil = document.getElementById("estadoCivil").value;

	if(edad < 18 && estadoCivil != "Soltero"){

		alert("Es muy pequeño para NO ser soltero")
	}

} 

	/* Martin Allende
	   If 7 
	   entregado */