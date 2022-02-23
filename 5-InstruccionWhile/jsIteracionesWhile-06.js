function mostrar()
{
	let cont = 0;
	let acum = 0;
	let numero;
	
	while(cont<=3){
		cont = cont + 1;
		numero = parseInt(prompt("ingrese numero " + cont));
		acum = acum + numero;
	}
		document.getElementById("txtIdSuma").value = acum;
		document.getElementById("txtIdPromedio").value = acum/5;
}	/*entregado*//*corregir*/