/*
Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{
    let sueldo;
	let calculo;
	let resultado;
	 
	sueldo = document.getElementById("txtIdSueldo").value;
	calculo = sueldo * 0.10;
	resultado = calculo + parseInt(sueldo);

    document.getElementById("txtIdResultado").value = resultado;

	
}
    /* Martin Allede
	   Ejercicio 9
	   Correccion 
	   Entregado */