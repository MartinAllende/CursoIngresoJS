
function mostrar()
{
	let genero;

	genero = prompt("ingrese su sexo");

	while(genero !="f" && genero !="m"){
		genero = prompt("ingrese su sexo");
	}
	
	document.getElementById("txtIdSexo").value = genero;
	
} /* entregado*/