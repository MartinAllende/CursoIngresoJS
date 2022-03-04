function mostrar()
{
	
	let i;
	let iDivisores = 0;
	let numero;

	numero = parseInt(prompt("ingrese un numero"));

	for(i=0; i <= numero ; i++)
	{ 
		if(numero % i == 0){
			iDivisores = iDivisores + 1

			console.log("numeros pares: " + i + "<br>");
		}


	}

	console.log("cantidad de numeros pares: " + iDivisores + "<br>");
	
	


}