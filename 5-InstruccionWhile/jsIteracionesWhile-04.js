/*
al presionar el botón 
pedir un número entre 0 y 9 inclusive.*/
function mostrar()
{
	let numero;

	numero = prompt("ingrese su numero");

	while(numero <0 || numero >9){
		numero = prompt("ingrese su numero");
	}
	
	document.getElementById("txtIdNumero").value = numero;
	
}/*entregado*/