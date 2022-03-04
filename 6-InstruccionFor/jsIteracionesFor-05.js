function mostrar()
/*{

	let pedidoDeNumero;
	let i;

	for(i=1; ; i++)
	{
		pedidoDeNumero = parseInt(prompt("Ingrese un numero"))

		if(pedidoDeNumero == 9)
		{
			break;
		}

	}

}*/
/*{

	let i;
	let sexo;
	let nota;
	let acumNota = 0;
	let contVaronesMayorA6 = 0;
	let notaMasBaja;
	let sexoMasBaja;
	let flag = 1;
	let promedio;
	let masBajo;

	for(i=1;i<8;i++)
	{
		nota = parseInt(prompt("Ingrese su nota"));

		while(isNaN(nota) == true || nota < 1 || nota > 10)
		{

			nota = parseInt(prompt("Nota no valida ingrese una nota entre 1 y 10"));

		}

		sexo = prompt("Ingrese su sexo, con f o m")

		while(sexo != "f" && sexo != "m")
		{

			sexo = prompt("Sexo no valido, ingrese f(femenino) o m(masculino)");

		}

		acumNota = acumNota + nota;

		if(sexo == "m" && nota > 6)
		{

			contVaronesMayorA6 = contVaronesMayorA6 + 1;

		}

		if(nota < notaMasBaja || flag == 1)
		{

			notaMasBaja = nota;
			sexoMasBaja = sexo;
			flag = 0;

		}


	}

	promedio = acumNota / i;
	masBajo = "La persona con la nota mas baja es " + sexoMasBaja + " con una nota de " + nota;

	console.log("A) Promedio de las notas: " + promedio);
	console.log("B) " + masBajo);
	console.log("C) La cantidad de varones con nota mayor a 6 es de: " + contVaronesMayorA6);

}*/

{













	
}
