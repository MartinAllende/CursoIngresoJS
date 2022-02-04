/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{
    let numero1;
    let numero2;
    let infoamostrar;

    numero1 = parseInt(document.getElementById("txtIdNumeroUno").value);
    numero2 = parseInt(document.getElementById("txtIdNumeroDos").value);
	
	infoamostrar = "la suma de los numeros es " + (numero1 + numero2);
	alert(infoamostrar);
 

}

/* Martin Allende
   Ejercico 6 
   entregado  */