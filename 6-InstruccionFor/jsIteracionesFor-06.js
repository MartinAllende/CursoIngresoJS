function mostrar()
{
	
	let i;
	let iPares = 0;
	let numero;

	numero = parseInt(prompt("ingrese un numero"));

	for(i=0; i <= numero ; i++)
	{ 
		if(i % 2 == 0){
			iPares = iPares + 1

			console.log("numeros pares: " + i + "<br>");
		}


	}

	console.log("cantidad de numeros pares: " + iPares + "<br>");

	
	













}